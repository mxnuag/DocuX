import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Modal({ isOpen, onClose, onSubmit }) {
    const [desc, setDesc] = useState('');
    const [filesize, setFilesize] = useState('');
    const [tagTitle, setTagTitle] = useState('');
    const [tagColor, setTagColor] = useState('green');
    const [error, setError] = useState('');

    const handleSubmit = () => {
        if (!desc || !filesize || !tagTitle) {
            setError('All fields are required.');
            return;
        }
        setError('');
        onSubmit({ desc, filesize, tag: { tagTitle, tagColor } });
        setDesc('');
        setFilesize('');
        setTagTitle('');
        setTagColor('green');
        onClose();
    };

    const modalVariants = {
        hidden: { opacity: 0, y: "-50%", scale: 0.8 },
        visible: { opacity: 1, y: "0%", scale: 1 },
        exit: { opacity: 0, y: "50%", scale: 0.8 }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={modalVariants}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                >
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <h2 className="text-xl font-bold mb-4">Add New Card</h2>
                        <input
                            type="text"
                            placeholder="Description"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            className="block w-full mb-2 p-2 border border-gray-300 rounded"
                        />
                        <input
                            type="text"
                            placeholder="Filesize (.Xmb)"
                            value={filesize}
                            onChange={(e) => setFilesize(e.target.value)}
                            className="block w-full mb-2 p-2 border border-gray-300 rounded"
                        />
                        <input
                            type="text"
                            placeholder="Tag Title"
                            value={tagTitle}
                            onChange={(e) => setTagTitle(e.target.value)}
                            className="block w-full mb-2 p-2 border border-gray-300 rounded"
                        />
                        <select
                            value={tagColor}
                            onChange={(e) => setTagColor(e.target.value)}
                            className="block w-full mb-2 p-2 border border-gray-300 rounded"
                        >
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
                            <option value="red">Red</option>
                            <option value="yellow">Yellow</option>
                            <option value="purple">Purple</option>
                            <option value="orange">Orange</option>
                            <option value="none">None</option>
                        </select>
                        {tagColor === "none" && (
                            <div className="w-full py-4 bg-gray-200 flex items-center justify-center">
                                <h3 className='text-md font-semibold'>No Color Selected</h3>
                            </div>
                        )}
                        {error && (
                            <p className="text-red-500 mb-4">{error}</p>
                        )}
                        <div className="flex justify-end">
                            <button
                                onClick={handleSubmit}
                                className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-700 transition"
                            >
                                Add Card
                            </button>
                            <button
                                onClick={onClose}
                                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Modal;
