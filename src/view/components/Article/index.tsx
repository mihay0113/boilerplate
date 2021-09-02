import React from 'react';
import { Header, Section, Poster, Tags, Main, Footer, Controls } from './styles';
import { CommentsCounter } from '../../elements/CommentsCounter';
import { LikesCounter } from '../../elements/LikesCounter';
import { Tag } from '../../elements/Tag';

type ArticleTypes = {
    title: string;
    description: string;
    published: string;
    likes: number;
    comments: number;
    image: string;
    tags: {
        firstTag: string,
        secondTag: string,
    };
}

export const Article = ({ title, description, published, likes, comments, image, tags }: ArticleTypes) => {
    return (
        <Section>
            <Header>
                <Poster>
                    <img
                        alt = 'ship'
                        src = { image }
                    />
                </Poster>
                <Tags>
                    <div>
                        <Tag source = { tags.firstTag }></Tag>
                    </div>
                    <div>
                        <Tag source = { tags.secondTag }></Tag>
                    </div>
                </Tags>
            </Header>
            <Main>
                <h1>
                    {title}
                </h1>
                <p>
                    {description}
                </p>
            </Main>
            <Footer>
                <span>{published}</span>
                <Controls>
                    <CommentsCounter counts = { likes } />
                    <LikesCounter counts = { comments } />
                </Controls>
            </Footer>
        </Section>
    );
};
