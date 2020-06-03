document.getElementsByClassName('signin__link')[0].addEventListener("click", myFunction1);

function myFunction1() {
    document.getElementsByClassName('signin-main__div')[0].style.display = 'initial';
    document.getElementsByClassName('signup-main__div')[0].style.display = 'none';
    document.getElementsByClassName('signup')[0].style.borderBottom = 'none';
    document.getElementsByClassName('signin')[0].style.borderBottom = '1px solid orange';
}

document.getElementsByClassName('signin')[0].addEventListener("click", myFunction2);

function myFunction2() {
    document.getElementsByClassName('signin-main__div')[0].style.display = 'initial';
    document.getElementsByClassName('signup-main__div')[0].style.display = 'none';
    document.getElementsByClassName('signup')[0].style.borderBottom = 'none';
    document.getElementsByClassName('signin')[0].style.borderBottom = '1px solid orange';
}

document.getElementsByClassName('signup')[0].addEventListener("click", myFunction3);

function myFunction3() {
    document.getElementsByClassName('signup-main__div')[0].style.display = 'initial';
    document.getElementsByClassName('signin-main__div')[0].style.display = 'none';
    document.getElementsByClassName('signin')[0].style.borderBottom = 'none';
    document.getElementsByClassName('signup')[0].style.borderBottom = '1px solid orange';
}