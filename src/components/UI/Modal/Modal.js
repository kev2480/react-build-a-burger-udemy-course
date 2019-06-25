import React from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
  const classArray = [classes.Modal]
  if (!props.show) {
    classArray.push(classes.Hidden)
  } else {
    classArray.push(classes.Show)
  }
  return (
    <Aux>
      <div className={classArray.join(' ')}>
        {props.children}
      </div>
      <Backdrop show={props.show} clicked={props.close}/>
    </Aux>

  )
}

export default modal;
