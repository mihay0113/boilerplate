import styled from 'styled-components';

export const Section = styled.section`
    font-family: Verdana;
    width: 800px;
`;
export const H1 = styled.h1`
    text-transform: capitalize;
    margin-bottom: 30px;
    text-align: center;
`;
export const Item = styled.div`
    margin-bottom: 10px;

    &:hover {
      .accordion-question {
        color: #000;
      }
    }
`;
export const Question = styled.div`
    position: relative;
    padding: 15px 30px;
    background: #F1F4FB;
    font-size: 16px;
    color: rgba(0,0,0,0.6);
    line-height: 24px;
    cursor: pointer;
    border-radius: 4px;
    margin-bottom: 22px;
    transition: color 0.3s;

    &::after {
      content: '+';
      position: absolute;
      right: 30px;
    }
`;
export const Answer = styled.p`
    padding: 0 30px;
    margin: 0 0 22px;
    font-size: 16px;
    color: #000;
`;

export const SelectedQuestion = styled.div`
    position: relative;
    padding: 15px 30px;
    background: #F1F4FB;
    font-size: 16px;
    line-height: 24px;
    border-radius: 4px;
    margin-bottom: 22px;
    transition: color 0.3s;
    cursor: initial;
    color: #4886FF;

    &::after {
      content: '-';
      position: absolute;
      right: 30px;
    }
`;
