import React from 'react'
import "./Reservation.css"
import { DataGrid } from '@mui/x-data-grid';
import {ProductRows} from "../../DummyData"
import { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import {addDoc, collection} from 'firebase/firestore'
import { db } from '../../firebase';
import { useNavigate } from 'react-router';
import { AuthContext } from "../../context/AuthContext";
import {auth} from "../../firebase"
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { ContentCutOutlined } from '@mui/icons-material';
import { useEffect } from 'react';
// import DatePicker, { Value } from "react-multi-date-picker";

function Reservation() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [ingred, setIngred] = useState("");
//   const [values, setValues] = useState<Value>("");

  const postsCollectionRef = collection(db, "reservations");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      name,
      mail,
      ingred,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  return (
    <div className="createPostPageReserv">
      <div className="cpContainerReserv">
        <h1>Reserveren</h1>
        <div className="inputGpReserv">
          <label> Naam</label>
          <input
            placeholder="Vul hier je naam in.."
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className="inputGpReserv">
          <label> Email</label>
          <input
            placeholder="Vul hier je emialadres in.."
            onChange={(event) => {
              setMail(event.target.value);
            }}
          />
        </div>
        <div className="inputGpReserv">
          <label> Wanner wil je meeeten?</label>
          <input type= "date"
            placeholder="Post..."
            onChange={(event) => {
              setIngred(event.target.value);
            }}
          />
        </div>
        <div className="inputGpReserv">
          <label> Post:</label>
          <textarea
            placeholder="Post..."
            onChange={(event) => {
              setIngred(event.target.value);
            }}
          />
        </div>
        <div className="inputGpReserv">
          <label> Post:</label>
          <textarea
            placeholder="Post..."
            onChange={(event) => {
              setIngred(event.target.value);
            }}
          />
        </div>
        {/* <div className="App">
      <h1>Hello CodeSandbox</h1>
      <DatePicker
        value={values}
        onChange={(dates) => {
          if (Array.isArray(dates) && dates.length > 6) dates.length = 6;

          setValues(dates);
        }}
        multiple
      />
    </div> */}
        <button onClick={createPost}> Submit Post</button>
      </div>
    </div>
  );
}


export default Reservation;