import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import Product from "../components/Product";
import { ProductProps } from "../types";

function Store() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const hostname = window.location.hostname;
    const subdomain = hostname.split(".")[0]; // assuming your site is at tenantone.example.com

    axios
      .get(`http://${subdomain}.example.com:8000/api/products/`)
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="site-section bg-light">
      <div className="container">
        <div className="row">
          {products.map((product: any, index: number) => (
            <Product key={index} item={product} />
          ))}
        </div>
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <div className="site-block-27">
              <ul>
                <li>
                  <a href="index.html">&lt;</a>
                </li>
                <li className="active">
                  <span>1</span>
                </li>
                <li>
                  <a href="index.html">2</a>
                </li>
                <li>
                  <a href="index.html">&gt;</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Store;
