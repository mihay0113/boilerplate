import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Span = styled.span`
  font-family: Helvetica;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);

  &::before {
    content: '♥';
    display: inline;
    font-size: 11px;
    opacity: 0.6;
  }
`;

export const LikesCounter = ({ counts }: { counts: number}) => {
    const [ count, setCount ] = useState(counts);
    const [ isClicked, setIsClicked ] = useState(false);

    const handleClickChanger = () => {
        if (!isClicked) {
            setCount(count + 1);
        } else {
            setCount(count - 1);
        }

        setIsClicked(!isClicked);
    };

    return (
        <Span onClick = { handleClickChanger }>{count}</Span>
    );
};
