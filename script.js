function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 


$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".smoothscroll_btn").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // to move the page scroll smoothly jQueries "animate" method
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
function checkempty(str){
	if (str === undefined || str==="") {
		return false;
	}
	return true;
}
var quizdata = new Array();
$(document).on('submit','.quiz_form',function(e){
	e.preventDefault();
	var formprop = $(this);
	//var formdata = new FormData(formprop[0]);
	var formdata = new FormData();
	
	console.log(formprop.attr('quizstep'));
	
	var result = [];
	$.each(formprop.serializeArray(), function() {
		result[this.name] = this.value;
	});
	
	if(formprop.attr('quizstep')=="1"){
		if (checkempty(result['name']) && checkempty(result['email'])) { 
			localStorage.setItem('username',result['name']);
			localStorage.setItem('useremail',result['email']);
			localStorage.setItem('quizstep',1);
			refresh_quiz();
		}else{
			$.growl.error({location: 'tr',title:'Error', message: "Fill required fields.",size:'large',duration:6000});
		}
	}else if(formprop.attr('quizstep')=="2"){
		console.log(result);
		var score = 0;
		if(result['que1']==='2'){
			score = score+1;
		} if(result['que2']==='1'){
			score = score+1;
		} if(result['que3']==='3'){
			score = score+1;
		}if(result['que4']==='2'){
			score = score+1;
		}if(result['que5']==='1'){
			score = score+1;
		}
		localStorage.setItem('score',score);
				
		localStorage.setItem('quizstep',2);
		refresh_quiz();
	}
});
function refresh_quiz(){
	var quizstep = localStorage.getItem('quizstep');
	var modalhtml = "";
	if(quizstep==='1'){
		 modalhtml = '<form id="quiz_form" class="quiz_form" quizstep="2"><div class="question_section"><h3>1.  What does PHP stand for?</h3><input id="r1_1" type="radio" value="1" name="que1" checked /><label for="r1_1">Preprocessor Home Page</label><input id="r1_2" type="radio" value="2" name="que1"/><label for="r1_2">Hypertext Preprocessor</label><input id="r1_3" type="radio" value="3" name="que1"/><label for="r1_3">Pretext Hypertext Processor</label></div><div class="question_section"><h3>2. PHP files have a default file extension of?</h3><input id="r2_1" type="radio" value="1" name="que2" checked /><label for="r2_1">PHP</label><input id="r2_2" type="radio" value="2" name="que2"/><label for="r2_2">HTML</label><input id="r2_3" type="radio" value="3" name="que2"/><label for="r2_3">XML</label></div><div class="question_section"><h3>3. Which of the looping statements is/are supported by PHP?</h3><input id="r3_1" type="radio" value="1" name="que3" checked /><label for="r3_1">while loop</label><input id="r3_2" type="radio" value="2" name="que3"/><label for="r3_2">for loop</label><input id="r3_3" type="radio" value="3" name="que3"/><label for="r3_3">All of the mentioned</label></div><div class="question_section"><h3>4. We can use ___ to comment a single line?</h3><input id="r4_1" type="radio" value="1" name="que4" checked /><label for="r4_1">/* */</label><input id="r4_2" type="radio" value="2" name="que4"/><label for="r4_2">#</label><input id="r4_3" type="radio" value="3" name="que4"/><label for="r4_3">/?</label></div><div class="question_section"><h3>5. Which of the following php statement/statements will store 111 in variable num?</h3><input id="r5_1" type="radio" value="1" name="que5" checked /><label for="r5_1">$num = 111;</label><input id="r5_2" type="radio" value="2" name="que5"/><label for="r5_2">int $num = 111;</label><input id="r5_3" type="radio" value="3" name="que5"/><label for="r5_3">111 = $num;</label></div></form>';
		$('.quiznextbtn').text('Submit');
	}else if(quizstep==='0'){
		window.localStorage.clear();
		location.reload(); 
	}else if(quizstep==='2'){
		var uname = localStorage.getItem('username');
		var score = localStorage.getItem('score');
		modalhtml = '<div class="success_area">Hello <b class="myname">'+uname+'</b>,</br> you got <b class="myscore">'+score+'</b> score out of 5.</div>';
		$('#quiz_modal .modal-footer').html('<button type="button" class="button_filled btn reset_quiz">Reset</button>');
	}
	if(quizstep){
	$('.content_section').html(modalhtml);
	}
}
$(document).on('click','.reset_quiz',function(e){
	e.preventDefault();
	localStorage.setItem('quizstep',0);
	refresh_quiz();
})
$(document).on('click','.start_quiz',function(e){
	e.preventDefault();
	refresh_quiz();
	$('#quiz_modal').modal('show');
	
})
