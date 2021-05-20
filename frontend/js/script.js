$(document).ready(function(){
	
	// 1 of 3: Basic Details
	$('#basic-page-1-next').on('click', function(){
		$('#basic-details-1').attr('hidden','hidden');
		$('#basic-details-2').removeAttr('hidden');
	});
	
	$('#basic-page-2-prev').on('click', function(){
		$('#basic-details-2').attr('hidden', 'hidden');
		$('#basic-details-1').removeAttr('hidden');
	});
	
	$('#basic-page-2-next').on('click', function(){
		$('#basic-details-2').attr('hidden', 'hidden');
		$('#basic-details-3').removeAttr('hidden');
	});
	
	$('#basic-page-3-prev').on('click', function(){
		$('#basic-details-3').attr('hidden', 'hidden');
		$('#basic-details-2').removeAttr('hidden');
	});
	
	$('#basic-page-3-next').on('click', function(){
		$('#basic-details-3').attr('hidden', 'hidden');
		$('#basic-details-4').removeAttr('hidden');
	});
	
	$('#basic-page-4-prev').on('click', function(){
		$('#basic-details-4').attr('hidden', 'hidden');
		$('#basic-details-3').removeAttr('hidden');
	});
	
	$('#basic-page-4-next').on('click', function(){
		$('#basic-details-4').attr('hidden', 'hidden');
		$('#basic-details-5').removeAttr('hidden');
	});
	
	$('#basic-page-5-prev').on('click', function(){
		$('#basic-details-5').attr('hidden', 'hidden');
		$('#basic-details-4').removeAttr('hidden');
	});
	
	$('#basic-page-5-next').on('click', function(){
		$('#basic-details-5').attr('hidden', 'hidden');
		$('#basic-details-6').removeAttr('hidden');
	});
	
	$('#basic-page-6-prev').on('click', function(){
		$('#basic-details-6').attr('hidden', 'hidden');
		$('#basic-details-5').removeAttr('hidden');
	});
	
	$('#basic-page-6-next').on('click', function(){
		$('#basic-details-6').attr('hidden', 'hidden');
		$('#basic-details-7').removeAttr('hidden');
	});	
	$('#basic-page-7-prev').on('click', function(){
		$('#basic-details-7').attr('hidden', 'hidden');
		$('#basic-details-6').removeAttr('hidden');
	});
	
	$('#basic-page-7-next').on('click', function(){
		$('#basic-details-7').attr('hidden', 'hidden');
		$('#basic-details-8').removeAttr('hidden');
	});
	
	$('#basic-page-final').on('click', function(){
		$('#basic-details-8, #basic-details-form').attr('hidden', 'hidden');
		$('#income-details-form, #income-details-1').removeAttr('hidden');
	});
	
	// 2 of 3 : Income Details
	
	$('#income-page-1-next').on('click', function(){
		$('#income-details-1').attr('hidden', 'hidden');
		$('#income-details-2').removeAttr('hidden');
	});
	
	$('#income-page-2-prev').on('click', function(){
		$('#income-details-2').attr('hidden', 'hidden');
		$('#income-details-1').removeAttr('hidden');
	});
	
	$('#income-page-2-next').on('click', function(){
		$('#income-details-2').attr('hidden', 'hidden');
		$('#income-details-3').removeAttr('hidden');
	});	
	
	$('#income-page-3-prev').on('click', function(){
		$('#income-details-3').attr('hidden', 'hidden');
		$('#income-details-2').removeAttr('hidden');
	});
	
	$('#income-page-3-next').on('click', function(){
		$('#income-details-3').attr('hidden', 'hidden');
		$('#income-details-4').removeAttr('hidden');
	});	
	
	$('#income-page-4-prev').on('click', function(){
		$('#income-details-4').attr('hidden', 'hidden');
		$('#income-details-3').removeAttr('hidden');
	});
	
	$('#income-page-4-next').on('click', function(){
		$('#income-details-4').attr('hidden', 'hidden');
		$('#income-details-5').removeAttr('hidden');
	});
	
	$('#income-page-final').on('click', function(){
		$('#income-details-5, #income-details-form').attr('hidden', 'hidden');
		$('#health-details-form, #health-details-1').removeAttr('hidden');
	});	
	
	// 3 of 3 : Health Status
	
	$('#health-page-1-next').on('click', function(){
		$('#health-details-1').attr('hidden', 'hidden');
		$('#health-details-2').removeAttr('hidden');
	});	
	
	$('#health-page-2-prev').on('click', function(){
		$('#health-details-2').attr('hidden', 'hidden');
		$('#health-details-1').removeAttr('hidden');
	});
	
	$('#health-page-2-next').on('click', function(){
		$('#health-details-2').attr('hidden', 'hidden');
		$('#health-details-3').removeAttr('hidden');
	});	
	
	$('#health-page-3-prev').on('click', function(){
		$('#health-details-3').attr('hidden', 'hidden');
		$('#health-details-2').removeAttr('hidden');
	});
	
	$('#health-page-3-next').on('click', function(){
		$('#health-details-3').attr('hidden', 'hidden');
		$('#health-details-4').removeAttr('hidden');
	});
});