import React, { useState, useEffect } from 'react';
import axiosWithAuth from 'axios';
import Bid from "./Bid";

const url = 'api/bid/'

function ViewAllBids(){
    const [bids, setBids] = useState([]);

    // Fetch bid info from API
    useEffect(() => {
        getBids()
    }, [])

    const getBids = () => {
        axiosWithAuth().get(url)
            .then(res => {
                setBids(res)
                console.log(res)
            })
            .catch(err => {
                debugger
            })
        }
        
    
    return (
        <div className='view-bids-container'>
            <h2>All Bids</h2>
            {
                bids.map(bid => {
                    return (
                        <Bid key={bid.id} details={bid} />
                    )
                })
            }
        </div>
    )
}

export default ViewAllBids