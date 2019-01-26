$(document).ready(function(){


$("#menu1").click(function(){
		if($('.nav').css("display") == 'none'){
			$('.nav').css("display", "block")
			$('#searchInput').css("display", "none")
			$(".nav").animate({opacity:'1'},'5000')
			$("#logo").animate({marginLeft:'2%'},'1000')

		}else{
			$('.nav').css("display","none")
			$(".nav").animate({opacity:'0'},'slow')
			$("#logo").animate({marginLeft:'43%'},'slow')
			$('#searchInput').css("display", "none")

		}

});


       $("#search").click(function(){
		if($('#searchInput').css("display") == 'none'){
		$('#searchInput').css("display", "block")
		}else if(!$("#searchInput").val().length == 0){
         console.log($("#searchInput").val())
         $('#searchInput').css("display") == 'none';

          //DO SOMETHING WITH SEARCH RESULTS




		}
		else{
			$('#searchInput').css("display", "none")
		}
                
           
      
})


 $(".fasCaret").hover(function(){

 $('#cover').css("background-size", '105%');
 $('.fasCaret').css("color", 'white');
 $('.coverHeading').css("color", 'white');
 $('#cover').css("background-image", "linear-gradient(rgba(0,0,0,.5), rgba(0,0 ,0,.5)), url(./images/peeps.png)");

 },function(){

 	$('#cover').css("background-size", '100%');
 	$('.fasCaret').css("color", 'black');
 	$('.coverHeading').css("color", 'black');
 	$('#cover').css("background-image", 'url(./images/peeps.png)');
 })


 $(".fasCaretAbout").hover(function(){
 
  
 $('.fasCaretAbout').css("transform", 'scale(1.5,1.5)');


 },function(){
 	
 	 $('.fasCaretAbout').css("transform", 'scale(1,1)');
 })


 $(".fasCaretAbout").click(function(){

 $(".aboutText").animate({opacity: '0'},1000);

setTimeout(function(){
	$('#about').addClass("back");
},1000)
 $('#about').addClass("anim");

 
setTimeout(function(){
 	$('html, body').animate({
    scrollTop: ($('#codeID').offset().top)
},400);
 },1500)
 	setTimeout(function(){
	$('#about').removeClass("back");
 	$('#about').removeClass("anim");
 	$('.fasCaretAbout').css("transform", 'scale(1,1)');
 	$(".aboutText").css('opacity','1');
},1900)
})

$(".fasCaret").click(function(){
$('html, body').animate({
    scrollTop: ($('#aboutID').offset().top)
},200);
})

})