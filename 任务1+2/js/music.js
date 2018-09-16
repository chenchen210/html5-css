window.onload=function(){
	var butonline=document.getElementById("one");
	var butlocate=document.getElementById("two");
	var btn1=document.getElementById("btn1");
	var btn2=document.getElementById("btn2");
	var music1=document.getElementById("music1");
	var music2=document.getElementById("music2");
	var content=document.getElementById("content");
	butlocate.onclick=function(){
		content.style.display="block";
	}
	btn1.onclick=function(){
		music1.play();
	}
	btn2.onclick=function(){
		music2.play();
	}
}