import axiosWithAuth from "../../utils/axiosWithAuth";

export const deleteAccount = (id) => {
  return (dispatch) => {
    dispatch({ type: "DELETE_SELLER_START" });
    axiosWithAuth()
      .delete(`/api/seller/${id}`)
      .then((res) => {
        console.log("Delete Seller Succeeded: ", res.data.data);
        dispatch({ type: "DELETE_SELLER_SUCCESS", payload: res.data.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: "DELETE_SELLER_FAILURE",
          payload: `Delete Seller Failed: ${err.response}: ${err.response}`,
        });
      });
  };
};
