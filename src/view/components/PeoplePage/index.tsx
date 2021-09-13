import React from 'react';
import { PeopleTable } from '../../elements/PeopleTable';
import { PersonType } from '../../pages/People/types';
import { Spinner } from '../../elements';

const BASE_URL = 'https://mate-academy.github.io/react_people-table/api';

export class PeoplePage extends React.Component {
    state = {
        people:        [],
        isServerError: false,
    };

    componentDidMount() {
        this.getPeople()
            .then((peopleFromServer) => setTimeout(() => {
                const peopleWithParents = peopleFromServer.map((person: PersonType) => ({
                    ...person,
                    mother: peopleFromServer.find((human: PersonType) => human.name === person.motherName),
                    father: peopleFromServer.find((human: PersonType) => human.father === person.fatherName),
                }));

                this.setState({
                    people: peopleWithParents,
                });
            }, 3000));
    }

    getPeople = () => fetch(`${BASE_URL}/people.json`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error');
            }

            return response.json();
        })
        .catch(() => { this.setState({ isServerError: true }); });

    render() {
        const { people } = this.state;
        let Main = <div></div>;
        if (this.state.isServerError) {
            Main = <h1>Error</h1>;
        } else {
            people.length > 0
                ? Main = <PeopleTable people = { people } />

                : Main = <Spinner />;
        }

        return (
            <>
                <h2 className = 'title'>People Page</h2>
                {Main}
            </>
        );
    }
}
