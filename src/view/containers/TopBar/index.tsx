// Core
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

// Components
// import { UserMenu } from './UserMenu';
import { Button } from '../../elements';
import { book } from '../../App/Routes/book';

// Images
import logo from '../../../assets/images/logo.png';

// Styles
import { TopbarContainer, Logo } from './styles';

export const TopBar: FC = () => {
    return (
        <TopbarContainer>
            <Logo src = { logo } />
            {/* <h1>Boilerplate</h1> */}
            <Link to = { book.root }>
                <Button type = 'button'>
                    Home
                </Button>
            </Link>
            <Link to = { book.practice }>
                <Button type = 'button'>
                    Practice
                </Button>
            </Link>
            <Link to = { book.news }>
                <Button type = 'button'>
                    News
                </Button>
            </Link>
            <Link to = { book.people }>
                <Button type = 'button'>
                    People
                </Button>
            </Link>
            <Link to = { book.accordeon }>
                <Button type = 'button'>
                    Accordeon
                </Button>
            </Link>
            <Link to = { book.contacts }>
                <Button type = 'button'>
                    Contacts
                </Button>
            </Link>
            <Link to = { book.secret + '/value' }>
                <Button type = 'button'>
                    Secret
                </Button>
            </Link>
            <Link to = { book.signUp }>
                <Button type = 'button'>
                    Sign Up
                </Button>
            </Link>
            {/* <UserMenu /> */}
        </TopbarContainer>
    );
};
