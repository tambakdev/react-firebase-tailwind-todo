export const actionChangeUserName = () => {
  return (dispatch) => {
    setTimeout(() => {
      return dispatch({
        type: "CHANGE_USER",
        value: "Triyadi Pasti Sukses",
      });
    }, 2000);
  };
};
