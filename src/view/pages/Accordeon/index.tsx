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

const preparedAccordeons = accordeons.map((accordeon: any, index: any) => ({
    ...accordeon,
    id: index + 1,
}));

export const AccordeonList = () => {
    const [ selectedId, setSelectedId ] = useState(0);

    const handleClick = (id: number) => {
        if (selectedId === id) {
            setSelectedId(0);
        } else {
            setSelectedId(id);
        }
    };

    console.log(selectedId);

    return (
        <Section>
            <H1>Accordeon</H1>
            {preparedAccordeons.map((accordeon: any) => {
                return selectedId === accordeon.id ? (
                    <Item>
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
                    <Item>

                        <Question onClick = { () => handleClick(accordeon.id) }>
                            <span>{accordeon.question}</span>
                        </Question>
                    </Item>
                );
            })}
        </Section>
    );
};
