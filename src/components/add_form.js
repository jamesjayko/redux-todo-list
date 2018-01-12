import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { addItem } from "../actions";

class AddForm extends Component {
  renderInput({ label, input, meta: { touched, error } }) {
    // console.log("render input:",  label, input, meta);
    return (
      <div className="form-group">
        <label>{label}</label>
        <input {...input} type="text" className="form-control" />
        <p className="text-danger">{touched && error}</p>
      </div>
    );
  }

  handleAddItem(value) {
    console.log("form submitted with: ", value);
    this.props.addItem(value).then(() => {
      this.props.history.push("/");
    });
  }

  render() {
    // console.log("add_form props: ", this.props);
    return (
      <div>
        <div className="row my-4 justify-content-end">
          <Link to="/" className="btn btn-outline-primary">
            Home
          </Link>
        </div>
        <h1 className="text-center">Add todo item</h1>
        <form onSubmit={this.props.handleSubmit(this.handleAddItem.bind(this))}>
          <div className="form-group" />
          <Field name="title" label="Title" component={this.renderInput} />
          <Field name="details" label="Details" component={this.renderInput} />
          <Field
            name="username"
            label="Username"
            component={this.renderInput}
          />
          <Field
            name="password"
            label="Password"
            component={this.renderInput}
          />

          <button className="btn btn-outline-success">Add Item</button>
          <button
            onClick={this.props.reset}
            type="button"
            className="btn btn-outline-danger ml-3"
          >
            Reset Form
          </button>
        </form>
      </div>
    );
  }
}
function validate(value) {
  const errors = {};
  if (!value.title) errors.title = "Please enter a title";
  if (!value.details) errors.details = "Please enter a detail";
  // if (!value.username) errors.username = "Please enter a username";
  // if (!value.password) errors.password = "Please enter a password";

  return errors;
}

AddForm = reduxForm({
  form: "add-item", // making up a name here
  validate: validate
})(AddForm);

export default connect(null, { addItem })(AddForm);
