// Core
import React, { FC, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory, useLocation } from 'react-router-dom';

// Pages
import { Main } from '../../pages';
import { Practice } from '../../pages/Practice/Practice';

export const Private: FC = () => {
    const { push } = useHistory();
    const { pathname } = useLocation();

    useEffect(()=> {
        if (pathname.match(/login|register/)) {
            push('/');
        }
    });

    return (
        <Switch>
            <Route
                exact
                path = '/'>
                <Main />
            </Route>
            <Route
                path = '/practice'>
                <Practice />
            </Route>
            <Redirect to = '/form' />
        </Switch>
    );
};
