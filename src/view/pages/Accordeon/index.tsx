import React, { useState } from 'react';
import { Section, H1, Item, Question, Answer, SelectedQuestion } from './styles';

const accordeons: any = [
    {
        question: '1. What business are you doing?',
        answer:   `In the past few years India has made attempts
      to get back several historic items.Some historians
      claim that the Kohinoor was taken away from India by force.`,
    },
    {
        question: '1. What business are you doing?',
        answer:   `In the past few years India has made attempts
      to get back several historic items.Some historians
      claim that the Kohinoor was taken away from India by force.`,
    },
    {
        question: '1. What business are you doing?',
        answer:   `In the past few years India has made attempts
      to get back several historic items.Some historians
      claim that the Kohinoor was taken away from India by force.`,
    },
];

type AccordeonTypes = {
    question: string,
    answer: string,
}

type PreparedAccordeonTypes = {
    question: string,
    answer: string,
    id: number,
}

const preparedAccordeons = accordeons.map((accordeon: AccordeonTypes, index: number) => ({
    ...accordeon,
    id: index + 1,
}));

export const AccordeonList = ({ title = 'Accordeon' }) => {
    const [ selectedId, setSelectedId ] = useState(0);

    const handleClick = (id: number) => {
        if (selectedId === id) {
            setSelectedId(0);
        } else {
            setSelectedId(id);
        }
    };

    return (
        <Section>
            <H1>{title}</H1>
            {preparedAccordeons.map((accordeon: PreparedAccordeonTypes) => {
                return selectedId === accordeon.id ? (
                    <Item key = { accordeon.id }>
                        <SelectedQuestion>
                            <span>{accordeon.question}</span>
                        </SelectedQuestion>
                        <Answer>
                            In the past few years India has made attempts
                            to get back several historic items. Some historians
                            claim that the Kohinoor was taken away from India by force.
                        </Answer>
                    </Item>

                ) : (
                    <Item key = { accordeon.id }>
                        <Question onClick = { () => handleClick(accordeon.id) }>
                            <span>{accordeon.question}</span>
                        </Question>
                    </Item>
                );
            })}
        </Section>
    );
};
