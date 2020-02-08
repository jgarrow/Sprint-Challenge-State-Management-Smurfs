import React, { useState } from "react";
import { connect } from "react-redux";

import { addSmurf } from "../actions/smurfActions";

const AddSmurfForm = props => {
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

    const handleSubmit = (e, smurf) => {
        e.preventDefault();
        console.log("Smurf in handleSubmit: ", smurf);
        props.addSmurf(smurf);
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

            <button onClick={e => handleSubmit(e, newSmurf)}>Add Smurf</button>
        </form>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    };
};

export default connect(mapStateToProps, { addSmurf })(AddSmurfForm);
