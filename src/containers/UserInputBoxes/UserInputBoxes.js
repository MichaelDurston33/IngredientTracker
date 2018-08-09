import React from 'react';

import classes from './UserInputBoxes.css';

const userInputBoxes = (props) => (
  <div className={classes.wrapperDiv}>
    <form onSubmit={props.formFunc}>
      <label>
        <textarea className={classes.inputBox} type="text/css" onChange={props.inputFunc} placeholder="Please Enter Recipe Here."></textarea>
        <button className={classes.SubmitButton} onClick={props.inputMoveFunc} type="submit" value="Submit" >></button>
      </label>
    </form>
  </div>

)

export default userInputBoxes;
