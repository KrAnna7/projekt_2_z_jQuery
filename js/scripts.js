// plik scripts.js
$(function(){
	var carouselList = $('#carousel ul'),
		next = $('#next'),
		previous = $('#prev');

	function changeSlide(){
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);/*marginLeft: -400 nie zrozumiałe*/
	};

	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");

		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});/*marginLeft:0 nie zrozumiałe*/
	};

	function moveLastSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");

		firstItem.before(lastItem);
		carouselList.css({marginLeft:-400});/*nie zrozumiałe*/
	};

	var interval = setInterval(changeSlide, 3000);

	function nextSlide() {
		changeSlide();
	};

	function prevSlide() {
		carouselList.animate({'marginLeft':0}, 500, moveLastSlide);/*marginLeft: 0 nie zrozumiałe*/
	};
	
	next.click(function(){
		nextSlide();
		clearInterval(interval);
	});

	previous.click(function(){
		prevSlide();
		clearInterval(interval);
	});
});