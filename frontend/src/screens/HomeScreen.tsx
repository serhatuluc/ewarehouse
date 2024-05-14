import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import axios from 'axios'
import Product from '../components/Product'


function HomeScreen() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const hostname = window.location.hostname
        const subdomain = hostname.split('.')[0] // assuming your site is at tenantone.example.com

        axios.get(`http://${subdomain}.example.com:8000/api/products/`)
            .then(res => setProducts(res.data))
    }, [])

  return (
    <div>
      <h1>Latest Products</h1>
      {
        products.map((product: any) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))
        }
    </div>
  )
}

export default HomeScreen
