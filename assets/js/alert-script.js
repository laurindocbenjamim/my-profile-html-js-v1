
window.alert = function(message, timeout=null,type=null){
    let top = 22;
    let left = 50;
    let borderMessageColor = '0f52d8';

    if(type !=null & type==='success'){
        borderMessageColor = '09b70c';
    }else if(type !=null & type==='error'){
        borderMessageColor = 'd10a0a';
    }else if(type !=null & type==='warning'){
        borderMessageColor = 'dd8f27';
    }else if(type !=null & type==='info'){
        borderMessageColor = '0f52d8';
    }

    const alert = document.createElement('div');
    const alertButtom = document.createElement('button');

    alertButtom.innerHTML = `OK`;

    alert.classList.add('alert');
    alert.setAttribute
    ('style',
    `   position:fixed;
        top:${top}%;
        left:${left}%;
        min-width:30rem;
        max-width:50rem;
        padding:20px;
        display:flex;
        flex-direction:column;
        font-size:1.5rem;
        color:#252526;
        background:#fff;
        border: .2rem solid #${borderMessageColor};
        border-radius:4px;
        box-shadow: 0 2px 1px 0 #00000022;
        transform: translateX(-50%);
        text-transform:none;
    `);

    alertButtom.setAttribute('style',`
    border: 1px solid #${borderMessageColor};
    background: white;
    border-radius: 2px;
    max-width:50px;
    padding: 5px;
    cursor:pointer;
    `);
    alert.innerHTML = `<span><p>${message}</p></span>`;

    alert.appendChild(alertButtom);
    alertButtom.addEventListener('click', (e)=>{
        alert.remove();
    });
  
    if(timeout != null){
        setTimeout(()=>{
            alert.remove();
        }, Number(timeout))
    }

    document.body.appendChild(alert);
}