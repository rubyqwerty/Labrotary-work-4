class task{
    answer;
    question;
    answer_html;
    userans;
    
    constructor(_answer, _question , _answer_html , usans){
        this.answer = _answer;
        this.question = _question;
        this.answer_html = _answer_html;
        this.userans = usans;
    }
    
    printTask(){
        document.getElementById("variant_answer").innerHTML =this.answer_html;
        document.getElementById("question").value = this.question;
    }
    
    check(){
        var a = this.answer;
        var b = this.userans;
        var count = 0;
        for (var i = 0; i < a.length; ++i)
            if (a[i]==b[i]) count++;
        if (count == a.length) return true;
        else return false;
    }
    
}

var tasks = [
    `
<select name="edin1" id = "ans1_1" class="select-css">
            <option value="Большое количество рабочих и техники" selected>Большое количество рабочих и техники</option>
            <option value="Карта полезных ископаемых и производство" selected>Карта полезных ископаемых и производство</option>
            <option value="Высокая концентрация полезного вещества и приемлемые условия его залегания">Высокая концентрация полезного вещества и приемлемые условия его залегания</option>
            <option value="Большая удача">Большая удача</option>
</select>`,

`
<p ><input id = "ans2_1" name="contact" class="checkbox-other" type = "radio" ><ek>В Северном полушарии</ek></input></p>
<p><input  id = "ans2_2" name="contact" class="checkbox-other"  type = "radio" class="checkbox-other"><ek>У меня под подушкой</ek></input></p>
<p><input  id = "ans2_3" name="contact"type = "radio" class="checkbox-other"><ek>В зоне умеренного климата</ek></input></p>
<p><input  id = "ans2_4" name="contact"type = "radio" class="checkbox-other"><ek>В районе экватора</ek></input></p>
 `,
`
<p ><input id = "ans3_1" name="contact" class="checkbox-other" type = "radio" ><ek>ОАЭ</ek></input></p>
<p><input  id = "ans3_2" name="contact" class="checkbox-other"  type = "radio" class="checkbox-other"><ek>Саудовской Аравии</ek></input></p>
<p><input  id = "ans3_3" name="contact"type = "radio" class="checkbox-other"><ek>Канаде</ek></input></p>
<p><input  id = "ans3_4" name="contact"type = "radio" class="checkbox-other"><ek>Мне</ek></input></p>
`,
`
<p ><input id = "ans4_1" name="contact" class="checkbox-other" type = "checkbox" ><ek>Страны Африки</ek></input></p>
<p><input  id = "ans4_2" name="contact" class="checkbox-other"  type = "checkbox" class="checkbox-other"><ek>Россия</ek></input></p>
<p><input  id = "ans4_3" name="contact"type = "checkbox" class="checkbox-other"><ek>Высокоиндустриальные страны</ek></input></p>
<p><input  id = "ans4_4" name="contact"type = "checkbox" class="checkbox-other"><ek>Я</ek></input></p>
`,
`
<p ><input id = "ans5_1" class="checkbox-other" type = "checkbox" ><ek>классификация природных ресурсов</ek></input></p>
<p><input  id = "ans5_2" class="checkbox-other"  type = "checkbox" class="checkbox-other"><ek>полезные ископаемые</ek></input></p>
<p><input  id = "ans5_3" type = "checkbox" class="checkbox-other"><ek>ресурсообеспеченность</ek></input></p>
<p><input  id = "ans5_4" type = "checkbox" class="checkbox-other"><ek>земельный фонд</ek></input></p>
`,
`
<p ><input id = "ans6_1" class="checkbox-other" type = "checkbox" ><ek>Полиметаллические руды</ek></input></p>
<p><input  id = "ans6_2" class="checkbox-other"  type = "checkbox" class="checkbox-other"><ek>Ядерная энергия</ek></input></p>
<p><input  id = "ans6_3" type = "checkbox" class="checkbox-other"><ek>Морская вода</ek></input></p>
<p><input  id = "ans6_4" type = "checkbox" class="checkbox-other"><ek>Лесные ресурсы</ek></input></p>
`,
`
<p ><input id = "ans7_1" class="checkbox-other" type = "checkbox" ><ek>Алжир, Египет</ek></input></p>
<p><input  id = "ans7_2" class="checkbox-other"  type = "checkbox" class="checkbox-other"><ek>Таиланд, Малайзия</ek></input></p>
<p><input  id = "ans7_3" type = "checkbox" class="checkbox-other"><ek>Замбия, Зимбабве</ek></input></p>
<p><input  id = "ans7_4" type = "checkbox" class="checkbox-other"><ek>Норвегия, Бразилия</ek></input></p>
`,
`
<p ><input id = "ans8_1" class="checkbox-other" type = "checkbox" ><ek>Захоронение токсичных веществ в глубоководных впадинах</ek></input></p>
<p><input  id = "ans8_2" class="checkbox-other"  type = "checkbox"><ek>Увеличение размеров китобойного промысла</ek></input></p>
<p><input  id = "ans8_3" type = "checkbox" class="checkbox-other"><ek>Перевод ТЭС на газ</ek></input></p>
<p><input  id = "ans8_4" type = "checkbox" class="checkbox-other"><ek>Использование отходов в качестве вторичного сырья</ek></input></p>
`,
`
<p ><input id = "ans9_1" name="contact" class="checkbox-other" type = "radio" ><ek>ножницы, ложки, вилки</ek></input></p>
<p><input  id = "ans9_2" name="contact" class="checkbox-other"  type = "radio"><ek>кирпич, бензин, известняк</ek></input></p>
<p><input  id = "ans9_3" name="contact" type = "radio" class="checkbox-other"><ek>нефть, глина, торф</ek></input></p>
<p><input  id = "ans9_4" name="contact" type = "radio" class="checkbox-other"><ek>палка, кофе, стакан</ek></input></p>
`,
`
<p class = "pp"><h3>Введите ответ</h3><br><input class="textbox" id = "ans10"  maxlength="10" placeholder="Answer"></input></p>
`
];
var AcceptANS = [
    ["Высокая концентрация полезного вещества и приемлемые условия его залегания"],
    [true , false , false, false],
    [false , true , false, false],
    [false , false , true, true],
    [false , false , true, false],
    [false , false , false, true],
    [false , false , false, true],
    [true , true , false, false],
    [false , false , true, false],
    'алмаз'
    ];
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
var QUSTION = [
    "Что необходимо для эффективной добычи полезных ископаемых?",
    "Где находятся основные запасы нефтегазового сырья?",
    "Кому принадлежит мировой лидерство по добыче нефти?",
    "Кто является основным потребителем цветных металлов?",
    "Соотношение между величиной природных ресурсов и размерами их использования называют..." ,
    "Примером исчерпаемых возобновимых природных ресурсов являются...",
    "Наибольшим гидроэнергетическим потенциалом обладают страны:",
     "Выберите два примера нерационального природопользования",
     "Что из перечисленного  относится  к полезным  ископаемым?",
     "Самый твердый минерал"
];
var DEFANS =[
    [false , false, false,false],
    [false , false, false,false],
    [false , false, false,false],
    [false , false, false,false],
    [false , false, false,false],
    [false , false, false,false],
    [false , false, false,false],
    [false , false, false,false],
    [false , false, false,false],
    '       '
];
var ttt1 = getRandomInt(10);
var t1 = new task( AcceptANS[ttt1] ,  QUSTION[ttt1] , tasks[ttt1],DEFANS[ttt1]);
AcceptANS.splice(ttt1 , 1); 
QUSTION.splice(ttt1 , 1);
tasks.splice(ttt1 , 1);
DEFANS.splice(ttt1 , 1);

