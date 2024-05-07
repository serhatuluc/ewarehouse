import React from 'react'
import { Card } from 'react-bootstrap'

function Product({ product }: any) {
  return (
    <Card className="my-3 p-3 rounded">
       <Card.Body>
                <Card.Title as="div">
                    <strong>{product.name}</strong>
                </Card.Title>
            <Card.Text as="h3">
                ${product.price}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product
