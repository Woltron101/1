	
	// $(document).ready(function() {
 

 //  });

function setTopMargin (marginElem) { $(marginElem).css({'margin-top' :  $(marginElem).prev().height()+'px'}) }

function setEqualHeight(columns) {

	columns.each(
		function()	{
			$(this).css('height', 'auto');
		}
	)

	var tallestcolumn = 0;

	columns.each(
		function()	{
			currentHeight = $(this).height();
			if(currentHeight > tallestcolumn) {
				tallestcolumn = currentHeight;
			}
		}
	);
	columns.height(tallestcolumn);
}
$(document).ready(function() {
		$(".owl-carousel").owlCarousel({

	smartSpeed: 666,
	loop:true,
	margin:0,
	responsiveClass:true,
	responsive:{
		320: {
			items:1,
			nav: true
		},

		540:{
			items:2,
			nav:true
		},
		768:{
			items:3,
			nav:true
		},
		992:{
			items:4,
			nav:true,
		}
	}
})
	setEqualHeight($(".product-box .pr-bg"));
	setTopMargin ('.center-row-header');
	setTopMargin ('.row.sells-hd.tovar');
	setTopMargin ('.article-comment');
	setTopMargin ('.footer');

});
$(window).resize(function() {
	setEqualHeight($(".product-box .pr-bg"));
	setTopMargin ('.center-row-header');	
	setTopMargin ('.row.sells-hd.tovar');
	setTopMargin ('.article-comment');
	setTopMargin ('.footer');
})