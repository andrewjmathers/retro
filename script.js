console.log("JS running");


//NavBar menu scroll to section function


function scrollToSection(e){




	switch( e.target.classList[0]) {
    case "headOne":
    	whereTo($("#About"));
        break;

    case "headTwo":
        whereTo($("#Portfolio"));
        break;

    case "headThree":
        whereTo($(".myBlog"));
        break;

    case "headFour":
        whereTo($(".contactMe"));
        break;

    default:
       	console.log("didn't click a button");
    }


//function that animates and does the scroll
function whereTo(e){

$('html, body').animate({
        scrollTop: $(e).offset().top
    }, 1000);
}
}

//HEADER FUNCTIONS


function headerMenuHover(e){

	//MAIN navigation menu button hover animation

if(e.type == "mouseenter"){

	$(e.target).css({'margin-bottom' : '10px'});

}else if(e.type == "mouseleave"){

	$(e.target).removeAttr("style");

}


}

//header slideshow function and variables here, events are at the bottom as always

var pictureList = [{

	picture: "retro-kodak.jpg",
	name: "KODAK CAMERA"
}, 
{
	picture: "table.jpg",
	name: "NICE MEMORIES"
},
{

	picture: "radio.jpg",
	name: "COZY TUNES"
}
];

var currentPageCount = 0;

function headerSlideShow(e){



if(e.target.parentNode.id == "slideNext"){

	if(currentPageCount == pictureList.length-1){

	currentPageCount = -1;
	}

	$(".headerSlide").css({"background-image":"url('"+pictureList[currentPageCount+1].picture+"')"});
	$("#picSign").text(pictureList[currentPageCount+1].name);

	currentPageCount++;

	
}

else if(e.target.parentNode.id == "slidePrev"){

	if(currentPageCount-1 < 0){

	currentPageCount = pictureList.length;
	}

	$(".headerSlide").css({"background-image":"url('"+pictureList[currentPageCount-1].picture+"')"});
	$("#picSign").text(pictureList[currentPageCount-1].name);

	currentPageCount--;
	
}

}


//Function for portfolio filtering


var filterClassName;

function filterThePort(e){

	//stores the classname into a variable to filter by it after

	filterClassName = e.target.innerText;

	console.log(filterClassName);

	if(e.target.className == "actualFilter"){

		//adds active class to turn color into gray

		//removes active class attribute from other filters to avoid having two active at the time

		if($(e.target).parent().parent().hasClass("portBoxActive")){

			$(".portBoxActive").removeClass("portBoxActive");


		}else{

			$(".portBoxActive").removeClass("portBoxActive");

			$(e.target).parent().parent().addClass("portBoxActive");

		}
		//animates disappearance before filtering boxes

		$(".portBox").addClass("portBoxAnimation");
		$(".portBoxes").addClass("portBoxesAnimation");

		
		

		setTimeout(bringItBack, 800);
			
	}else{


		console.log("missed the p, clicked on LI");
	}


	function bringItBack(){

		if( $("*").hasClass("portBoxActive") ){

			
			$(".portBoxes > div").addClass("portBoxHidden");
			$("."+filterClassName).removeClass("portBoxHidden");
			

		}else{

				$(".portBoxes > div").removeClass("portBoxHidden");

		}


		setTimeout(appearBack, 100);

		function appearBack(){

		
		$(".portBoxes").removeClass('portBoxesAnimation');
		$(".portBox").removeClass("portBoxAnimation");
	}


	}


}











//Social network link interactive

function socNetLogo(e){



	if(e.target.className == 'innerLink'){


		if (e.type == "mouseenter") {

			$(e.target).animate({"margin-top":"30px"}, 250);
			$(e.target).animate({"margin-top":"40px"}, 250);
	

	}
}

}

//More botton decoration line width animation (animated with css transition)


function moreLineWidth(e){


	$(".portMore").attr("id","moreWidthClass");



}




//Navbar click event


$(".headBlockMenu").on("click", scrollToSection);

//Filter click event


$(".filters").on("click", filterThePort);

//More Button hover event

$(".portMore").on("mouseenter", moreLineWidth);

//NavBar hover effect

$(".headBlockMenu").on("mouseenter", headerMenuHover).on("mouseleave", headerMenuHover);

//slideshow events and default picture

$(".headerSlide").css({"background-image":"url('retro-kodak.jpg')"});
$("#slideNext").on("click", headerSlideShow);
$("#slidePrev").on("click", headerSlideShow);

//socLinks hover

$(".innerLink").on("mouseenter", socNetLogo).on("mouseleave", socNetLogo);




