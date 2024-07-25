import React from 'react';
import { motion } from 'framer-motion';

const notificationVariants = {
    hidden: { opacity: 0, y: 50 }, // Adjust for bottom position
    visible: { opacity: 1, y: 0 },
};

function Notification({ message, isVisible, type }) {
    const positionClass = type === 'add' ? 'top-5' : 'bottom-5';
    const bgColor = type === 'add' ? 'bg-green-500' : (type === 'delete' ? 'bg-red-500' : 'bg-gray-500');

    return (
        <motion.div
            className={`fixed right-5 ${positionClass} ${bgColor} text-white px-4 py-2 rounded shadow-lg z-50`}
            variants={notificationVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ duration: 0.5 }}
        >
            {message}
        </motion.div>
    );
}

export default Notification;
