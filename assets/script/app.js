var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4){
        counter = 1;
    }
}, 5000);

const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector ('.mobilenav');

menu_btn.addEventListener('click', function() {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});
