import React, { useState } from 'react';
import './../UserDetails.css'

const TableHeader = ({onSorting}) => {
 
    const [sortingField, setSortingField] = useState('');
    const [sortingOrder, setSortingOrder] = useState('asc');

    const onSortingChange = (field) => {
        const order = field === sortingField && sortingOrder === 'asc' ? 'desc' : 'asc';
        setSortingField(field);
        setSortingOrder(order);
        onSorting(field, order)
      
    }

       
    const headers = [
        {name : 'ID', field : 'id', sortable: false},
        {name: 'Name', field : 'name', sortable : true},
        {name : 'Email', field : 'email', sortable : true},
        {name : 'Website', field : 'body', sortable : false}
    ]

    return (
            <thead>
                <tr>
                    {
                        headers.map(({name, field, sortable}) => 
                        <th className='t-header' key={name} onClick={() => sortable && onSortingChange(field)}>
                            {name} <i className={sortingOrder === 'asc' ? 'bi bi-arrow-bar-down' : 'bi bi-arrow-bar-up'}></i>
                            {/* {
                                sortingField && sortingField === field && (
                                    
                                )
                            } */}
                        </th>
                        )
                    }
                </tr>
            </thead>
    );
};

export default TableHeader;