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
	var seconds = date.getSeconds()

	if(hours < 10){
		hours = "0" + hours
	}
	if(minutes < 10){
		minutes = "0" + minutes
	}
	if(seconds < 10){
		seconds = "0" + seconds
	}


	body.style.backgroundColor = "#" + hours + minutes + seconds;

},1000)






