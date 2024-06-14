import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const SingleProduct: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(0);

  const handleQuantityChange = (amount: number) => {
    setQuantity((prev) => Math.max(0, prev + amount));
  };

  const location = useLocation();
  const { product } = location.state;
  const { productId } = useParams();

  return (
    <div>
      <div className="bg-light py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-0">
              <Link to="/">Home</Link> <span className="mx-2 mb-0">/</span>
              <Link to="/store">Store</Link> <span className="mx-2 mb-0">/</span>
              <strong className="text-black">{ product.name }</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-5 mr-auto">
              <div className="border text-center">
                <img
                  src={product.image}
                  alt="Image"
                  className="img-fluid p-5"
                />
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="text-black">{ product.name }</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur, vitae, explicabo? Incidunt facere, natus soluta
                dolores iusto! Molestiae expedita veritatis nesciunt doloremque
                sint asperiores fuga voluptas, distinctio, aperiam, ratione
                dolore.
              </p>
              <p className="text-primary h4">
                {product.sale_price ? (
                  <>
                    <del>${product.price}</del> &mdash; ${product.sale_price}
                  </>
                ) : (
                  <>${product.price}</>
                )}
              </p>

              <div className="mb-5">
                <div className="input-group mb-3" style={{ maxWidth: "220px" }}>
                  <div className="input-group-prepend">
                    <button
                      className="btn btn-outline-primary"
                      type="button"
                      onClick={() => handleQuantityChange(-1)}
                    >-</button>
                  </div>
                  <input
                    type="text"
                    className="form-control text-center"
                    value={quantity}
                    readOnly
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-primary"
                      type="button"
                      onClick={() => handleQuantityChange(1)}
                    >+</button>
                  </div>
                </div>
              </div>
              <p>
                <a
                  href="cart.html"
                  className="buy-now btn btn-sm height-auto px-4 py-3 btn-primary"
                >
                  Add To Cart
                </a>
              </p>

              <div className="mt-5">
                <ul
                  className="nav nav-pills mb-3 custom-pill"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="pills-home-tab"
                      data-toggle="pill"
                      href="#pills-home"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Ordering Information
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="pills-profile-tab"
                      data-toggle="pill"
                      href="#pills-profile"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Specifications
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <table className="table custom-table">
                      <thead>
                        <tr>
                          <th>Material</th>
                          <th>Description</th>
                          <th>Packaging</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">OTC022401</th>
                          <td>
                            Pain Management: Acetaminophen PM Extra-Strength
                            Caplets, 500 mg, 100/Bottle
                          </td>
                          <td>1 BT</td>
                        </tr>
                        <tr>
                          <th scope="row">OTC022401</th>
                          <td>
                            Pain Management: Acetaminophen PM Extra-Strength
                            Caplets, 500 mg, 100/Bottle
                          </td>
                          <td>144/CS</td>
                        </tr>
                        <tr>
                          <th scope="row">OTC022401</th>
                          <td>
                            Pain Management: Acetaminophen PM Extra-Strength
                            Caplets, 500 mg, 100/Bottle
                          </td>
                          <td>1 EA</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <table className="table custom-table">
                      <tbody>
                        <tr>
                          <td>HPIS CODE</td>
                          <td className="bg-light">999_200_40_0</td>
                        </tr>
                        <tr>
                          <td>HEALTHCARE PROVIDERS ONLY</td>
                          <td className="bg-light">No</td>
                        </tr>
                        <tr>
                          <td>LATEX FREE</td>
                          <td className="bg-light">Yes, No</td>
                        </tr>
                        <tr>
                          <td>MEDICATION ROUTE</td>
                          <td className="bg-light">Topical</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
