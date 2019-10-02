import React from "react";
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl'
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];
const Buildcontrols = props => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl=>(
            
            <BuildControl key={ctrl.label} label={ctrl.type}/>
        ))}
    </div>

);
 
export default Buildcontrols;
