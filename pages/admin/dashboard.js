import { Col, Row } from "reactstrap";
import TopCards from "../../src/components/dashboard/TopCards";
import FullLayout from "../../src/layouts/FullLayout";
import DashboardTables from "../../components/DashboardTables";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

function dashboard({bookings}) {
  console.log({bookings});
  return (
    <>
      <FullLayout>
        <Row>
          <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-success text-success"
              title="Profit"
              subtitle="Potong Rambut"
              earning="300.000"
              icon="bi bi-scissors"
            />
          </Col>
          <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-danger text-danger"
              title="Refunds"
              subtitle="Refund given"
              earning="$1k"
              icon="bi bi-coin"
            />
          </Col>
          <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-warning text-warning"
              title="New Project"
              subtitle="Yearly Project"
              earning="456"
              icon="bi bi-basket3"
            />
          </Col>
          <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-info text-into"
              title="Sales"
              subtitle="Weekly Sales"
              earning="210"
              icon="bi bi-bag"
            />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <DashboardTables data={bookings.data}/>
          </Col>
        </Row>
      </FullLayout>
    </>
  );
}

export async function getServerSideProps() {
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: gql`
      query {
        bookings {
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

export default dashboard
