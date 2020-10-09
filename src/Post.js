import React, { useState, useEffect } from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar'
import firebase, { db } from './firebase'
import Fab from '@material-ui/core/Fab';
import FavoriteIcon from '@material-ui/icons/Favorite';

//import { motion } from 'framer-motion';



export const Post = ({ postid, user, username, caption, image_url, likes, setSelectedPost, selectedPost }) => {
    const [comments, setcomments] = useState([])
    const [comment, setcomment] = useState("")
    const [liked,setLiked]= useState(false)
    useEffect(() => {
        let unsubscribe;

        if (postid) {
            unsubscribe = db.collection('post').doc(postid).collection("comments").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
                setcomments(snapshot.docs.map((doc) => doc.data()))
            })
        }
        if (postid) {
            return () => {
                unsubscribe();
            }
        }
    }, [postid])



    const postComment = (e) => {
        e.preventDefault();
        db.collection('post').doc(postid).collection('comments').add({
            text: comment,
            username: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setcomment('')

    }

    const postLike = (e) => {
        e.preventDefault()
        if (postid ) {
            if ( !liked)
            {
            db.collection('post').doc(postid).update({ likes: likes + 1 })
            setLiked(true)
            }
            else{
                db.collection('post').doc(postid).update({ likes: likes -1 })
                setLiked(false)

            }
        }

    }

    const deletePost = (e) => {
        e.preventDefault();
        if (postid) {
            db.collection('post').doc(postid).delete()
        }
    }
    // const handleClick = (e) => {

    //     e.preventDefault();
    //     console.log("reached here")
    //     if (e.target.FieldValue == postid)
        

    //     if (e.target.classList.contains('postImage')) {
    //         console.log("reached here")

    //         setSelectedPost(null);
    //         postid = null;

    //     }
    //     else {


    //     }
    // }

    // const classes = useStyles();

    return (



        <div className='post'             initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>
            <div className='post__header'>
                <Avatar
                    className="post_avatar"
                    alt={username}
                    src="" />
                <h3>{username}</h3>
            </div>
            <img className='post__image' src={image_url} alt=""
                ></img>
            {/* <motion.div className="backdrop" onClick={handleClick}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <motion.img src={image_url} alt="enlarged pic"
                    initial={{ y: "-100vh" }}
                    animate={{ y: 0 }}
                />
          </motion.div> */}
            {caption &&
                <h4 className="post__text" > <strong>{username}</strong> {caption}</h4>
            }
            <div className="post__like">
                <Fab aria-label="like" type="submit" onClick={postLike}>
                    <FavoriteIcon />
                    {likes}
                </Fab>
                {/* { likes?(
                
                user?.displayName ? (<h4 className="post__text">  liked by {user.displayName} and
                    {likes - 1} others</h4>) :
                    <h4>liked by {likes} </h4>
                ):null */}
                
                }
            </div>
            <form>
                {
                    <div className="post__comments">
                        <p>comments ...</p>
                        {
                            comments.map((comment) => (
                                <p>
                                    <strong>{comment.username} </strong> {comment.text}
                                </p>
                            ))
                        }
                    </div>
                }
            </form>

             <form className='post__commentbox'>
                <input
                    className="post__input"
                    type="text"
                    placeholder="add comments"
                    value={comment}
                    onChange={(e) => setcomment(e.target.value)}
                />

                <button
                    disabled={!comment}
                    className="post__button"
                    type="submit"
                    onClick={postComment}
                >
                    Post
                 </button>
            </form>
            {(user?.displayName ? (user.displayName === username) : null)
                && <button
                    className="post__button"
                    type="submit"
                    onClick={deletePost}
                >
                    Delete
                 </button>}

        </div> 


    )
}
