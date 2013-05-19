var img = document.createElement('img');
var imgsrc = chrome.extension.getURL('icon.png');
console.log(imgsrc);
img.setAttribute('src', imgsrc);


var bar = document.createElement('div');
bar.style.position = 'fixed';
bar.style.zIndex = 2000000;
bar.style.top = '200px';
bar.style.left = '200px';
bar.style.cursor = 'move';
bar.style.backgroundImage = imgsrc;
document.body.appendChild(bar);
bar.appendChild(img);

if (window.addEventListener) {
    console.log('addEventListener');
} else if (window.attachEvent) {
    console.log('attachEvent');
}

var mx, my;
var delta_x, delta_y;
var offset_x, offset_y;
var drag = false;

var mdown = function(event) {
    drag = true;
    offset_x = event.offsetX;
    offset_y = event.offsetY;
    //console.log(event.x);
    //console.log(event.offsetX);
};
bar.addEventListener('mousedown', mdown, false);

var mup = function(event) {
    drag = false;
};
bar.addEventListener('mouseup', mup, false);


var mmove = function(event) {
    if (!drag) return;
    bar.style.left = '' + (event.x - offset_x) + 'px';
    bar.style.top = '' + (event.y - offset_y) + 'px';
    //console.log('x:' + event.x + ', offx: ' + offset_x + ', left: ' + bar.style.left);
};
bar.addEventListener('mousemove', mmove, false);

