import React from 'react';
import classes from './ExpenseSummary.module.css';
import Card from '../UI/Card';

const ExpenseSummary = (props) => {

    const lightCreamBackground = 'hsl(33, 100%, 98%)';

    return (
        <Card bgColor={ lightCreamBackground }>
            <div className={ classes.summary }>
                <div className={classes.total}>
                    <div>{ `Total this ${ props.timeInterval }` }</div>
                    <div className={ classes.amount }>{ props.amount }</div>
                </div>
                <div className={classes.difference}>
                    <div className={classes.percent}>{ props.percent }</div>
                    <div>{ `from last ${ props.timeInterval }` }</div>
                </div>
            </div>
        </Card>
    );
};

export default ExpenseSummary;