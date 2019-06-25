import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igkey => {
      return (
        <li key={igkey}>
          <span style={{textTransform: 'capitalize'}}>{igkey}</span>: {props.ingredients[igkey]}
        </li>)
    })

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A dope fresh burger with:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <hr></hr>
      <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <Button btnType="Success">Continue to checkout?</Button>
      <Button btnType="Danger" clicked={props.cancelCheckout}>Cancel</Button>
    </Aux>
  )
}

export default orderSummary;
