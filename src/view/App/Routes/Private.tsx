// Core
import React, { FC, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory, useLocation } from 'react-router-dom';

// Pages
import { Main } from '../../pages';
import { Practice } from '../../pages/Practice';
import { News } from '../../pages/News';
import { People } from '../../pages/People';
import { AccordeonList } from '../../pages/Accordeon';
import { ContactsPage } from '../../pages/ContactsPage';
import { book } from './book';
import { Secret } from '../../elements/Secret';
import { StudentRegistration } from '../../pages/StudentRegistration';

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
                path = { book.root }>
                <Main />
            </Route>
            <Route
                path =  { book.practice }>
                <Practice />
            </Route>
            <Route
                path =  { book.news }>
                <News />
            </Route>
            <Route
                path = { book.people }>
                <People />
            </Route>
            <Route
                path =  { book.accordeon }>
                <AccordeonList />
            </Route>
            <Route
                path = { book.contacts }>
                <ContactsPage />
            </Route>
            <Route
                path = { book.secret + '/:value?' }
                render = { ({ match }) => <Secret match = { match }/> }>
            </Route>
            <Route
                path = { book.signUp }>
                <StudentRegistration />
            </Route>
            <Redirect to = { book.form } />
        </Switch>
    );
};
