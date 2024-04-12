import React, { useState } from 'react';

function UpiPaymentOptions({ onClose }) {
    const [selectedOption, setSelectedOption] = useState(null);

    const handlePaymentOptionSelect = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="upi-payment-options">
            <h3>Select Payment Option</h3>
            <ul>
                <li onClick={() => handlePaymentOptionSelect('Google Pay')}>Google Pay</li>
                <li onClick={() => handlePaymentOptionSelect('PhonePe')}>PhonePe</li>
                {/* Add more payment options here */}
            </ul>
            {selectedOption && (
                <div className="upi-qr-code">
                    {/* Display UPI QR code based on the selected payment option */}
                    {/* You can implement this part using a library like react-qr-code */}
                    <img src={`path_to_qr_codes/${selectedOption.toLowerCase()}_qr_code.png`} alt={`${selectedOption} QR Code`} />
                </div>
            )}
            <button onClick={onClose}>Close</button>
        </div>
    );
}

export default UpiPaymentOptions;