ttt1 = getRandomInt(9);
var t2 = new task( AcceptANS[ttt1] ,  QUSTION[ttt1] , tasks[ttt1],DEFANS[ttt1]);
AcceptANS.splice(ttt1 , 1); 
QUSTION.splice(ttt1 , 1);
tasks.splice(ttt1 , 1);
DEFANS.splice(ttt1 , 1);

ttt1 = getRandomInt(8);
var t3 = new task( AcceptANS[ttt1] ,  QUSTION[ttt1] , tasks[ttt1],DEFANS[ttt1]);
AcceptANS.splice(ttt1 , 1); 
QUSTION.splice(ttt1 , 1);
tasks.splice(ttt1 , 1);
DEFANS.splice(ttt1 , 1);

ttt1 = getRandomInt(7);
var t4 = new task( AcceptANS[ttt1] ,  QUSTION[ttt1] , tasks[ttt1],DEFANS[ttt1]);
AcceptANS.splice(ttt1 , 1); 
QUSTION.splice(ttt1 , 1);
tasks.splice(ttt1 , 1);
DEFANS.splice(ttt1 , 1);

ttt1 = getRandomInt(6);
var t5 = new task( AcceptANS[ttt1] ,  QUSTION[ttt1] , tasks[ttt1],DEFANS[ttt1]);
AcceptANS.splice(ttt1 , 1); 
QUSTION.splice(ttt1 , 1);
tasks.splice(ttt1 , 1);
DEFANS.splice(ttt1 , 1);

