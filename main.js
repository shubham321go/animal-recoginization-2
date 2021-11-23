function startClassification(){
navigator.mediaDevices.getUserMedia({audio : true})
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/_kWEH7eoN/model.jason', modeReady);
};

function modelReady()
{
    classifier.classify( gotResults);
}

function gotResults(error, results) {
    console.log('gotResults');
}