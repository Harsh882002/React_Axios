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

    useEffect(() => {
        getPostData();
    }, []);

    return (
        <>

            <ul>
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
