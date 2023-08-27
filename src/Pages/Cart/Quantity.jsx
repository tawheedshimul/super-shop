import React, { useState } from 'react';

function Quantity() {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <div className="flex justify-center items-center">
            <div className="flex">
                <button
                    onClick={handleDecrement}
                    className="px-4 bg-gray-300 text-gray-700 hover:bg-gray-400 hover:text-gray-800 rounded-s"
                >
                    -
                </button>
                <span className="px-4 bg-gray-100 text-gray-700">{quantity}</span>
                <button
                    onClick={handleIncrement}
                    className="px-4 bg-gray-300 text-gray-700 hover:bg-gray-400 hover:text-gray-800 rounded-r"
                >
                    +
                </button>
            </div>
        </div>
    );
}

export default Quantity;
