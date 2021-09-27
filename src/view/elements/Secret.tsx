import React from 'react';

type MatchType = {
    match: {
        isExact: boolean,
        params: {
            value: string,
        }
        path: string,
        url: string,
    }
}

export const Secret = ({ match }: MatchType) => (
    <p>My Secret: {match.params.value}</p>
);
