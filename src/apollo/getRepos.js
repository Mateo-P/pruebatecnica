import { gql } from '@apollo/client';

export const GET_REPOS = gql`
  query getRepos($login: String!) {
    user(login: $login) {
      repositories(last: 100) {
        nodes {
          name
          visibility
          createdAt
          owner {
            login
          }
          url
        }
      }
    }
  }
`;
