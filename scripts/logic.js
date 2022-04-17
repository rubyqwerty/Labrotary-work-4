/*
⊂_ヽ
　 ＼＼ Λ＿＿Λ
　　 ＼(　ˇωˇ)　
　　　 　⌒ヽ
　　　/ 　 へ＼
　　 /　　/　＼＼
　　 ﾚ　ノ　　 ヽ_つ
　　/　/
　 /　/|
　(　(ヽ
　|　|、＼
　| 丿 ＼ ⌒)    
　| |　　) /
`ノ )　　Lﾉ
(_／
*/
class task{
    answer;
    question;
    answer_html;
    userans;
    number;
    r = [];
    VARIANTANSWER1 = [];
    
    constructor(_answer, _question , _answer_html , usans, _number_task){
        this.answer = _answer;
        this.question = _question;
        this.answer_html = _answer_html;
        this.userans = usans;
        this.number = _number_task;
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
var CORRECTANS = [["Высокая концентрация полезного вещества и приемлемые условия его залегания"],[true , false , false, false],[false , true , false, false],[false , false , true, true], [false , false , true, false],
    [false , false , false, true],[false , false , false, true],[true , true , false, false],[false , false , true, false]];
var VARIANTANSWER = [
    ["Большое количество рабочих и техники", "Карта полезных ископаемых и производство","Высокая концентрация полезного вещества и приемлемые условия его залегания","Большая удача"],
    ["В Северном полушарии","У меня под подушкой","В зоне умеренного климата","В районе экватора"],
    ["ОАЭ","Саудовской Аравии","Канаде","Мне"],
    ["Страны Африки","Россия","Высокоиндустриальные страны","Я"],
    ["классификация природных ресурсов","полезные ископаемые","ресурсообеспеченность","земельный фонд"],
    ["Полиметаллические руды","Ядерная энергия","Морская вода","Лесные ресурсы"],
    ["Алжир, Египет","Таиланд, Малайзия","Замбия, Зимбабве","Норвегия, Бразилия"],
    ["Захоронение токсичных веществ в глубоководных впадинах","Увеличение размеров китобойного промысла","Перевод ТЭС на газ","Использование отходов в качестве вторичного сырья"],
    ["ножницы, ложки, вилки","кирпич, бензин, известняк","нефть, глина, торф","палка, кофе, стакан"]
];
function sh(arr1, arr2) {
	let RES1 = [];
        let RES2 = [];
        RES1.push("Высокая концентрация полезного вещества и приемлемые условия его залегания");
        RES2.push(["Большое количество рабочих и техники", "Карта полезных ископаемых и производство","Высокая концентрация полезного вещества и приемлемые условия его залегания","Большая удача",
    "В Северном полушарии","У меня под подушкой","В зоне умеренного климата","В районе экватора"]);
        for (var i = 1; i < 9; i++){
        let result1 = [];
	let result2 = [];
	while (arr1[i].length > 0) {
		let random = getRandomInt(0, arr1[i].length - 1);
		let elem1 = arr1[i].splice(random, 1)[0];
		result1.push(elem1);
                
                let elem2 = arr2[i].splice(random, 1)[0];
		result2.push(elem2);
	}
        RES1.push(result1);
        RES2.push(result2);
        }
        
	return [RES1 , RES2];
}
if (localStorage.flag2 == 1){
    var ggg = sh(CORRECTANS , VARIANTANSWER);
    CORRECTANS = ggg[0];
    VARIANTANSWER = ggg[1];
}
var fuck1 = `
<select name='edin1' id = "ans1_1" class="select-css">
            <option value='${VARIANTANSWER[0][0]}' selected>${VARIANTANSWER[0][0]}</option>
            <option value='${VARIANTANSWER[0][1]}' selected>${VARIANTANSWER[0][1]}</option>
            <option value='${VARIANTANSWER[0][2]}'>         ${VARIANTANSWER[0][2]}</option>
            <option value='${VARIANTANSWER[0][3]}'>         ${VARIANTANSWER[0][3]}</option>
</select>`;
var fuck2 = `
<p ><input id = 'ans2_1' name="contact" value = "${VARIANTANSWER[1][0]}"  class="checkbox-other" type = "radio" ><ek>${VARIANTANSWER[1][0]}</ek></input></p>
<p><input  id = 'ans2_2' name="contact" value = "${VARIANTANSWER[1][1]}" class="checkbox-other"  type = "radio" class="checkbox-other"><ek>${VARIANTANSWER[1][1]}</ek></input></p>
<p><input  id = 'ans2_3' name="contact" value = "${VARIANTANSWER[1][2]}" type = "radio" class="checkbox-other"><ek>${VARIANTANSWER[1][2]}</ek></input></p>
<p><input  id = 'ans2_4' name="contact" value = "${VARIANTANSWER[1][3]}" type = "radio" class="checkbox-other"><ek>${VARIANTANSWER[1][3]}</ek></input></p>
 `;
var fuck3 = `
<p ><input id = 'ans3_1' name="contact" value = "${VARIANTANSWER[2][0]}"class="checkbox-other" type = "radio" ><ek>${VARIANTANSWER[2][0]}</ek></input></p>
<p><input  id = 'ans3_2' name="contact" value = "${VARIANTANSWER[2][1]}"class="checkbox-other"  type = "radio" class="checkbox-other"><ek>${VARIANTANSWER[2][1]}</ek></input></p>
<p><input  id = 'ans3_3' name="contact" value = "${VARIANTANSWER[2][2]}"type = "radio" class="checkbox-other"><ek>${VARIANTANSWER[2][2]}</ek></input></p>
<p><input  id = 'ans3_4' name="contact" value = "${VARIANTANSWER[2][3]}"type = "radio" class="checkbox-other"><ek>${VARIANTANSWER[2][3]}</ek></input></p>
`;
var fuck4 = `
<p ><input id = 'ans4_1' name="contact" value = "${VARIANTANSWER[3][0]}" class="checkbox-other" type = "checkbox" ><ek>${VARIANTANSWER[3][0]}</ek></input></p>
<p><input  id = 'ans4_2' name="contact" value = "${VARIANTANSWER[3][1]}" class="checkbox-other"  type = "checkbox" class="checkbox-other"><ek>${VARIANTANSWER[3][1]}</ek></input></p>
<p><input  id = 'ans4_3' name="contact" value = "${VARIANTANSWER[3][2]}" type = "checkbox" class="checkbox-other"><ek>${VARIANTANSWER[3][2]}</ek></input></p>
<p><input  id = 'ans4_4' name="contact" value = "${VARIANTANSWER[3][3]}" type = "checkbox" class="checkbox-other"><ek>${VARIANTANSWER[3][3]}</ek></input></p>
`;

var fuck5 = `
<p ><input id = 'ans5_1' class="checkbox-other" value = "${VARIANTANSWER[4][0]}" type = "checkbox" ><ek>${VARIANTANSWER[4][0]}</ek></input></p>
<p><input  id = 'ans5_2' class="checkbox-other" value = "${VARIANTANSWER[4][1]}"type = "checkbox" class="checkbox-other"><ek>${VARIANTANSWER[4][1]}</ek></input></p>
<p><input  id = 'ans5_3' type = "checkbox"      value = "${VARIANTANSWER[4][2]}"class="checkbox-other"><ek>${VARIANTANSWER[4][2]}</ek></input></p>
<p><input  id = 'ans5_4' type = "checkbox"      value = "${VARIANTANSWER[4][3]}" class="checkbox-other"><ek>${VARIANTANSWER[4][3]}</ek></input></p>
`;

var fuck6 = `
<p ><input id = 'ans6_1' class="checkbox-other" value = "${VARIANTANSWER[5][0]}" type = "checkbox" ><ek>${VARIANTANSWER[5][0]}</ek></input></p>
<p><input  id = 'ans6_2' class="checkbox-other" value = "${VARIANTANSWER[5][1]}" type = "checkbox" class="checkbox-other"><ek>${VARIANTANSWER[5][1]}</ek></input></p>
<p><input  id = 'ans6_3' type = "checkbox"      value = "${VARIANTANSWER[5][2]}" class="checkbox-other"><ek>${VARIANTANSWER[5][2]}</ek></input></p>
<p><input  id = 'ans6_4' type = "checkbox"      value = "${VARIANTANSWER[5][3]}" class="checkbox-other"><ek>${VARIANTANSWER[5][3]}</ek></input></p>
`;

var fuck7 = `
<p ><input id = 'ans7_1' class="checkbox-other" value = "${VARIANTANSWER[6][0]}"type = "checkbox" ><ek>${VARIANTANSWER[6][0]}</ek></input></p>
<p><input  id = 'ans7_2' class="checkbox-other" value = "${VARIANTANSWER[6][1]}" type = "checkbox" class="checkbox-other"><ek>${VARIANTANSWER[6][1]}</ek></input></p>
<p><input  id = 'ans7_3' type = "checkbox"      value = "${VARIANTANSWER[6][2]}" class="checkbox-other"><ek>${VARIANTANSWER[6][2]}</ek></input></p>
<p><input  id = 'ans7_4' type = "checkbox"      value = "${VARIANTANSWER[6][3]}" class="checkbox-other"><ek>${VARIANTANSWER[6][3]}</ek></input></p>
`;
var fuck8 = `
<p ><input id = 'ans8_1' class="checkbox-other" value = "${VARIANTANSWER[7][0]}" type = "checkbox" ><ek>${VARIANTANSWER[7][0]}</ek></input></p>
<p><input  id = 'ans8_2' class="checkbox-other" value = "${VARIANTANSWER[7][1]}"  type = "checkbox"><ek>${VARIANTANSWER[7][1]}</ek></input></p>
<p><input  id = 'ans8_3' type = "checkbox"      value = "${VARIANTANSWER[7][2]}" class="checkbox-other"><ek>${VARIANTANSWER[7][2]}</ek></input></p>
<p><input  id = 'ans8_4' type = "checkbox"      value = "${VARIANTANSWER[7][3]}" class="checkbox-other"><ek>${VARIANTANSWER[7][3]}</ek></input></p>
`;

var fuck9 = `
<p ><input id = 'ans9_1' name="contact" value = "${VARIANTANSWER[8][0]}"class="checkbox-other" type = "radio" ><ek>${VARIANTANSWER[8][0]}</ek></input></p>
<p><input  id = 'ans9_2' name="contact" value = "${VARIANTANSWER[8][1]}"class="checkbox-other"  type = "radio"><ek>${VARIANTANSWER[8][1]}</ek></input></p>
<p><input  id = 'ans9_3' name="contact" value = "${VARIANTANSWER[8][2]}"type = "radio" class="checkbox-other"><ek>${VARIANTANSWER[8][2]}</ek></input></p>
<p><input  id = 'ans9_4' name="contact" value = "${VARIANTANSWER[8][3]}" type = "radio" class="checkbox-other"><ek>${VARIANTANSWER[8][3]}</ek></input></p>
`;
var fuck10 = `
<p class = "pp"><h3>Введите ответ</h3><br><input class="textbox" id = 'ans10_1'  maxlength="10" placeholder="Answer"></input></p>
`;
let tasks = [[fuck1],[fuck2],[fuck3],[fuck4],[fuck5],[fuck6],[fuck7],[fuck8],[fuck9],[fuck10]];

var AcceptANS = [
    CORRECTANS[0],
    CORRECTANS[1],
    CORRECTANS[2],
    CORRECTANS[3],
    CORRECTANS[4],
    CORRECTANS[5],
    CORRECTANS[6],
    CORRECTANS[7],
    CORRECTANS[8],
    'алмаз'
    ];

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
    ''
];

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle (ar1, ar2, ar3, ar4, ar5, ar6){
    let result1 = [];
    let result2 = [];
    let result3 = [];
    let result4 = [];
    let result5 = [];
    let result6 = [];
    while (ar1.length > 0) {
        let random = getRandomInt(0, ar1.length - 1);
        
	let elem1 = ar1.splice(random, 1)[0];
	result1.push(elem1);
        
        let elem2 = ar2.splice(random, 1)[0];
	result2.push(elem2);
        
        let elem3 = ar3.splice(random, 1)[0];
	result3.push(elem3);
        
        let elem4 = ar4.splice(random, 1)[0];
	result4.push(elem4);
        
        let elem5 = ar5.splice(random, 1)[0];
	result5.push(elem5);
        
        let elem6 = ar6.splice(random, 1)[0];
	result6.push(elem6);
        
	}
	return [result1 , result2 , result3 , result4 , result5 , result6] ;
}

var numberans = [1,2,3,4,5,6,7,8,9,10];

let otvet_for_table_epta = [
    ["Высокая концентрация полезного вещества и приемлемые условия его залегания"],
    ["В Северном полушарии"],
    ["Саудовской Аравии"],
    ["Высокоиндустриальные страны, Я"],
    ["ресурсообеспеченность"],
    ["Лесные ресурсы"],
    ["Норвегия, Бразилия"],
    ["Увеличение размеров китобойного промысла, Захоронение токсичных веществ в глубоководных впадинах"],
    ["нефть, глина, торф"],
    ["алмаз"]
    ];
    
if (localStorage.flag1 == 1){
    let fff = shuffle(AcceptANS,QUSTION,tasks,DEFANS,numberans,otvet_for_table_epta);
    AcceptANS = fff[0];
    QUSTION = fff[1];
    tasks = fff[2];
    DEFANS = fff[3];
    numberans = fff[4];
    otvet_for_table_epta = fff[5];
}

var t1 = new task( AcceptANS[0] ,  QUSTION[0] , tasks[0],DEFANS[0] , numberans[0]);
var t2 = new task( AcceptANS[1] ,  QUSTION[1] , tasks[1],DEFANS[1],numberans[1]);
var t3 = new task( AcceptANS[2] ,  QUSTION[2] , tasks[2],DEFANS[2] ,numberans[2]);
var t4 = new task( AcceptANS[3] ,  QUSTION[3] , tasks[3],DEFANS[3] ,numberans[3]);
var t5 = new task( AcceptANS[4] ,  QUSTION[4] , tasks[4],DEFANS[4] ,numberans[4]);
var t6 = new task( AcceptANS[5] ,  QUSTION[5] , tasks[5],DEFANS[5] ,numberans[5]);
var t7 = new task( AcceptANS[6] ,  QUSTION[6] , tasks[6],DEFANS[6] ,numberans[6]);
var t8 = new task( AcceptANS[7] ,  QUSTION[7] , tasks[7],DEFANS[7] ,numberans[7]);
var t9 = new task( AcceptANS[8] ,  QUSTION[8] , tasks[8],DEFANS[8] ,numberans[8]);
var t10 = new task( AcceptANS[9] ,  QUSTION[9] , tasks[9],DEFANS[9] ,numberans[9]);

function printrememberans(num , ans){
    document.getElementById("ans"+num+"_1").checked = ans[0];
    document.getElementById("ans"+ num+"_2").checked = ans[1];
    document.getElementById("ans"+ num+"_3").checked = ans[2];
    document.getElementById("ans"+ num+"_4").checked = ans[3];
     
}
function ANSWERTEXT(num){
   var t=[];
   if (document.getElementById("ans"+ num+"_1").checked)
    t.push(document.getElementById("ans"+ num+"_1").value);

   if (document.getElementById("ans"+ num+"_2").checked)
    t.push(document.getElementById("ans"+ num+"_2").value);

   if (document.getElementById("ans"+ num+"_3").checked)
    t.push(document.getElementById("ans"+ num+"_3").value);

   if (document.getElementById("ans"+ num+"_4").checked)
    t.push(document.getElementById("ans"+ num+"_4").value);

   return t;
}
function remember_text_answer(){
    try {
        if (t1.number == 1)
            t1.r = [document.getElementById("ans1_1").value];
        else if (t1.number == 10)
            t1.r = [document.getElementById("ans10_1").value];
        else
            t1.r = ANSWERTEXT(t1.number);} catch(err){};

    try {
        if (t2.number == 1)
            t2.r = [document.getElementById("ans1_1").value];
        else if (t2.number == 10)
            t2.r = [document.getElementById("ans10_1").value];
        else
        t2.r = ANSWERTEXT(t2.number);} catch(err){};

    try {
        if (t3.number == 1)
            t3.r = [document.getElementById("ans1_1").value];
        else if (t3.number == 10)
            t3.r = [document.getElementById("ans10_1").value];
        else
        t3.r = ANSWERTEXT(t3.number);} catch(err){};

    try {
        if (t4.number == 1)
            t4.r = [document.getElementById("ans1_1").value];
        else if (t4.number == 10)
            t4.r = [document.getElementById("ans10_1").value];
        else
        t4.r = ANSWERTEXT(t4.number);} catch(err){};

    try {
        if (t5.number == 1)
            t5.r = [document.getElementById("ans1_1").value];
        else if (t5.number == 10)
            t5.r = [document.getElementById("ans10_1").value];
        else
        t5.r = ANSWERTEXT(t5.number);} catch(err){};

    try {
        if (t6.number == 1)
            t6.r = [document.getElementById("ans1_1").value];
        else if (t6.number == 10)
            t6.r = [document.getElementById("ans10_1").value];
        else
        t6.r = ANSWERTEXT(t6.number);} catch(err){};

    try {
        if (t7.number == 1)
            t7.r = [document.getElementById("ans1_1").value];
        else if (t7.number == 10)
            t7.r = [document.getElementById("ans10_1").value];
        else
        t7.r = ANSWERTEXT(t7.number);} catch(err){};

    try {
        if (t8.number == 1)
            t8.r = [document.getElementById("ans1_1").value];
        else if (t8.number == 10)
            t8.r = [document.getElementById("ans10_1").value];
        else
        t8.r = ANSWERTEXT(t8.number);} catch(err){};

    try {
        if (t9.number == 1)
            t9.r = [document.getElementById("ans1_1").value];
        else if (t9.number == 10)
            t9.r = [document.getElementById("ans10_1").value];
        else
        t9.r = ANSWERTEXT(t9.number);} catch(err){};

    try {
        if (t10.number == 1)
            t10.r = [document.getElementById("ans1_1").value];
        else if (t10.number == 10)
            t10.r = [document.getElementById("ans10_1").value];
        else
        t10.r = ANSWERTEXT(t10.number);} catch(err){};
}
function remember(num , ans ){
    ans[0] = document.getElementById("ans"+ num+"_1").checked;
    ans[1] = document.getElementById("ans"+ num+"_2").checked;
    ans[2] = document.getElementById("ans"+ num+"_3").checked;
    ans[3] = document.getElementById("ans"+ num+"_4").checked;

    return ans;
}

function REMEMBERALL(){
    
    try {
        if (t1.number == 1){
            t1.userans = document.getElementById("ans1_1").value;
            
        }
        else if (t1.number == 10)
            t1.userans = document.getElementById("ans10_1").value;
        else 
            t1.userans = remember(t1.number , t1.userans);
    }catch(err){};
    
    try {
        if (t2.number == 1)
            t2.userans = document.getElementById("ans1_1").value;
        else if (t2.number == 10)
            t2.userans = document.getElementById("ans10_1").value;
        else 
            t2.userans = remember(t2.number , t2.userans);
    }catch(err){};
    
    try {
        if (t3.number == 1)
            t3.userans = document.getElementById("ans1_1").value;
        else if (t3.number == 10)
            t3.userans = document.getElementById("ans10_1").value;
        else 
            t3.userans = remember(t3.number , t3.userans);
    }catch(err){};
    
    try {
        if (t4.number == 1)
            t4.userans = document.getElementById("ans1_1").value;
        else if (t4.number == 10)
            t4.userans = document.getElementById("ans10_1").value;
        else 
            t4.userans = remember(t4.number , t4.userans);
    }catch(err){};
    
    try {
        if (t5.number == 1)
            t5.userans = document.getElementById("ans1_1").value;
        else if (t5.number == 10)
            t5.userans = document.getElementById("ans10_1").value;
        else 
            t5.userans = remember(t5.number , t5.userans);
    }catch(err){};
    
    try {
        if (t6.number == 1)
            t6.userans = document.getElementById("ans1_1").value;
        else if (t6.number == 10)
            t6.userans = document.getElementById("ans10_1").value;
        else 
            t6.userans = remember(t6.number , t6.userans);
    }catch(err){};
    
    try {
        if (t7.number == 1)
            t7.userans = document.getElementById("ans1_1").value;
        else if (t7.number == 10)
            t7.userans = document.getElementById("ans10_1").value;
        else 
            t7.userans = remember(t7.number , t7.userans);
    }catch(err){};
    
    try {
        if (t8.number == 1)
            t8.userans = document.getElementById("ans1_1").value;
        else if (t8.number == 10)
            t8.userans = document.getElementById("ans10_1").value;
        else 
            t8.userans = remember(t8.number , t8.userans);
    }catch(err){};
    
    try {
        if (t9.number == 1)
            t9.userans = document.getElementById("ans1_1").value;
        else if (t9.number == 10)
            t9.userans = document.getElementById("ans10_1").value;
        else 
            t9.userans = remember(t9.number , t9.userans);
    }catch(err){};
    
    try {
        if (t10.number == 1)
            t10.userans = document.getElementById("ans1_1").value;
        else if (t10.number == 10)
            t10.userans = document.getElementById("ans10_1").value;
        else 
            t10.userans = remember(t10.number , t10.userans);
    }catch(err){};
    if (t1.userans[0] || t1.userans[1] ||t1.userans[2] ||t1.userans[3]){
         document.getElementById("bt1").style.backgroundColor = "#b8ffe1";
         
     }
    else
         document.getElementById("bt1").style.color = "#707981";
     
    if (t2.userans[0] || t2.userans[1] ||t2.userans[2] ||t2.userans[3]){
         document.getElementById("bt2").style.backgroundColor = "#b8ffe1";
     }
    else
         document.getElementById("bt2").style.color = "#707981";
     
    if (t3.userans[0] || t3.userans[1] ||t3.userans[2] ||t3.userans[3])
         document.getElementById("bt3").style.backgroundColor = "#b8ffe1";
    else
         document.getElementById("bt3").style.color = "#707981";
     
    if (t4.userans[0] || t4.userans[1] ||t4.userans[2] ||t4.userans[3])
         document.getElementById("bt4").style.backgroundColor = "#b8ffe1";
    else
         document.getElementById("bt4").style.color = "#707981";
     
    if (t5.userans[0] || t5.userans[1] ||t5.userans[2] ||t5.userans[3])
         document.getElementById("bt5").style.backgroundColor = "#b8ffe1";
    else
         document.getElementById("bt5").style.color = "#707981";
     
    if (t6.userans[0] || t6.userans[1] ||t6.userans[2] ||t6.userans[3])
         document.getElementById("bt6").style.backgroundColor = "#b8ffe1";
    else
         document.getElementById("bt6").style.color = "#707981";
     
    if (t7.userans[0] || t7.userans[1] ||t7.userans[2] ||t7.userans[3])
         document.getElementById("bt7").style.backgroundColor = "#b8ffe1";
    else
         document.getElementById("bt7").style.color = "#707981";
     
    if (t8.userans[0] || t8.userans[1] ||t8.userans[2] ||t8.userans[3])
         document.getElementById("bt8").style.backgroundColor = "#b8ffe1";
    else
         document.getElementById("bt8").style.color = "#707981";
     
    if (t9.userans[0] || t9.userans[1] ||t9.userans[2] ||t9.userans[3])
         document.getElementById("bt9").style.backgroundColor = "#b8ffe1";
    else
         document.getElementById("bt9").style.color = "#707981";
     
    if (t10.userans[0] || t10.userans[1] ||t10.userans[2] ||t10.userans[3])
         document.getElementById("bt10").style.backgroundColor = "#b8ffe1";
    else
         document.getElementById("bt10").style.color = "#707981";
}

function buttontask1(){
    
    remember_text_answer();
    REMEMBERALL();
    t1.printTask();
    
    if (t1.number == 1)
            document.getElementById("ans1_1").value = t1.userans;
    else if (t1.number == 10)
        document.getElementById("ans10_1").value = t1.userans;
    else
        printrememberans(t1.number , t1.userans);
    
    document.getElementById("bt1").style.backgroundColor = "#C7C7C7";
    document.getElementById("leg").innerHTML = `<h3>Задание №1</h3>`;
    document.getElementById("title").innerHTML = `Вопрос №1`;
}

function buttontask2(){
    remember_text_answer();
    REMEMBERALL();
    t2.printTask();
    if (t2.number == 1)
            document.getElementById("ans1_1").value = t2.userans;
    else if (t2.number == 10)
        document.getElementById("ans10_1").value = t2.userans;
    else
        printrememberans(t2.number , t2.userans);
    document.getElementById("bt2").style.backgroundColor = "#C7C7C7";
    document.getElementById("leg").innerHTML = `<h3>Задание №2</h3>`;
    document.getElementById("title").innerHTML = `Вопрос №2`;
}

function buttontask3(){
    remember_text_answer();
    REMEMBERALL();
    t3.printTask();
    if (t3.number == 1)
            document.getElementById("ans1_1").value = t3.userans;
    else if (t3.number == 10)
        document.getElementById("ans10_1").value = t3.userans;
    else
        printrememberans(t3.number , t3.userans);
    document.getElementById("bt3").style.backgroundColor = "#C7C7C7";
    document.getElementById("leg").innerHTML = `<h3>Задание №3</h3>`;
    document.getElementById("title").innerHTML = `Вопрос №3`;
}

function buttontask4(){
    remember_text_answer();
    REMEMBERALL();
    t4.printTask();
    if (t4.number == 1)
            document.getElementById("ans1_1").value = t4.userans;
    else if (t4.number == 10)
        document.getElementById("ans10_1").value = t4.userans;
    else
    printrememberans(t4.number ,t4.userans);
    document.getElementById("bt4").style.backgroundColor = "#C7C7C7";
    document.getElementById("leg").innerHTML = `<h3>Задание №4</h3>`;
    document.getElementById("title").innerHTML = `Вопрос №4`;
}

function buttontask5(){
    remember_text_answer();
    REMEMBERALL();
    t5.printTask();
    if (t5.number == 1)
            document.getElementById("ans1_1").value = t5.userans;
    else if (t5.number == 10)
        document.getElementById("ans10_1").value = t5.userans;
    else
    printrememberans(t5.number , t5.userans);
    document.getElementById("bt5").style.backgroundColor = "#C7C7C7";
    document.getElementById("leg").innerHTML = `<h3>Задание №5</h3>`;
    document.getElementById("title").innerHTML = `Вопрос №5`;
}

function buttontask6(){
    remember_text_answer();
    REMEMBERALL();
    t6.printTask();
    if (t6.number == 1)
            document.getElementById("ans1_1").value = t6.userans;
    else if (t6.number == 10)
        document.getElementById("ans10_1").value = t6.userans;
    else
    printrememberans(t6.number,t6.userans);
    document.getElementById("bt6").style.backgroundColor = "#C7C7C7";
    document.getElementById("leg").innerHTML = `<h3>Задание №6</h3>`;
    document.getElementById("title").innerHTML = `Вопрос №6`;
}

function buttontask7(){
    remember_text_answer();
    REMEMBERALL();
    t7.printTask();
    if (t7.number == 1)
            document.getElementById("ans1_1").value = t7.userans;
    else if (t7.number == 10)
        document.getElementById("ans10_1").value = t7.userans;
    else
    printrememberans(t7.number , t7.userans);
    document.getElementById("bt7").style.backgroundColor = "#C7C7C7";
    document.getElementById("leg").innerHTML = `<h3>Задание №7</h3>`;
    document.getElementById("title").innerHTML = `Вопрос №7`;
}

function buttontask8(){
    remember_text_answer();
    REMEMBERALL();
    t8.printTask();
    if (t8.number == 1)
            document.getElementById("ans1_1").value = t8.userans;
    else if (t8.number == 10)
        document.getElementById("ans10_1").value = t8.userans;
    else
    printrememberans(t8.number , t8.userans);
    document.getElementById("bt8").style.backgroundColor = "#C7C7C7";
    document.getElementById("leg").innerHTML = `<h3>Задание №8</h3>`;
    document.getElementById("title").innerHTML = `Вопрос №8`;
}

function buttontask9(){
    remember_text_answer();
    REMEMBERALL();
    t9.printTask();
    if (t9.number == 1)
            document.getElementById("ans1_1").value = t9.userans;
    else if (t9.number == 10)
        document.getElementById("ans10_1").value = t9.userans;
    else
        printrememberans(t9.number  , t9.userans);
    document.getElementById("bt9").style.backgroundColor = "#C7C7C7";
    document.getElementById("leg").innerHTML = `<h3>Задание №9</h3>`;
    document.getElementById("title").innerHTML = `Вопрос №9`;
}

function buttontask10(){
    remember_text_answer();
    REMEMBERALL();
    t10.printTask();
    if (t10.number == 1)
            document.getElementById("ans1_1").value = t10.userans;
    else if (t10.number == 10)
        document.getElementById("ans10_1").value = t10.userans;
    else
        printrememberans(t10.number  , t10.userans);
    document.getElementById("bt10").style.backgroundColor = "#C7C7C7";
    document.getElementById("leg").innerHTML = `<h3>Задание №10</h3>`;
    document.getElementById("title").innerHTML = `Вопрос №10`;
}

function lastper(){
    countball = 0;
    let ty = [];
    for (var i = 0; i < 10; i++)
        ty.push(0);
    REMEMBERALL();
    remember_text_answer();
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
    localStorage.otvet1 = otvet_for_table_epta[0];
    localStorage.otvet2 = otvet_for_table_epta[1];
    localStorage.otvet3 = otvet_for_table_epta[2]; 
    localStorage.otvet4 = otvet_for_table_epta[3];
    localStorage.otvet5 = otvet_for_table_epta[4];
    localStorage.otvet6 = otvet_for_table_epta[5];
    localStorage.otvet7 = otvet_for_table_epta[6];
    localStorage.otvet8 = otvet_for_table_epta[7];
    localStorage.otvet9 = otvet_for_table_epta[8];
    localStorage.otvet10 = otvet_for_table_epta[9];
    
    localStorage.ty1 = ty[0];
    localStorage.ty2 = ty[1];
    localStorage.ty3 = ty[2];
    localStorage.ty4 = ty[3];
    localStorage.ty5 = ty[4];
    localStorage.ty6 = ty[5];
    localStorage.ty7 = ty[6];
    localStorage.ty8 = ty[7];
    localStorage.ty9 = ty[8];
    localStorage.ty10 = ty[9];
    
    localStorage.answertxt1 = t1.r;
    localStorage.answertxt_numbertask1 = t1.number;
    
    localStorage.answertxt2 = t2.r;
    localStorage.answertxt_numbertask2 = t2.number;
    
    localStorage.answertxt3 = t3.r;
    localStorage.answertxt_numbertask3 = t3.number;
    
    localStorage.answertxt4 = t4.r;
    localStorage.answertxt_numbertask4 = t4.number;
    
    localStorage.answertxt5 = t5.r;
    localStorage.answertxt_numbertask5 = t5.number;
    
    localStorage.answertxt6 = t6.r;
    localStorage.answertxt_numbertask6 = t6.number;
    
    localStorage.answertxt7 = t7.r;
    localStorage.answertxt_numbertask7 = t7.number;
    
    localStorage.answertxt8 = t8.r;
    localStorage.answertxt_numbertask8 = t8.number;
    
    localStorage.answertxt9 = t9.r;
    localStorage.answertxt_numbertask9 = t9.number;
    
    localStorage.answertxt10 = t10.r;
    localStorage.answertxt_numbertask10 = t10.number;
    window.location = "result.html";
}

