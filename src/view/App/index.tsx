// Core
import React, { FC, useEffect, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';

// Containers
import { TopBar } from '../containers/TopBar';
import { Routes } from './Routes';

// Hooks
import { useLocalStorage } from '../../tools/hooks';
import { useTogglersRedux } from '../../bus/client';

// Assets and Styles
import { GlobalStyles, defaultTheme } from '../../assets';
import { AppContainer } from './styles';
// import { Practice } from './Practice/Practice';
import { News } from '../components/News';

export const App: FC = () => {
    const { setTogglerAction } = useTogglersRedux();
    const [ isDefaultTheme ] = useLocalStorage('isDefaultTheme', true);

    const setOnlineStatusHanlder = useCallback(() => void setTogglerAction({
        type:  'isOnline',
        value: navigator.onLine,
    }), [ setTogglerAction ]);

    useEffect(() => {
        setOnlineStatusHanlder();
        window.addEventListener('online', setOnlineStatusHanlder);
        window.addEventListener('offline', setOnlineStatusHanlder);
    }, []);

    return (
        <ThemeProvider theme = { isDefaultTheme ? defaultTheme : defaultTheme }>
            <GlobalStyles />
            <AppContainer>
                <TopBar />
                <Routes />
                {/* <Practice /> */}
                <News />
            </AppContainer>
        </ThemeProvider>
    );
};
