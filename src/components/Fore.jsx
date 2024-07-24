import React, { useRef } from 'react'
import Card from './Card'


function Fore() {

    const ref=useRef(null);
    const data = [
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing", filesize: ".9mb", close: false, tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing", filesize: ".4mb", close: false, tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" }
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing", filesize: ".6mb", close: false, tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" }
        },
    ];
    return (
        <div ref={ref} className=' fixed top-0 left-0 z-[3] w-full h-full flex gap-20 flex-wrap p-5'> 
            {
                data.map((item,index)=>(
                    <Card data={item} reference={ref}/>
                ))
            }
        </div>
    )
}

export default Fore