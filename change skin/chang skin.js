window.onload=function(){
	var div1=document.getElementById("div1");
	var div2=document.getElementById("div2");
	var div3=document.getElementById("div3");
	var div4=document.getElementById("div4");
	var div5=document.getElementById("div5");
	var div6=document.getElementById("div6");
	var div=[div1,div2,div3,div4,div5,div6];
	var txt=document.getElementById("txt");
	var arr=['#A9A9A9','#7B68EE','#FF0000','#48D1CC','#F4A460','#90EE90'];
//	for(var i=0;i<div.length;i++){
//		div[i].onclick=function(){
//			console.log(div[i]);
//			localStorage.setItem("color",arr[i]);
//			txt.style.backgroundColor=localStorage.getItem("color");
//		}
//	}
	div2.onclick=function(){
		localStorage.setItem("color",arr[1]);
		txt.style.backgroundColor=localStorage.getItem("color");
	}
	div3.onclick=function(){
		localStorage.setItem("color",arr[2]);
		txt.style.backgroundColor=localStorage.getItem("color");
	}
	div4.onclick=function(){
		localStorage.setItem("color",arr[3]);
		txt.style.backgroundColor=localStorage.getItem("color");
	}
	div5.onclick=function(){
		localStorage.setItem("color",arr[4]);
		txt.style.backgroundColor=localStorage.getItem("color");
	}
	div6.onclick=function(){
		localStorage.setItem("color",arr[5]);
		txt.style.backgroundColor=localStorage.getItem("color");
	}
	div1.onclick=function(){
//		div1.style.marginTop="-3px";
		localStorage.setItem("color",arr[0]);
		txt.style.backgroundColor=localStorage.getItem("color");
	}
	txt.style.backgroundColor=localStorage.getItem("color");
}