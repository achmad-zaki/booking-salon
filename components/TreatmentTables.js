import { useRouter } from 'next/router'
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import React from 'react'
import { Card, CardTitle, Table, Button, CardBody } from 'reactstrap'

const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
  })

function TreatmentTables({data}) {
    const route = useRouter()

    async function deleteTreatment(id) {
        console.log(id)
        try {
            await client.mutate({
                mutation: gql`
                    mutation {
                        deleteTreatment(id:${id}) {
                            data {
                                id
                            }
                        }
                    }
                `
            })
            alert('berhasil di hapus')
            route.push('/admin/pakettreatment')
        } catch {
            alert('gagal di hapus')
        }
    }
  return (
    <Card>
        <CardBody>
            <CardTitle tag="h5">Tabel Nama Treatment</CardTitle>
            <div className="table-responsive">
                <Table className="text-nowrap mt-3 align-middle table-hover" borderless>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama Paket</th>
                        <th>Harga</th>
                        <th>Opsi</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((items, index) => (
                        <tr key={index} className="border-top">
                            <td>{index + 1}</td>
                            <td>{items.attributes.paket}</td>
                            <td>{items.attributes.harga}</td>
                        <td>
                            <Button className="btn me-3" color="danger" value={items.id} onClick={(e) => deleteTreatment(e.target.value)}>
                                <i className="bi bi-trash"></i>
                            </Button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        </CardBody>
    </Card>
  )
}

export default TreatmentTables