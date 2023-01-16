import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import React from 'react'
import MenuPaket from '../../components/MenuPaket';
import FullLayoutUser from '../../src/layouts/FullLayoutUser';

const pakettreatment = ({treatments}) => {
  console.log({treatments});
  return (
    <>
      <FullLayoutUser>
        <MenuPaket/>
      </FullLayoutUser>
    </>
  )
}

export async function getServerSideProps() {
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: gql`
      query {
        treatments {
          data {
            id
            attributes {
              paket
              harga
            }
          }
        }
      }`
    })
    return { 
      props: { treatments: data.treatments } 
    }
}

export default pakettreatment