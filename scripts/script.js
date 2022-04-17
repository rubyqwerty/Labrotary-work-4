var flag1 = 0;
var flag2 = 0;
function perehod(){
    f = document.getElementById("time").value;
    nm = document.getElementById("name").value;
    if (nm == '')
        alert("У вас нет имени?");
    else {
    var w = Number.isNaN(Number(f));
    var r = f.match(/^[a-zA-Zа-яА-Я]/);
    var r1 = f.match(/^-/);
    if (r)
    {
        alert ("Вы ввели не число! Зачем вы это сделали? Вам известно, что время не считается в буквах?");
    }
    else if (r1){
        alert("Как по вашему время можеть быть отрицательным?");
    }
    else if (f == 0){
        alert("Вам не хватит этого времени!");
    }
    
    else {
        localStorage.flag1 = flag1;
        localStorage.flag2 = flag2;
        localStorage.infos= f;
        localStorage.name = nm;
        alert("Удачи " + nm + "!");
        window.location = "z1.html";
    }
    }
}

function shuffle_answer(){
    flag1 = 1;
    localStorage.flag1 = flag1;
    document.getElementById("bb2").innerHTML = "Ответы перемешаны";
}

function shuffle_tasks(){
    flag2 = 1;
    document.getElementById("bb1").innerHTML = "Вопросы перемешаны";
    localStorage.flag2 = flag2;
}
