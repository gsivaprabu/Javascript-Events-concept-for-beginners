# LEGACY BROWSERS

- Support for legacy browsers.
- Special problem for event models.
- IE8 and earlier use different versions.

### IE9 > use addEventListener()

document.getElementById('pink').addEventListener('click', function {
	alert('Clicked on pink');
},false);

### IE8 use attachEvent()

document.getElementById('pink').attachEvent('onclick', function {
	alert('Clicked on pink');
});

### Using jQuery

$('#pink').on('click', function() {
    alert("Clicked on Pink")
});