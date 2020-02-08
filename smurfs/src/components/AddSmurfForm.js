import React, { useState } from "react";

const AddSmurfForm = () => {
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: 0,
        height: 0,
        id: null
    });

    const handleChange = e => {
        console.log("newSmurf: ", {
            ...newSmurf,
            [e.target.name]: e.target.value
        });
        setNewSmurf({
            ...newSmurf,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <form>
            <label htmlFor="name">Name: </label>
            <input
                id="name"
                type="text"
                name="name"
                value={newSmurf.name}
                onChange={handleChange}
                placeholder="Smurf name"
            />

            <label htmlFor="age">Age: </label>
            <input
                id="age"
                type="number"
                name="age"
                value={newSmurf.age}
                onChange={handleChange}
                placeholder="Age"
            />

            <label htmlFor="height">Height: </label>
            <input
                id="height"
                type="number"
                name="height"
                value={newSmurf.height}
                onChange={handleChange}
                placeholder="Height in cm"
            />

            <button onSubmit={handleSubmit}>Add Smurf</button>
        </form>
    );
};

export default AddSmurfForm;
