const initialState = {
    data: "",
    isFetching: false,
    error: ""
}

export const buyerReducer = (state = initialState, action) => {
    switch (action.type) {
        // Fetching Current Auctions
        case "FETCH_AUCTIONS_START":
            // console.log("State in reducer: ", state)
            return {
                ...state,
                isFetching: true
            };
        case "FETCH_AUCTIONS_SUCCESS":
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                error: ""
            };
        case "FETCH_AUCTIONS_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
            
        // Making New Bid
        case "PUT_NEW_BID":
            return {
                ...state,
                isFetching: true
            };
        case "PUT_BID_SUCCESS":
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                error: ""
            };
        case "PUT_BID_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}