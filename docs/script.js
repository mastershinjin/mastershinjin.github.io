// Make all window elements (specifically their title bar) draggable:
window.onload = function () {
    var desktopWindows = document.getElementsByClassName("window");
    Array.from(desktopWindows).forEach(element => {
        console.log("we have an element!");
        dragElement(element);
    });
}

function dragElement(el) {
    // elmnt is a list of all HTML elements by class name 'window':
    // TODO: Change so we only click/drag `title-bar` and then entier window can move via parentElement
    el.addEventListener('mousedown', function (e) {
        var offsetX = e.clientX - parseInt(window.getComputedStyle(this).left);
        var offsetY = e.clientY - parseInt(window.getComputedStyle(this).top);

        function mouseMoveHandler(e) {
            el.style.top = (e.clientY - offsetY) + 'px';
            el.style.left = (e.clientX - offsetX) + 'px';
        }

        function reset() {
            window.removeEventListener('mousemove', mouseMoveHandler);
            window.removeEventListener('mouseup', reset);
        }

        window.addEventListener('mousemove', mouseMoveHandler);
        window.addEventListener('mouseup', reset);
    });
}