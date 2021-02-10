<!DOCTYPE html>
<html>
	<head>
		<title>My Final Project</title>
		<meta content="text/html;charset=utf-8" http-equiv="Content-Type">
		<meta content="utf-8" http-equiv="encoding">
		<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
		<script src="javascript/script.js"></script>
		<link rel="stylesheet" href="css/owl.carousel.css">
		<script src="javascript/owl.carousel.js"></script>
		<link rel="stylesheet" href="css/jquery.growl.css">
		<script src="javascript/jquery.growl.js"></script>
		<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
		<link rel="stylesheet" href="css/style.css" />
	</head>

	<body class="blackbody">
		<div class="header_main">
			<div class="container header_section">
				<div class="row topbar">
					<div class="col-md-3 logo al-left"><img class="logo_img" src="images/logo.png" /> </div>
					<div class="col-md-9 text-right">
						<div class="header_menu">
							<div class="topnav" id="myTopnav"> <a class="smoothscroll_btn" href="#header-banner">Home</a> <a class="smoothscroll_btn" href="#courses">Courses</a> <a class="smoothscroll_btn" href="#news">News</a> <a class="smoothscroll_btn" href="#testimonial">Testimonials</a> <a href="#contact">Contact</a> <a class="smoothscroll_btn" href="#about">About</a> <a class="button_filled start_quiz" href="javascript:void(0)">Start Quiz</a>
								<a href="javascript:void(0);" class="icon" onclick="myFunction()"> <i class="fa fa-bars"></i> </a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="inner_section">
			<section id="header-banner" class="section" data-hash="Explore">
				<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
					<div class="carousel-inner" role="listbox">
						<div class="carousel-item active" style="background-image: url('images/banner.jpg')"></div>
						<div class="carousel-item" style="background-image: url('images/banner_1.jpg')"></div>
						<div class="container caption-container">
							<div class="row">
								<div class="carousel-caption">
									<div class="caption-text">
										<h2 class="display-4 ex1">Learn With Us</h2>
										<p class="lead">Our team make news worldwide</p> <a class="button_filled start_quiz start_quiz_style" href="javascript:void(0)">Start Quiz</a> </div>
								</div>
							</div>
						</div>
					</div>
					<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a>
					<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a>
				</div>
			</section>
			<section id="courses" class="container section_cont aos-init aos-animate" data-aos="fade-right" data-aos-duration="1500">
				<div class="row courselist">
					<h2 class="main-heading" data-aos="fade-up">Courses</h2>
					<div class="col-md-4">
						<div class="course_detail">
							<h3>Web Development</h3>
							<p> Time: 6 Month</br> Type: Online / Offline</br> Cost: $2000 </p>
						</div>
					</div>
					<div class="col-md-4">
						<div class="course_detail">
							<h3>Mobile Application</h3>
							<p> Time: 9 Month</br> Type: Offline</br> Cost: $4000 </p>
						</div>
					</div>
					<div class="col-md-4">
						<div class="course_detail">
							<h3>Language Course</h3>
							<p> Time: 6 Month</br> Type: Online / Offline</br> Cost: $1000 </p>
						</div>
					</div>
				</div>
			</section>
			<section id="news" class="cust_news_sec  section_cont">
				<div class="container aos-init aos-animate" data-aos="fade-right" data-aos-duration="1500">
					<div class="row cust_news_inner">
						<h2 class="main-heading" data-aos="fade-up">Latest News</h2>
						<div class="col-md-4 col-sm-12" data-aos="fade-up">
							<div class="news_sec">
								<img src="images/photo1.jpg">
								<div class="cust_news_content">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
								</div>
							</div>
						</div>
						<div class="col-md-4 col-sm-12" data-aos="fade-up">
							<div class="news_sec">
								<img src="images/photo2.jpg">
								<div class="cust_news_content">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
								</div>
							</div>
						</div>
						<div class="col-md-4 col-sm-12" data-aos="fade-up"> 
							<div class="news_sec">
								<img src="images/photo3.jpg">
								<div class="cust_news_content">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="about" class="container cust-about-us section_cont aos-init aos-animate" data-aos="fade-right" data-aos-duration="1500">
				<div class="row cust_about_inner text-center">
					<h2 class="main-heading" data-aos="fade-up">About Us</h2>
					<div class="cust_about_image"> <img src="images/school.jpg"> </div>
					<div class="cust_about_content text-center">
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
					</div>
				</div>
			</section>
			<section id="testimonial" class="container section_cont aos-init aos-animate" data-aos="fade-right" data-aos-duration="1500">
				<div class="row testimonials">
					<h2 class="main-heading" data-aos="fade-up">Testimonials</h2>
					<div class="owl-carousel owl-theme">
						<div class="item">
							<div class="col-12 testimonial" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
								<div class="test_header"> <img src="images/testimonials/user_black.png" alt="Sukhwinder">
									<h4>Sukhwinder</h4>
									<h5>Montreal</h5> </div>
								<p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
							</div>
						</div>
						<div class="item">
							<div class="col-12 testimonial" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
								<div class="test_header"> <img src="images/testimonials/user_black.png" alt="Sukhwinder">
									<h4>Asish</h4>
									<h5>Montreal</h5> </div>
								<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
							</div>
						</div>
						<div class="item">
							<div class="col-12 testimonial" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
								<div class="test_header"> <img src="images/testimonials/user_black.png" alt="Sukhwinder">
									<h4>Sukhwinder</h4>
									<h5>Montreal</h5> </div>
								<p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
							</div>
						</div>
						<div class="item">
							<div class="col-12 testimonial" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
								<div class="test_header"> <img src="images/testimonials/user_black.png" alt="Sukhwinder">
									<h4>Sukhwinder</h4>
									<h5>Montreal</h5> </div>
								<p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="contact" class="cust_contact_map_section section_cont">
				<div class="container">
					<div class="row">
						<div class="col-md-6 col-sm-12">
							<div class="cust_form">
								<h2 class="text-center">Get In Touch With Us</h2>
								<div class="contact-form form-vertical">
									<form method="post" action="/contact#ContactForm" id="ContactForm" accept-charset="UTF-8" class="contact-form">
										<input type="hidden" name="form_type" value="contact">
										<input type="hidden" name="utf8" value="✓">
										<div class="col-sm-12">
											<div class="col-sm-12">
												<label for="ContactForm-name">Name</label>
												<input type="text" id="ContactForm-name" name="contact[Name]" value="" class=""> </div>
											<div class="col-sm-12">
												<label for="ContactForm-email">Email <span aria-hidden="true">*</span></label>
												<input type="email" id="ContactForm-email" name="contact[email]" autocorrect="off" autocapitalize="off" value="" aria-required="true"> </div>
											<div class="col-sm-12">
												<label for="ContactForm-phone">Phone Number</label>
												<input type="tel" id="ContactForm-phone" name="contact[Phone Number]" pattern="[0-9\-]*" value=""> </div>
											<div class="col-sm-12">
												<label for="ContactForm-message">Message</label>
												<textarea rows="5" id="ContactForm-message" name="contact[Message]"></textarea>
											</div>
											<div class="submit_btn">
												<input type="submit" class="btn" value="Send"> </div>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div class="col-md-6 col-sm-12">
							<div class="cust_map">
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2615.3506265816454!2d-122.8834126847911!3d49.041956495718686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485c32b468a4ecf%3A0x2c6721084ed897a4!2s1234%20123%20St%2C%20Surrey%2C%20BC%20V4A%203L6%2C%20Canada!5e0!3m2!1sen!2s!4v1612692539200!5m2!1sen!2s" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
		<div class="footer_section aos-init aos-animate" data-aos="zoom-in">
			<div class="container">
				<div class="row">
					<div class="col-md-4 col-sm-12 footer-text-left">
						<h3>Contact US </h3>
						<ul class="cust_footer_first_menu">
							<li>
								<p><span>Address:</span> #1234 123 Ave A1B1A1, Surrey BC, Canada</p>
							</li>
							<li>
								<p><span>Email:</span> dummy@gmail.com</p>
							</li>
							<li>
								<p><span>Office Phone No.:</span> +1 (443)245-7989</p>
							</li>
							<li>
								<p><span>Office Phone No.:</span> 9876543210</p>
							</li>
						</ul>
					</div>
					<div class="col-md-4 col-sm-12 footer-text-center footer_links">
						<h3>Other Links</h3>
						<ul>
							<li><a class="smoothscroll_btn" href="#header-banner">Home</a></li>
							<li><a class="smoothscroll_btn" href="#course">Course</a></li>
							<li><a class="smoothscroll_btn" href="#news">News</a></li>
							<li><a class="smoothscroll_btn" href="#about">About</a></li>
							<li><a class="smoothscroll_btn" href="#contact">Contact</a></li>
							<li><a class="smoothscroll_btn" href="#testimonial">Testimonials</a></li>
						</ul>
					</div>
					<div class="col-md-4 col-sm-12 footer-text-right "> <img src="images/logo.png">
						<ul>
							<li><a href="#"><i class="fab fa-facebook"></i></a></li>
							<li><a href="#"><i class="fab fa-instagram"></i></a></li>
							<li><a href="#"><i class="fab fa-youtube"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<script>
		AOS.init();
		</script>
		<script>
		$(document).ready(function() {
			$('.owl-carousel').owlCarousel({
				loop: true,
				margin: 10,
				autoplay: true,
				responsiveClass: true,
				responsive: {
					0: {
						items: 1,
						nav: false
					},
					600: {
						items: 2,
						nav: false
					},
					1000: {
						items: 3,
						nav: false,
						loop: true,
						margin: 20
					}
				}
			})
		})
		</script>
		<div id="quiz_modal" class="modal" tabindex="-1" role="dialog">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title">Quiz</h1>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
					</div>
					<div class="modal-body">
						<div class="model_content content_section">
							<form id="quiz_form" class="quiz_form" quizstep="1">
								<div class="form-group">
									<label for="exampleInputname">Name</label>
									<input name="name" type="text" class="form-control" id="exampleInputname"> </div>
								<div class="form-group">
									<label for="exampleInputEmail1">Email address</label>
									<input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"> <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> </div>
							</form>
						</div>
					</div>
					<div class="modal-footer">
						<button type="submit" form="quiz_form" class="button_filled btn quiznextbtn">Next</button>
						<button type="button" class=" btn button_unfilled" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>
