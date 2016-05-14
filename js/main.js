
//Init function
window.onload = function(){
	active = document.getElementById("main");
	active.style.display = "block";
	
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