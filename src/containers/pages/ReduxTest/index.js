import React, { Component } from "react";
import { connect } from "react-redux";
import { actionChangeUserName } from "../../../configs/redux/action";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      buttonAdd: "ADD",
    };
  }

  onChangeText = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  actionAddItem = () => {
    alert("halo");
  };

  actionDeleteItem = () => {
    this.props.changeUserName();
  };

  render() {
    return (
      <div>
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
          <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
            <div className="mb-4">
              <h1 className="text-grey-darkest text-3xl font-bold">
                Todo List
                {this.props.userProps}
              </h1>
              <div className="flex mt-4">
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 
                    text-grey-darker"
                  placeholder="Add Todo"
                  onChange={this.onChangeText}
                />
                <button
                  type="button"
                  className="flex-no-shrink bg-green-700 p-2 border-2 rounded text-teal 
                    border-teal hover:text-white hover:bg-green-800"
                  onClick={this.actionAddItem}
                >
                  Add
                </button>
                <button
                  type="button"
                  className="flex-no-shrink bg-red-700 p-2 border-2 rounded text-teal 
                    border-teal hover:text-white hover:bg-green-800"
                  onClick={this.actionDeleteItem}>
                  Delete
                </button>
              </div>
              <div className="mt-5">
                <div
                  className="bg-gray-100 border border-gray-400 text-gray-800 px-4 py-3 
                  rounded relative mt-5 hover:bg-gray-200 hover:cursor-pointer">
                  <span className="block sm:inline line-through">Makan siang.</span>
                  <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <input type="checkbox" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const reduxState = (state) => ({
  userProps: state.user,
});

const reduxDispatch = (dispatch) => ({
  changeUserName: () => dispatch(actionChangeUserName()),
});

export default connect(reduxState, reduxDispatch)(Todo);
