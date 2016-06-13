function sendEmail() {

	var subject=document.getElementsByClassName("subject")[0].value;
	var body=document.getElementsByClassName("body")[0].value;

	window.open("mailto:service@omegarenovation.ca?subject=" + subject +
				"&body=" + body);
}
