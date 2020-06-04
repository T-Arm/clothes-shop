import React from 'react';
import './form-input.styles.scss';

const FromInput = ({handleChange, label, ...otherProps}) => (
  <div className= 'group'>
    <input className= 'form-input' 
          onChange= {handleChange} 
          onClick= {() => console.log(otherProps)}
          {...otherProps} />
    { label ?  <label className= {`${otherProps.value.length > 0 ? 'shrink': ''} form-input-label`} > {label} </label> : null}
  </div>
)

export default FromInput;