import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {

    let {image , name , price} =this.props.shoeObj ; 
    return (
      <div className="card">
        <img src={image} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
          <button href="#" className="btn btn-primary" onClick={ () => {
              console.log(this.props.shoeObj); 

           }}>
            Add cart
          </button>
        </div>
      </div>
    );
  }
}
