    const list = document.getElementById('demo');

     save = () => {
            const firstname = document.getElementById('firstname').value;
            const lastname = document.getElementById('lastname').value;
         let user = {
             firstname: firstname,
             lastname: lastname
         }
            const entry = document.createElement('li');
         
         if(firstname !== "" && lastname !== ""){
                entry.appendChild(document.createTextNode(user.firstname+"  "+user.lastname));
                list.appendChild(entry);
                document.getElementById("firstname").value ="";
                document.getElementById("lastname").value ="";
            } else 
                alert('Please enter name/username');
        }