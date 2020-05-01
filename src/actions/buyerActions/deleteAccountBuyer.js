import axiosWithAuth from "../../utils/axiosWithAuth";

export const deleteAccountBuyer = (id) => {
  return (dispatch) => {
    dispatch({ type: "DELETE_BUYER_START" });
    axiosWithAuth()
      .delete(`/api/buyer/${id}`)
      .then((res) => {
        console.log("Delete Buyer Succeeded: ", res.data.data);
        dispatch({ type: "DELETE_BUYER_SUCCESS", payload: res.data.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: "DELETE_BUYER_FAILURE",
          payload: `Delete Buyer Failed: ${err.response}: ${err.response}`,
        });
      });
  };
};