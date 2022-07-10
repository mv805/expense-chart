import React from 'react';
import classes from './SpendingChart.module.css';
import Card from '../../UI/Card';
import BarGraph from './BarGraph';

const SpendingChart = (props) => {

    const lightCreamBackground = 'hsl(33, 100%, 98%)';
    const chartData = [];
    const GRAPH_SCALE_FACTOR = 3.5;
    let mostSpentIndex;
    let mostSpent = 0;

    const totalSpend = props.spendData.reduce(function (totalSum, currentDaySpend) {
        return totalSum + currentDaySpend.amount;
    }, 0);

    //creates a chart data array based on the JSON data property sent from higher
    props.spendData.forEach((dayData) => {

        let spendObj = {
            day: dayData.day,
            amount: dayData.amount,
            percentTotal: (GRAPH_SCALE_FACTOR *(dayData.amount / totalSpend)).toFixed(3),
            bgColor: 'hsl(10, 79%, 65%)',
        };

        chartData.push(spendObj);
    });

    //find the day with the highest spend and change the color
    chartData.forEach((date, index) => {
        if(date.amount > mostSpent){
            mostSpentIndex = index;
            mostSpent = date.amount;
        }
    });

    chartData[mostSpentIndex]['bgColor'] = 'hsl(186, 34%, 60%)';

    return (
        <Card bgColor={ lightCreamBackground }>
            <h1>Spending - Last 7 days</h1>
            <div className={ classes.bars }>
                { chartData.map(function (dataItem,index) {
                    return (
                        <BarGraph
                            key={index + ' item'}
                            day={ dataItem.day }
                            bgColor={ dataItem.bgColor }
                            amount= {dataItem.amount}
                            percentTotal={ dataItem.percentTotal }
                        />
                    );
                }) }
            </div>
        </Card>
    );
};

export default SpendingChart;