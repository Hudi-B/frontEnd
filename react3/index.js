let state = {
    x: undefined,
    y: undefined,
    isDragged: false
}

const container = document.getElementById('drag-and-drop-app')
state.x = container.offsetLeft
state.y = container.offsetTop

window.onload = render;

function render() {
    const doboz = `
    <div
    style="width: 200px; position: absolute; left: ${state.x}px; top: ${state.y}px;"
    class="box ${state.isDragged ? "grabbed" : "not-grabbed"}"
    onmousedown="dobozDragStart()"
    onmouseup="dobozDragEnd()"
    onmousemove="dobozMouseMove"
    >
    
    `
}