// Core
import React, { FC, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory, useLocation } from 'react-router-dom';

// Pages
import { Main } from '../../pages';
import { Practice } from '../../pages/Practice';
import { News } from '../../pages/News';
import { People } from '../../pages/People';
import { AccordeonList } from '../../pages/Accordeon';

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
            <Route
                path = '/news'>
                <News />
            </Route>
            <Route
                path = '/people'>
                <People />
            </Route>
            <Route
                path = '/tabs'>
                <People />
            </Route>
            <Route
                path = '/accordeon'>
                <AccordeonList />
            </Route>
            <Redirect to = '/form' />
        </Switch>
    );
};
