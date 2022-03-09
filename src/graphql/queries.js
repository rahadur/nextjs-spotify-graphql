import { gql } from '@apollo/client'

export const LoadArtists = gql`
  query data {
    queryArtists(byName: "Red Hot Chili Peppers") {
        name
        id
        image
        albums {
          name
          id
          image 
          tracks {
            id
            name
            preview_url
          }
        }
      }
  }
`

export const GetArtist = gql`
  query data($name: String!) {
    queryArtists(byName: $name) {
        name
        id
        image
        albums {
          name
          id
          image 
          tracks {
            id
            name
            preview_url
          }
        }
      }
  }
`