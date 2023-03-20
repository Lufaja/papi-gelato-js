const week = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];
const week_reverse = week.reverse()
var namen
var len

function number_func(){
    namen = [];
    len = document.getElementById("number").value;
    console.log(document.getElementById("number").value)
    return false
};

function name_func(){
    console.log(len)
    namen.push(document.getElementById("names").value);
    document.getElementById("names").value = "";
    if (namen.length==len){
        document.getElementById("result").innerHTML = namen.join(", ");
        document.getElementById("result_reverse").innerHTML = namen.reverse().join(", ");
    };
};

document.getElementById("weekdagen").innerHTML = week.join(", ")
document.getElementById("werkdagen").innerHTML = week.slice(0,5).join(", ")
document.getElementById("weekenddagen").innerHTML = week.slice(5,7).join(", ")
document.getElementById("weekdagen_reverse").innerHTML = week_reverse.join(", ")
document.getElementById("werkdagen_reverse").innerHTML = week_reverse.slice(2,7).join(", ")
document.getElementById("weekenddagen_reverse").innerHTML = week_reverse.slice(0,2).join(", ")