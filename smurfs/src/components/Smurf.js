import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { deleteSmurf, toggleIsEditing } from "../actions/smurfActions";

import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const Card = styled.div`
    border-radius: 8px;
    box-shadow: 0px 0px 4px 1px lightgray;
    box-sizing: border-box;
    padding: 5px 10px;
    position: relative;
    width: 150px;
    margin: 0.5rem 0;
    background: white;
`;

const PencilIcon = styled(MdEdit)`
    position: absolute;
    top: 8px;
    right: 30px;
    font-size: 1.25rem;
    cursor: pointer;
`;

const TrashIcon = styled(FaTrashAlt)`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
`;

const Name = styled.h2`
    text-align: center;
`;

const Smurf = ({ smurf, deleteSmurf, toggleIsEditing }) => {
    return (
        <Card>
            <PencilIcon onClick={() => toggleIsEditing(smurf)} />
            <TrashIcon onClick={() => deleteSmurf(smurf)} />
            <Name>{smurf.name}</Name>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
        </Card>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isEditing: state.isEditing
    };
};

export default connect(mapStateToProps, { deleteSmurf, toggleIsEditing })(
    Smurf
);
