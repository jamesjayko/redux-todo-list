import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getItems } from "../actions";
import ListItem from "./list_item";

class List extends Component {
  componentDidMount() {
    this.props.getItems();
  }
  render() {
    // console.log('List component PROPS: ', this.props);
    const listItems = this.props.list.map((item, index) => {
      return (
     <ListItem key={index} {...item}/>
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
export default connect(mapStateToProps, { getItems })(List);
