var art = document.querySelector('#art');
console.log(art);
var grid = document.querySelector('.grid');
console.log(grid);
document.querySelector('.grid').addEventListener('click', function(e) {
    console.log(e);
    console.log("e.target.parentNode => " + e.target.parentNode);
    console.log(e.target.parentNode);
    console.log("e.target.alt => " + e.target.alt);
    console.log("e.toElement => " + e.toElement);
    console.log(e.toElement);
    var removeTarget = e.target.parentNode;
    removeTarget.parentNode.removeChild(removeTarget);
}, false);
