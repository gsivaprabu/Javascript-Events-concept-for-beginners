document.querySelector('.grid').addEventListener('click', function(e) {
    console.log(e.target);
    console.dir(e.target);
    if (e.target.tagName === 'IMG') {
        var howMany = this.querySelectorAll('li').length;
        console.log(this);
        var removeTarget = e.target.parentNode;
        console.log(removeTarget);
        console.log("We can collect the parent node and using the parent node delete the child Node");
        console.dir(removeTarget.parentNode);
        console.log(removeTarget.parentNode.childElementCount);
        if (removeTarget.parentNode.childElementCount > 1) {
            removeTarget.parentNode.removeChild(removeTarget);
        } else {
            var photoTitle = e.target.alt;
            console.log("Photo Alternative value => " + photoTitle);
            document.querySelector('#art p').innerHTML = "<p> You have picked" + photoTitle + "</p>"
        }
    }
}, 'false')
