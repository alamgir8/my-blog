
import React, { useEffect, useState } from 'react';


const Pagination = ({setPagination, setUsers}) => {
    const [threePerPage, setThreePerPage] = useState([])
    const [fivePerPage, setFivePerPage] = useState([])
    const [allUsers, setAllUsers] = useState([]);


    
    useEffect(() => {
       const getUsers = async() => {
       const res = await fetch('https://jsonplaceholder.typicode.com/users')
       const data = await res.json();
            setThreePerPage(data)
            setFivePerPage(data)
            setAllUsers(data)
       }

       return getUsers()
       
    }, [])

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
    );
};

export default Pagination;