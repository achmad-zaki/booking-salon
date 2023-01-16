import { ApolloClient, gql, InMemoryCache } from '@apollo/client'
import { useRouter } from 'next/router';
import React from 'react'
import { useEffect } from 'react';
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
Button
} from 'reactstrap'

const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
})

function EditPegawai() {
    const [editNama, setNama] = useState('')
    const [editJenisKelamin, setJenisKelamin] = useState('')
    const [editAlamat, setAlamat] = useState('')
    const [editTelepon, setTelepon] = useState('')

    const route = useRouter()
    const { id, nama, jenisKelamin, alamat, telepon } = route.query

    useEffect(() => {
        if(typeof nama == 'string') {
            setNama(nama)
        }
        if(typeof jenisKelamin == 'string') {
            setJenisKelamin(jenisKelamin)
        }
        if(typeof alamat == 'string') {
            setAlamat(alamat)
        }
        if(typeof telepon == 'string') {
            setTelepon(telepon)
        }
    }, [nama, jenisKelamin, alamat, telepon])

    async function editPegawai(e) {
        e.preventDefault()
        try {
            await client.mutate({
                mutation: gql`
                mutation {
                    updatePegawai(id:${id},
                    data: {
                      nama: "${editNama}",
                      jenis_kelamin: "${editJenisKelamin}",
                      alamat: "${editAlamat}",
                      telepon: ${editTelepon}
                    }) {
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
            alert('edit berhasil')
            route.push('/admin/datapegawai')
        } catch {
            alert('edit gagal')
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
            <Form onSubmit={editPegawai}>
                <Row>
                    <Col md={6}>
                        <FormGroup floating>
                            <Input
                                type="text"
                                name="nama"
                                id="nama"
                                placeholder="Nama Pegawai"
                                value={editNama}
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
                                value={editJenisKelamin}
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
                                value={editAlamat}
                                onChange={(e) => setAlamat(e.target.value)}
                            />
                            <Label htmlFor='alamat'>Alamat</Label>
                        </FormGroup>
                        <FormGroup floating>
                            <Input
                                type="number"
                                name="telepon"
                                id="telepon"
                                placeholder="Telepon"
                                value={editTelepon}
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

export default EditPegawai