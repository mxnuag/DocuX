import React, { useRef, useState } from 'react';
import Card from './Card';
import Modal from './Modal';
import Notification from './Notification';

function Fore() {
    const ref = useRef(null);
    const [cards, setCards] = useState([
        { id: 1, desc: "This is a sample docuement", filesize: ".9mb", close: false, tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" } },
        { id: 2, desc: "You can add yours as well", filesize: ".4mb", close: false, tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" } },
        { id: 3, desc: "Fun Fact: 'Try draging your docuement'", filesize: ".6mb", close: false, tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" } }
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [notification, setNotification] = useState({ message: '', isVisible: false, type: '' });

    const addCard = (newCard) => {
        if (!newCard.desc || !newCard.filesize || !newCard.tag.tagTitle) {
            setNotification({ message: 'All fields are required!', isVisible: true, type: 'error' });
            setTimeout(() => setNotification({ ...notification, isVisible: false }), 3000); // Hide after 3 seconds
            return;
        }

        setCards([...cards, { ...newCard, id: Date.now(), tag: { ...newCard.tag, isOpen: true } }]);
        setNotification({ message: 'Card added successfully!', isVisible: true, type: 'add' });
        setTimeout(() => setNotification({ ...notification, isVisible: false }), 3000); // Hide after 3 seconds
    };

    const deleteCard = (id) => {
        setCards(cards.filter(card => card.id !== id));
        setNotification({ message: 'Card deleted successfully!', isVisible: true, type: 'delete' });
        setTimeout(() => setNotification({ ...notification, isVisible: false }), 3000); // Hide after 3 seconds
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
                className="fixed bottom-10 right-10 bg-blue-500 hover:bg-blue-700 hover:scale-110 transform transition-transform duration-300 ease-in-out shadow-lg hover:shadow-xl text-white px-7 py-4 rounded"
            >
                Add Card
            </button>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={addCard}
            />

            <Notification
                message={notification.message}
                isVisible={notification.isVisible}
                type={notification.type}
            />
        </div>
    );
}

export default Fore;
