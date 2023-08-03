
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
    `   position: fixed;
        margin-left: auto;
        z-index:6;
        padding:20px;
        display:flex;
        top:${top}%;
        left:${left}%;
        min-width:30rem;
        max-width:40rem;
        flex-direction:column;
        font-size:1.5rem;
        color:#FFFFFF;
        background:#1f1f1f;
        border: .2rem solid #${borderMessageColor};
        border-radius:4px;
        box-shadow: -.2rem .3rem rgba(255, 255, 255, 0.1);
        transform: translateX(-50%);
        text-transform:none;
    `);

    alertButtom.setAttribute('style',`
    border: 1px solid #${borderMessageColor};
    background: rgba(255, 255, 255, 0.1);
    color: #FFF;
    font-size: .9rem;
    margin-left:90%;
    border-radius: 100rem;
    max-width:37px;
    padding: 6px;
    cursor:pointer;
    `);
    alert.innerHTML = `
    <h2 style="margin-bottom:.3rem;font-size:.9rem;text-transform:capitalize;font-weight:bold;color:#c4c4c4;text-decoration: underline #999;">${type}</h2>
    <span style="font-size:.8rem;margin-left:2%;"><p>${message}</p></span>
    `;

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