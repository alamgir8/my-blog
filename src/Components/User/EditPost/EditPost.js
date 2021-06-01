import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useHistory, useParams } from 'react-router';
import Header from '../../Home/Header/Header';
import { PostContext } from '../../Reducer/State/State';

const EditPost = () => {
    const {newPosts, editPost} = useContext(PostContext);
    const {id} = useParams()
    const [selectPost, setSelectPost] = useState({
        title : '',
        body : ''
    })
   
    useEffect(() => {
        const currentId = id;
       const selectPost = newPosts.find(element => element.id === currentId)
       setSelectPost(selectPost)
    }, [id, newPosts])
    
    const history = useHistory()

    const onSubmit = () => {
        editPost(selectPost)
        history.push('/user/2')
    }
    const ChangePost = (e) =>{
        setSelectPost({
            ...selectPost, [e.target.name] : e.target.value
        })
    }

    return (
        <div className='edit-post'>
            <Header/>
            <div className="container">
                <div className="card p-5 my-5 bg-light">
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Edit Title</label>
                            <input name='title' value={selectPost.title} onChange={ChangePost} type="text" className="form-control" placeholder="First Post"/>
                        </div>
                        <div className="mb-3">
                        <label className="form-label">Edit Description</label>
                        <textarea name='body' value={selectPost.body} onChange={ChangePost} className="form-control" rows="3"></textarea>
                        </div>
                        <div className="text-right">
                            <button className='btn btn-success'>Edit Post</button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    );
};

export default EditPost;