var clock = document.getElementById("clock")
var body = document.getElementById("body")
var message = document.getElementById("message")

setInterval(function(){
	var date = new Date();

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
	var date = new Date();

	var hours = date.getHours()
	if(hours >6 && hours < 12){
      message.innerHTML = "Good Morning"
	}else if(hours > 12 && hours < 18){
		message.innerHTML = "Good Afternoon"
	}else{
		message.innerHTML = "Good Night"
	}
},1000)

setInterval(function(){
	var date = new Date();

	var hours = date.getHours()
	if(hours >6 && hours < 12){
      body.style.backgroundImage = "url('images/sunrise.jpeg')"
	}else if(hours > 12 && hours < 18){
		body.style.backgroundImage = "url('images/afternoon.jpeg')"
	}else{
		body.style.backgroundImage = "url('images/night.jpeg')"
	}
},1000)