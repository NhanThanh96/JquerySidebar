$(document).ready(function(){
    var pullRight = $('.pull-right');
    var treeview = $('.treeview');

    pullRight.on("click", function(){
        $(this).parents(".treeview").toggleClass("menu-open");
    });
  });