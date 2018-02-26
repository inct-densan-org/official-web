//jQuery is required to run this code
$(document).ready(function () {

	$('#fakeLoader').fakeLoader({
		timeToHide: 3000,
		bgColor: '#34495e',
		spinner: 'spinner4'
	});
	initBannerVideoSize('.video-container .poster img');
	initBannerVideoSize('.video-container .filter');
  initBannerVideoSize('.video-container video');

  setTimeout(function () {
    document.getElementsByTagName('video')[0].play();
  }, 3500);

	$(window).on('resize', function () {
		scaleBannerVideoSize('.video-container .poster img');
		scaleBannerVideoSize('.video-container .filter');
		scaleBannerVideoSize('.video-container video');
	});

});

function initBannerVideoSize(element) {
	$(element).each(function () {
		$(this).data('height', $(this).height());
		$(this).data('width', $(this).width());
	});

	scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element) {

	var windowWidth = $(window).width(),
		windowHeight = $(window).height() + 5,
		videoWidth,
    videoHeight;

	$(element).each(function () {
		var videoAspectRatio = $(this).data('height') / $(this).data('width');

    $(this).width(windowWidth);
    $('.homepage-hero-module').css('height', (windowWidth*videoAspectRatio)+'px');

		if (windowWidth < 1000) {
			videoHeight = windowHeight;
			videoWidth = videoHeight / videoAspectRatio;
			$(this).css({ 'margin-top': 0, 'margin-left': -(videoWidth - windowWidth) / 2 + 'px' });

      $('.homepage-hero-module').css('height', videoHeight + 'px');
			$(this).width(videoWidth).height(videoHeight);
		}

		$('.homepage-hero-module .video-container video').addClass('fadeIn animated');

	});
}
