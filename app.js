let submit = document.querySelector(".btn");

let name = document.querySelector(".name");
let email = document.querySelector(".email");
let comment = document.querySelector(".comment");
let table = document.querySelector("tbody");
let role=document.querySelector("#role");
// const genders = document.getElementsByName('gender');

submit.addEventListener("click", () => {


    const genders = document.getElementsByName('gender');
    let gender = 'Not specified';
    
    genders.forEach(radio => {
      if (radio.checked) {
        gender = radio.value;
      }
    });
    

let tr = document.createElement("tr");

tr.innerHTML=`
<td>${name.value}</td>
<td>${email.value}</td>
<td>${comment.value}</td>
<td>${role.value}</td>
<td>${gender}</td>
`
   
   table.appendChild(tr);
   name.value="";
   email.value="";
   comment.value="";
});

