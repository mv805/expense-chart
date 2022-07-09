import React from 'react';
import Card from '../UI/Card';
import classes from './ExpenseHeader.module.css';

const ExpenseHeader = (props) => {

    const pinkBackground = 'hsl(10, 79%, 65%)';

    return (
        <Card bgColor={pinkBackground}>
            <div className={ classes.header }>
                <div>
                    <div>{ props.title }</div>
                    <div className={classes.balance}>{ props.balance }</div>
                </div>
                { props.logo }
            </div>
        </Card>
    );
};

export default ExpenseHeader;