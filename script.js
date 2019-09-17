$(document).ready(function() {
var magic8Ball = {};
magic8Ball.answersList = ["But of course.", "It is certain.", "Yeah, I don't think so.", "No doubt.", "Yep.", "You bet!", "It's possible.", "Yaasss!", "Count on it.", "Probably not.", "Check back with me.", "Better not tell you now.", "Can't concentrate, so ask me later.", "Outlook not so good.", "I doubt it.", "No way!"];
	
$("#answer").hide(); //hides answer when page loads
	
magic8Ball.response = function(question) {
    $("#8ball").effect("shake");
	//change image to answer screen
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	$("#answer").fadeIn(4000);
	var list = Math.floor((Math.random() * 		this.answersList.length));
	var finalAnswer = this.answersList[list];
    
	$("#answer").text( finalAnswer );
	
	console.log(question);
	console.log(finalAnswer);
};

magic8Ball.question = function () {
	$("#answer").hide();
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");

	//wait half a second before showing prompt
	setTimeout(
		function () {
	var question = prompt("Ask a Yes or No Question.")
	magic8Ball.response(question)
	}, 500);
		
};

$("#questionButton").click(magic8Ball.question);
});
