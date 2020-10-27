import { database } from "../../../firebase";
// tester redux
export const addToAPI = () => {
  return (dispatch) => {
    setTimeout(() => {
      return dispatch({
        type: "CHANGE_USER",
        value: "Triyadi Pasti Sukses tur SUGIH",
      });
    }, 2000);
  };
};

// add to API
export const addDataToAPI = (data) => (dispatch) => {
  database.ref("todos/").push({
    item: data.item,
    status: data.status,
    date: data.date,
  });
};

// Get Data

export const getDataFromAPI = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    const urlTodos = database.ref("todos");
    urlTodos.on("value", function (snapshot) {
      // updateStarCount(postElement, snapshot.val());
      const data = [];
      Object.keys(snapshot.val()).map((key) => {
        data.push({
          id: key,
          data: snapshot.val()[key],
        });
      });
      dispatch({ type: "SET_TODOS", value: data });
      resolve(snapshot.val());
    });
  });
};

// Doing

export const doingDataAPI = (data) => (dispatch) => {
  const urlTodo = database.ref(`todos/${data.id}`);
  return new Promise((resolve, reject) => {
    urlTodo.set(
      {
        item: data.item,
        date: data.date,
        status: data.status,
      },
      (err) => {
        if (err) {
          reject(false);
        } else {
          resolve(true);
        }
      }
    );
  });
};


export const updateItemAPI = (data) => (dispatch) => {
  const urlTodos = database.ref(`todos/${data.id}`);
  return new Promise((resolve, reject) => {
    urlTodos.set(
      {
        item: data.item,
        date: data.date,
        status: data.status
      },
      (err) => {
        if (err) {
          reject(false);
        } else {
          resolve(true);
        }
      }
    );
  });
};



export const deleteItemAPI = (data) => (dispatch) => {
    const urlTOdos = database.ref(`todos/${data.id}`);
    return new Promise((resolve, reject) => {
      urlTOdos.remove();
    });
  };
