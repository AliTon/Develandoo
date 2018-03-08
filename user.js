
function User (firstname, lastname) {
    this.firstName = firstname;
    this.lastName = lastname;
};
     
save = () => {
        const entry = document.createElement('li');
        const firstname = document.getElementById('firstname').value;
        const lastname = document.getElementById('lastname').value;
        const list = document.getElementById('demo');

    
         if(firstname !== "" && lastname !== ""){
                const newUser = new User(firstname,lastname);
                entry.appendChild(document.createTextNode(newUser.firstName+"  "+newUser.lastName));
                list.appendChild(entry);
                document.getElementById("firstname").value ="";
                document.getElementById("lastname").value ="";
            } else 
                alert('Please enter name/username');
     };