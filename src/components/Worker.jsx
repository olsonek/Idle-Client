/**
 * Created by Eddie on 10/20/2015.
 */
import React from 'react';
import Radium from 'radium';
import classNames from 'classnames';

var RadarChart = require("react-chartjs").Radar;

var styles = {
    base: {
        border: 0,
        'WebkitUserSelect': 'none'
    }
};

var chartData = {
    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
    datasets: [
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 96, 27, 100]
        }
    ]
};

var chartOptions = {
    //Boolean - Whether to show lines for each scale point
    scaleShowLine: true,
    //Boolean - Whether we show the angle lines out of the radar
    angleShowLineOut: true,
    //Boolean - Whether to show labels on the scale
    scaleShowLabels: false,
    // Boolean - Whether the scale should begin at zero
    scaleBeginAtZero: true,
    //String - Colour of the angle line
    angleLineColor: "rgba(0,0,0,.1)",
    //Number - Pixel width of the angle line
    angleLineWidth: 1,
    //String - Point label font declaration
    pointLabelFontFamily: "'Arial'",
    //String - Point label font weight
    pointLabelFontStyle: "normal",
    //Number - Point label font size in pixels
    pointLabelFontSize: 10,
    //String - Point label font colour
    pointLabelFontColor: "#666",
    //Boolean - Whether to show a dot for each point
    pointDot: true,
    //Number - Radius of each point dot in pixels
    pointDotRadius: 3,
    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth: 1,
    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius: 20,
    //Boolean - Whether to show a stroke for datasets
    datasetStroke: true,
    //Number - Pixel width of dataset stroke
    datasetStrokeWidth: 2,
    //Boolean - Whether to fill the dataset with a colour
    datasetFill: true,
    showTooltips: false,
    //String - A legend template
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
};


var Worker = React.createClass({
    getChartData: function () {
        return {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
            datasets: [
                {
                    label: "My Second dataset",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        }
    },
    render: function () {
        return (
            <div style={styles.base}>
                <h1>Worker</h1>
                <RadarChart data={chartData} options={chartOptions}/>
            </div>
        );
    }
});

export default Radium(Worker);