$(".faq-q-tab").on('click',function(){
	$(this).children('.faq-a-tab').slideToggle();
	$('.fa-angle-up',this).toggleClass('hide');
	$('.fa-angle-down',this).toggleClass('hide');
});