const initialState = {
    data: "",
    isFetching: false,
    error: ""
}

export const sellerReducer = (state = initialState, action) => {
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

        //Getting Specific Auction
        case "FETCH_AUCTION_ID_START":
            return {
                ...state,
                isFetching: true
            };
        case "FETCH_AUCTION_ID_SUCCESS":
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                error: ""
            };
        case "FETCH_AUCTION_ID_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }

        // Making New Auction
        case "PUT_NEW_AUCTION":
            return {
                ...state,
                isFetching: true
            };
        case "PUT_AUC_SUCCESS":
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                error: ""
            };
        case "PUT_AUC_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }

        // Making New Item
        case "PUT_NEW_ITEM":
            return {                
                ...state,
                isFetching: true    
            }
        case "PUT_ITEM_SUCCESS":
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                error: ""
            };
        case "PUT_ITEM_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}