import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import React from 'react'
import TreatmentTables from '../../components/TreatmentTables';
import FullLayout from '../../src/layouts/FullLayout';

const pakettreatment = ({treatments}) => {
  console.log({treatments});
  return (
    <>
      <FullLayout>
        <TreatmentTables data={treatments.data}/>
      </FullLayout>
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