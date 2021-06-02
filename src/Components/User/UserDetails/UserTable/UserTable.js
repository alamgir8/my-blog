import React, { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import Search from './Search';
import TableHeader from './TableHeader';

const UserTable = () => {
    const [users, setUsers] = useState([])
    const [searchText, setSearchText] = useState('');
    const [sorting, setSorting] = useState({ field: "", order: "" });
    const [pagination, setPagination] = useState(false)


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
       
    }, [])

    const usersData = useMemo(() => { 

        const userData = localStorage.getItem('users');
        let allUser = userData === null ? users : JSON.parse(userData);

        if (pagination) {
            allUser = users
        }
    //search text function
        if (searchText) {
            allUser = allUser.filter(
                search => 
                    search.name.toLowerCase().includes(searchText.toLowerCase()) ||
                    search.email.toLowerCase().includes(searchText.toLowerCase()) ||
                    search.website.toLowerCase().includes(searchText.toLowerCase())
            )
          
        }
//sorting by ascending and decending
        if (sorting.field) {
            const reversed = sorting.order === "asc" ? 1 : -1;
            allUser = allUser.sort(
                (a, b) =>
                    reversed * a[sorting.field].localeCompare(b[sorting.field])
            );
            
        }

    //store data to localStorage for save state after reload page
        if (sorting) {
            localStorage.setItem('users', JSON.stringify(allUser))
        }
        
        return allUser
    }, [users, pagination, searchText, sorting])

   

    return (
        <div className='pagination-section mt-5'>
            <div className="container">
            <div className="my-5">
                        <div className="row">
                            <div className="col-md-9">
                                <Pagination setPagination={setPagination} setUsers={setUsers}/>
                            </div>
                            <div className="col-md-3">
                                <Search onSearch={(value) => 
                                        setSearchText(value)
                                        }
                                />
                            </div>
                        </div>
                    <table className="table table-borderless table-hover">
                        <TableHeader
                            onSorting={(field, order) => setSorting({field, order})}
                        />
                        <tbody>
                            {
                                usersData.map((user) => 
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>
                                            <Link to={`/user/${user.id}`}>{user.name}</Link>
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

export default UserTable;