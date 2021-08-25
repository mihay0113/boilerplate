import React, { useState } from 'react';
import { Container, Button, Count } from './styled';

export const useLocaleStorage = (key: string, initialValue: number): [number, any] => {
    const [ count, setCount ] = useState(() => {
        const dataFromStorage: any = localStorage.getItem(key);
        try {
            return JSON.parse(dataFromStorage) || initialValue;
        } catch {
            return initialValue;
        }
    });

    const save = (value: number) => {
        setCount(value);
        localStorage.setItem(key, JSON.stringify(value));
    };

    return [ count, save ];
};

export const Counter = () => {
    //Counter
    const [ count, setCount ] = useLocaleStorage('count', 0);

    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count - 1);
    //EndCounter

    //Descriptor
    type User = { firstName: string, lastName: string };
    type UserData = { job: string, country: string, lastName: string };

    const user: User = { firstName: 'Marcus', lastName: 'Kronenberg' };
    const userData: UserData = { job: 'developer', country: 'Germany', lastName: 'Schmidt' };

    Object.defineProperty(user, 'firstName', { writable: false });
    Object.defineProperty(userData, 'job', { configurable: false });

    const shallowMerge = (object1: any, object2: any) => {
        const copy1 = Object.getOwnPropertyNames(object1).reduce(function(result: any, name: any) {
            result[ name ] = object1[ name ];

            return result;
        }, {});

        const copy2 = Object.getOwnPropertyNames(object2).reduce(function (result: any, name: any) {
            result[ name ] = object2[ name ];

            return result;
        }, {});

        return {
            ...copy1,
            ...copy2,
        };
    };

    const result = Object.entries(shallowMerge(user, userData));
    //EndDescriptor

    //Promise1
    const personFirst = {
        name:     'Oliver',
        verified: true,
    };

    const personSecond = {
        name: 'Alex',
    };

    const isCustomerVerified = (person: any) => {
        return new Promise((resolve, reject) => {
            if (person.verified) {
                resolve(person.verified);
            } else {
                reject(new Error('Customer is not verified'));
            }
        });
    };

    isCustomerVerified(personFirst)
        .then((status) => console.log(status)) // true
        .catch((error) => console.log(`Error: ${error.message}`));

    isCustomerVerified(personSecond)
        .then((status) => console.log(status))
        .catch((error) => console.log(`Error: ${error.message}`)); // Customer is not verified
    //EndPromise1

    return (
        <>
            <Container className = 'App'>
                <Button
                    type = 'button'
                    value = { count }
                    onClick = { decrease }>-
                </Button>
                <Count>{count}</Count>
                <Button
                    type = 'button'
                    value = { count }
                    onClick = { increase }>+
                </Button>
            </Container>
            <Container>
                Results:
                {result.map((entry) => (
                    <p key = { entry[ 0 ] }>{`${entry[ 0 ]}: ${entry[ 1 ]}`}</p>
                ))}
            </Container>
        </>
    );
};
