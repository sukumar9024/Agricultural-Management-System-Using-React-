import React from 'react';
import "../Styling/customerAddProduct.css";

function CustomerAddProduct() {
  return (
    <div className="customer-add-product-container">
      <div className="customer-add-product-inner">
        <div className="customer-add-product-row justify-content-center">
          <div className="customer-add-product-col-md-8">
            <div className="customer-add-product-card">
              <div className="customer-add-product-card-header">
                <h4 className="text-center font-weight-bold">Insert Your New Product</h4>
              </div>
              <div className="customer-add-product-card-body">
                <form name="my-form" action="InsertProduct.php" method="post" encType="multipart/form-data">
                  <div className="form-group row">
                    <label htmlFor="product_title" className="col-md-4 col-form-label text-md-right text-center font-weight-bolder">Product Title:</label>
                    <div className="col-md-6">
                      <input type="text" id="product_title" className="form-control" name="product_title" placeholder="Enter Product title" required/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="product_stock" className="col-md-4 col-form-label text-md-right text-center font-weight-bolder">Product Stock:(In kg)</label>
                    <div className="col-md-6">
                      <input type="text" id="product_stock" className="form-control" name="product_stock" placeholder="Enter Product Stock" required/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="product_type" className="col-md-4 col-form-label text-md-right text-center font-weight-bolder">Product type :</label>
                    <div className="col-md-6">
                      <input type="text" id="product_type" className="form-control" name="product_type" placeholder="Example . potato" required/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="product_expiry" className="col-md-4 col-form-label text-md-right text-center font-weight-bolder">Product Expiry :</label>
                    <div className="col-md-6">
                      <input id="product_expiry" className="form-control" type="date" name="product_expiry" required/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="product_image" className="col-md-4 col-form-label text-md-right text-center font-weight-bolder">Product Image :</label>
                    <div className="col-md-6">
                      <input id="product_image" type="file" name="product_image"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="product_price" className="col-md-4 col-form-label text-md-right text-center font-weight-bolder">Product MRP : (Per kg)</label>
                    <div className="col-md-6">
                      <input type="text" id="product_price" className="form-control" name="product_price" placeholder="Enter Product price" required/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="product_desc" className="col-md-4 col-form-label text-md-right text-center font-weight-bolder"> Product Description:</label>
                    <div className="col-md-6">
                      <textarea id="product_desc" className="form-control" name="product_desc" rows="3" required></textarea>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="product_keywords" className="col-md-4 col-form-label text-md-right text-center font-weight-bolder">Product Keywords:</label>
                    <div className="col-md-6">
                      <input type="text" id="product_keywords" className="form-control" name="product_keywords" placeholder="Example best potatos" required/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="product_delivery" className="col-md-4 col-form-label text-md-right text-center font-weight-bolder">Delivery :</label>
                    <div className="col-md-6">
                      <input type="radio" id="product_delivery_yes" name="product_delivery" value="yes" />Yes
                      <input type="radio" id="product_delivery_no" name="product_delivery" value="no" />No
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-6 offset-md-4 insertButton">
                      <button type="submit" className="btn btn-primary" name="insert_pro">
                        INSERT
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerAddProduct;
