import React from 'react'
import { Button, Card, CardBody, CardTitle, Col, Row } from 'reactstrap'
import Image from 'next/image'
import Link from 'next/link'

function MenuPaket() {
  return (
    <div>
        <Row>
            <Col md={3}>
                <Card className='p-3'>
                    <CardTitle className='mx-auto'>
                        <h5>Body Massage</h5>
                    </CardTitle>
                    <Image
                        src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                        width={500}
                        height={500}
                    />
                    <CardBody>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, magnam.</p>
                    </CardBody>
                    <Link href='/user/booking'>
                        <Button className='btn' color='primary'>
                            <a>Booking</a>
                        </Button>
                    </Link>
                </Card>
            </Col>
            <Col md={3}>
                <Card className='p-3'>
                    <CardTitle className='mx-auto'>
                        <h5>Body Scrub</h5>
                    </CardTitle>
                    <Image
                        src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        width={500}
                        height={500}
                    />
                    <CardBody>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, magnam.</p>
                    </CardBody>
                    <Link href='/user/booking'>
                        <Button className='btn' color='primary'>
                            <a>Booking</a>
                        </Button>
                    </Link>
                </Card>
            </Col>
            <Col md={3}>
                <Card className='p-3'>
                    <CardTitle className='mx-auto'>
                        <h5>Creambath</h5>
                    </CardTitle>
                    <Image
                        src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80"
                        width={500}
                        height={500}
                    />
                    <CardBody>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, magnam.</p>
                    </CardBody>
                    <Link href='/user/booking'>
                        <Button className='btn' color='primary'>
                            <a>Booking</a>
                        </Button>
                    </Link>
                </Card>
            </Col>
            <Col md={3}>
                <Card className='p-3'>
                    <CardTitle className='mx-auto'>
                        <h5>Facial Detox</h5>
                    </CardTitle>
                    <Image
                        src="https://images.unsplash.com/photo-1598556146869-aeb261893c35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=897&q=80"
                        width={500}
                        height={500}
                    />
                    <CardBody>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, magnam.</p>
                    </CardBody>
                    <Link href='/user/booking'>
                        <Button className='btn' color='primary'>
                            <a>Booking</a>
                        </Button>
                    </Link>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col md={4}>
                <Card className='p-3'>
                    <CardTitle className='mx-auto'>
                        <h5>Facial Traditional</h5>
                    </CardTitle>
                    <Image
                        src="https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        width={500}
                        height={400}
                    />
                    <CardBody>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, magnam.</p>
                    </CardBody>
                    <Link href='/user/booking'>
                        <Button className='btn' color='primary'>
                            <a>Booking</a>
                        </Button>
                    </Link>
                </Card>
            </Col>
            <Col md={4}>
                <Card className='p-3'>
                    <CardTitle className='mx-auto'>
                        <h5>Massage Punggung</h5>
                    </CardTitle>
                    <Image
                        src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        width={500}
                        height={400}
                    />
                    <CardBody>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, magnam.</p>
                    </CardBody>
                    <Link href='/user/booking'>
                        <Button className='btn' color='primary'>
                            <a>Booking</a>
                        </Button>
                    </Link>
                </Card>
            </Col>
            <Col md={4}>
                <Card className='p-3'>
                    <CardTitle className='mx-auto'>
                        <h5>Spa</h5>
                    </CardTitle>
                    <Image
                        src="https://images.unsplash.com/photo-1591343395082-e120087004b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                        width={500}
                        height={400}
                    />
                    <CardBody>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, magnam.</p>
                    </CardBody>
                    <Link href='/user/booking'>
                        <Button className='btn' color='primary'>
                            <a>Booking</a>
                        </Button>
                    </Link>
                </Card>
            </Col>
        </Row>
    </div>
  )
}

export default MenuPaket