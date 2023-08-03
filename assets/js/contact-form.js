

const eventForm = document.querySelector("form");
const Iname = document.querySelector('#name');
let Iemail = document.querySelector('#email');
let Isubject = document.querySelector('#subject');
let Imessage = document.querySelector('#message');

let register = (thisForm,data)=>{
    fetch("https://www.iledmd.pt/api/v1/send",{
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data)
    }).then((e)=>{
        
        console.log(e)
        if(e.status == 200){
            //clearFields();
            thisForm.reset(); 
            alert("Message sent successfull.", 6000, 'success');
        }else{
            alert("Error: "+ e.status, 6000, 'Error');
        }
    }).catch((e)=>{
        alert("Failed to send message.", null, 'error');
    }).finally(()=>{
        alert(e, null, 'warning');
    });
}

const clearFields = () =>{
    Iname.value = "",
    Iemail.value = "",
    Isubject.value = "",
    Imessage.value = ""
}

eventForm.addEventListener('submit', function(e){
    e.preventDefault(); 
    let thisForm = this;
    const data = {
        name: Iname.value,
        email: Iemail.value,
        subject: Isubject.value,
        message: Imessage.value
    };

    if(data.name == ""){
        alert("The name field is required.", null, 'information');
    }else if(data.email == ""){
        alert("The email field is required.", null, 'information');
    }else if(data.subject == ""){
        alert("The subject field is required.", null, 'information');
    }else if(data.message == ""){
        alert("The message field is required.", null, 'information');
    }else{
        register(thisForm,data);
    }
});
