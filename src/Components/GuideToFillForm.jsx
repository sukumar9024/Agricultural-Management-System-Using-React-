import React from 'react';
import "../Styling/Guide.css";
import {Link} from "react-router-dom";

function GuideToFillForm() {

    return (
        <div className="container">
            <Link to="/farmer"> <button className="close-button" >×</button></Link>
            <h2 className="text-center">Guide to Fill the Form</h2>
            <ol>
                <li><strong>Product Title:</strong><br />
                    Enter the title/name of your product.<br />
                    Example: "Organic Potatoes"
                </li>
                <li><strong>Product Stock:</strong><br />
                    Enter the available stock of your product in kilograms.<br />
                    Example: "100"
                </li>
                <li><strong>Product Type:</strong><br />
                    Enter the type or category of your product.<br />
                    Example: "Potatoes"
                </li>
                <li><strong>Product Expiry:</strong><br />
                    Select the expiration date of your product.<br />
                    Example: "2024-04-10"
                </li>
                <li><strong>Product Image:</strong><br />
                    Upload an image of your product.
                </li>
                <li><strong>Product MRP (Per kg):</strong><br />
                    Enter the Maximum Retail Price (MRP) of your product per kilogram.<br />
                    Example: "50"
                </li>
                <li><strong>Product Description:</strong><br />
                    Provide a brief description of your product.<br />
                    Example: "Organically grown potatoes from our farm. High quality and fresh."
                </li>
                <li><strong>Product Keywords:</strong><br />
                    Enter keywords related to your product for better searchability.<br />
                    Example: "organic, potatoes, fresh, farm"
                </li>
                <li><strong>Delivery:</strong><br />
                    Select whether delivery is available for your product.<br />
                    Example: "Yes" or "No"
                </li>
                <li><strong>Insert Button:</strong><br />
                    Click the "Insert" button to submit your product details.
                </li>
                <li><strong>Cancel Button:</strong><br />
                    Click the "Cancel" button to go back to the previous page without saving changes.
                </li>
            </ol>
        </div>
    );
}

export default GuideToFillForm;
