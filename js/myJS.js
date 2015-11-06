function setTopMargin(marginElem) {
	$(marginElem).css({	'margin-top': $(marginElem).prev().height() + 'px' })
}

function setEqualHeight(columns) {
	columns.each( function() { $(this).css('height', 'auto'); }	)
	var tallestcolumn = 0;
	columns.each(
		function() {
			currentHeight = $(this).height();
			if (currentHeight > tallestcolumn) {
				tallestcolumn = currentHeight;
			}
		}
	);
	columns.height(tallestcolumn);
}

$(document).ready(function() {


	$(".owl-carousel").owlCarousel({
		smartSpeed: 666,
		loop: true,
		margin: 0,
		responsiveClass: true,
		navigationText: false,
		responsive: {
			320: {
				items: 1,
				nav: true,
				navigationText: false
			},

			540: {
				items: 2,
				nav: true,
				navigationText: false
			},
			768: {
				items: 3,
				nav: true,
				navigationText: false
			},
			992: {
				items: 4,
				nav: true,
				navigationText: false
			}
		}
	})

	$(function() {
		$("#slider").slider({
			range: true,
			min: 500,
			max: 25000,
			values: [500, 25000],
			slide: function(event, ui) {
				$('#from').val($("#slider").slider("values", 0));
				$('#to').val($("#slider").slider("values", 1));
			}
		});
		$('#from').val($("#slider").slider("values", 0));
		$('#to').val($("#slider").slider("values", 1));
		$('#from').change(function() {
			$("#slider").slider("values", 0, $('#from').val())
		})

		$('#to').change(function() {
			$("#slider").slider("values", 1, $('#to').val())
		})

	});
	
	setEqualHeight($(".product-box .pr-bg"));	
	$('a.right').prepend($('a.left.carousel-control svg').clone());
	$('.owl-next, .owl-prev').prepend($('a.left.carousel-control svg').clone());
	
	$('.view-form').click(function() {
		if ($('#vw2:checked')) $('.tovari').addClass('full-width-view');
		if ($('#vw2:checked').length < 1) $('.tovari').removeClass('full-width-view');
		setEqualHeight($(".product-box .pr-bg"));
	})

	$('.cat-side-bar h3').click(function() {
		$(this).toggleClass('drop');
		$(this).next().toggleClass('show');
	})

	$('.check-wrap').prepend($('.check-wrap svg'));
	//	$('.stars').prepend($('#stars svg'));
	//    $('a.cart-btn').prepend($('a#cart-btn svg'));
	//    $('.new>.icon').prepend($('#new>.icon svg'));
	//    $('.hit>.icon').prepend($('#hit>.icon svg'));
});
$(window).resize(function() {
	setEqualHeight($(".product-box .pr-bg"));
	if (($(window).width() < 1200) && ($('#vw2:checked'))) {
		$('.tovari').removeClass('full-width-view');
		setEqualHeight($(".product-box .pr-bg"));
	}
})