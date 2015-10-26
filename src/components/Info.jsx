/**
 * Created by Eddie on 10/20/2015.
 */
import React from 'react';
import Radium from 'radium';
import classNames from 'classnames';

var PieChart = require("react-chartjs").Pie;

var styles = {
    base: {
        border: 0,
        borderRadius: 4,
        color: 'black',
        'WebkitUserSelect': 'none'
    }
};

var chartData = [
    {
        value: 300,
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
];

var chartOptions = {
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke: true,
    //String - The colour of each segment stroke
    segmentStrokeColor: "#fff",
    //Number - The width of each segment stroke
    segmentStrokeWidth: 2,
    //Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout: 40, // This is 0 for Pie charts
    //Number - Amount of animation steps
    animationSteps: 100,
    //String - Animation easing effect
    animationEasing: "easeOutBounce",
    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate: true,
    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale: false,
    scaleShowLabels: false

};

var Info = React.createClass({
    generateData: function (workers) {
        var data = undefined;
        if (workers) {
            data = {};
            for (let i = 0; i < workers.length; i++) {
                var job = workers[i][3];
                if (job) {
                    if (data[job]) {
                        data[job] += 1;
                    } else {
                        data[job] = 1;
                    }
                } else {
                    if (data['unemployed']) {
                        data['unemployed'] += 1;
                    } else {
                        data['unemployed'] = 1;
                    }
                }
            }
        }
        var chartData = [];
        if (data) {
            for (var prop in data) {
                if (data.hasOwnProperty(prop)) {
                    chartData.push({
                        label: prop,
                        value: data[prop],
                        color: "#46BFBD",
                        highlight: "#5AD3D1"
                    });
                }
            }
        }
        return chartData;
    },
    render: function () {
        return (
            <div style={styles.base}>
                <h2>Info</h2>
                <PieChart data={this.generateData(this.props.workers)} options={chartOptions}/>
            </div>
        );
    }
});

export default Radium(Info);