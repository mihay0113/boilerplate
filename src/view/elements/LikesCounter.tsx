import React from 'react';
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
    return (
        <Span>{counts}</Span>
    );
};
