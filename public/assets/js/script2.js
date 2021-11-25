Parse.initialize(
    "HtH0OPc0R0KyFDscuvUK7AJNpeV8WFRPEihGoIYQ",
    "CWcpWiWm2ejCm0dBy4qxGuFeGoqNQGETFpRV84ij"
);
Parse.serverURL = 'https://pg-app-6zbvoewjdketpbpbbvq82jwff0rbtz.scalabl.cloud/1/';



//const URL = "https://teachablemachine.withgoogle.com/models/N58PlX_GN/";
// const URL = "https://teachablemachine.withgoogle.com/models/RjWt-2gXA/";
//const URL ="https://teachablemachine.withgoogle.com/models/MAap95H4N/"
const URL = "https://teachablemachine.withgoogle.com/models/DZquxGVfT/";

const block = document.querySelector('.block')


let model, webcam, newlabel, canvas, labelContainer, maxPredictions, camera_on = false,
    image_upload = false;

function useWebcam() {
    camera_on = !camera_on;

    if (camera_on) {
        init();
        document.getElementById("webcam").innerHTML = "Close Webcam";
    } else {
        stopWebcam();
        document.getElementById("webcam").innerHTML = "Start Webcam";
    }
}

async function stopWebcam() {
    await webcam.stop();
    document.getElementById("webcam-container").removeChild(webcam.canvas);
    labelContainer.removeChild(newlabel);
}

// Load the image model and setup the webcam
async function init() {

    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // load the model and metadata
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Convenience function to setup a webcam
    const flip = true; // whether to flip the webcam
    webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
    await webcam.setup(); // request access to the webcam
    await webcam.play();
    window.requestAnimationFrame(loop);

    // append element to the DOM
    document.getElementById("webcam-container").appendChild(webcam.canvas);

    newlabel = document.createElement("div");
    labelContainer = document.getElementById("label-container");
    labelContainer.appendChild(newlabel);
}

async function loop() {
    webcam.update(); // update the webcam frame
    await predict(webcam.canvas);
    window.requestAnimationFrame(loop);
}

async function predict(input) {
    // predict can take in an image, video or canvas html element
    const prediction = await model.predict(input);

    //const ch1Rating = prediction[0].probability.toFixed(2);

    const cwbl000Rating = prediction[0].probability.toFixed(2);

    // const ch2Rating = prediction[1].probability.toFixed(2);

    const cwbr001Rating = prediction[1].probability.toFixed(2);

    // const ch3Rating = prediction[2].probability.toFixed(2);

    const cww002Rating = prediction[2].probability.toFixed(2);

    // const ch4Rating = prediction[3].probability.toFixed(2);

    const chbr003Rating = prediction[3].probability.toFixed(2);


    // const cw1Rating = prediction[4].probability.toFixed(2);

    const chbl004Rating = prediction[4].probability.toFixed(2);

    // const cw2Rating = prediction[5].probability.toFixed(2);

    const chw005Rating = prediction[5].probability.toFixed(2);

    // const cw3Rating = prediction[6].probability.toFixed(2);

    const gtbr006Rating = prediction[6].probability.toFixed(2);

    // const cw4Rating = prediction[7].probability.toFixed(2);

    const gtwh007Rating = prediction[7].probability.toFixed(2);

    // const gt1Rating = prediction[8].probability.toFixed(2);

    const shyoung008Rating = prediction[8].probability.toFixed(2);

    // const gt2Rating = prediction[9].probability.toFixed(2);

    const sholder009Rating = prediction[9].probability.toFixed(2);

    // const gt3Rating = prediction[10].probability.toFixed(2);

    const pig010Rating = prediction[10].probability.toFixed(2);

    // const gt4Rating = prediction[11].probability.toFixed(2);
    // const pg1Rating = prediction[12].probability.toFixed(2);
    // const pg2Rating = prediction[13].probability.toFixed(2);
    // const pg3Rating = prediction[14].probability.toFixed(2);
    // const pg4Rating = prediction[15].probability.toFixed(2);
    // const sp1Rating = prediction[16].probability.toFixed(2);
    // const sp2Rating = prediction[17].probability.toFixed(2);
    // const sp3Rating = prediction[18].probability.toFixed(2);
    // const sp4Rating = prediction[19].probability.toFixed(2);

    if (cwbl000Rating == 1) {

        block.innerHTML = "RESULTS: <br>LIVESTOCK ID: CH0001 <br>HEALTH STATUS: GOOD <br>AGE: 2 years <br>WEIGHT: 2.7kg <br>SEX: MALE"

    } else if (cwbr001Rating == 1) {

        block.innerHTML = "RESULTS: <br>LIVESTOCK ID: CH0002 <br>HEALTH STATUS: FAIR <br>AGE: 6 months <br>WEIGHT: 2.2kg <br>SEX: FEMALE"

    } else if (cww002Rating == 1) {

        block.innerHTML = "RESULTS: <br>LIVESTOCK ID: CH0003 <br>HEALTH STATUS: FAIR <br>AGE: 1 year and 2 months <br>WEIGHT: 2.5kg <br>SEX: MALE"

    } else if (chbr003Rating == 1) {

        block.innerHTML = "RESULTS: <br>LIVESTOCK ID: CH0004 <br>HEALTH STATUS: GOOD <br>AGE: 3 YEARS <br>WEIGHT: 2.4kg <br>SEX: MALE"

    } else if (chbl004Rating == 1) {

        block.innerHTML = "RESULTS: <br>LIVESTOCK ID: CW0001 <br>HEALTH STATUS: FAIR <br>AGE: 5 years <br>WEIGHT: 800kg <br>SEX: MALE"

    } else if (chw005Rating == 1) {

        block.innerHTML = "RESULTS: <br>LIVESTOCK ID: CW0002 <br>HEALTH STATUS: FAIR <br>AGE: 2 years and a month <br>WEIGHT: 750kg <br>SEX: FEMALE"

    } else if (gtbr006Rating == 1) {

        block.innerHTML = "RESULTS: <br>LIVESTOCK ID: CW0003 <br>HEALTH STATUS: FAIR <br>AGE: 3 years and 4 months <br>WEIGHT: 680kg <br>SEX: FEMALE"

    } else if (gtwh007Rating == 1) {

        block.innerHTML = "RESULTS: <br>LIVESTOCK ID: CW0004 <br>HEALTH STATUS: GOOD <br>AGE: 4 years <br>WEIGHT: 800kg <br>SEX: FEMALE"

    } else if (shyoung008Rating == 1) {

        block.innerHTML = "RESULTS: <br>LIVESTOCK ID: GT0001 <br>HEALTH STATUS: GOOD <br>AGE: 5 years <br>WEIGHT: 500kg <br>SEX: MALE"

    } else if (sholder009Rating == 1) {

        block.innerHTML = "RESULTS: <br>LIVESTOCK ID: GT0002 <br>HEALTH STATUS: GOOD <br>AGE: 3 years and 2 months <br>WEIGHT: 450kg <br>SEX: FEMALE"

    } else if (pig010Rating == 1) {

        block.innerHTML = "RESULTS: <br>LIVESTOCK ID: GT0003 <br>HEALTH STATUS: GOOD <br>AGE: 1year and 8 months <br>WEIGHT: 550kg <br>SEX: MALE"

    }
}



