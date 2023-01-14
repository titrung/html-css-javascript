


var tab = document.querySelector('.tab-invisible');

var clickBnt = document.querySelector('.hamberger');

clickBnt.onclick = function(e) {
    tab.classList.toggle('tab-invisible')
 console.log(e.target);
 }

