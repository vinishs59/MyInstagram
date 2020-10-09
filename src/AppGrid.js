import React, { useState, useEffect } from 'react';
import './App.css';
import { Post } from './Post';
import ImageUpload from './ImageUpload'
import { db, auth } from './firebase'
//import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Input } from '@material-ui/core';
import { motion } from 'framer-motion';
//import Gallery from 'react-grid-gallery';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";





function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function App() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);


  const [posts, setPosts] = useState([])
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [user, setUser] = useState(null)
  const [openSignin, setOpenSignin] = useState("")
  const [selectedPost, setSelectedPost] = useState(null);



  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        setUser(authuser)
      }
      else {
        setUser(null)
      }
    }


    )
    return () => {
      //perform cleanup
      unsubscribe()
    }
  },
    [user, username])


  useEffect(() => {
    db.collection('post').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    }
    )

  }, [])

  const signUp = (event) => {
    event.preventDefault()
    auth.createUserWithEmailAndPassword(email, password)
      .then((authuser) => {
        console.log(username);
        return authuser.user.updateProfile(

          { displayName: username }

        )
      }

      )
      .catch(error => alert(error.message))
    //setOpen(false)

  }

  const signIn = (event) => {
    event.preventDefault()
    auth.signInWithEmailAndPassword(email, password)
      .catch(error => alert(error.message))

    setOpenSignin(false)
  }


  return (
    <div className="app">
      <Modal
        open={openSignin}
        onClose={() => setOpenSignin(false)} >

        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <Input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={signIn}  >Sign in </Button>
          </form>

        </div>
      </Modal>
      <Modal
        open={open}
        onClose={() => setOpen(false)} >

        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <Input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <Input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={signUp}  >Sign up </Button>
          </form>

        </div>
      </Modal>
      <div className="app__testing" >
        <img
          className="app__headerimage"
          src="https://static.dribbble.com/users/2246631/screenshots/6586825/photo_2.jpg"
          alt=""
        />
        {user ? (<Button onClick={() => auth.signOut()}  >Logout</Button>) :
          (
            <div className="app__loginContainer">
              <Button onClick={() => setOpenSignin(true)}  >Log in</Button>
              <Button onClick={() => setOpen(true)}  >Sign up</Button>
            </div>
          )
        }
      </div>
      <center>
        <h1>Welcome to my instagram version</h1>
      </center>

      {/* <div className="app__post">
        <center>

          {
            posts.map(({ id, post }) => (
              <Post key={id} postid={id} user={user} username={post.username} caption={post.caption} image_url={post.imageUrl} likes={post.likes} />
            ))
          }
        </center>
      </div> */}
      <div className="img-grid">
        {posts && posts.map(({ id, post }) => (
          <motion.div className="img-wrap" key={id}
            layout
            whileHover={{ opacity: 1 }} s
            //onClick={handleClick}
              //setSelectedPost(post)}
          >
            <motion.img src={post.imageUrl} alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}


      </div>
        {selectedPost &&

          <Post className='post' key={selectedPost.id} postid={selectedPost.id} user={user} username={selectedPost.username} caption={selectedPost.caption} image_url={selectedPost.imageUrl} likes={selectedPost.likes}
            setSelectedPost={setSelectedPost} selectedPost={selectedPost}
          />
        }



      {user?.displayName ? (<ImageUpload username={user.displayName} />) : (
        <h3>Please login to upload</h3>
      )}

    </div>
  );
}

export default App;
