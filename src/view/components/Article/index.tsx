import React from 'react';
import { Header, Section, Poster, Tags, Main, Footer, Controls } from './styles';
import { CommentsCounter } from '../../elements/CommentsCounter';
import { LikesCounter } from '../../elements/LikesCounter';
import { Tag } from '../../elements/Tag';

export const Article = () => {
    return (
        <Section>
            <Header>
                <Poster>
                    <img
                        alt = 'ship'
                        src = 'https://miro.medium.com/max/1280/1*N6eYi8bOQ9tyZy8NGWDNKA.png'
                    />
                </Poster>
                <Tags>
                    <div>
                        <Tag title = 'Literature'></Tag>
                    </div>
                    <div>
                        <Tag title = 'Books'></Tag>
                    </div>
                </Tags>
            </Header>
            <Main>
                <h1>
                    American writer of bad cowboy stories arrived in
                </h1>
                <p>
                    Volunteering to help people in need combined with travelling to faraway places is a new
                </p>
            </Main>
            <Footer>
                <span>15.07.2017</span>
                <Controls>
                    <CommentsCounter />
                    <LikesCounter />
                </Controls>
            </Footer>
        </Section>
    );
};
