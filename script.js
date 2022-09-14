$(document).ready(function(){$(".grid-item ").mouseenter(function(){
    $(this).css('background-color', random())
})})

function random(){
    let r = Math.floor(Math.random()*256);
    let v = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);

    return `rgb(${r},${v},${b})`
}
