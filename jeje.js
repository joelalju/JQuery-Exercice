$(window).on("load", function() {
	$("#foto").animate({
		width: "100%",
		height: "100%"
	}, 2000, function() {
			$("#foto").css({"background-image":"url(favicon.gif)"});
		}
	);

	$("#foto").animate ({
		width: "30%",
		height: "30%"
	}, "slow", function() {
			$("#foto").fadeOut("slow","swing")
		}
	);
});
