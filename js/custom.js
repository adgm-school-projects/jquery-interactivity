// JavaScript Document

//Dropdown Menu with animation
$('<div></div>')
	.attr('id', 'overlay')
	.css('opacity', 0.9)
	.hover(function() {
		$(this)
		.addClass('active')
	}, function() {
		$(this).removeClass('active');
		setTimeout(function() {
			$('#overlay:not(.active)').slideUp(function() {
				$('a.cart-hover').removeClass('cart-hover');
			});
		}, 200);
	}).appendTo('body');
	
$('.cart a').click(function() {
	$(this).addClass('cart-hover');
	$('#overlay:not(:animated)')
	.addClass('active')
	.html('<h1>Merch Store</h1><a href="#">Cart</a>&nbsp;&nbsp;&nbsp;<a href="#">Checkout</a>')
	.animate({'height':'show'}, {
				duration:'slow',
				easing: 'easeOutBounce'
			  });;
});


//Add Content Button
$('#btn1').click(function() {
	$('#append1').append("The Wizards kept it close in the first half, but the Panthers ran away with the lead in the second, scoring 3 goals off nice feeds from Meaghan Hall. The Wizards won't have much time to dwell on the loss, as they play the Panthers again this Sunday.");
	$('#btn1').hide();
	alert("Content Added!");
});


//Navigation Hover Effects
$('#navbar ul li').hover(function() {
	$(this).addClass('nav-hover'); },
	function() {
		$(this).removeClass('nav-hover');
	});