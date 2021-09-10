// Core
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

// Components
import { UserMenu } from './UserMenu';
import { Button } from '../../elements';

// Images
import logo from '../../../assets/images/logo.png';

// Styles
import { TopbarContainer, Logo } from './styles';

export const TopBar: FC = () => {
    return (
        <TopbarContainer>
            <Logo src = { logo } />
            {/* <h1>Boilerplate</h1> */}
            <Link to = '/'>
                <Button type = 'button'>
                    Home
                </Button>
            </Link>
            <Link to = '/practice'>
                <Button type = 'button'>
                    Practice
                </Button>
            </Link>
            <Link to = '/news'>
                <Button type = 'button'>
                    News
                </Button>
            </Link>
            <Link to = '/people'>
                <Button type = 'button'>
                    People
                </Button>
            </Link>
            <Link to = '/accordeon'>
                <Button type = 'button'>
                    Accordeon
                </Button>
            </Link>
            <UserMenu />
        </TopbarContainer>
    );
};
