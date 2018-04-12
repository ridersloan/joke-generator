$(function() {

	var pre = [];
	var num = 0;
	var cur;

	$.ajax({
		url: "https://icanhazdadjoke.com/",
		method: "GET",
		dataType: "JSON",
	}).done(function(res) {
		cur = res.joke;
		$("#jokeDisplay").text(res.joke);
	}).fail(function(err) {
		alert(err.responseJSON.errors);
	});
	
	$("#nextJoke").click(function() {
		$.ajax({
			url: "https://icanhazdadjoke.com/",
			method: "GET",
			dataType: "JSON",
		}).done(function(res) {
			pre[num] = cur;
			num++;
			cur = res.joke;
			$("#jokeDisplay").text(res.joke);
		}).fail(function(err) {
			alert(err.responseJSON.errors);
		});
	});

	$("#prevJoke").click(function() {
		num--;
		$("#jokeDisplay").text(pre[num]);
	});

});