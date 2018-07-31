(function ($) {
$(document).ready(function(){

$("#reseller_btn_submit").removeAttr("disabled");	



$("#freesim-registration-form input").on('keyup' , function() { 
	$(this).next('.errormsg').hide();
	$(this).removeClass('error');
});  

});
})(jQuery);