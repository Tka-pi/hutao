window.addEventListener('beforeunload', function(e) {
e.returnValue = '聖遺物がリセットされます。よろしいですか？';
}, false);

function add1(){
    var relic = document.getElementById("relic1");
    var row_num = relic.rows.length;
    var newrow  = relic.insertRow(row_num);
    for(var j=0; j<=5; j++){
        var cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}
function add2(){
    var relic = document.getElementById("relic2");
    var row_num = relic.rows.length;
    var newrow  = relic.insertRow(row_num);
    for(var j=0; j<=5; j++){
        var cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}
function add3(){
    var relic = document.getElementById("relic3");
    var row_num = relic.rows.length;
    var newrow  = relic.insertRow(row_num);
    for(var j=0; j<=5; j++){
        var cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}
function add4(){
    var relic = document.getElementById("relic4");
    var row_num = relic.rows.length;
    var newrow  = relic.insertRow(row_num);
    for(var j=0; j<=5; j++){
        var cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}
function add5(){
    var relic = document.getElementById("relic5");
    var row_num = relic.rows.length;
    var newrow  = relic.insertRow(row_num);
    for(var j=0; j<=5; j++){
        var cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}



function del1(){
    var relic = document.getElementById("relic1");
    var row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}
function del2(){
    var relic = document.getElementById("relic2");
    var row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}
function del3(){
    var relic = document.getElementById("relic3");
    var row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}
function del4(){
    var relic = document.getElementById("relic4");
    var row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}
function del5(){
    var relic = document.getElementById("relic5");
    var row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}



























function start(){
let relic1_matrix = [];
let allrows1 = relic1.querySelectorAll('tr');
allrows1.forEach(tr=>{
let allcells1 = tr.querySelectorAll('td');
let all =[];
allcells1.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
relic1_matrix.push(all);
})


let relic2_matrix = [];
let allrows2 = relic2.querySelectorAll('tr');
allrows2.forEach(tr=>{
let allcells2 = tr.querySelectorAll('td');
let all =[];
allcells2.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
relic2_matrix.push(all);
})


let relic3_matrix = [];
let allrows3 = relic3.querySelectorAll('tr');
allrows3.forEach(tr=>{
let allcells3 = tr.querySelectorAll('td');
let all =[];
allcells3.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
relic3_matrix.push(all);
})


let relic4_matrix = [];
let allrows4 = relic4.querySelectorAll('tr');
allrows4.forEach(tr=>{
let allcells4 = tr.querySelectorAll('td');
let all =[];
allcells4.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
relic4_matrix.push(all);
})


let relic5_matrix = [];
let allrows5 = relic5.querySelectorAll('tr');
allrows5.forEach(tr=>{
let allcells5 = tr.querySelectorAll('td');
let all =[];
allcells5.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
relic5_matrix.push(all);
})


var C1=relic1_matrix.length;
var C2=relic2_matrix.length;
var C3=relic3_matrix.length;
var C4=relic4_matrix.length;
var C5=relic5_matrix.length;
var Cx=C1*C2*C3*C4*C5;


function eval(){
    var totalATK=baseATK*(1+(ATKrate+u_ATKrate)*0.01)+ATK;
    var elemental_bonus=(1+25/9*(EM+u_EM)/(EM+u_EM+1400)+witch)*vape_or_melt;
    var non_burstATK=0;
    var burstATK=0;
    var skillATK=0;
    var heavy_non_burst=0;
    var heavy_burst=0;
    var heavy_skill=0;

    if (pattern_non_burst==1){
        non_burstATK = normal1+normal2+normal3;
        heavy_non_burst=heavy3;
    }else if(pattern_non_burst==2){
        non_burstATK =normal1+normal2+normal3 +normal1;
        if(stella==6){
            heavy_non_burst=heavy4;
        }else{
            heavy_non_burst=heavy3;
        }
    }

    if (pattern_burst==1){
        burstATK = normal1;
        heavy_burst=heavy3;
    }else if (pattern_burst==2){
        burstATK=normal1+normal2;
        if(stella==6){
            heavy_burst=heavy4;
        }else{
            heavy_burst=heavy3;
        }
    }else if (pattern_burst==3){
        burstATK=normal1+normal2+normal3;
        if(stella==6){
            heavy_burst=heavy4;
        }else{
            heavy_burst=heavy3;
        }
    }

    if (pattern_skill==1){
        skillATK=0;
    }else if(pattern_skill==2){
        skillATK=normal1;
    }else if (pattern_skill==3){
        skillATK=normal1*2;
    }

    if(stella==6){
        heavy_skill=heavy4;
    }else{
        heavy_skill=heavy3;
    }

    function prj(p,a){
        return a*(1-p)+a*p*elemental_bonus;
    }

    var model_1heavy=   (1-skill_frequency)*(1-burst_time)*(prj(possibility_normal,non_burstATK)*tanaka_normal*(1+simenawa+u_normal_and_heavy)+prj(possibility_heavy,heavy_non_burst)*(1+heavy_bonus)*(1+simenawa+u_normal_and_heavy))
                        +(1-skill_frequency)*burst_time*(prj(possibility_normal,burstATK)*tanaka_normal+prj(possibility_heavy,heavy_burst)*(1+heavy_bonus+burst_bonus)*(1+simenawa+u_normal_and_heavy)+prj(possibility_normal,burst_bom)/4*tanaka)
                        +skill_frequency*(prj(possibility_normal,skillATK)*tanaka_normal+prj(possibility_heavy,heavy_skill)*(1+heavy_bonus)*(1+simenawa+u_normal_and_heavy)+prj(possibility_heavy,skill)*tanaka);

    var total = totalATK*((1-(5+CRIT+u_CRIT)*0.01)*model_1heavy+(5+CRIT+u_CRIT)*(1+(50+CRITd+u_CRITd)*0.01)*(model_1heavy+80*(1+heavy_bonus+burst_bonus*burst_time)*(1+simenawa+u_normal_and_heavy)));
    return total;
}




let EV_index=[];
let EV_vector=[];



stella=Number($("#stella").val());
talent1=Number($("#talent1").val());
talent2=Number($("#talent2").val());
talent3=Number($("#talent3").val());
weapon_rank=Number($("#weapon_rank").val());
relic_type=Number($("#relic_type").val());

pattern_non_burst=Number($('input[name="non_burst"]:checked').val());
pattern_burst=Number($('input[name="burst"]:checked').val());
pattern_skill=Number($('input[name="skill"]:checked').val());

time=Number($("#time").val());
skill_frequency=Number($("#skill_frequency").val())*0.1;
burst_time=Number($("#burst_time").val());

vape_or_melt        =Number($("#vape_or_melt").val());
possibility_normal  =Number($("#possibility_normal").val());
possibility_heavy   =Number($("#possibility_heavy").val());

u_ATKrate           =Number($("#u_ATKrate").val());
u_CRIT              =Number($("#u_CRIT").val());
u_CRITd             =0;
u_EM                =Number($("#u_EM").val());
u_pyro              =Number($("#u_pyro").val());
u_normal_and_heavy  =Number($("#u_normal_and_heavy").val())*0.01;

if(stella>=2){
    u_CRIT+=10;
}



normal1=82+6*(talent1-6);
normal2=73+5*(talent1-6);
normal3=106+8*(talent1-6);
heavy3=198+12*(talent1-6);
heavy4=221+13*(talent1-6);
skill=237+17*(talent2-6);
burst_bom=255+18*(talent3-6);
burst_bonus=0.44+0.026*(talent3-6);


baseATK=240;
u_pyro+=24;
dodoko=0;
tanaka=1;
tanaka_normal=1;

if(stella==6){
    u_pyro+=20;
}else{
    u_pyro+=15;
}

if($("#weapon").val()=="genten"){
    u_CRIT+=33.1;
    baseATK+=608;
    if(time>=16){
        time=16;
    }
    u_pyro+=(6+2*weapon_rank)*time*0.25;
}
if($("#weapon").val()=="tenku"){
    u_ATKrate+=33.1;
    baseATK+=674;
    u_pyro+=9+3*weapon_rank;
}
if($("#weapon").val()=="rurou"){
    u_CRITd+=55.1;
    baseATK+=510;
}
if($("#weapon").val()=="dodoko"){
    u_ATKrate+=55.1+6+2*weapon_rank;
    baseATK+=454;
    dodoko=0.12+weapon_rank*0.4;
}
if($("#weapon").val()=="tanaka"){
    u_CRIT+=27.6;
    baseATK+=510;
    tanaka+=(15+5*weapon_rank)*0.01;
    tanaka_normal+=(15+5*weapon_rank)*0.01*2/3;
}
if($("#weapon").val()=="sairei"){
    u_EM+=221;
    baseATK+=454;
}









var index=0;

var alert_label=0;


for (var r1=0 ; r1<C1 ; r1++){
    for (var r2=0 ; r2<C2 ; r2++){
        for (var r3=0 ; r3<C3 ; r3++){
            for (var r4=0 ; r4<C4 ; r4++){
                for (var r5=0 ; r5<C5 ; r5++){

                    var series   =relic1_matrix[r1][0]*relic2_matrix[r2][0]*relic3_matrix[r3][0]*relic4_matrix[r4][0]*relic5_matrix[r5][0];
                    var ATK      =relic1_matrix[r1][1]+relic2_matrix[r2][1]+relic3_matrix[r3][1]+relic4_matrix[r4][1]+relic5_matrix[r5][1];
                    var ATKrate  =relic1_matrix[r1][2]+relic2_matrix[r2][2]+relic3_matrix[r3][2]+relic4_matrix[r4][2]+relic5_matrix[r5][2];
                    var CRIT     =relic1_matrix[r1][3]+relic2_matrix[r2][3]+relic3_matrix[r3][3]+relic4_matrix[r4][3]+relic5_matrix[r5][3];
                    var CRITd    =relic1_matrix[r1][4]+relic2_matrix[r2][4]+relic3_matrix[r3][4]+relic4_matrix[r4][4]+relic5_matrix[r5][4];
                    var EM       =relic1_matrix[r1][5]+relic2_matrix[r2][5]+relic3_matrix[r3][5]+relic4_matrix[r4][5]+relic5_matrix[r5][5];

                    var ev=0;

                    simenawa=0;
                    witch=0;
                    witch_pyro=0;
                    heavy_bonus=dodoko;


                    if(relic_type==1){
                        if(series%(13**2)==0){
                            EM+=80;
                        }if(series%(13**4)==0){
                            heavy_bonus+=0.35;
                        }if(series%(11**2)==0){
                            witch_pyro=15;
                        }if(series%(11**4)==0){
                            witch=0.15;
                            witch_pyro+=7.5;
                        }if(series%(7**2)==0||series%(2**2)==0){
                            ATKrate+=18;
                        }
                        ev=eval()*(1+(u_pyro+witch_pyro)*0.01);
                    }
                    if(relic_type==2){
                        if(series%(7**4)==0){
                            ATKrate+=18;
                            simenawa=0.5;
                            ev=eval()*(1+(u_pyro)*0.01);
                        }
                    }
                    if(relic_type==3){
                        ev=eval()*(1+(u_pyro)*0.01);
                    }
                    if(relic_type==4){
                        ev=eval();
                    }


                    

                    EV_index[index] = [r1,r2,r3,r4,r5];
                    EV_vector[index] = ev;
                    if(isNaN(ev)){
                        alert("数値を入力してください");
                        alert_label=1;
                    }
                    if(ev<0){
                        alert("数値が正しい範囲を超えています");
                        alert_label=1;
                    }
                    index++;
                }
            }
        }
    }
}



var max_index=0;
var max=-1;
for(var j=0 ; j<Cx ; j++){
    if(max<EV_vector[j]){
        max=EV_vector[j];
        max_index=j;
    }
}

if(max==0){
    alert_label=1;
    if(relic_type==2){
    alert("しめ縄4セットがありません");
    }
    if(relic_type==3){
    alert("火渡り4セットがありません");
    }
    if(relic_type==4){
    alert("逆飛び4セットがありません");
    }
}



var result = document.getElementById('result');



function relic_name(n){
    if(n==13){
        return "楽団";
    }
    if(n==11){
        return"火魔女";
    }
    if(n==7){
        return "しめ縄";
    }
    if(n==5){
        return "逆飛び";
    }
    if(n==3){
        return"火渡り";
    }
    if(n==2){
        return"剣闘士";
    }
    if(n==1){
        return "その他";
    }
}

var R1=EV_index[max_index][0];
var R2=EV_index[max_index][1];
var R3=EV_index[max_index][2];
var R4=EV_index[max_index][3];
var R5=EV_index[max_index][4];

if(alert_label==0){
    result.rows[0].cells[1].innerHTML=relic_name(relic1_matrix[R1][0]);
    result.rows[1].cells[1].innerHTML=relic_name(relic2_matrix[R2][0]);
    result.rows[2].cells[1].innerHTML=relic_name(relic3_matrix[R3][0]);
    result.rows[3].cells[1].innerHTML=relic_name(relic4_matrix[R4][0]);
    result.rows[4].cells[1].innerHTML=relic_name(relic5_matrix[R5][0]);

    for(var s=2;s<=6;s++){
    result.rows[0].cells[s].innerHTML=relic1_matrix[R1][s-1];
    result.rows[1].cells[s].innerHTML=relic2_matrix[R2][s-1];
    result.rows[2].cells[s].innerHTML=relic3_matrix[R3][s-1];
    result.rows[3].cells[s].innerHTML=relic4_matrix[R4][s-1];
    result.rows[4].cells[s].innerHTML=relic5_matrix[R5][s-1];
    }
}

console.log(relic1_matrix);
console.log(relic2_matrix);
console.log(relic3_matrix);
console.log(relic4_matrix);
console.log(relic5_matrix);
console.log(EV_index);
console.log(EV_vector);


}