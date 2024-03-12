document.addEventListener('DOMContentLoaded', ()=> {
    async function btn_clk(){
        {
            response = await fetch("https://jsonplaceholder.typicode.com/users");

            if (!response.ok){
                alert("API call was unsuccessful please try again later")
            }

            data = await response.json();
            const userInformation = data.map(user => {
                return {
                    username: user.username,
                    email: user.email
                };
            });
            const username = document.getElementById("name").value;
            const password = document.getElementById("pass").value;
            len = userInformation.length;
            let correct = false;
            for (let i =0; i < len; i++){
                correct = checker(userInformation[i], username, password);
                if (correct){
                    break;
                }
            }

            if (document.getElementById("Messagebox")){
                tex = document.getElementById("message")
            }
            else{
                div = insertion();
                tex = div.lastChild;
            }

            if (correct) {
                tex.textContent = "Login successful!";
            } else {
                tex.textContent = "Incorrect Username or Password. Please try again!";
            }

            
        } 
        // catch(error){
        //     alert("There was an error in parsing the data")
        // }
    };

    function checker(data, username, password){
        if (data.username === username && data.email === password){
            return true;
        }
        else{
            return false;
        }
    } 

    function insertion(){
        var newdiv = document.createElement("div");
        newdiv.id = "Messagebox";

        newdiv.style.border = "2px solid black";
        newdiv.style.backgroundColor = "#f9f9f9";
        newdiv.style.padding = "10px";
        newdiv.style.margin ="20px";

        var newpara = document.createElement("p");
        newpara.id="message";
        newdiv.appendChild(newpara);
        document.getElementById("main").appendChild(newdiv);
        return newdiv

    }
    
    
    
    document.getElementById("login").addEventListener('click', btn_clk);
})
