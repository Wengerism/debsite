// // Create a click event for each accoridon that we have
// // As we don't know how many accordions we have, we need to loop through
export var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
	accordions[i].onclick = function () {
		var content = this.nextElementSibling;
		// 		// check the vaue of the max-height, as this indicates if it's open or closed - if max-height is set to 0 we know it's closed, if set to something more than 0 we know it's open
		// if maxHeight is set to 0 it will return null or falsey
		if (content.style.maxHeight) {
			// 			// acccordion is open, we need to close it
			content.style.maxHeight = null;
		} else {
			// 			// accordion is closed
			content.style.maxHeight = content.scrollHeight + "px";
		}
	};
}
