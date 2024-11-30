import React, { useEffect, useState } from 'react'
import { deletePost, getPost } from '../api/PostApi';
import Card from '../UI/Card';

const Post = () => {

    const [data, setData] = useState([]);


    const getPostData = async () => {
        const res = await getPost();
        setData(res.data);
        console.log(res.data)

    };

    const handleDeletePost = async (id) => {
        try {

            const res = await deletePost(id);
            if (res.status === 200) {
                const newUpdatesPoss = data.filter((curElem) => {
                    return curElem.id != id;
                });
                setData(newUpdatesPoss);
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPostData();
    }, []);

    return (
        <>
            <div  className=' '>
                <form action="" >
                    <input type="text"
                        name='title'
                        placeholder='Enter Title'
                        className='bg-white tex-black border border-solid border-indigo-700 m-3' 
                    />

                    <input type="text"
                    name='data'
                    placeholder='Enter Data'
                    className='bg-white tex-black border border-solid border-indigo-700 m-4' 

                    />

                    <button className='bg-blue-800 w-12 border rounded'>Add </button>
                </form>
            </div>

            <ul className='grid grid-cols-3 gap-7 relative left-4 top-5   '>
                {
                    data.map((curElem) => (
                        <Card key={curElem.id} curElem={curElem} handleData={handleDeletePost} />
                    ))
                }
            </ul>

        </>
    )
}

export default Post
