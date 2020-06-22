// select button element 
const btns = document.querySelectorAll('.btn');
// select screen element
const screen = document.querySelector('.screen');
// select equal button
const equalBtn = document.querySelector('.btn-equal');
// select clear button
const clearBtn = document.querySelector('.btn-clear');

/*  Brief description on how this JS works: 
    for loop: so when the user clicks on the button, the attribute that holds the number will be collected.
    next whatever number is stored in the screen will be added with another number.
    this for loop will allow the user to keep adding the numbers until the user clicks on the euql button. */
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        let number = btns[i].getAttribute('data-num'); // grabbing the number attribute. Grabbing the data that is on the screen
        screen.value += number // whatever the value that is stored in the screen will be added with number
    })
}

// Pressing the equal button will take whatever is in the screen value and apply eval function.
equalBtn.addEventListener('click', function () {
    // alert if the screen value is empty the user will get the alert message.
    if (screen.value === '') {
        alert('input is empty')
    } else {
        let value = eval(screen.value)
        // eval function will evaluate whatever is on the screen.
        //For e.g. if the screen values 2+2 the eval function will evaluate and give value 4 
        screen.value = value
    }

});

// when click on the clear button the value stored in the screeen will be cleared.
clearBtn.addEventListener('click', function () {
    screen.value = '';
});