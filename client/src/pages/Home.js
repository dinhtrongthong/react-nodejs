import React from 'react'
import axios from "axios"
import { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom'

function Home() {
    const [listOfPosts, setListOfPosts] = useState([]);
    let navigate  = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/posts").then((reponse) => {
            setListOfPosts(reponse.data);
        });
    }, [])

    return (
        <div >
            {
                listOfPosts.map((value, key) => {
                    return (
                        <div className="listOfPosts" key={key} onClick={() => {navigate(`/post/byId/${value.id}`)}}>
                            <div className="title">{value.title}</div>
                            <div className="body">{value.postText}</div>
                            <div className="foot">{value.username}</div>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Home