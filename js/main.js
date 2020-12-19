function clicked() {
	var user = document.getElementById('username');
	var pass = document.getElementById('password')

	var coruser ="Admin_Wadec";
	var corpass ="918273645_wadecpro";

	if(user.value == coruser) {

		if (pass.value == corpass) {
			window.open("html/main.html");
		}

		 else 
		{
			window.alert("Username ou mot de passe Incorrect");
		}

	}

	else 
	{
		window.alert("Username ou mot de passe Incorrect");
	}
}