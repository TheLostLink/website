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

})


       $("#search").click(function(){
		if($('#searchInput').css("display") == 'none'){
		$('#searchInput').css("display", "block")
		}else if(!$("#searchInput").val().length == 0){
         console.log($("#searchInput").val())
         $('#searchInput').css("display") == 'none'

          //DO SOMETHING WITH SEARCH RESULTS




		}
		else{
			$('#searchInput').css("display", "none")
		}
                
           
      
})










})