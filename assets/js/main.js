
/*let top = '50%';
let bottom = '50%';
let left = '50%';
let right = '50%';*/

window.alert = function(message, timeout=null){
    let top = 20;
    let left = 65;
    const alert = document.createElement('div');
    const alertButtom = document.createElement('buttom');

    alertButtom.innerHTML = `<button class='btn'>OK</button>`;

    alert.classList.add('alert');
    alert.setAttribute
    ('style',
    'position:fixed;'+
    'top:'+top+'%;'+
    'left:'+left+'%;'+
    'padding:20px;'+
    'border-radius:10px;'+
    'box-shadow: 0 10px 5px 0 #00000022;');
    alert.innerHTML = `<span><p>${message}</p></span>`;

    alert.appendChild(alertButtom);
    alertButtom.addEventListener('click', (e)=>{
        alert.remove();
    })

    document.body.appendChild(alert);
}