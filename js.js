/*
*
* Gestion de l'interactivitÃ© avec jQuery
*
*/


$(document).ready(
	function(){

		/*
		* ----------------------------------------------------------------------
		* Le script est Ã  insÃ©rer ci-dessous
		* ----------------------------------------------------------------------
		*/



		/*
			* ----------------------------------------------------------------------
			* SCROLL VERTICAL
			* ----------------------------------------------------------------------
			*/


		var compteur = 0;



		$(window).click(
			function(){
				// eq = numÃ©ro div
				//$('.projet').eq(0).show();
				$('.projet').removeClass('inview');
				$('.projet').eq( compteur ).addClass('shown');
				$('.projet').eq( compteur ).addClass('inview');
				$('.projet').draggable();
				// chnage position X,Y
				$('.projet').eq( compteur ).css('left',_posX + 'px');
				$('.projet').eq( compteur ).css('top',_posY + 'px');
				$('.about').addClass('shown');

				// Chnagement image vignette
				$('#curseur').attr('src', 'images/vignettes/vignette_' + (compteur+2) + '.png');

				compteur+= 1;

				var currentImage = $('.projet.shown');
				if(currentImage.hasClass("video")){
					console.log('vid');
					$(".vidplayer").trigger('play');
				   } else {
				     $(".vidplayer").trigger('pause');
					}
			}

		);

	 $('.except').click(function(event){
		 event.stopPropagation();
	});

		$('.about-content').click(
			function(){
				$('.about-box').toggleClass("shown hidden");
			}
		);

		// $('.about-box').click(
		// 	function(){
		// 		$('.about-box').addClass('hidden');
		// 	}
		// );





		/*
		* ----------------------------------------------------------------------
		* PRELOADING
		* ----------------------------------------------------------------------
		*/

		$.preLoadImages(
			"images/illustration/ville_quadri.png"
   );

		/*
		* ----------------------------------------------------------------------
		* MOUSEOVER
		* ----------------------------------------------------------------------
		*/


      //    $("img[id!='curseur']").hover(
			// function(){
      //       	this.src = this.src.replace("_bitmap","_quadri");
      //       },
      //       function(){
      //       	this.src = this.src.replace("_quadri","_bitmap");
      //       }
      //    );

		/*
		* ----------------------------------------------------------------------
		* POSITION SOURIS
		* ----------------------------------------------------------------------
		*/

		var _posX;
		var _posY;

		$('body').mousemove(
			function(e){
				_posX = e.pageX;
				_posY = e.pageY;
				// Position curseur
				$('#curseur').css('left', _posX);
				$('#curseur').css('top', _posY);
			}
		);


		// ----------------------------------------------------------------------

});

(function($) {
var cache = [];
$.preLoadImages = function() {
  var args_len = arguments.length;
  for (var i = args_len; i--;) {
	var cacheImage = document.createElement('img');
	cacheImage.src = arguments[i];
	cache.push(cacheImage);
  }
}
})(jQuery)


	/*
		* ----------------------------------------------------------------------
		* CROIX FERMETURE FENETRE
		* ----------------------------------------------------------------------
		*/

		//
		// 	$('.projet .croix').click(
		// 	function(){
		// 		$('.projet').eq( compteur ).hide();
		// 		return false;
		// 	}
		// );
