	
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
	navigationText : false,
	responsive:{
		320: {
			items:1,
			nav: true,
			navigationText : false
		},

		540:{
			items:2,
			nav:true,
			navigationText : false
		},
		768:{
			items:3,
			nav:true,
			navigationText : false
		},
		992:{
			items:4,
			nav:true,
			navigationText : false
		}
	}
})
	setEqualHeight($(".product-box .pr-bg"));
//	setTopMargin ('.center-row-header');
//	setTopMargin ('.row.sells-hd.tovar');
//	setTopMargin ('.article-comment');
//	setTopMargin ('.footer');
			
		
		$('a.right').prepend($('a.left.carousel-control svg').clone());
		$('.owl-next, .owl-prev').prepend($('a.left.carousel-control svg').clone());
		

});
$(window).resize(function() {
	setEqualHeight($(".product-box .pr-bg"));
//	setTopMargin ('.center-row-header');	
//	setTopMargin ('.row.sells-hd.tovar');
//	setTopMargin ('.article-comment');
//	setTopMargin ('.footer');
})