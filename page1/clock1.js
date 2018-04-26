var clock = document.getElementById("clock")
var body = document.getElementById("body")



setInterval(function(){
	var date = new Date()

	var hours = date.getHours()
		if(hours < 10){
		hour.innerHTML = "0" + hours + ":";
	}else{
		hour.innerHTML =  hours + ":";
	}


	var minutes = date.getMinutes()
	if(minutes < 10){
		minute.innerHTML = "0" + minutes + ":";
	}else{
		minute.innerHTML =  minutes + ":";
	}


	var seconds = date.getSeconds()
	if(seconds < 10){
		second.innerHTML = "0" + seconds 
	}else{
		second.innerHTML =  seconds 
	}
},1000)



setInterval(function(){
	var date = new Date()

	var hours = date.getHours()
	var minutes = date.getMinutes()
		if(hours < 10 && minutes < 10){
		body.style.backgroundColor = "#" + "0" + hours  + "0" + minutes;
	}else{
		body.style.backgroundColor = "#" + hours + minutes;
	}


	// var minutes = date.getMinutes()
	// if(minutes < 10 && seconds < 10){
	// 	body.style.backgroundColor = "#" + "0" + minutes + "0" + seconds + ":";
	// }else{
	// 	body.style.backgroundColor = "#" + minutes + seconds + ":";
	// }


	var seconds = date.getSeconds()
	if(seconds < 10){
		body.style.backgroundColor = "#" + "0" + seconds 
	}else{
		body.style.backgroundColor = "#" + seconds 
	}
},1000)






