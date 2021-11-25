const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// Parsing middleware
// Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true })); // New

// Parse application/json
// app.use(bodyParser.json());
app.use(express.json()); // New

// Static Files
app.use(express.static('public'));

// Templating Engine
app.engine('hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', 'hbs');

// Connection Pool
// You don't need the connection here as we have it in userController
// let connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME
// });





// const routes = require('./server/routes/user');
// app.use('/', routes);
open({
    filename: './live_stock.db',
    driver: sqlite3.Database
}).then(async function(db) {
    await db.migrate();

    app.get('/', async(req, res) => {
        const removedUser = await db.all('SELECT * FROM user WHERE status = "active"');
        res.render('home', {
            rows: removedUser
        });
    });

    app.get('/viewuser/:id?', async(req, res) => {
        const user = req.params.id;
        const getUser = await db.all('SELECT * FROM user WHERE id = ?', Number(user));
        res.render('view-user', {
            rows: getUser
        });
    });

    app.get('/edituser/:id?', async(req, res) => {
        const user = req.params.id;
        const getUser = await db.all('SELECT * FROM user WHERE id = ?', Number(user));
        res.render('edit-user', {
            rows: getUser
        });
    });

    app.get('/delete/:id?', async(req, res) => {
        const user = req.params.id;
        await db.run('DELETE FROM user WHERE id = ?', Number(user));
        res.redirect('/home');
    });

    app.get('/adduser', async(req, res) => {
        res.render('add-user');
    });

    app.post('/adduser', async(req, res) => {
        const {} = req.body;
    });

    app.get('/home', async(req, res) => {
        const removedUser = await db.all('SELECT * FROM user WHERE status = "active"');
        res.render('home', {
            rows: removedUser
        });
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/dashboard', function(req, res) {
    res.render('dashboard');
});


app.get('/control-panel', function (req, res) {
    res.render('control-panel');
});

app.get('/biometric', function (req, res) {
    res.render('biometric');
});

// app.get('/home', function (req, res) {
//     res.render('home');
// });

// app.listen(port, () => console.log(`Listening on port ${port}`));ppet