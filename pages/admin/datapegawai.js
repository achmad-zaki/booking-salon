import React from 'react'
import PegawaiTables from '../../components/PegawaiTables'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import FullLayout from '../../src/layouts/FullLayout'

const datapegawai = ({pegawais}) => {
    console.log({pegawais})
  return (
    <>
        <FullLayout>
            <PegawaiTables data={pegawais.data}/>
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
            pegawais {
                data {
                    id
                    attributes {
                        nama
                        jenis_kelamin
                        alamat
                        telepon
                    }
                }
            }
        }` 
    })
    return {
        props: { pegawais: data.pegawais },
    }
}

export default datapegawai