$(document).ready(function(){

    var config = {
        apiKey: "AIzaSyDCjhaGBs_X3-n-lu0ek9mN2dKLVvLrEsc",
        authDomain: "forgiveness-exchange.firebaseapp.com",
        databaseURL: "https://forgiveness-exchange.firebaseio.com",
        storageBucket: "forgiveness-exchange.appspot.com",
        messagingSenderId: "878071377818"
    };
<<<<<<< HEAD
firebase.initializeApp(config);

=======
    firebase.initializeApp(config);
    
    var database = firebase.database();
    var apology = database.ref('apology');
    var forgiveness = database.ref('forgiveness');
    
>>>>>>> origin/master
    $("#step1").hide();
    $("#step2").hide();
    $("#finished").hide();

});

 $('#readybutton').click(function() {
        $("#participateready").hide();
        $("#step1").show();
<<<<<<< HEAD
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
          
=======
>>>>>>> origin/master
});

// when the user clicks submit after writing a forgiveness, preventdefault prevents the page from refreshing
$("#forgivenessform").submit(function(e){
      e.preventDefault()
      $("#step2").show();
       $("#step1").hide();
        $("#participateready").hide();
<<<<<<< HEAD
    
var database = firebase.database();
    var forgiveness = database.ref('forgiveness');    
    var forgivenesstext = {
        text: $("#message").val(),   
        approved: false
        }; 
    console.log (forgivenesstext)
    forgiveness.push(forgivenesstext);
    forgiveness.push(forgivenesstext, finished);
=======

>>>>>>> origin/master
});

// when the user clicks submit after writing an apology, preventdefault prevents the page from refreshing
$("#apologyform").submit(function(e){
<<<<<<< HEAD
    e.preventDefault() 
    $("#finished").show();
    $("#step2").hide();
    $("#step1").hide();
    $("#participateready").hide;
    var database = firebase.database();
  

    var apology = database.ref('apology');    
    var apologytext = {
        text: $("#message2").val(), 
        approved: false
        
        }; 
    console.log (apologytext);
    apology.push(apologytext);
    apology.push(apologytext, finished);
});

=======
      e.preventDefault() 
      $("#finished").show();
       $("#step2").hide();
      $("#step1").hide();
    $("#participateready").hide;
      
      var apologytext = {
          apology: 
      }
      apologytext = $("#message").val()
      console.log (apologytext);
        apology.push(apologytext);
      
      
    
});
// defining variable to grab text in form with ID #message
//      var apologytext;
//      apologytext = $("#message").val()
//      console.log (apologytext)
//      $(".wrapper").hide();
//      $(".wrapper2").show();
//    $('.saveForgive').click(function() {
//        
//        // get text of forg
//        // show apology
//        $('.add').show();
//    });
>>>>>>> origin/master
