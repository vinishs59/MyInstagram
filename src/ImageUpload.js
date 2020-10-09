import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import { storage, auth,db } from './firebase'
import './imageUpload.css'
import firebase from "firebase";
import { motion } from 'framer-motion';



function ImageUpload({ username }) {
    const [caption, setCaption] = useState("")
    const [image, setImage] = useState(null)
    const [progress, setProgress] = useState(0)


    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
        else {
            setImage(null)
        }
    }

    const handleUpload = () => {

        const uploadTask = storage.ref('images/' + image.name).put(image)
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                )
                setProgress(progress)
            },
            (error) => {
                console.log(error)
                alert(error.message)
            },
            () => {
                storage.ref('images').child(image.name).getDownloadURL()
                    .then(
                        url => {
                            let user = auth.currentUser
                            db.collection('post').add({
                                uid:user.uid,
                                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                                caption: caption,
                                imageUrl: url,
                                username: username,
                                likes:0
                            })
                            setProgress(0)
                            setCaption("")
                            setImage(null)
                        })
            }

        )

    }

    return (
        <div>
        <form>

            <div className="imageUpload">
                {
                    image &&
                    // <progress className="imageUpload__progress" value={progress} max='100' />
                    <motion.div className="imageUpload__progress"
                    initial={{ width: 0 }}
                    animate={{ width: progress + '%' }}
                  ></motion.div>
                }
                {image &&
                 <input type="text" placeholder="Enter the caption" onChange={e => setCaption(e.target.value)} value={caption} />}
                {/* <input type="file" onChange={handleChange} /> */}
                {!image && <label>
                <input type="file" style={{display:'none'}} onChange={handleChange} />
                <span>+</span>
            </label>}


            </div>
        </form>
        <center>
        { image && <div>{ image.name }</div> }
                {image && <button onClick={handleUpload}>
                            Upload
                        </button>
                }
                </center>
        </div>


    )
}

export default ImageUpload
