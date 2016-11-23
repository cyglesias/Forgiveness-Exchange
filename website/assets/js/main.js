var apologyKey = false;

function loadApology() {
    var ref = firebase.database().ref("apology");
    ref.orderByChild("approved").limitToLast(1).once("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            apologyKey = childSnapshot.key;
            console.log("apologyKey", apologyKey);
            var childData = childSnapshot.val();
            console.log(childData);
            $("#apologyprompt").append(childData.apologytext);
        });
    });
}

function forgive(text) {
    var timestamp = Date.now();
    var updates = {};
    updates['apology/' + apologyKey + '/forgivenesstext'] = text;
    updates['apology/' + apologyKey + '/approved'] = false;
    updates['apology/' + apologyKey + '/forgivenesstime'] = timestamp;

    console.log(updates);
    firebase.database().ref().update(updates, function(err) {
        $("#step2").show();
    }); 
}

function apologize(text) {
    var apology = firebase.database().ref('apology');  
    var timestamp = Date.now();
    var data = {
        apologytext: text, 
        forgivenesstext: false,
        approved: false,
        apologytime: timestamp,
        forgivenesstime: timestamp
    }; 
    console.log (data);
    apology.push(data, function() {
        $("#finished").show();
    });
}

$(document).ready(function(){
    var config = {
        apiKey: "AIzaSyDCjhaGBs_X3-n-lu0ek9mN2dKLVvLrEsc",
        authDomain: "forgiveness-exchange.firebaseapp.com",
        databaseURL: "https://forgiveness-exchange.firebaseio.com",
        storageBucket: "forgiveness-exchange.appspot.com",
        messagingSenderId: "878071377818"
    };
    
    firebase.initializeApp(config);
    $("#step1").hide();
    $("#step2").hide();
    $("#finished").hide();
    $('#readybutton').click(function() {
        $("#participateready").hide();
        $("#step1").show();
    });
    loadApology();

$("#forgivenessform").submit(function(e){
    e.preventDefault()
    $("#step1").hide();
    $("#participateready").hide();
    forgive($("#message").val());
});

$("#apologyform").submit(function(e){
    e.preventDefault() 
    $("#step2").hide();
    $("#step1").hide();
    $("#participateready").hide;
    apologize($("#message2").val());
});


});

 