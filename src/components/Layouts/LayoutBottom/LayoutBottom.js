import React from 'react';

import RememberBlocksBack from '../../RememberBlocks/RememberBlocksBack/RememberBlocksBack.js'
import RememberBlocks from '../../RememberBlocks/RememberBlocks';
import ResetButton from '../../ResetButton/ResetButton';
import classes from './LayoutBottom.css';
import Aux from '../../../hoc/Aux';

const LayoutBottom = (props) => {

  var merged = [].concat.apply([], props.textRender);
  var transformedIngredients = merged.map(prev => {
   if (merged.length < 50) {
    return <RememberBlocks key={prev + 1} ingredient={prev} generatedColor={props.generatedColor} />
  } else {
    return <h1 className={classes.tooMany}>Too Many Ingredients!</h1>
  }
  });

  return  (
    <Aux>
      <RememberBlocksBack>
        {transformedIngredients}
        <ResetButton resFunc={props.resetApp} scrolledFar={this.howFar} />
      </RememberBlocksBack>
    </Aux>
  )
}

export default LayoutBottom
