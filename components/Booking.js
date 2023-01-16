import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import React from 'react'
import { useState } from 'react'
import { Button, Card, CardBody, CardTitle, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
})

function Booking({data}) {
    const [nama, setNama] = useState('')
    const [paket, setPaket] = useState('')
    const [alamat, setAlamat] = useState('')
    const [telepon, setTelepon] = useState('')
    const [tanggal, setTanggal] = useState('')
    const [gender, setGender] = useState('')
    const [pegawai, setPegawai] = useState('')

    // const [alert, setAlert] = useState(false)
    // const [fail, setFail] = useState(false)
    // console.log(alert)
    // const [visible, setVisible] = useState(false)
    
    const onDismiss = () => {
        setVisible(false);
    };
    const route = useRouter()

    async function submitHandler(e) {
        e.preventDefault()
        try {
            const res = await client.mutate({
                mutation: gql`
                    mutation {
                        createBooking(data: {
                            nama: "${nama}",
                            alamat: "${alamat}",
                            telepon: "${telepon}",
                            jenis_kelamin: "${gender}",
                            tanggal: "${tanggal}",
                            treatments: [${paket}]
                            pegawai: "${pegawai}"
                        }) {
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
                                }
                            }
                        }
                    }
                `
            })
            // if(res.data) {
            //     setAlert(!alert);
            // }
            alert('berhasil booking')
            route.push('/user/booking')
        } catch {
            alert('coba lagi')
        }
    }
  return (
    <Card className='p-3'>
        <CardTitle>
            <h3>Form Booking</h3>
        </CardTitle>
        <CardBody>
            {/* {alert &&
                <Alert
                    color="success"
                    isOpen={visible}
                    toggle={onDismiss.bind(null)}
                    fade={false}
                >
                    Berhasil
                </Alert>
            } */}
            <Form onSubmit={submitHandler}>
                <Row>
                    <Col md={12}>
                        <FormGroup floating>
                                <select className="form-control" onChange={(e) => setPaket(e.target.value)}>
                                    {data.map((items, idx) => (
                                        <option key={idx} value={items.id}>{items.attributes.paket}</option>
                                    ))}
                                </select>
                            <Label>Jenis Booking</Label>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <FormGroup floating>
                            <Input 
                                type='text'
                                name='nama'
                                id='nama'
                                placeholder='Nama'
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                            />
                            <Label htmlFor='nama'>Nama</Label>
                        </FormGroup>
                        <FormGroup floating>
                            <Input 
                                type='text'
                                value={alamat}
                                placeholder='alamat'
                                onChange={(e) => setAlamat(e.target.value)}
                            />
                            <Label>Alamat</Label>
                        </FormGroup>
                        <FormGroup floating>
                            <Input 
                                type='number'
                                value={telepon}
                                placeholder='telepon'
                                onChange={(e) => setTelepon(e.target.value)}
                            />
                            <Label>No. Telepon</Label>
                        </FormGroup>
                    </Col>
                    <Col md={6}>    
                        <FormGroup floating>
                            <Input
                                type='date'
                                value={tanggal}
                                placeholder='tanggal'
                                onChange={(e) => setTanggal(e.target.value)}
                                />
                            <Label>Tanggal</Label>
                        </FormGroup>
                        <FormGroup floating>
                            <select defaultValue={"default"} className='form-control' onChange={(e) => setGender(e.target.value)}>
                                <option value="default" disabled>--Silahkan Pilih--</option>
                                <option value="laki-laki">Laki-Laki</option>
                                <option value="perempuan">Perempuan</option>
                            </select>
                            <Label>Jenis Kelamin</Label>
                        </FormGroup>
                        <FormGroup floating>
                            <select className='form-control' defaultValue={"default"} onChange={(e) => setPegawai(e.target.value)}>
                                <option value="default" disabled>--Silahkan Pilih--</option>
                                <option value="1">Ajeng</option>
                                <option value="2">Hakima</option>
                            </select>
                            <Label>Pegawai</Label>
                        </FormGroup>
                    </Col>
                </Row>
                <Button type='submit' color='primary'>Booking</Button>
            </Form>
        </CardBody>
    </Card>
  )
}

export default Booking