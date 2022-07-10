import React, { useState } from 'react';
import classes from './BarGraph.module.css';

const BarGraph = (props) => {

    const [toolTipIsShown, setToolTipIsShown] = useState(false);

    const colorAndHeight = {
        height: `${props.percentTotal * 100}%`,
        backgroundColor: props.bgColor,
    }

    const toggleToolTip = () => {
        setToolTipIsShown((previousState) => !previousState);
    };

    return (
        <div className={ classes.bar }>
            <div className={ classes['bar-container'] }>
                <div className={ classes['filled-bar'] } style={colorAndHeight} onMouseEnter={toggleToolTip} onMouseLeave={toggleToolTip}>
                {toolTipIsShown && <div className={classes['tool-tip']}>{`$${props.amount}`}</div>}
                </div>
            </div>
            <div>{ props.day }</div>
        </div>
    );
};

export default BarGraph;