ttt1 = getRandomInt(5);
var t6 = new task( AcceptANS[ttt1] ,  QUSTION[ttt1] , tasks[ttt1],DEFANS[ttt1]);
AcceptANS.splice(ttt1 , 1); 
QUSTION.splice(ttt1 , 1);
tasks.splice(ttt1 , 1);
DEFANS.splice(ttt1 , 1);

ttt1 = getRandomInt(4);
var t7 = new task( AcceptANS[ttt1] ,  QUSTION[ttt1] , tasks[ttt1],DEFANS[ttt1]);
AcceptANS.splice(ttt1 , 1); 
QUSTION.splice(ttt1 , 1);
tasks.splice(ttt1 , 1);
DEFANS.splice(ttt1 , 1);

ttt1 = getRandomInt(3);
var t8 = new task( AcceptANS[ttt1] ,  QUSTION[ttt1] , tasks[ttt1],DEFANS[ttt1]);
AcceptANS.splice(ttt1 , 1); 
QUSTION.splice(ttt1 , 1);
tasks.splice(ttt1 , 1);
DEFANS.splice(ttt1 , 1);

ttt1 = getRandomInt(2);
var t9 = new task( AcceptANS[ttt1] ,  QUSTION[ttt1] , tasks[ttt1],DEFANS[ttt1]);
AcceptANS.splice(ttt1 , 1); 
QUSTION.splice(ttt1 , 1);
tasks.splice(ttt1 , 1);
DEFANS.splice(ttt1 , 1);

ttt1 = getRandomInt(1);
var t10 = new task( AcceptANS[ttt1] ,  QUSTION[ttt1] , tasks[ttt1],DEFANS[ttt1]);
AcceptANS.splice(ttt1 , 1); 
QUSTION.splice(ttt1 , 1);
tasks.splice(ttt1 , 1);
DEFANS.splice(ttt1 , 1);

function printrememberans(num , ans){
    document.getElementById("ans"+num+"_1").checked = ans[0];
    document.getElementById("ans"+ num+"_2").checked = ans[1];
    document.getElementById("ans"+ num+"_3").checked = ans[2];
    document.getElementById("ans"+ num+"_4").checked = ans[3];
}

function remember(num , ans){
    ans[0] = document.getElementById("ans"+ num+"_1").checked;
    ans[1] = document.getElementById("ans"+ num+"_2").checked;
    ans[2] = document.getElementById("ans"+ num+"_3").checked;
    ans[3] = document.getElementById("ans"+ num+"_4").checked;
    return ans;
}

function REMEMBERALL(){
    try {t1.userans = document.getElementById("ans1_1").value;}catch(err){};
    try {t2.userans = remember(2 , t2.userans);}catch(err){};
    try {t3.userans = remember(3 , t3.userans);}catch(err){};
    try {t4.userans = remember(4 , t4.userans);}catch(err){};
    try {t5.userans = remember(5 , t5.userans);}catch(err){};
    try {t6.userans = remember(6 , t6.userans);}catch(err){};
    try {t7.userans = remember(7 , t7.userans);}catch(err){};
    try {t8.userans = remember(8 , t8.userans);}catch(err){};
    try {t9.userans = remember(9 , t9.userans);}catch(err){};
    try {t10.userans = document.getElementById("ans10").value;}catch(err){};
}

function buttontask1(){
    REMEMBERALL();
    t1.printTask();
    document.getElementById("ans1_1").value = t1.userans;
    document.getElementById("bt1").style.backgroundColor = "#C7C7C7";
    document.getElementById("leg").innerHTML = `<h3>Задание №1</h3>`;
    document.getElementById("title").innerHTML = `Вопрос №1`;
}

