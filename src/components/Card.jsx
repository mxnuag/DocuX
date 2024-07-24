import React from 'react';
import { FaFileAlt } from "react-icons/fa";
import { LuDownloadCloud } from "react-icons/lu";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { motion } from "framer-motion"

function Card({ data,reference }) {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}}
        dragTransition={{bounceStiffness:100, bounceDamping:10}}
        className='relative flex-shrink-0  w-60 h-72 rounded-[60px] bg-zinc-700/60 text-white px-8 py-10 overflow-hidden'>
            <FaFileAlt />
            <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
            <div className='footer absolute bottom-0 w-full py-3 left-0'>
                <div className='flex items-center justify-between px-8 py-3 mb-3 bottom-0'>
                    <h5>{data.filesize}</h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                        {data.close ? <MdOutlineCloseFullscreen />:<LuDownloadCloud size="0.7em" color='#000' />}
                    </span>
                </div>

                {

                    data.tag.isOpen?(<div className={`tag w-full py-4 ${data.tag.tagColor==="blue"?"bg-blue-600":"bg-green-600"} flex items-center justify-center`}>
                        <h3 className='text-md font-semibold'>{data.tag.tagTitle}</h3>
                    </div>):null
                }
            </div>

        </motion.div>

    );
}

export default Card
