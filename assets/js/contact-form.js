

const form = document.querySelector("form");
const name = document.querySelector('#name');
let email = document.querySelector('#email');
let subject = document.querySelector('#subject');
let message = document.querySelector('#message');
const send = document.querySelector('.btn');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const data = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    };

    alert(data)
});
