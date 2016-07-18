$(document).ready(function () {
   $('.menu__item').on('click', function(e) {
   		e.preventDefault();

   		showSection($(this).attr('href'), true);
   });

	showSection(window.location.hash, false);
});

$(window).scroll(function() {
	checkSection();
});

function showSection(section, isAnimate) {
	var
		direction = section.replace(/#/, ''),
		reqSection = $('section').filter('[data-section="' + direction + '"]'),
		reqSectionPos = reqSection.offset().top - 88;

	if (isAnimate) {
		$('body, html').animate({scrollTop: reqSectionPos}, 500);
	} else {
		$('body, html').scrollTop(reqSectionPos);
	}
}

function checkSection() {
	$('section').each(function() {
		var
			$this = $(this),
			topEdge = $this.offset().top - 200,
			bottomEdge = topEdge + $this.height(),
			wScroll = $(window).scrollTop();

		if (topEdge < wScroll && bottomEdge > wScroll) {
			var
				currentId = $this.data('section'),
				reqLink = $('.menu__item').filter('[href="#' + currentId + '"]');
			reqLink.closest('.menu__item').addClass('menu__item--active')
				.siblings().removeClass('menu__item--active');

			window.location.hash = currentId;
		}
	});
}