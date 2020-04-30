import axiosWithAuth from "../../utils/axiosWithAuth";

export const deleteAuction = (id, auctionId) => {
  return (dispatch) => {
    dispatch({ type: "DELETE_AUCTION_START", id});
    axiosWithAuth()
      .delete(`/api/auction/${id}`, auctionId)
      .then((res) => {
        console.log("Delete Auction Succeeded: ", res.data.data);
        dispatch({ type: "DELETE_AUCTION_SUCCESS", payload: res.data.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: "DELETE_AUCTION_FAILURE",
          payload: `Delete Auction Failed: ${err.response}: ${err.response}`,
        });
      });
  };
};
