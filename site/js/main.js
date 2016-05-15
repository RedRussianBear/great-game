
//Init function
window.onload = function(){
	//retrieve map for drawing
	var mapobj = document.getElementById("map");
	map = mapobj.getContext("2d");
	
	//set default active module
	active = document.getElementById("main");
	active.style.display = "block";
	
	//set methods for view-changing
	var links = document.getElementById("navbar").getElementsByTagName("a");
	for(var i = 0; i < links.length; i++)
		links[i].onclick = function() { setView(this.getAttribute("href").substring(1)); };
}

//Change view function
function setView(view){
	active.style.display = "none";
	active = document.getElementById(view);
	active.style.display = "block";
}

function loadInventory(username){
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			document.getElementById("inventory-menu").innerHTML = xhttp.responseText;
		}
	};
	
	xhttp.open("GET", "inventory.php?user=" + username, true);
	xhttp.send();
}