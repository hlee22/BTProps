import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    console.log(this.props.objProduct);
    let {name, image, price,description } = this.props.objProduct ;  

    return (
      <div className="modal" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
                <img src={image} alt="" />
              <h5 className="modal-title">{name}</h5>
              <p>{price}</p>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <p>{description}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Add
              </button>
              <button type="button" className="btn btn-primary">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
