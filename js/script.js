$(document).ready(function(){
	var ctx = $("#mycanvas1").get(0).getContext("2d");

	var data = [
		{
			value: 331.74,
			color: "lightgreen",
			highlight: "yellowgreen",
			label: "Correct Prediction"
		},
		{
			value: 28.26,
			color: "orange",
			highlight: "darkorange",
			label: "Incorrect Prediction "
		}
	];

	var chart = new Chart(ctx).Doughnut(data);
});

$(document).ready(function(){
	var ctx = $("#mycanvas2").get(0).getContext("2d");

	var data = [
		{
			value: 309.204,
			color: "lightskyblue",
			highlight: "cornflowerblue",
			label: "Correct Prediction"
		},
		{
			value: 50.796,
			color:"darkorange",
			highlight: "red",
			label: "Incorrect Prediction"
		}
	];

	var chart = new Chart(ctx).Doughnut(data);
});