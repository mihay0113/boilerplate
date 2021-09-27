import React from 'react';
import styled from 'styled-components';
import { PersonType } from '../pages/People/types';

const B = styled.b`
  color: red;
  text-transform: uppercase;
  font-weight: bold;
`;

export const PeopleTable = ({ people }: { people: Array<PersonType>}) => (
    <table className = 'table is-bordered is-fullwidth is-hoverable'>
        <thead>
            <tr>
                <th>name</th>
                <td>sex</td>
                <td>born</td>
                <td>died</td>
                <td>mother</td>
                <td>father</td>
            </tr>
        </thead>
        <tbody>
            {
                people.map((person: PersonType) => (
                    <tr key = { person.name }>
                        <th>{person.name}</th>
                        <td>{person.sex}</td>
                        <td>{person.born}</td>
                        <td>{person.died}</td>
                        <td>{person.motherName || (<B>mother is not defined</B>)}</td>
                        <td>{person.fatherName || (<B>father is not defined</B>)}</td>
                    </tr>
                ))}
        </tbody>
    </table>
);
