$(document).on("scroll",function(){
	
	if($(document).scrollTop()>100){ 
		$("header").addClass("header--white");
	}
	
	else{
		$("header").removeClass("header--white");
	}
	
});