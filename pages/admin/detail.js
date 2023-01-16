import React from 'react'
import Detail from '../../components/Detail'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { useRouter } from 'next/router'

function detail({bookings}) {
  return (
    <>
        <Detail dataBooking={bookings.data[0]}/>
    </>
  )
}

export async function getServerSideProps({query}) {
    const id = query.id

    const client = new ApolloClient({
        uri: 'http://localhost:1337/graphql',
        cache: new InMemoryCache()
    })

    const { data } = await client.query({
    query: gql`
        query {
            bookings(filters:{id:{eq:${id}}}) {
            data {
                id
                attributes {
                nama
                alamat
                telepon
                jenis_kelamin
                tanggal
                treatments {
                    data {
                    id
                        attributes {
                            paket
                            harga
                        }
                    }
                }
                pegawai {
                    data {
                    id
                        attributes {
                            nama
                        }
                    }
                }
                }
            }
            }
        }
        `
    })
    return {
        props: {
            bookings: data.bookings
        },
    }
}
export default detail