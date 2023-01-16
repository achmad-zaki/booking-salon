import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import React from 'react'
import Booking from '../../components/Booking'
import FullLayoutUser from '../../src/layouts/FullLayoutUser'

function booking({treatments, pegawais}) {
    console.log({pegawais})
  return (
    <>
        <FullLayoutUser>
            <Booking data={treatments.data}/>
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
        }
        `
    })
    return {
        props: { treatments: data.treatments },
        }
}
export default booking