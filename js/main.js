/* jQuery */
$(document).ready(function() {
	
	// language
	$( ".activeCountry" ).click(function() {
		$( ".cCountry" ).fadeToggle( 'fast' );
	});
	
	// calandar
	$( ".iDatepicker, .inputCal" ).click(function() {
		$( "#calandar" ).fadeToggle( 'fast' );
	});
	
	// tooltip 
	$('.tooltip[title]').each(function()
	{
		$(this).qtip(
			{
				position: {
					at: 'center right',
					my: 'center left',
					//target: 'mouse',
					effect: true
					//adjust: {
					//	x: 20, y: 18
					//}
			},
			show: {
				delay: 20
			},
			hide: {
				delay: 0
			}
		})
	})
	
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
	
	// tabs faq
	$('#faqTabs .tabContent').hide();
	$('#faqTabs div:first').show();
	$('#faqTabs ul li:first').addClass('active'); 
	$('#faqTabs ul li a').click(function(){
		$('#faqTabs ul li').removeClass('active');
		$(this).parent().addClass('active');
		var currentTab = $(this).attr('href');
		$('#faqTabs .tabContent').hide();
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
	
	// modal
	setTimeout(function() {$('#yatModal').modal();}, 2000);
	
	// acccordion faq
    $('#faqTabs .tabContent p').hide();
       $('#faqTabs .tabContent h2 a').click(function(){
          if ($(this).hasClass('active')) {
               $(this).removeClass('active');
               $(this).parent().next().slideUp();
          } else {
               $('#faqTabs .tabContent h2 a').removeClass('active');
               $(this).addClass('active');
               $('#faqTabs .tabContent p').slideUp();
               $(this).parent().next().slideDown();
          }
          return false;
       });
       
       
    // acccordion faq
    $('#accordion p').hide();
       $('#accordion h3 a').click(function(){
          if ($(this).hasClass('active')) {
               $(this).removeClass('active');
               $(this).parent().next().slideUp();
          } else {
               $('#accordion h3 a').removeClass('active');
               $(this).addClass('active');
               $('#accordion p').slideUp();
               $(this).parent().next().slideDown();
          }
          return false;
       });
       
    // google map
	/*$('#mapView').gmap({
		'center': '52.088561,5.3404',
		'mapTypeId': google.maps.MapTypeId.HYBRID,
		'zoom': 13,
		'scrollwheel': false,
		'disableDefaultUI':true
	});*/
	
});