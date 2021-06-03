import React from 'react';

const Pagination = ({postPerPage, totalPosts, paginate}) => {

    const numbers = [];

    for(let i = 1; i<= Math.ceil(totalPosts/postPerPage); i++){
        numbers.push(i)
    }

    return (
        <div className='dynamic-user-post-pagination'>
            <div className="container mt-3">
                <div className='pagination'>
                    {
                        numbers.map(number => 
                            <button key={number} onClick={() => paginate(number)} className='btn btn-light'>
                               {number}
                            </button>
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default Pagination;