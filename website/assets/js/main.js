$(document).ready(function(){

    var config = {
        apiKey: "AIzaSyDCjhaGBs_X3-n-lu0ek9mN2dKLVvLrEsc",
        authDomain: "forgiveness-exchange.firebaseapp.com",
        databaseURL: "https://forgiveness-exchange.firebaseio.com",
        storageBucket: "forgiveness-exchange.appspot.com",
        messagingSenderId: "878071377818"
    };
    firebase.initializeApp(config);
    
    var database = firebase.database();
    var apology = database.ref('apology');
    var forgiveness = database.ref('forgiveness');
    
    $("#step1").hide();
    $("#step2").hide();
    $("#finished").hide();

});

 $('#readybutton').click(function() {
        $("#participateready").hide();
        $("#step1").show();
});

// when the user clicks submit after writing a forgiveness, preventdefault prevents the page from refreshing
$("#forgivenessform").submit(function(e){
      e.preventDefault()
      $("#step2").show();
       $("#step1").hide();
        $("#participateready").hide();

});

// when the user clicks submit after writing an apology, preventdefault prevents the page from refreshing
$("#apologyform").submit(function(e){
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
