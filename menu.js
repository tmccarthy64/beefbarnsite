//$(document).ready(function(){
  //$(".menuselections").on("click",function(){
    /*Get the element index*/
    //var currentIndex = $(this).index();
   // var menuItems = $('.menu-items');

   /*toggle the class based on index.*/ 
  // $(menuItems[currentIndex]).toggleClass(".hide-menu-items");
   /*For user convenience.  Close any panels that might be open when opening another panel.*/
  //  menuItems.not($(menuItems[currentIndex])).addClass(".hide-menu-items");
	//});
//});

$(document).ready(function(){
	var sandwich  = (".sandwich")
	$(".sandwiches").click(function(){
		$("#menuitems").addClass(sandwich);
	});
});