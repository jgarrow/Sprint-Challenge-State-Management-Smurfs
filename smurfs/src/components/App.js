import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import styled from "styled-components";

import { smurfReducer as reducer } from "../reducers/smurfReducer";

import SmurfList from "./SmurfList";
import AddSmurfForm from "./AddSmurfForm";
import EditSmurfForm from "./EditSmurfForm";

const store = createStore(reducer, applyMiddleware(thunk));

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
`;

function App() {
    return (
        <Provider store={store}>
            <AppContainer>
                <div>Hello World</div>
                <AddSmurfForm />
                <EditSmurfForm />
                <SmurfList />
            </AppContainer>
        </Provider>
    );
}

export default App;
