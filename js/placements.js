var chart_primary    = '#81d4fa',
    chart_secondary1 = '#03a9f4',
    chart_secondary2 = '#0288d1',
    chart_text       = 'rgba(0, 0, 0, 0.7)';

function draw_pay_chart_util(element, years, avgPay, highestPay){
	// Column Chart

	var chart = {
		type: 'column',
		backgroundColor: '#81d4fa',
		style : {
			color: chart_text
		}
	};
	var title = {
		text: 'Pay Statistics',
		style : {color: chart_text}
	};
	var xAxis = {
		categories: years,
		title: {
			text: null
		},
		labels: {
			style : {color: chart_text}
		}
	};
	var yAxis = {
		min: 0,
		title: {
			text: 'Package (in lpa)',
			style : {color: chart_text}
		},
		labels: {
			overflow: 'justify'
		},
		gridLineColor: 'rgba(0, 0, 0, 0)',
		labels: {
			style : {color: chart_text}
		}
	};
	var tooltip = {
		valueSuffix: ' lakhs'
	};
	var plotOptions = {
		bar: {
			dataLabels: {
				enabled: true
			}
		}
	};
	var legend = {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'top',
		floating: true,
		borderWidth: 1,
		backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
		borderColor: null
	};
	var credits = {
		enabled: false
	};

	var series= [{
		name: 'Average Pay',
		data: avgPay,
		borderColor: 'transperent',
		color: chart_secondary1
	}, {
		name: 'Highest Pay',
		data: highestPay,
		borderColor: 'transperent',
		color: chart_secondary2
	}
	];     

	var json = {};   
	json.chart = chart; 
	json.title = title;   
	json.tooltip = tooltip;
	json.xAxis = xAxis;
	json.yAxis = yAxis;  
	json.series = series;
	json.plotOptions = plotOptions;
	json.legend = legend;
	json.credits = credits;
	$(element).highcharts(json);

	// End Column Chart
}

function to_float(list){
	for(var i=0;i<list.length;i++)
		list[i] = parseFloat(list[i])
	return list;
}

jQuery.fn.extend({
	draw_pay_chart: function () {
		var year = $(this).attr('data-years'),
			avgp = $(this).attr('data-avg-pay'),
			higp = $(this).attr('data-high-pay');
		avgp = avgp.split(',');
		higp = higp.split(',');
		avgp = to_float(avgp);
		higp = to_float(higp);
		console.log(avgp);
		console.log(higp);
		draw_pay_chart_util(this, year, avgp, higp);
	}
});

var pie_primary   = "#009688",
    pie_secondary = "#80cbc4",
    pie_text      = "white"

function draw_placed_pie_util(element, year, placedPercentage){
	// Pie Chart
	pie_json = {
		chart: {
			plotBackgroundColor: pie_primary,
			backgroundColor: pie_primary,
			plotBorderWidth: null,
			plotShadow: false,
			type: 'pie'
		},
		title: {
			text: year,
			style: {color: pie_text}
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: false
				},
				showInLegend: true,
				borderColor: 'null'
			}
		},
		series: [{
			name: '',
			data: [{name: "", y: 0.6, color: pie_primary}],
		},
		{
			name: '',
			data: [{name: "Placed", y: placedPercentage, color: 'white'},{name: "Not placed", y: 100-placedPercentage, color: pie_secondary}],
			innerSize: '0%'
		}]
     }
     $(element).highcharts(pie_json);
     $(element).css('position', 'relative');
     $(element).append('<div class="mperc" style="color: ' + pie_primary + '">' + placedPercentage + '%</div>');
 }

 jQuery.fn.extend({
	draw_pie_chart: function () {
		var year = $(this).attr('data-year'),
		    perc = $(this).attr('data-percent');
		draw_placed_pie_util(this, year, parseFloat(perc));
	}
});