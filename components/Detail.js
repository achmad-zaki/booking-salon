import React from 'react'
import { Card, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap'
import FullLayout from '../src/layouts/FullLayout'

function Detail({dataBooking}) {
    console.log({dataBooking})
  return (
    <FullLayout>
        <div>
            <Card className='p-3'>
                <CardTitle>
                    <h5>Detail Pemesan</h5>
                </CardTitle>
                <CardBody>
                    <ListGroup>
                        <ListGroupItem className='d-flex align-items-center justify-content-between'>
                            <div>Jenis Services : </div>
                            <div className='fw-bold'>{dataBooking.attributes.treatments.data[0].attributes.paket}</div>
                        </ListGroupItem>
                        <ListGroupItem className='d-flex justify-content-between align-items-center'>
                            <div>Nama Pegawai : </div>
                            <div className='fw-bold'>{dataBooking.attributes.pegawai.data.attributes.nama}</div>
                        </ListGroupItem>
                        <ListGroupItem className='d-flex justify-content-between align-items-center'>
                            <div>Nama Pembooking : </div>
                            <div className='fw-bold'>{dataBooking.attributes.nama}</div>
                        </ListGroupItem>
                        <ListGroupItem className='d-flex justify-content-between align-items-center'>
                            <div>Alamat : </div>
                            <div className='fw-bold'>{dataBooking.attributes.alamat}</div>
                        </ListGroupItem>
                        <ListGroupItem className='d-flex justify-content-between align-items-center'>
                            <div>Jenis Kelamin : </div>
                            <div className='fw-bold'>{dataBooking.attributes.jenis_kelamin}</div>
                        </ListGroupItem>
                        <ListGroupItem className='d-flex justify-content-between align-items-center'>
                            <div>Tanggal Booking : </div>
                            <div className='fw-bold'>{dataBooking.attributes.tanggal}</div>
                        </ListGroupItem>
                        <ListGroupItem className='d-flex justify-content-between align-items-center'>
                            <div>Telepon : </div>
                            <div className='fw-bold'>{dataBooking.attributes.telepon}</div>
                        </ListGroupItem>
                        <ListGroupItem color='danger' active className='d-flex justify-content-between align-items-center'>
                            <div>Harga : </div>
                            <div className='fw-bold'>{dataBooking.attributes.treatments.data[0].attributes.harga}</div>
                        </ListGroupItem>
                    </ListGroup>
                </CardBody>
            </Card>
        </div>
    </FullLayout>
  )
}

export default Detail