import React from 'react';

function BillModal({ bill }) {
    // Calculate total cost
    const totalCost = bill.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Bill Details</h2>
                <div>
                    {bill.map((item, index) => (
                        <div key={index}>
                            <p>{item.productName}: Rs.{item.price * item.quantity}</p>
                        </div>
                    ))}
                </div>
                <p>Total Cost: Rs.{totalCost}</p>
                <button onClick={() => console.log("Payment processed successfully!")}>Pay Now</button>
            </div>
        </div>
    );
}

export default BillModal;
