import axios from "axios";
import React, { useState } from "react";

const ComponentAddperson = () => {
    const [lastName, setLastname] = useState("");
    const [firstName, setFirstname] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");


    const submit = () => {
        const data = {
            lastName,
            firstName,
            address,
            city
        }
        
        if (data) {
            axios.post("http://localhost:3001/api/v1/ToDos/person",data)
            .then(()=> console.log(data))
            .catch((error)=> console.log(error))
        } 
        
    }

    return (
        <div className="form-app">
            <h1>Add Person</h1>
            <form onSubmit={submit}>
            <div className="form-group">
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstname(e.target.value)}
                        className="form-control"
                        placeholder="First Name"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastname(e.target.value)}
                        className="form-control"
                        placeholder="Full Name"
                    />
                </div>
               
                <div className="form-group">
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="form-control"
                        placeholder="Address"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="form-control"
                        placeholder="City "
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ComponentAddperson;
