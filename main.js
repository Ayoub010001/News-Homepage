var element = document.querySelector('.burgermenu');
var shadow = document.querySelector('.shadow');

var element_c = document.querySelector('.burgermenu_c');
var new_element = document.querySelector('.hidden_nav');

element.addEventListener('click',function () {
    element.style.display = 'none';
    shadow.style.display = 'block';
    document.body.style.overflow = 'hidden';
 });
 element_c.addEventListener('click',function () {
    element.style.display = '';
    shadow.style.display = 'none';
    document.body.style.overflow = 'scroll';
 });
