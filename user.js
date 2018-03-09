
function User (firstname, lastname) {
    this.firstName = firstname;
    this.lastName = lastname;
};
     
let add =  save = () => {
        const entry = document.createElement('li'),
              del = document.createElement('button'),
              delBtn = document.createTextNode("delete"),
              firstname = document.getElementById('firstname').value,
              lastname = document.getElementById('lastname').value,
              list = document.getElementById('demo'),
              val = ++this.val;
    
         if(firstname !== "" && lastname !== ""){
                const newUser = new User(firstname,lastname,this.val);
                entry.appendChild(document.createTextNode(newUser.firstName+"  "+newUser.lastName));
                list.appendChild(entry);
                del.appendChild(delBtn);
                list.appendChild(del);
                document.getElementById("firstname").value ="";
                document.getElementById("lastname").value ="";
             
                del.onclick = () => {
                        list.removeChild(entry);
                        list.removeChild(del) ;
                     };
            } 
              else  alert('Please enter name/username');
     };