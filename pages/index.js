import React from 'react'
import { Card, Container, Col, Row, FormGroup, Label, Input, Form, Button } from 'reactstrap'
import Image from 'next/image'
import Logo from '../src/assets/images/logos/logo-login.svg'
import Link from 'next/link'

function index() {
  return (
    <>
      <Container className='min-vh-100 d-flex align-items-center justify-content-center'>
        <Card className='p-5'>
          <Row className='align-items-center g-5'>
            <Col md={6}>
              <div className="text-title">
                <h1>Selamat Datang 👋 !</h1>
                <p className='text-muted'>Login Terlebih dahulu</p>
              </div>
              <Form className='mt-4'>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type='email'
                    placeholder='example@gmail.com'
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Password</Label>
                  <Input 
                    type='password'
                    placeholder='masukkan password'
                  />
                </FormGroup>
                  <Link href='/user/dashboard'>
                    <Button className='btn' color='primary'>
                        Login
                    </Button>
                  </Link>
              </Form>
            </Col>
            <Col md={6}>
              <Image
                width={800}
                src={Logo}
              />
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  )
}

export default index