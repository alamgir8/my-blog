import React, { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import Sort from './Sort';

const Pagination = () => {
    const [users, setUsers] = useState([])
    const [threePerPage, setThreePerPage] = useState([])
    const [fivePerPage, setFivePerPage] = useState([])
    const [allUsers, setAllUsers] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [sorting, setSorting] = useState({ field: "", order: "" });
    const [pagination, setPagination] = useState(false)

  
    

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
                setUsers(data)
                setThreePerPage(data)
                setFivePerPage(data)
                setAllUsers(data)
            
        })
       
    }, [])

    const usersData = useMemo(() => { 
        
        const userData = localStorage.getItem('users');
     
        let allUser = userData === null ? users : JSON.parse(userData);

        if (pagination) {
            allUser = users
        }
       

        if (searchText) {
            allUser = allUser.filter(
                search => 
                    search.name.toLowerCase().includes(searchText.toLowerCase()) ||
                    search.email.toLowerCase().includes(searchText.toLowerCase()) ||
                    search.website.toLowerCase().includes(searchText.toLowerCase())
            )
          
        }

        if (sorting.field) {
            const reversed = sorting.order === "asc" ? 1 : -1;
            allUser = allUser.sort(
                (a, b) =>
                    reversed * a[sorting.field].localeCompare(b[sorting.field])
            );
            
        }

    
        if (sorting) {
            localStorage.setItem('users', JSON.stringify(allUser))
        }
        
        return allUser
    }, [users, pagination, searchText, sorting])

    
    const headers = [
        {name : 'No', field : 'id', sortable: false},
        {name: 'Name', field : 'name', sortable : true},
        {name : 'Email', field : 'email', sortable : true},
        {name : 'Website', field : 'body', sortable : false}
    ]

    const paginationThree = () => {
        setUsers(threePerPage.slice(0, 3))
        setPagination(true)
    }
    const paginationFive = () => {
        setUsers(fivePerPage.slice(0, 5))
        setPagination(true)
    }
    const paginationAll = () => {
        setUsers(allUsers.slice(0, 10))
        setPagination(true)
    }

       
   
   

    return (
        <div className='pagination-section mt-5'>
            <div className="container">
            <div className="my-5">
                        <div className="row">
                            <div className="col-md-9">
                                <ul className='pagination'>
                                    <li className='page-item mx-1'>
                                        <button onClick={paginationThree} className='btn btn-info'>3</button>
                                    </li>
                                    <li className='page-item mx-2'>
                                        <button onClick={paginationFive} className='btn btn-info'>5</button>
                                    </li>
                                    <li className='page-item mx-1'>
                                        <button onClick={paginationAll} className='btn btn-info'>All</button>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <Search onSearch={(value) => 
                                        setSearchText(value)
                                        }
                                />
                            </div>
                        </div>
                    <table className="table table-borderless table-hover">
                        <Sort
                            headers={headers}
                            onSorting={(field, order) => setSorting({field, order})}
                        />
                        <tbody>
                            {
                                usersData.map((user, index) => 
                                    <tr key={user.id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <Link to='/'>{user.name}</Link>
                                        </td>
                                        <td>{user.email}</td>
                                        <td>{user.website}</td>
                                    </tr>
                                    )
                            }
                        </tbody>
                    </table>
                    </div>
            </div>
        </div>
    );
};

export default Pagination;