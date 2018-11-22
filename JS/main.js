$(document).ready(function(){


$("#menu1").click(function(){
		if($('.nav').css("display") == 'none'){
			$('.nav').css("display", "block")
			$(".nav").animate({opacity:'1'},'5000')
			$("#logo").animate({marginLeft:'2%'},'1000')

		}else{
			$('.nav').css("display","none")
			$(".nav").animate({opacity:'0'},'slow')
			$("#logo").animate({marginLeft:'43%'},'slow')

		}

       })
                
           
      











})