// console.log(prediction[0].probability.toFixed(2));


//   const cowRating = prediction[0].probability.toFixed(2);
//   const sheepRating = prediction[1].probability.toFixed(2)
//   const chickenRating = prediction[2].probability.toFixed(2)

//   if(cowRating ==1){

//     block.innerHTML = "COW Tshidiso"

//  }else if(sheepRating==1){

//      block.innerHTML = "SHEEP Lesego"

//  }else if(chickenRating==1){

//     block.innerHTML = "Chicken Kenneth"

//  }
//}


//     var highestVal = 0.00;
//     var bestClass = "";
//     result = document.getElementById("label-container");

// console.log(result)

//     for (let i = 0; i < maxPredictions; i++) {
//         var classPrediction = prediction[i].probability.toFixed(2);
//         console.log(classPrediction)
//         if (classPrediction > highestVal) {
//             highestVal = classPrediction;
//             bestClass = prediction[i].className;
//         }
//     }

//     if (bestClass == "Fresh Banana" || bestClass == "Fresh Apple" || bestClass == "Fresh Orange") {
//         newlabel.className = "alert alert-success";
//     }
//     else {
//         newlabel.className = "alert alert-danger";
//     }

//     newlabel.innerHTML = bestClass;
// }


async function getPredictions() {

    canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    canvas.width = "400";
    canvas.height = "300";
    context.drawImage(img, 0, 0);
    document.getElementById("uploadedImage").appendChild(canvas);

    newlabel = document.createElement("div");
    labelContainer = document.getElementById("label-container");
    labelContainer.appendChild(newlabel);

    await predict(canvas);
}


$(document).ready(function() {
    $("#loadBtn").on("click", async function() {

        labelContainer = document.getElementById("label-container");

        image_upload = !image_upload;

        if (!image_upload) {
            labelContainer.removeChild(newlabel);
            document.getElementById("uploadedImage").removeChild(canvas);
        }

        const fileUploadControl = $("#fruitimg")[0];
        if (fileUploadControl.files.length > 0) {

            const modelURL = URL + "model.json";
            const metadataURL = URL + "metadata.json";

            // load the model and metadata
            model = await tmImage.load(modelURL, metadataURL);
            maxPredictions = model.getTotalClasses();

            const file = fileUploadControl.files[0];

            const name = "photo.jpg";
            const parseFile = new Parse.File(name, file);

            parseFile.save().then(async function() {
                //The file has been saved to the Parse server

                img = new Image(224, 224);
                img.crossOrigin = "Anonymous";
                img.addEventListener("load", getPredictions, false);
                img.src = parseFile.url();

            }, function(error) {
                // The file either could not be read, or could not be saved to Parse.
                result.innerHTML = "Uploading your image failed!";
            });
        } else {
            result.innerHTML = "Try Again!";
        }
    });
});