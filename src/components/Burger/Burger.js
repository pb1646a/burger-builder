import React from "react";
import classes from "./Burger.module.css";
import Ingredient from "./Ingredients/Ingredients";
const Burger = props => {
  console.log(props);
  let transformedProps = Object.keys(props.ingredients)
    .map(ing => {
      return [...Array(props.ingredients[ing])].map((_, i) => {
        return <Ingredient key={ing + 1} type={ing} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  console.log(transformedProps);
  if(transformedProps.length <=0) transformedProps = (<p>Please Begin Adding Ingredients</p>);

  return (
    <div className={classes.Burger}>
      <Ingredient type="bread-top" />
      {transformedProps}
      <Ingredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
