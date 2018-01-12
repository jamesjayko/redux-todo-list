import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class List extends Component {
  render() {
    console.log(this.props);
    const listItems = this.props.list.map((item, index) => {
      return (
        <li key={index} className="list-group-item">
          <h5>Title:</h5> {item.title}
          <br/><br/>
          <h5>Details:</h5> {item.details}
        </li>
      );
    });
    return (
      <div>
        <div className="row my-4 justify-content-end">
          <div className="col-2">
            <Link to="/add-item" className="btn btn-outline-primary">
              Add Item
            </Link>
          </div>
        </div>
        <h1 className="text-center">To Do List</h1>
        {listItems}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    list: state.todo.list
  };
}
export default connect(mapStateToProps)(List);
