let m1 = 0;
let m2 = 0;
let timer = null;

let pageHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
let scrollAvail = pageHeight - windowHeight;

document.onscroll = function() {
	m1 = document.documentElement.scrollTop || document.body.scrollTop;
	let p = (m1 / scrollAvail) * 100;
    document.getElementById("progress-left").style.width = p + '%';
	document.getElementById("progress-right").style.width = (100 - p) + '%';
	
    clearTimeout(timer)
    timer = setTimeout("Judge()", 1000);
	document.getElementById("navbar-main").style.transform = "translateY(0%)";
}

function Judge() {
   m2 = document.documentElement.scrollTop || document.body.scrollTop;
   if(m2 == m1 && m2 != 0) {
	   document.getElementById("navbar-main").style.transform = "translateY(-105%)";
   }
}
