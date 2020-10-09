import React from 'react'
import './Post.css'
import { motion } from 'framer-motion';


export const Photos = ({ postid, setSelectedPost, image_url, selectedPost }) => {



    const handleClick = (e) => {

        e.preventDefault();
        console.log("reached here")
        if (e.target.classList.contains('backdrop')) {
            setSelectedPost(null);
            postid = null;

        }
    }
    return (
        <div>
            <motion.div className="backdrop" onClick={handleClick}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <motion.img src={image_url} alt="enlarged pic"
                    initial={{ y: "-100vh" }}
                    animate={{ y: 0 }}
                />
            </motion.div>

        </div>
    )
}
