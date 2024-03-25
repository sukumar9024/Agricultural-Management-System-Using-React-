// customerAddProduct.js

import React from 'react';
import "./customerAddProduct.css";

function CustomerAddProduct() {
  return (
    <div className="container">
      <div className="cotainer">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <h4 className="text-center font-weight-bold">Insert Your New Product</h4>
              </div>
              <div className="card-body">
                <form name="my-form" action="InsertProduct.php" method="post" enctype="multipart/form-data">
                  {/* Form fields */}
                  <div className="col-md-6 offset-md-4">
                    <button type="submit" className="btn btn-primary" name="insert_pro">
                      INSERT
                    </button>
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
