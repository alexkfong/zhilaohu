// app.js
// by Alex K. Fong
// Javascript for 纸老虎 The Paper Tiger's website
// This script is for the English portion of the website
// code is open source.

$(document).ready( function() {

	var currentSection; // tracks what section is open

	// check for use of navigation interface
	$('#navbarInterface, #navbarFooter').on('click', 'li', function() {
		
		var whichSection; // tracks which section is desired

		// check what was clicked and determine which section desired
		switch( $(this).attr('id') ) {
			case 'aboutButton':
				whichSection = '#aboutSection';
				break;
			case 'musicButton':
				whichSection = '#musicSection';
				break;
			case 'mediaButton':
				whichSection = '#mediaSection';
				break;
			case 'scheduleButton':
				whichSection = '#scheduleSection';
				break;
			case 'connectButton':
				whichSection = '#connectSection';
				break;
			case 'chineseButton':
				whichSection = 'chineseSection';
				break;
		};

		// Display the section. Chinese part handled separately
		if( whichSection !== 'chineseSection' ) {

			//Hide the current section if one already opened.
			if( currentSection ) {
				$( currentSection ).toggle();	
			}
			else if( !currentSection ) {
				//null value captured. Reveal bottom page navigation
				$( '#navbarFooter' ).toggle();
			}
			else {
				// something went wrong with the currentSection variable
				console.log('Exception thrown: currentSection not found');
			}
			
			$( whichSection ).toggle();

			currentSection = whichSection;

		}

	});

});