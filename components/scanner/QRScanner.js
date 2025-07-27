// components/QRScanner.js
import React, { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const QRScanner = ({ setScanner, setWalletUserAddress }) => {
    const [walletAddress, setWalletAddress] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Initialize the QR code scanner
        const qrCodeScanner = new Html5QrcodeScanner("qr-reader", {
            fps: 10, // Frames per second (controls scanning speed)
            qrbox: 250, // The size of the scanning box
        });

        // Success handler
        const onScanSuccess = (decodedText, decodedResult) => {
            setWalletAddress(decodedText); // Set the wallet address or QR code data
            setWalletUserAddress(decodedText);
            setScanner(false)
        };

        // Error handler
        const onScanError = (errorMessage) => {
            console.error("QR Scan Error:", errorMessage);
            setError(errorMessage);
        };

        // Start scanning
        qrCodeScanner.render(onScanSuccess, onScanError);

        // Cleanup on unmount
        return () => {
            qrCodeScanner.clear();
        };
    }, []);

    return (
        <div className="qr-scanner-container">
            <div className="qr-scanner-container-inner">
                <div className="qrcode-close" onClick={() => setScanner()}><i className="fa fa-times"></i></div>
                <h2>Scan the QR Code</h2>
                <div id="qr-reader" style={{ width: '100%' }}></div>

                {/* {error && <p style={{ color: 'red' }}>Error: {error}</p>} */}
                {walletAddress && <p>Wallet Address: <strong>{walletAddress}</strong></p>}
            </div>
        </div>
    );
};

export default QRScanner;
