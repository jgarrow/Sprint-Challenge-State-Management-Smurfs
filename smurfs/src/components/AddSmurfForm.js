import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { addSmurf } from "../actions/smurfActions";

import { Form, Button, Label, Input } from "./EditSmurfForm";

const StyledForm = styled(Form)`
    width: 300px;
    margin: 0 auto;
    background: white;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0px 0px 4px 0px lightgrey;
`;

const AddSmurfForm = props => {
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: 0,
        height: "",
        id: null
    });

    const handleChange = e => {
        e.preventDefault();
        const tempSmurf = {
            ...newSmurf,
            [e.target.name]: e.target.value
        };

        if (e.target.name === "height" && tempSmurf.height.slice(-2) !== "cm") {
            tempSmurf.height = e.target.value.toString().concat("cm");
        } else if (e.target.name === "age") {
            tempSmurf.age = parseInt(e.target.value);
        }

        console.log("newSmurf: ", tempSmurf);

        setNewSmurf(tempSmurf);
    };

    const handleSubmit = (e, smurf) => {
        e.preventDefault();
        console.log("Smurf in handleSubmit: ", smurf);
        props.addSmurf(smurf);
    };

    return (
        <StyledForm>
            <Label htmlFor="name">Name: </Label>
            <Input
                id="name"
                type="text"
                name="name"
                value={newSmurf.name}
                onChange={handleChange}
                placeholder="Smurf name"
            />

            <Label htmlFor="age">Age: </Label>
            <Input
                id="age"
                type="number"
                name="age"
                value={newSmurf.age}
                onChange={handleChange}
                placeholder="Age"
            />

            <Label htmlFor="height">Height: </Label>
            <Input
                id="height"
                type="text"
                name="height"
                value={newSmurf.height}
                onChange={handleChange}
                placeholder="Height in cm"
            />

            <Button onClick={e => handleSubmit(e, newSmurf)}>Add Smurf</Button>
        </StyledForm>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    };
};

export default connect(mapStateToProps, { addSmurf })(AddSmurfForm);
