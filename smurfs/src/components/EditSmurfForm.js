import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { editSmurf, toggleIsEditing } from "../actions/smurfActions";

import { IoMdCloseCircleOutline } from "react-icons/io";

const Modal = styled.div`
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
    min-width: 100vw;
    min-height: 100vh;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: ${props => (props.isEditing ? "flex" : "none")};
    z-index: 5;
    position: absolute;
    top: 0;
    left: 0;
`;

const XIcon = styled(IoMdCloseCircleOutline)`
    position: absolute;
    top: -20px;
    right: -25px;
    cursor: pointer;
    font-size: 1.75rem;
`;

const FormContainer = styled.div`
    width: 400px;
    margin: 0 auto;
    position: relative;
    background: white;
    border-radius: 8px;
    box-shadow: 0px 0px 4px 0px lightgray;
    box-sizing: border-box;
    padding: 2rem 1rem;
`;

export const Form = styled.form`
    display: grid;
    grid-template-columns: 70px 1fr;
    grid-gap: 15px;
`;

export const Label = styled.label`
    align-self: center;
`;

export const Input = styled.input`
    font-size: 1rem;
    box-sizing: border-box;
    padding: 5px 10px;
    border-radius: 8px;
    border: 1px solid gray;
`;

export const Button = styled.button`
    font-size: 1rem;
    box-sizing: border-box;
    padding: 5px 10px;
    width: 100px;
    border-radius: 8px;
    box-shadow: 0px 0px 3px 0px lightgrey;
    justify-self: center;
    grid-column-end: span 2;
    background: #6eafdf;

    &:hover {
        background: #538eb9;
        color: white;
        cursor: pointer;
    }
`;

const EditSmurfForm = ({
    smurfToEdit,
    isEditing,
    editSmurf,
    toggleIsEditing
}) => {
    const [editedSmurf, setEditedSmurf] = useState({
        name: "",
        age: 0,
        height: "",
        id: null
    });

    useEffect(() => {
        setEditedSmurf({ ...smurfToEdit });
    }, [smurfToEdit]);

    const handleChange = e => {
        e.preventDefault();
        const tempSmurf = {
            ...editedSmurf,
            [e.target.name]: e.target.value
        };

        if (e.target.name === "height" && tempSmurf.height.slice(-2) !== "cm") {
            tempSmurf.height = e.target.value.toString().concat("cm");
        } else if (e.target.name === "age") {
            tempSmurf.age = parseInt(e.target.value);
        }

        console.log("editedSmurf: ", tempSmurf);

        setEditedSmurf(tempSmurf);
    };

    const handleSubmit = (e, smurf) => {
        e.preventDefault();
        console.log("smurf in handleSubmit in edit form: ", smurf);

        editSmurf(smurf);
        toggleIsEditing(smurf);
    };

    // const handleCloseModal = () => {
    //     toggleIsEditing(smurfToEdit);
    // }

    console.log("editedSmurf: ", editedSmurf);
    console.log("smurfToEdit: ", smurfToEdit);

    return (
        <Modal isEditing={isEditing}>
            {editedSmurf !== {} && (
                <FormContainer>
                    <XIcon onClick={() => toggleIsEditing(smurfToEdit)} />
                    <Form>
                        <Label htmlFor="edit_name">Name: </Label>
                        <Input
                            id="edit_name"
                            type="text"
                            name="name"
                            value={editedSmurf.name}
                            onChange={handleChange}
                            placeholder="Smurf name"
                        />

                        <Label htmlFor="edit_age">Age: </Label>
                        <Input
                            id="edit_age"
                            type="number"
                            name="age"
                            value={editedSmurf.age}
                            onChange={handleChange}
                            placeholder="Age"
                        />

                        <Label htmlFor="edit_height">Height: </Label>
                        <Input
                            id="edit_height"
                            type="text"
                            name="height"
                            value={editedSmurf.height}
                            onChange={handleChange}
                            placeholder="Height in cm"
                        />

                        <Button onClick={e => handleSubmit(e, editedSmurf)}>
                            Edit Smurf
                        </Button>
                    </Form>
                </FormContainer>
            )}
        </Modal>
    );
};

const mapStateToProps = state => {
    return {
        isEditing: state.isEditing,
        smurfToEdit: state.smurfToEdit
    };
};

export default connect(mapStateToProps, { editSmurf, toggleIsEditing })(
    EditSmurfForm
);
