import React from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import { PeoplePage } from '../../components/PeoplePage';

export const People = () => (
    <>
        <header>
            <nav className = 'navbar'>
                <div className = 'navbar-item'>
                    <NavLink
                        exact
                        className = 'navbar-link'
                        to = '/people'>
                        HomePage
                    </NavLink>
                </div>
                <div className = 'navbar-item'>
                    <NavLink
                        className = 'navbar-link'
                        to = '/people/table'>
                        PeoplePage
                    </NavLink>
                </div>
            </nav>
        </header>
        <Switch>
            <Route
                exact
                path = '/people'>
                <h1 className = 'title'>Home Page</h1>
            </Route>
            <Route path = '/people/:table?'>
                <PeoplePage />
            </Route>
            <Redirect
                path = '/home'
                to = '/'
            />
        </Switch>
    </>
);
