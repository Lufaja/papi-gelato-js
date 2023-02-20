const week = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];
const week_reverse = week.reverse()

document.getElementById("weekdagen").innerHTML = week.join(", ")
document.getElementById("werkdagen").innerHTML = week.slice(0,5).join(", ")
document.getElementById("weekenddagen").innerHTML = week.slice(5,7).join(", ")
document.getElementById("weekdagen_reverse").innerHTML = week_reverse.join(", ")
document.getElementById("werkdagen_reverse").innerHTML = week_reverse.slice(2,7).join(", ")
document.getElementById("weekenddagen_reverse").innerHTML = week_reverse.slice(0,2).join(", ")