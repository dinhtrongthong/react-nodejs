import React from 'react'
import axios from "axios"
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '@mdi/react'
import { mdiThumbUpOutline } from '@mdi/js'

function Home() {
    const [listOfPosts, setListOfPosts] = useState([]);
    const [likedPosts, setLikedPosts] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/posts", {
            headers: { accessToken: localStorage.getItem('accessToken') }
        }).then((response) => {
            setListOfPosts(response.data.listOfPosts);
            setLikedPosts(response.data.likedPosts.map((like) => {
                return like.PostId;
            }));
        });
    }, [])

    const likeAPost = (postId) => {
        axios.post("http://localhost:3001/likes",
            { PostId: postId },
            { headers: { accessToken: localStorage.getItem('accessToken') } }
        ).then((response) => {
            setListOfPosts(
                listOfPosts.map((post) => {
                    if (post.id === postId) {
                        if (response.data.liked) {
                            return { ...post, Likes: [...post.Likes, 0] }
                        } else {
                            const likesArray = post.Likes;
                            likesArray.pop();
                            return { ...post, Likes: likesArray }
                        }

                    } else {
                        return post;
                    }
                })
            )

            if (likedPosts.includes(postId)) {
                setLikedPosts(likedPosts.filter((id) => {
                    return id != postId;
                }))
            } else {
                setLikedPosts([...likedPosts, postId]);
            }
        })
    }

    return (
        <div >
            {
                listOfPosts.map((value, key) => {
                    return (
                        <div className="listOfPosts" key={key}>
                            <div className="title">{value.title}</div>
                            <div className="body" onClick={() => { navigate(`/post/byId/${value.id}`) }}>{value.postText}</div>
                            <div className="foot">{value.username} {"  "}
                                <Icon
                                    path={mdiThumbUpOutline}
                                    size={1}
                                    onClick={() => { likeAPost(value.id) }}
                                    className={likedPosts.includes(value.id) ? "likedBttn" : "unlikedBttn"}
                                />
                                <label>{" "}{value.Likes.length}</label>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Home