/* jQuery */
$(document).ready(function() {
	
	// language
	$( ".activeCountry" ).click(function() {
		$( ".cCountry" ).fadeToggle( 'fast' );
	});
	
	// tabs
	$('#tabs .tabContent').hide();
	$('#tabs div:first').show();
	$('#tabs ul li:first').addClass('active'); 
	$('#tabs ul li a').click(function(){
		$('#tabs ul li').removeClass('active');
		$(this).parent().addClass('active');
		var currentTab = $(this).attr('href');
		$('#tabs .tabContent').hide();
		$(currentTab).show();
		return false;
	});

	// google map zone
	$( "#dr1 , .iCloseBlack" ).click(function() {
		$( ".popOverTop" ).fadeToggle( 'fast' );
	});
	
	$( "#dr1" ).click(function() {
		$( ".popOverZoom" ).fadeToggle( 'fast' );
	});
	
	$(".iCloseWhite").click(function(){
		$('#tBD1').animate({ marginTop: '-100px', opacity: 0 }, 200);
	});
	
	
	// google map
	/*$('#mapView').gmap({
		'center': '52.088561,5.3404',
		'mapTypeId': google.maps.MapTypeId.HYBRID,
		'zoom': 13,
		'scrollwheel': false,
		'disableDefaultUI':true
	});*/
	
	// modal
	setTimeout(function() {$('#yatModal').modal();}, 2000);
	
});