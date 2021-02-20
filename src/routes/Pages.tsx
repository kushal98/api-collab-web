import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import Create from '../components/APIs/Create';

function Pages() {
    return (
        <Switch>
            <Route path="/create" exact={true} component={Create} />
            <Route path="/visible" exact={true} component={Create} />
        </Switch>
    );
}

export default Pages;