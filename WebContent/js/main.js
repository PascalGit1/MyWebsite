function sendEmail(){
	var email = document.getElementById("emailID").value;
	var subject = document.getElementById("subjectID").value;
	var message = document.getElementById("messageID").value;
	
	window.open('mailto:'+email+'?subject='+subject +'&body='+ message);
	console.log('mailto:'+email+'?subject='+subject +'&body='+ message);
}

function login(){
	var username = document.getElementById("usernameID").value;
	var password = document.getElementById("passwordID").value;
	
	if((username == "pascal") && (password =="welcome")){
		window.location = "admin.html";
	}else{
		console.log("Wrong login!")
	}
}
