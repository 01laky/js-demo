import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import './styles.scss';

const PokemonListPage = () => {
    const GET_POKEMONS = gql`
        query {
            pokemons(limit: 10) {
                count
            }
        }
        `;
    const { loading, error, data } = useQuery(GET_POKEMONS, {
        notifyOnNetworkStatusChange: true,
        fetchPolicy: 'cache-and-network',
        variables: { limit: 10, offset: 0 },
    });
    console.log('LOADING => ', loading);
    console.log('ERROR => ', error);
    console.log('DATA => ', data);
    return (
        <div className="pokemon-list-page">
            POKEMON LIST
        </div>
    );
};

export default PokemonListPage;

