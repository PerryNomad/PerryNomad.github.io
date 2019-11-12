document.addEventListener('DOMContentLoaded', function () {
    particleground(document.getElementById('particles'), {
        dotColor: '#f3f4f7',
        lineColor: '#ec1c24'
    });
    var intro = document.getElementById('intro');
    intro.style.marginTop = -intro.offsetHeight / 2 + 'px';

}, false);