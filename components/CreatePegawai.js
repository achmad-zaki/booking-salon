import { ApolloClient, gql, InMemoryCache } from '@apollo/client'
import { useRouter } from 'next/router';
import React from 'react'
import { useState } from 'react'
import { 
Row, 
Col, 
Form, 
FormGroup, 
Label, 
Card, 
Input, 
CardHeader, 
CardBody, 
Button, 
Alert
} from 'reactstrap'

const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
});

const CreatePegawai = () => {
    const [nama, setNama] = useState('')
    const [jenisKelamin, setJenisKelamin] = useState('')
    const [alamat, setAlamat] = useState('')
    const [telepon, setTelepon] = useState('')

    const route = useRouter()

    async function submitHandler(e) {
        e.preventDefault()
        try {
            await client.mutate({
                mutation: gql`
                    mutation {
                        createPegawai(data: {
                            nama: "${nama}",
                            jenis_kelamin: "${jenisKelamin}",
                            alamat: "${alamat}",
                            telepon: ${telepon}
                        })
                        {
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
                    }
                `
            })
            alert("tambah sukses")
            route.push('/admin/datapegawai')
        } catch {
            alert("gagal")
        }
    }

  return (
    <Card>
        <CardHeader>
            <div className="fs-5">
                Form Tambah Pegawai
            </div>
        </CardHeader>
        <CardBody>
            <Form onSubmit={submitHandler}>
                <Row>
                    <Col md={6}>
                        <FormGroup floating>
                            <Input
                                type="text"
                                name="nama"
                                id="nama"
                                placeholder="Nama Pegawai"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                            />
                            <Label htmlFor='nama'>Nama</Label>
                        </FormGroup>
                        <FormGroup floating>
                            <Input
                                type="text"
                                name="jenis_kelamin"
                                id="jenis_kelamin"
                                placeholder="Jenis Kelamin"
                                value={jenisKelamin}
                                onChange={(e) => setJenisKelamin(e.target.value)}
                            />
                            <Label htmlFor='jenis kelamin'>Jenis Kelamin</Label>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup floating>
                            <Input
                                type="text"
                                name="alamat"
                                id="alamat"
                                placeholder="Alamat"
                                value={alamat}
                                onChange={(e) => setAlamat(e.target.value)}
                            />
                            <Label htmlFor='alamat'>Alamat</Label>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup floating>
                            <Input
                                type="number"
                                name="telepon"
                                id="telepon"
                                placeholder="Telepon"
                                value={telepon}
                                onChange={(e) => setTelepon(e.target.value)}
                            />
                            <Label htmlFor='telepon'>No. Telepon</Label>
                        </FormGroup>
                    </Col>
                </Row>
                <Button className='btn' color='primary' type='submit'>Simpan</Button>
            </Form>
        </CardBody>
    </Card>
  )
}

export default CreatePegawai