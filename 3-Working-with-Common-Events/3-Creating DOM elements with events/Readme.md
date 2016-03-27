# CREATING DOM ELEMENTS WITH EVENTS

- Change the addEventListener for 'mouseover' event.

- if (e.target.tagName === 'IMG') the condition true means add the element.

- Create the new <div> dynamically.
		var myElement = document.createElement('div');


- Add the class for dynamically created element.
		myElement.className = 'prev


- Create <img> tag for dynamically
   	var myImg = document.createElement('img');


- Find the image path
		var imgLoc = e.target.src;


- append() image path with child Node

		myImg.src = imgLoc.substr(0, imgLoc.length - 7) + '.jpg';
    myElement.appendChild(myImg);
