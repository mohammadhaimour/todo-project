for (var i = 0; i = 1; i--) {
    var nameUser = prompt("what is your name?");

    if (nameUser == null) {
        alert("you must enter your name !");
    }

    else {
        break;
    }


}
// console.log(nameUser);


for (var i = 0; i = 1; i--) {
    var genderUser = prompt(" What's your gender? Male or Female");
    if (genderUser != null) {
        if (`${genderUser.toLocaleLowerCase()}` == "male" || `${genderUser.toLocaleLowerCase()}` == "female") {
            break;
        }

        else {
            alert("Gender is the wrong value");
        }
    }
    else {
        alert("you must enter the  Gender ");
    }

}
// console.log(genderUser);

var ss;
`${genderUser.toLocaleLowerCase()}` == "male" ? ss = "Mr" : ss = "Ms"
// console.log(ss);


for (var i = 0; i = 1; i--) {
    var ageUser = prompt(" How old are you?");
    if (ageUser > 0) {
        break;
    }
    else if (ageUser == null) {
        alert("you must enter your age !");
    }

    else {
        alert("age  is the wrong value");
    }


}
// console.log(ageUser);


var showMs = confirm("Do you want to see the welcome message?");
// console.log(showMs);

if (showMs == true) {
    alert(` Welcome ${ss} ${nameUser} `);

}
else { }








var arrayAsnwer = [];

arrayAsnwer.push(answer_Q1());
arrayAsnwer.push(answer_Q2());
arrayAsnwer.push(answer_Q3());

printAnswer(arrayAsnwer);



function printAnswer(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);

    }
}



function answer_Q1() {
    let playFottball = prompt("Do you like to play football? Yes/No");


    if (playFottball == null || playFottball == "") {
        playFottball = "invalid";
        return playFottball;
    }
    else if (`${playFottball.toLocaleLowerCase()}` == "yes" || `${playFottball.toLocaleLowerCase()}` == "no") {
        return playFottball;
    }
    else {
        alert("Wrong in your answer, the answer must be yes/no!!");


    }


}


function answer_Q2() {
    let getUp = prompt("Do you get up early? Yes/No");


    if (getUp == null || getUp == "") {
        getUp = "invalid";
        return getUp;
    }
    else if (`${getUp.toLocaleLowerCase()}` == "yes" || `${getUp.toLocaleLowerCase()}` == "no") {
        return getUp;
    }
    else {
        alert("Wrong in your answer, the answer must be yes/no!!");


    }


}


function answer_Q3() {
    let sleep = prompt("Do you sleep early? Yes / No");


    if (sleep == null || sleep == "") {
        sleep = "invalid";
        return sleep;
    }
    else if (`${sleep.toLocaleLowerCase()}` == "yes" || `${sleep.toLocaleLowerCase()}` == "no") {
        return sleep;
    }
    else {
        alert("Wrong in your answer, the answer must be yes/no!!");


    }


}