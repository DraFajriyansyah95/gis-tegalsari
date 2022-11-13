function() {
 
 
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "Kependudukan"
        },
        subtitles: [{
            text: "Juni 2022"
        }],
        data: [{
            type: "pie",
            yValueFormatString: "#,##\"%\"",
            indexLabel: "{label} ({y})"
            dataPoints: <?php echo kependudukan($dataPoints, JSON_NUMERIC_CHECK);?>
        }]
    });
}
