/*
 * ext-helloworld.js
 *
 * Licensed under the Apache License, Version 2
 *
 * Copyright(c) 2010 Alexis Deveria
 *
 */
 
/* 
	This is a very basic SVG-Edit extension. It adds a "Hello World" button in
	the left panel. Clicking on the button, and then the canvas will show the
 	user the point on the canvas that was clicked on.
*/
 
svgEditor.addExtension("Room Selector", function() {

		return {
			name: "Room Selector",

			
			selectedChanged: function(opts) {
				// Use this to update the current selected elements
				selElems = opts.elems;
				
				var i = selElems.length;
				
				while(i--) {
					var elem = selElems[i];
					
					if(elem) {
						console.log(elem.tagName );	
						console.log("Changing..");
						var v=elem.id;
						if(v){
							var v2=v.replace(/[^0-9\\.]/g, '')
							if(v2){
								$('#room_id').val(v2);
								console.log(".. changed: "+v2);
							}
						}	
					}
				}
			},
			elementChanged: function(opts) {
				var elem = opts.elems[0];

			}
		};
});

