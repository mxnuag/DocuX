import React, { useState } from 'react';

function Modal({ isOpen, onClose, onSubmit }) {
    const [desc, setDesc] = useState('');
    const [filesize, setFilesize] = useState('');
    const [tagTitle, setTagTitle] = useState('');
    const [tagColor, setTagColor] = useState('green');

    const handleSubmit = () => {
        onSubmit({ desc, filesize, tag: { tagTitle, tagColor } });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded">
                <h2>Add New Card</h2>
                <input
                    type="text"
                    placeholder="Description"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    className="block w-full mb-2"
                />
                <input
                    type="text"
                    placeholder="Filesize"
                    value={filesize}
                    onChange={(e) => setFilesize(e.target.value)}
                    className="block w-full mb-2"
                />
                <input
                    type="text"
                    placeholder="Tag Title"
                    value={tagTitle}
                    onChange={(e) => setTagTitle(e.target.value)}
                    className="block w-full mb-2"
                />
                <select
                    value={tagColor}
                    onChange={(e) => setTagColor(e.target.value)}
                    className="block w-full mb-2"
                >
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                </select>
                <button
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Add Card
                </button>
                <button
                    onClick={onClose}
                    className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default Modal;
