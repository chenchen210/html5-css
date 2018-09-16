window.onload=function(){
	var arr=['@qq.com','@163.com','@gmail.com','@yahoo.com','@126.com'];
	var email=document.getElementById("email");
	var opt=document.getElementsByClassName("opt");
	email.oninput=function(){
		for(var i=0;i<arr.length;i++){
			opt[i].value=email.value+arr[i];
		}
	}
	email.onchange=function(){
		var reg=/\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+/;
		if(!reg.test(email.value))
			alert("邮箱格式错误!");
	}
}