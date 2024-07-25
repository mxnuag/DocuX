import React from 'react';
import { FaFileAlt } from "react-icons/fa";
import { LuDownloadCloud } from "react-icons/lu";
import { MdOutlineCloseFullscreen, MdDelete } from "react-icons/md";
import { motion } from "framer-motion";

function Card({ data, reference, onDelete }) {
    const tag = data.tag || {};
    const tagTitle = tag.tagTitle || ''; // Ensure tagTitle is a string
    const tagColor = tag.tagColor || 'green'; // Default to 'green'
    const isTagOpen = tag.isOpen !== undefined ? tag.isOpen : true; // Default to true

    const handleDownload = () => {
        const element = document.createElement("a");
        const file = new Blob([JSON.stringify(data)], { type: "application/json" });
        element.href = URL.createObjectURL(file);
        element.download = "card_info.json";
        document.body.appendChild(element);
        element.click();
    };

    return (
        <motion.div
            drag
            dragConstraints={reference}
            whileDrag={{ scale: 1.2 }}
            dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
            className='relative flex-shrink-0 w-60 h-72 rounded-[60px] bg-zinc-700/60 text-white px-8 py-10 overflow-hidden'
        >
            <FaFileAlt />
            <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
            <div className='footer absolute bottom-0 w-full py-3 left-0'>
                <div className='flex items-center justify-between px-8 py-3 mb-3 bottom-0'>
                    <h5>{data.filesize}</h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center hover:bg-zinc-500 cursor-pointer' onClick={handleDownload}>
                        {data.close ? <MdOutlineCloseFullscreen /> : <LuDownloadCloud size="0.7em" color='#000' />}
                    </span>
                </div>

                {isTagOpen && (
                    <div className={`tag w-full py-4 ${tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                        <h3 className='text-md font-semibold'>{tagTitle}</h3>
                    </div>
                )}

                <button
                    onClick={onDelete}
                    className="absolute top-0 right-2 bg-red-500 hover:bg-red-700 text-white p-1 rounded"
                >
                    <MdDelete />
                </button>
            </div>
        </motion.div>
    );
}

export default Card;
