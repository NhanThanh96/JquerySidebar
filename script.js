$(document).ready(function(){
     

    $(".toggle").on("click", function(e){
        e.preventDefault();
      
        if($(this).next().hasClass("show")) {
            $(this).next().removeClass("show");
            $(this).next().slideUp(350);
            $(this).removeClass("show");
        }
        else {
            $(this).addClass("show");
            $(this).parent().parent().find("li > .treeview-menu").removeClass("show"); //remove all
            $(this).parent().parent().find("li > .treeview-menu").slideUp(350); // slide up all
            $(this).parent().parent().find("li > .toggle").removeClass("show"); // hide all button
            $(this).addClass("show");
            $(this).next().toggleClass('show'); // show ul current  
            $(this).next().slideToggle(350);

        }
    });
    $("#toggleButton").on("click", function(){
        $(".main-side").toggleClass("collapse");
    });
  });