import React from 'react';
import { Article } from '../Article';
import { Section } from './styles';

const title = 'American writer of bad cowboy stories arrived in';
const description = 'Volunteering to help people in need combined with travelling to faraway places is a new';
const published = '15.07.2017';
const likes = 315;
const comments = 1;
const image = 'https://miro.medium.com/max/1280/1*N6eYi8bOQ9tyZy8NGWDNKA.png';
const tags = {
    firstTag:  'Literature',
    secondTag: 'Books',
};

export const News = () => {
    return (
        <Section>
            <Article
                comments = { comments }
                description = { description }
                image = { image }
                likes = { likes }
                published = { published }
                tags = { tags }
                title = { title }
            />
            <Article
                comments = { comments }
                description = { description }
                image = { image }
                likes = { likes }
                published = { published }
                tags = { tags }
                title = { title }
            />
            <Article
                comments = { comments }
                description = { description }
                image = { image }
                likes = { likes }
                published = { published }
                tags = { tags }
                title = { title }
            />
        </Section>
    );
};
