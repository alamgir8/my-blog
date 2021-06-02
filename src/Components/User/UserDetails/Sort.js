import React, { useState } from 'react';
import './UserDetails.css'

const Sort = ({headers, onSorting}) => {
 
    const [sortingField, setSortingField] = useState('');
    const [sortingOrder, setSortingOrder] = useState('asc');

    const onSortingChange = (field) => {
        const order = field === sortingField && sortingOrder === 'asc' ? 'desc' : 'asc';
        setSortingField(field);
        setSortingOrder(order);
        onSorting(field, order)
      
    }
    return (
            <thead>
                <tr>
                    {
                        headers.map(({name, field, sortable}) => 
                        <th className='t-header' key={name} onClick={() => sortable ? onSortingChange(field) : null}>
                            {name}
                            {
                                sortingField && sortingField === field && (
                                    <i className={sortingOrder === 'asc' ? 'bi bi-arrow-bar-down' : 'bi bi-arrow-bar-up'}></i>
                                )
                            }
                        </th>
                        )
                    }
                </tr>
            </thead>
    );
};

export default Sort;