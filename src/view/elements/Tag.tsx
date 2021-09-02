import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  background-color: orange;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 6px 15px;
  font-family: Helvetica;
  font-size: 14px;
  font-weight: 400;
`;

export const Tag = ({ source }: { source: string }) => {
    return (
        <Span>{source}</Span>
    );
};
