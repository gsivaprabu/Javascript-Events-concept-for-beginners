# CLEANING UP EVENT ISSUES

- Given console.dir command we can get the object also.
- using querySelector raise the addEventListener.
- Get the parent node of the clicked element
	- var removeTarget = e.target.parentNode;
- We can count the child nodes below methos
	- console.log(removeTarget.parentNode.childElementCount);
- Delete the child node using parent Node.
	- removeTarget.parentNode.removeChild(removeTarget);
- Using if else for check the condition count the list value.

		if (removeTarget.parentNode.childElementCount > 1) {
		    removeTarget.parentNode.removeChild(removeTarget);
		} else {
		    var photoTitle = e.target.alt;
		    console.log("Photo Alternative value => " + photoTitle);
		    document.querySelector('#art p').innerHTML = "<p> You have picked" + photoTitle + "</p>"
		}