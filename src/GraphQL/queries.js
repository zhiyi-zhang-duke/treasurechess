import gql from 'graphql-tag';

export const GET_GAMES = gql`
    query {
        games {
            id
            event
            stage
            white
            black
            opening
            black_title
            white_title
            black_elo
            white_elo
            moves
        }
    }
`
export const GET_GAMES_BY_OPENING = gql`
    query gamesByOpening($openingType: String!) {
        gamesByOpening(openingType: $openingType) {
            id
            event
            stage
            white
            black
            opening
            black_title
            white_title
            black_elo
            white_elo
            moves
        }
    }
`

export const GET_OPENING_TYPES = gql`
    query {
        openingTypes
    }
`