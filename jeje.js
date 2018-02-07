$(window).on("load", function() {
	$("#foto").animate({
		width: "100%",
		height: "100%"
	}, "slow", function() {
			$("#foto").css({"background-image":"url(pichus.gif)"});
		}
	);
	$("#foto").animate ({
		width: "50%",
		height: "50%"
	}, "slow");
});
