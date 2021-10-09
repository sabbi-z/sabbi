 $("a").hover(
    function () {
        $(this).removeClass("animate__animated animate__bounce animate__fadeInDown");
        $(this).addClass("animate__animated animate__bounce");
    },
    function () {
        $(this).removeClass("animate__animated animate__bounce animate__fadeInDown");
    }
  );

  
var oldtext;     
$('#css').hover(function(){ 
oldtext = $(this).text(); 
$("#para1").text("Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript"); 
}, function(){ 
    $(this).text(oldtext) 
}); 

$('#html').hover(function(){ 
    oldtext = $(this).text(); 
    $("#para1").text("The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript"); 
    }, function(){ 
        $(this).text(oldtext) 
    }); 

    $('#js').hover(function(){ 
        oldtext = $(this).text(); 
        $("#para1").text(" Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript"); 
         
        }, function(){ 
            $(this).text(oldtext) 
        }); 


        $('#react').hover(function(){ 
            oldtext = $(this).text(); 
            $("#para1").text("React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications."); 
            }, function(){ 
                $(this).text(oldtext) 
            });