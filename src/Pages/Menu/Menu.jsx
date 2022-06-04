import React, { useEffect, useState } from 'react'
import "./Menu.css"
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';


function Menu() {
    const [postLists, setPostList] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(collection(db, "menu"));
            setPostList(data.docs.map((doc) => ({ ...doc.data() })));
        };

        getPosts();
    });
    return (
        <div className='container'>
            <div className='Menu'>
                <div className="introductieMenu">
                    Gezellig dat je mee eet!
                </div>
                <div className="introductieMenuIntro">
                    Op deze pagina kun je zien wat er op het menu staat.
                </div>
                <div className="fireposts">
                </div>

            </div>
            <div className="postContainer">
                {postLists.map((post) => {
                    return <div className='postblock'>
                        <div className='postWeek'>
                            {post.week}
                        </div>
                        <div className='postTitle'>
                           <h2>{post.title}</h2> 
                        </div>
                        <div className='postIngred'>
                            {post.ingred}
                        </div></div>
                })}
            </div>
        </div>

    )
}

export default Menu;