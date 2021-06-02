import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import Header from '../../Home/Header/Header';
import { PostContext } from '../../Reducer/State/State';
import { v4 as uuidv4 } from 'uuid';


const AddPost = () => {
    const {addPost} = useContext(PostContext);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('')
    const history = useHistory()

    const onSubmit = (e) => {
        e.preventDefault();
        const post = {
            id: uuidv4(),
            title : title,
            body : body
        }
        addPost(post);
        history.push('/user/2')
    }

    return (
        <div className='add-post'>
            <Header/>
            <div className="container">
                <div className="card p-5 my-5 bg-light">
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Post Title</label>
                            <input onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" placeholder="First Post" required/>
                        </div>
                        <div className="mb-3">
                        <label className="form-label">Post Description</label>
                        <textarea onChange={(e) => setBody(e.target.value)} className="form-control" rows="3" required></textarea>
                        </div>
                        <div className="text-right">
                            <button type='submit' className='btn btn-success'>Add Post</button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    );
};

export default AddPost;