import React from 'react';

function PopUp({ message, onClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 flex flex-col justify-center rounded-lg shadow-lg">
                <p className="text-lg font-semibold">{message}</p>
                <button 
                    className="mt-4 p-2 bg-red-700 text-white rounded"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default PopUp;
