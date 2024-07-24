import React, { useRef, useState } from 'react';
import Card from './Card';
import Modal from './Modal';

function Fore() {
    const ref = useRef(null);
    const [cards, setCards] = useState([
        { id: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing", filesize: ".9mb", close: false, tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" } },
        { id: 2, desc: "Lorem ipsum dolor sit amet consectetur adipisicing", filesize: ".4mb", close: false, tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" } },
        { id: 3, desc: "Lorem ipsum dolor sit amet consectetur adipisicing", filesize: ".6mb", close: false, tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" } }
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const addCard = (newCard) => {
        setCards([...cards, { ...newCard, id: Date.now(), tag: { ...newCard.tag, isOpen: true } }]);
    };

    const deleteCard = (id) => {
        setCards(cards.filter(card => card.id !== id));
    };

    return (
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-20 flex-wrap p-5'>
            {cards.map((item) => (
                <Card 
                    key={item.id} 
                    data={item} 
                    reference={ref}
                    onDelete={() => deleteCard(item.id)} 
                />
            ))}
            <button
                onClick={() => setIsModalOpen(true)}
                className="fixed bottom-10 right-10 bg-blue-500 text-white px-4 py-2 rounded"
            >
                Add Card
            </button>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={addCard}
            />
        </div>
    );
}

export default Fore;
