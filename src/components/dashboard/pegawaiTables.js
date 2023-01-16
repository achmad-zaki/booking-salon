import Image from "next/image";
import Link from "next/link";
import { Card, CardBody, CardTitle, CardSubtitle, Table, Button } from "reactstrap";

const pegawaiTables = ({data}) => {
  return (
    <Card>
      <CardBody>
        <Button className="btn my-3" color="primary">
          <Link href="/admin/pegawai/createdatapegawai">
            <a className="text-white text-decoration-none">
              Tambah
            </a>
          </Link>
        </Button>
        <CardTitle tag="h5">Tabel Nama Pegawai</CardTitle>
        <div className="table-responsive">
          <Table className="text-nowrap mt-3 align-middle table-hover" borderless>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Jenis Kelamin</th>
                <th>Umur</th>
                <th>Alamat</th>
                <th>Telepon</th>
              </tr>
            </thead>
            <tbody>
              {data.map((items, index) => (
                <tr key={index} className="border-top">
                  <td>{index + 1}</td>
                  <td>{items.attributes.nama}</td>
                  <td>{items.attributes.jenis_kelamin}</td>
                  <td>{items.attributes.umur}</td>
                  <td>{items.attributes.alamat}</td>
                  <td>{items.attributes.telepon}</td>
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
