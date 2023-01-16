import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import Link from "next/link";
import { Card, CardBody, CardTitle, Table, Button, Alert } from "reactstrap";
import { useRouter } from "next/router";
import { useState } from "react";

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

const pegawaiTables = ({data}) => {

  const route = useRouter()

  async function deletePegawai(id, nama) {
      try {
        await client.mutate({
            mutation: gql`
              mutation {
                deletePegawai(id: ${id}) {
                  data {
                    id
                  }
                }
              }
            `
          })
          alert(`${nama} sukses di hapus`)
          route.push('/admin/datapegawai')
      } catch {
        alert('gagal')
      }
  }

  return (
    <Card>
      <CardBody>
        <Button className="btn my-3" color="primary">
          <Link href="/admin/createpegawai">
            <a className="text-white text-decoration-none">
              Tambah
            </a>
          </Link>
        </Button>
        <CardTitle tag="h5">Tabel Pegawai</CardTitle>
        <div className="table-responsive">
          <Table className="text-nowrap mt-3 align-middle table-hover" borderless>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Jenis Kelamin</th>
                <th>Alamat</th>
                <th>Opsi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((items, index) => (
                <tr key={index} className="border-top">
                  <td>{index + 1}</td>
                  <td>{items.attributes.nama}</td>
                  <td>{items.attributes.jenis_kelamin}</td>
                  <td>{items.attributes.alamat}</td>
                  <td>
                    <Button className="btn me-3" color="danger" value={items.id} onClick={(e) => deletePegawai(e.target.value, items.attributes.nama)}>
                        <i className="bi bi-trash"></i>
                    </Button>
                    <Link href={`/admin/editpegawai?id=${items.id}&nama=${items.attributes.nama}&jenisKelamin=${items.attributes.jenis_kelamin}
                    &alamat=${items.attributes.alamat}&telepon=${items.attributes.telepon}`
                    }>
                      <Button className="btn" color="warning">
                          <i className="bi bi-pencil"></i>
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
  );
};

export default pegawaiTables;
