import React from 'react'
import "./Reservation.css"
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase';
import { useNavigate } from 'react-router';
import { AuthContext } from "../../context/AuthContext";
import { auth } from "../../firebase"
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { ContentCutOutlined } from '@mui/icons-material';
import { useEffect } from 'react';
import { Calendar, DateObject } from "react-multi-date-picker";
import DatePicker from "react-multi-date-picker";


function Reservation() {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [ingred, setIngred] = useState("");
    const [date, setDate] = useState("");
    const [dieet, setDieet] = useState("");
    const [dieet1, setDieet1] = useState("");
    const [dieet2, setDieet2] = useState("");
    const [opm, setOpm] = useState("");
    const [datevalue, setDateValue] = useState(new Date());



    const postsCollectionRef = collection(db, "reservations");
    let navigate = useNavigate();

    const createPost = async () => {
        await addDoc(postsCollectionRef, {
            name,
            mail,
            dieet,
            dieet1,
            dieet2,
            opm,
            date,
            datevalue,
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
        });
        navigate("/");
    };

    return (
        <div className="createPostPageReserv">
            <div className="cpContainerReserv">
                <div className="restitle">Reserveren</div>
                <div className="resdes">kosten: <br/>
                - hele week mee-eten 15 euro<br/>
                - per dag mee-eten 3,50 euro 

                </div>
                <div className="inputGpReserv">
                    <label> Naam</label>
                    <input className="ResIput"
                        placeholder="Vul hier je naam in.."
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                    />
                </div>
                <div className="inputGpReserv">
                    <label> Email</label>
                    <input className="ResIput"
                        placeholder="Vul hier je emialadres in.."
                        onChange={(event) => {
                            setMail(event.target.value);
                        }}
                    />
                </div>
                <div className="inputGpReserv">
                    <label> Wanner wil je mee-eten?</label>
                    <input className="ResIput"
                        placeholder="bij, maandag, dinsdag..."
                        onChange={(event) => {
                            setDate(event.target.value);
                        }}
                    />
                </div>
                <div className="inputGpReservCheck">
                    <input 
                    type="checkbox" value= "week"
                        onChange={(event) => {
                            setDate(event.target.value);
                        }}
                    />
                    <label className="cblb"> Hele week mee-eten</label>
                </div>
                <label class="dieetw"> dieet wensten</label>
                <div className="inputGpReservCheck">
                    <input 
                    type="checkbox" value= "halal,"
                        onChange={(event) => {
                            setDieet(event.target.value);
                        }}
                    /> <label className="cblb">halal</label>
                </div>

                <div className="inputGpReservCheck">

                    <input 
                    type="checkbox" value= "vega,"
                        onChange={(event) => {
                            setDieet1(event.target.value);
                        }}
                    /> <label className="cblb">Vega</label>
                </div>

                <div className="inputGpReservCheck">
                    <input 
                    type="checkbox" value= "lactose-vrij"
                        onChange={(event) => {
                            setDieet2(event.target.value);
                        }}
                    /> <label className="cblb">lactose-vrij</label>
                </div>


                <div className="inputGpReserv">
                    <label> opmerkingen</label>
                    <textarea
                        placeholder="opmerkingen"
                        onChange={(event) => {
                            setOpm(event.target.value);
                        }}
                />
                </div>
                <button className= "ReservationButton " onClick={createPost}> Reserveren</button>
            </div>
        </div>
    );
}


export default Reservation;