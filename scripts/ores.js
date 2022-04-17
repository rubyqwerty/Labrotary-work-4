 function doresult(){
    console.log(localStorage.resball);
    var tt = localStorage.resball;
    var txtans = [
       ,
        localStorage.answertxt2,
        localStorage.answertxt3,
        localStorage.answertxt4,
        localStorage.answertxt5,
        localStorage.answertxt6,
        localStorage.answertxt7,
        localStorage.answertxt8,
        localStorage.answertxt9,
        localStorage.answertxt10
    ];
    var txtnum = [
        [ Number(localStorage.answertxt_numbertask1), localStorage.answertxt1],
        [ Number(localStorage.answertxt_numbertask2), localStorage.answertxt2],
        [ Number(localStorage.answertxt_numbertask3), localStorage.answertxt3],
        [ Number(localStorage.answertxt_numbertask4), localStorage.answertxt4],
        [ Number(localStorage.answertxt_numbertask5), localStorage.answertxt5],
        [ Number(localStorage.answertxt_numbertask6), localStorage.answertxt6],
        [ Number(localStorage.answertxt_numbertask7), localStorage.answertxt7],
        [ Number(localStorage.answertxt_numbertask8), localStorage.answertxt8],
        [ Number(localStorage.answertxt_numbertask9), localStorage.answertxt9],
        [ Number(localStorage.answertxt_numbertask10), localStorage.answertxt10]
        
    ];
 
    console.log(txtnum);
    otvet = [
        localStorage.ty1,
        localStorage.ty2,
        localStorage.ty3,
        localStorage.ty4,
        localStorage.ty5,
        localStorage.ty6,
        localStorage.ty7,
        localStorage.ty8,
        localStorage.ty9,
        localStorage.ty10
    ];
    
    otvet_for_table_epta = [
        localStorage.otvet1 , 
        localStorage.otvet2 , 
        localStorage.otvet3 , 
        localStorage.otvet4 , 
        localStorage.otvet5 , 
        localStorage.otvet6 , 
        localStorage.otvet7 , 
        localStorage.otvet8 , 
        localStorage.otvet9 , 
        localStorage.otvet10 ];
    console.log(otvet_for_table_epta);
    var cc = 1;
   for (var i = 0; i < 10; i++)
   document.getElementById("table").innerHTML += 
`<td class = "td`+otvet[i]+`"><em1 >`+(cc++)+`</em1 ></td> 
<td class = "td`+otvet[i]+`"><em1 >`+ txtnum[i][1]+`</em1 ></td>
<td class = "td`+otvet[i]+`"><em1 >`+ otvet_for_table_epta[i]+`</em1 ></td>
<td class = "td`+otvet[i]+`"><em1 >`+otvet[i]*10+`</em1 ></td>`;
   document.getElementById("table").innerHTML +=  '<td><em1 ></em1 ></td> <td><em1 ></em1 ></td><td><em1 ></em1 ></td><td><em1 >Итого: '+tt*10+'/100</em1 ></td>';
 }
 