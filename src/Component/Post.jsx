import React, { useEffect, useState } from 'react'
import { getPost } from '../api/PostApi';
import Card from '../UI/Card';

const Post = () => {

    const [data, setData] = useState([]);


    const getPostData = async () => {
        const res = await getPost();
        setData(res.data);
        console.log(res.data)

    };

    const handleDeletePost = () =>{
        try {
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPostData();
    }, []);

    return (
        <>

            <ul className='grid grid-cols-3 gap-7 relative   left-4 top-5   '>
                {
                    data.map((curElem) => (
                             <Card key={curElem.id} curElem={curElem} />
                    ))
                }
            </ul>

        </>
    )
}

export default Post
