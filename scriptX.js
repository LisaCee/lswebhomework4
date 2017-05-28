document.body.style.backgroundColor = "red";

document.getElementsByTagName("H1")[0].style.backgroundColor = "blue";
document.body.style.fontFamily  = "sans-serif";
document.getElementById("nickname").innerHTML  = "'Lis";
document.getElementById("favorites").innerHTML = "Prince, Reading, and Puppies";
document.getElementById("hometown").innerHTML = "Kent, WA";

// Extra Credit
var q = document.getElementsByTagName("LI");
for (var x = 0; x < q.length; x++){
	q[x].className = "listitem";
}
for (var y = 0; y < q.length; y++){
	q[y].style.color = "red";
}

var me = document.createElement("IMG");
me.setAttribute("src", "https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/10552463_10201465113829845_3845412366212633363_n.jpg?oh=a4df93185ad7bb4fa1ba1d8c47ada22e&oe=59BBB58C");
document.body.appendChild(me);
