import React from 'react';


const Smurfs = props => {
 return(
 <div>
 <p>Name: {props.items.name}</p>
 <p> Age: {props.items.age}</p>
 <p>Height: {props.items.height}</p>
 </div>
 )
}
export default Smurfs;