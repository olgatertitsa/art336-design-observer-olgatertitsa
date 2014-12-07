// Equal Height Elements *Pure JS
function eqHeight(parent_class) {
    var children = document.getElementsByClassName(parent_class);
    for (var j = 0; j < children.length; j++) {
        var child = children[j].childNodes;
        var childAmount = child.length, boxHeight = 0;
        for(var i = childAmount - 1; i >= 0; i--) { 
            if(child[i].offsetHeight && child[i].offsetHeight > boxHeight) {
                child[i].style.height = '';
                boxHeight = child[i].offsetHeight;
            }
        }
        for(var i = childAmount - 1; i >= 0; i--) { 	
            if(child[i].offsetHeight) {
                child[i].style.height = boxHeight + 'px';
            }
        }
    }
}
window.onload = function() { eqHeight('equal-height'); }
window.onresize = function() { eqHeight('equal-height'); }