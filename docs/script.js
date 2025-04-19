// Make all window elements (specifically their title bar) draggable:
window.onload = function () {
    var desktopWindows = document.getElementsByClassName("title-bar");
    Array.from(desktopWindows).forEach(element => {
        dragElement(element);
    });
}

function dragElement(el) {
    // elmnt is a list of all HTML elements by class name 'title-bar':
    // We get parent Element for each "title-bar" and use that window to move
    var parentElem = el.parentElement;
    el.addEventListener('mousedown', function (e) {
        var offsetX = e.clientX - parseInt(window.getComputedStyle(parentElem).left);
        var offsetY = e.clientY - parseInt(window.getComputedStyle(parentElem).top);

        function mouseMoveHandler(e) {
            parentElem.style.top = (e.clientY - offsetY) + 'px';
            parentElem.style.left = (e.clientX - offsetX) + 'px';
        }

        function reset() {
            window.removeEventListener('mousemove', mouseMoveHandler);
            window.removeEventListener('mouseup', reset);
        }

        window.addEventListener('mousemove', mouseMoveHandler);
        window.addEventListener('mouseup', reset);
    });
}