function buttontask2(){
    REMEMBERALL();
    t2.printTask();
    printrememberans(2 , t2.userans);
    document.getElementById("bt2").style.backgroundColor = "#C7C7C7";
    document.getElementById("leg").innerHTML = `<h3>Задание №2</h3>`;
    document.getElementById("title").innerHTML = `Вопрос №2`;
}

function buttontask3(){
    REMEMBERALL();
    t3.printTask();
    printrememberans(3 ,t3.userans);
    document.getElementById("bt3").style.backgroundColor = "#C7C7C7";
    document.getElementById("leg").innerHTML = `<h3>Задание №3</h3>`;
    document.getElementById("title").innerHTML = `Вопрос №3`;
}

function buttontask4(){
    REMEMBERALL();
    t4.printTask();
    printrememberans(4 ,t4.userans);
    document.getElementById("bt4").style.backgroundColor = "#C7C7C7";
    document.getElementById("leg").innerHTML = `<h3>Задание №4</h3>`;
    document.getElementById("title").innerHTML = `Вопрос №4`;
}

function buttontask5(){
    REMEMBERALL();
    t5.printTask();
    printrememberans(5 , t5.userans);
    document.getElementById("bt5").style.backgroundColor = "#C7C7C7";
    document.getElementById("leg").innerHTML = `<h3>Задание №5</h3>`;
    document.getElementById("title").innerHTML = `Вопрос №5`;
}

function buttontask6(){
    REMEMBERALL();
    t6.printTask();
    printrememberans(6 ,t6.userans);
    document.getElementById("bt6").style.backgroundColor = "#C7C7C7";
    document.getElementById("leg").innerHTML = `<h3>Задание №6</h3>`;
    document.getElementById("title").innerHTML = `Вопрос №6`;
}

function buttontask7(){
    REMEMBERALL();
    t7.printTask();
    printrememberans(7 , t7.userans);
    document.getElementById("bt7").style.backgroundColor = "#C7C7C7";
    document.getElementById("leg").innerHTML = `<h3>Задание №7</h3>`;
    document.getElementById("title").innerHTML = `Вопрос №7`;
}

function buttontask8(){
    REMEMBERALL();
    t8.printTask();
    printrememberans(8 , t8.userans);
    document.getElementById("bt8").style.backgroundColor = "#C7C7C7";
    document.getElementById("leg").innerHTML = `<h3>Задание №8</h3>`;
    document.getElementById("title").innerHTML = `Вопрос №8`;
}

function buttontask9(){
    REMEMBERALL();
    t9.printTask();
    printrememberans(9 , t9.userans);
    document.getElementById("bt9").style.backgroundColor = "#C7C7C7";
    document.getElementById("leg").innerHTML = `<h3>Задание №9</h3>`;
    document.getElementById("title").innerHTML = `Вопрос №9`;
}

function buttontask10(){
    REMEMBERALL();
    t10.printTask();
    document.getElementById("ans10").value = t10.userans;
    document.getElementById("bt10").style.backgroundColor = "#C7C7C7";
    document.getElementById("leg").innerHTML = `<h3>Задание №10</h3>`;
    document.getElementById("title").innerHTML = `Вопрос №10`;
}

function lastper(){
    countball = 0;
    let ty = [0,0,0,0,0,0,0,0,0,0];
    REMEMBERALL();
    if (t1.check()){countball++; ty[0]=1;}
    if (t2.check()){countball++; ty[1]=1;}
    if (t3.check()){countball++; ty[2]=1;}
    if (t4.check()){countball++; ty[3]=1;}
    if (t5.check()){countball++; ty[4]=1;}
    if (t6.check()){countball++; ty[5]=1;}
    if (t7.check()){countball++; ty[6]=1;}
    if (t8.check()){countball++; ty[7]=1;}
    if (t9.check()){countball++; ty[8]=1;}
    if (t10.check()){countball++;ty[9]=1;}
    localStorage.resball = countball;
    localStorage.itog = ty;
    window.location = "result.html";
}

function loadnum1(){
    document.getElementById("ans1_1").value = "Большое количество рабочих и техники";
}
