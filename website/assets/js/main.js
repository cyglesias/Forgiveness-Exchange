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

});

 $('#readybutton').click(function() {
        $("#participateready").hide();
        $("#step1").show();
        var database = firebase.database();
        var apology = database.ref("apology");

var id = "-KWysaoVRjzT0rtAsckU";
var ref = database.ref("apology/" + id);
ref.on("value", gotOne);
     
function gotOne(apology) {
  var apology = apology.val();
    console.log(apology);
    $("#apologyprompt").append(apology.text);
}
          
});

// when the user clicks submit after writing a forgiveness, preventdefault prevents the page from refreshing
$("#forgivenessform").submit(function(e){
      e.preventDefault()
      $("#step2").show();
       $("#step1").hide();
        $("#participateready").hide();
    
var database = firebase.database();
    var forgiveness = database.ref('forgiveness');
    var timestamp= Date();
    var forgivenesstext = {
        text: $("#message").val(),   
        approved: false,
        time: timestamp
        }; 
    console.log (forgivenesstext)
    forgiveness.push(forgivenesstext);
    forgiveness.push(forgivenesstext, finished);
});

// when the user clicks submit after writing an apology, preventdefault prevents the page from refreshing
$("#apologyform").submit(function(e){
    e.preventDefault() 
    $("#finished").show();
    $("#step2").hide();
    $("#step1").hide();
    $("#participateready").hide;
    var database = firebase.database();
  

    var apology = database.ref('apology');  
    var timestamp = Date();
    console.log(timestamp);
    var apologytext = {
        text: $("#message2").val(), 
        approved: false,
        time: timestamp
    
        
        }; 
    console.log (apologytext);
    apology.push(apologytext);
    apology.push(apologytext, finished);
var x= date();
    consolelog(x);
});

//var timeStamp = Math.floor(Date.now() / 1000);
//console.log(timestamp);


 