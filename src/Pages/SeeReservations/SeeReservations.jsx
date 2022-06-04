import React, { useEffect, useState } from 'react'
import "./Seereservations.css"
import Sidebar from '../../components/Sidebar/Sidebar';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';

export default function SeeReservations() {
    const [postLists, setPostList] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(collection(db, "reservations"));
            setPostList(data.docs.map((doc) => ({ ...doc.data() })));
        };

        getPosts();
    });
  return (
      
    <div className="container">
    <Sidebar/>
  <div className="Bekijkres">
    <div className="homewidgets">
    <div className="postContainerResbekijk">
      <h2> reserveringen</h2>
              {postLists.map((post) => {
                  return <div className='postblockResbekijk'>
                      <div className='naam'>
                        naam: {post.name}
                      </div>
                      <div className='email'>
                        email: {post.mail}
                      </div>
                      <div className='date'>
                        datum:  {post.date}
                      </div>
                      <div className='dieet'>
                        dieet-wensen:  {post.dieet} {post.dieet1} {post.dieet2}
                      </div>
                      <div className='opm'>
                        opmerking:  {post.opm} 
                      </div>
                      </div>
              })}
          </div>
    </div>
  </div>
  </div>
  )
}
