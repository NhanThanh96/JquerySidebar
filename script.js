$(document).ready(function(){

// resize event
function resizeHandler() {
    var win = $(this); 
        if (win.width() < 425) {
            $('.overlay').on('click', function(){        
                $(".overlay").addClass("hide");
                $(".main-side").addClass("collapse");
                $("#toggleButton").addClass("collapse");
            });
        } else{
            $(window).unbind('scroll');
        }
    }
resizeHandler();

$(window).resize(resizeHandler);

$(".sidebar-menu > li > a").on("click", function(){
    $(this).parents(".sidebar-menu").find("li.treeview > a.active").removeClass("active");
    $(this).addClass("active");
});

$(".sidebar-menu > li > ul.treeview-menu > li > a").on("click", function(){
    $(this).parents(".sidebar-menu").find(".treeview-menu > li > a.active").removeClass("active");
    $(this).addClass("active");
});

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
    $(this).parent().next().toggleClass("collapse");
    $(".overlay").toggleClass("hide");
});

    // if (parseInt($(window).width()) <= 425) {

    //     $('.overlay').on('click', function(){         
    //         $(".overlay").addClass("hide");
    //         $(".main-side").addClass("collapse");
    //         $("#toggleButton").addClass("collapse");
    //     });

        
    // }; 

    // $(".sidebar-menu > li > a").on("click", function(){
        //     $(".overlay").removeClass("hide");
        //     $(".main-side").removeClass("collapse");
        //     $("#toggleButton").removeClass("collapse");
        // });
  });