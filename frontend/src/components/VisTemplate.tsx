import {useEffect, useRef} from 'react';
import useSVGCanvas from './useSVGCanvas';
import {Misc} from '../types';
import * as d3 from 'd3';


export default function VisTemplate(props:any){

    const d3Container = useRef(null);
    const [svg, height, width, tTip] = useSVGCanvas(d3Container);
    
    useEffect(()=>{
        if(props.data === undefined || svg === undefined){ return }
        console.log(props.data)
        //draw here
    },[svg,props]);

    return (
        <div
            className={"d3-component"}
            style={{'height':'95%','width':'95%'}}
            ref={d3Container}
        ></div>
    );
}