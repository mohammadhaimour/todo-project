



var nameUser = prompt("what is your name?");


var genderUser = prompt(" What's your gender? Male or Female");
if (`${genderUser.toLocaleLowerCase()}` == "male" || `${genderUser.toLocaleLowerCase()}` == "female") {
    var ageUser = prompt(" How old are you?");
    if (ageUser > 0) {
        var showMs = confirm("Do you want to see the welcome message?");
        if (showMs == true) {
            var ss;
            `${genderUser.toLocaleLowerCase()}` == "male" ? ss = "Mr" : ss = "Ms"

            alert(` Welcome ${ss} ${nameUser} `);

        }
        else { }




    }



    else {
        alert("age  is the wrong value");
    }








}
else {
    alert("Gender is the wrong value");


}



