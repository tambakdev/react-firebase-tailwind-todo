import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  addToAPI,
  addDataToAPI,
  getDataFromAPI,
  doingDataAPI,
  updateItemAPI,
  deleteItemAPI
} from "../../../configs/redux/action/Todo";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      buttonAdd: "ADD",
      errorForm: false,
      todoId: "",
    };
  }

  onChangeText = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
      errorForm: false,
    });
  };

  actionAddItem = () => {
    if (this.state.item === "") {
      this.setState({
        errorForm: true,
      });
    } else {
      const { item, buttonAdd, todoId } = this.state;
      const { saveItem, updateItem} = this.props;
      const data = {
        item: item,
        date: new Date().getTime(),
        status: 0,
      };
      if(buttonAdd === "ADD"){
        saveItem(data)
        alert("Item berhasil ditambah");
      }
      else{
        data.id = todoId;
        updateItem(data)
        alert("Item berhasil diupdate");
      }
      this.setState({
        item: "",
        buttonAdd: "ADD",
        errorForm: false
      });
    }
  };

  componentDidMount() {
    this.props.getItem();
  }

  editItem = (todo) => {
    this.setState({
      item: todo.data.item,
      buttonAdd: "UPDATE",
      todoId: todo.id
    });
  };

  handleEditStatus = (todo) => {
    const { updateStatus } = this.props;
    const data = {
      item: todo.data.item,
      date: todo.data.date,
      status: todo.data.status === 1 ? 0 : 1,
      id: todo.id,
    };
    updateStatus(data);
    alert("Status nerhasil dirubah");
  };

  actionDeleteItem = (data) => {
    const { deleteItem } = this.props;
    const kirimData = {
      id: data
    }
    deleteItem(kirimData)
    this.setState({
      item: "",
      buttonAdd: "ADD",
    });
    alert("Data berhasil dihapus")
  };

  render() {
    const {item, buttonAdd, todoId} = this.state;
    const { todos } = this.props;
    console.log("todos :", todos);
    return (
      <div>
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
          <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
            <div className="mb-4">
              <h1 className="text-grey-darkest text-3xl font-bold">Todo List</h1>
              <div className="text-xs text-gray-500">Click item to edit</div>
              <div className="flex mt-4">
                <input
                  type="text"
                  id="item"
                  className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 
                    text-grey-darker"
                  placeholder="Add Todo"
                  onChange={this.onChangeText}
                  value={this.state.item}
                />
                <button
                  type="button"
                  className="flex-no-shrink bg-green-300 p-2 border-2 rounded text-teal 
                    border-teal hover:text-white hover:bg-green-400"
                  onClick={this.actionAddItem}
                >
                  {this.state.buttonAdd}
                </button>
                {
                  this.state.buttonAdd === "UPDATE" ? (
                    <button
                      type="button"
                      className="flex-no-shrink bg-red-300 p-2 border-2 rounded text-teal 
                        border-teal hover:text-white hover:bg-red-400"
                      onClick={() => this.actionDeleteItem(todoId)}>
                      Delete
                    </button>
                  ):null
                }
              </div>
              {this.state.errorForm === true ? (
                <p className="text-sm text-gray-500">Item Wajib Diisi</p>
              ) : null}
              {todos.length > 0 ? (
                <Fragment>
                  {todos.map((todo) => {
                    const checked = todo.data.status === 1 ? "checked" : "";
                    return (
                      <div key={todo.id}>
                        <div
                          className={`bg-gray-100 border border-gray-400 text-gray-800 px-4 py-3 
                            rounded relative mt-5 hover:bg-gray-200 hover:cursor-pointer
                            ${todo.data.status === 1 ? "line-through" : ""}
                            `}>
                          <span className="block" onClick={() => this.editItem(todo)}>
                            {todo.data.item}.
                          </span>
                          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                            <input
                              type="checkbox"
                              onChange={() => this.handleEditStatus(todo)}
                              checked={checked}
                            />
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </Fragment>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const reduxState = (state) => ({
  userProps: state.user,
  todos: state.todos,
});

const reduxDispatch = (dispatch) => ({
  changeUserName: () => dispatch(addToAPI()),
  saveItem: (data) => dispatch(addDataToAPI(data)),
  getItem: (data) => dispatch(getDataFromAPI(data)),
  updateStatus: (data) => dispatch(doingDataAPI(data)),
  updateItem: (data) => dispatch(updateItemAPI(data)),
  deleteItem: (data) => dispatch(deleteItemAPI(data)),
});

export default connect(reduxState, reduxDispatch)(Todo);
