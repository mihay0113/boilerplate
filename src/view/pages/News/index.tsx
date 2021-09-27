import React from 'react';
import { Article } from '../../components/Article';
import { Section } from './styles';
import sourceFromServer from '../../../source.json';

export const News = () => {
    return (
        <Section>
            {sourceFromServer.map((element) => (
                <Article
                    key = { element.title }
                    source = { element }
                />
            ))}
        </Section>
    );
};
