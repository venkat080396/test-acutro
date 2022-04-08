import React from 'react';
import ReactDOM from 'react-dom';
import { Card} from 'reactstrap';
import Charts from './Charts';
const GraphContainer = ()=>{
    return(
        <Card style={{borderRadius: '15px',display: 'flex',justifyContent:'space-between',border:'1px solid white',background: 'rgba(255,255,255,0.0)',zIndex:4}}>
            <Charts></Charts>
        </Card>
    );
}
export default GraphContainer