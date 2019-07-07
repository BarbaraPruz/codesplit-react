import React from 'react';

import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';

function Charts2(props) {
    return (
        <div>
            <h1>Charts2</h1>
            <XYPlot width={300} height={300}>
                <HorizontalGridLines />
                <LineSeries
                    data={[
                        {x: 1, y: 20},
                        {x: 2, y: 25},
                        {x: 3, y: 12}
                        ]}/>
                <XAxis />
                <YAxis />
            </XYPlot>    
        </div>
    )
}
export default Charts2;