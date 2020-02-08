import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { smurfReducer as reducer } from "../reducers/smurfReducer";

import SmurfList from "./SmurfList";
import AddSmurfForm from "./AddSmurfForm";

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
    return (
        <Provider store={store}>
            <div>Hello World</div>
            <AddSmurfForm />
            <SmurfList />
        </Provider>
    );
}

export default App;
