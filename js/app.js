$(document).ready(function(){
	$('#routeimg').hide();
	$('form').hide();
	$('#vanilla p').hide();
	$('#chocolate p').hide();
	$('#strawberry p').hide();
	$('#cinnamon p').hide();
	
	$('#ofthemonth').click(function(){
		$('#ofthemonth').animate({width: '200px'}, 2000);
		$('#ofthemonth').animate({width: '100%'}, 2000);
	}); 

	$('#viewmap').click(function(){
		$('#viewmap').fadeOut(1000);
		$('#routeimg').slideDown(1000);
	}); //end click

	$('#vanilla').hover(function(){
		$('#vanilla p').fadeIn(500);
		$('#vanilla').css({
			border: "1px solid #ddd"
		});
	}, function(){
		$('#vanilla p').fadeOut();
		$('#vanilla').css({
			border: "0px"
		});
	}); //end hover

	$('#chocolate').hover(function(){
		$('#chocolate p').fadeIn(500);
		$('#chocolate').css({
			border: "1px solid #ddd"
		});
	}, function(){
		$('#chocolate p').fadeOut();
		$('#chocolate').css({
			border: "0px"
		});
	}); //end hover


	$('#strawberry').hover(function(){
		$('#strawberry p').fadeIn(500);
		$('#strawberry').css({
			border: "1px solid #ddd"
		});
	}, function(){
		$('#strawberry p').fadeOut();
		$('#strawberry').css({
			border: "0px"
		});
	}); //end hover

	$('#cinnamon').hover(function(){
		$('#cinnamon p').fadeIn(500);
		$('#cinnamon').css({
			border: "1px solid #ddd"
		});
	}, function(){
		$('#cinnamon p').fadeOut();
		$('#cinnamon').css({
			border: "0px"
		});
	}); //end hover

	$('#ingredients li').hover(function(){
		$('#ingredients li:odd').css({
		color: "brown"
		}); //end li css
		$('#ingredients li:even').css({
		color: "green"
		}); //end li css
	}, function(){
		$('#ingredients li:odd').css({
		color: "#222"
		}); //end li css
		$('#ingredients li:even').css({
		color: "#222"
		}); //end li css
	}); //end ingredients hover

	


	$('#apply').click(function(){
		$('#apply').hide();
		$('form').show();
	}); //end click



$('#submit').click(function(submit){
		if($('#name').val().length == 0) {
			$('.name-group .help-block').text('Required field.');
			$('.name-group').attr({
				class: 'form-group name-group has-error'
			}); //end attr
			submit.preventDefault();
		} 	else{
	            $('.name-group .help-block').text('');
	            $('.name-group').attr({
	                    class: 'form-group name-group'
	            }); //end attr

  		if($('#phone').val().length == 0) {
			$('.phone-group .help-block').text('Required field.');
			$('.phone-group').attr({
				class: 'form-group phone-group has-error'
			}); //end attr
			submit.preventDefault();
		}   else{
	        	$('.phone-group .help-block').text('');
	       		$('.phone-group').attr({
	                class: 'form-group phone-group'
	       		}); //end attr

				
        if($('#email').val().length == 0) {
			$('.email-group .help-block').text('Required field.');
			$('.email-group').attr({
				class: 'form-group email-group has-error'
			}); //end attr
			submit.preventDefault();
		} else{
	            $('.email-group .help-block').text('');
	            $('.email-group').attr({
	                    class: 'form-group email-group'
	            }); //end attr


		if($('#resume').val().length == 0) {
			$('.resume-group .help-block').text('Required field.');
			$('.resume-group').attr({
				class: 'form-group resume-group has-error'
			}); //end attr
			submit.preventDefault();
		} else{
        		$('.resume-group .help-block').text('');
       			$('.resume-group').attr({
               		class: 'form-group resume-group'
        		}); //end attr

        		$('.btn-danger').replaceWith('<h3><span class="label label-success">Submitted!</span></h3>')
        		alert('Thank you for your interest in working with us! Your application has been successfully submitted, and we will be in touch with you soon.');

        		submit.preventDefault();
    		}}}} // end elses
	       	
	        
	}); //end submit
	
	
}); //end ready






