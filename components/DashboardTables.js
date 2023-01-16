import Link from 'next/link'
import React from 'react'
import { Button, Card, CardBody, CardTitle, Table } from 'reactstrap'

function DashboardTables({data}) {
  return (
    <Card>
    <CardBody>
      <CardTitle tag="h5">Tabel Booking</CardTitle>
      <div className="table-responsive">
        <Table className="text-nowrap mt-3 align-middle table-hover" borderless>
          <thead>
            <tr>
              <th>No</th>
              <th>Jenis Pelayanan</th>
              <th>Pegawai</th>
              <th>Nama</th>
              <th>Jenis Kelamin</th>
              <th>Tanggal Booking</th>
              <th>Opsi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((items, index) => (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{items.attributes.treatments.data[0].attributes.paket}</td>
                <td>{items.attributes.pegawai.data.attributes.nama}</td>
                <td>{items.attributes.nama}</td>
                <td>{items.attributes.jenis_kelamin}</td>
                <td>{items.attributes.tanggal}</td>
                <td>
                  <Link href={{
                      pathname: `/admin/detail`,
                      query: {
                          id: items.id,
                          nama: items.attributes.nama,
                          jenis_kelamin: items.attributes.jenis_kelamin,
                          tanggal: items.attributes.tanggal
                      }
                  }}>
                    <Button className='btn' color='primary'>
                        <i className="bi bi-eye"></i>
                    </Button>
                  </Link>
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

export default DashboardTables