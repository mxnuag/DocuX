import React, { useRef, useState } from 'react';
import Card from './Card';
import Modal from './Modal';
import Notification from './Notification';
import { GoogleLogin } from '@react-oauth/google';

function Fore() {
    const ref = useRef(null);
    const [cards, setCards] = useState([
        { id: 1, desc: "This is a sample document", filesize: ".9mb", close: false, tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" } },
        { id: 2, desc: "You can add yours as well", filesize: ".4mb", close: false, tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" } },
        { id: 3, desc: "Fun Fact: 'Try dragging your document'", filesize: ".6mb", close: false, tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" } }
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [notification, setNotification] = useState({ message: '', isVisible: false, type: '' });
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication status
    const [userName, setUserName] = useState(''); // Store user name

    const handleLoginSuccess = (response) => {
        console.log("Login successful:", response);
        const userInfo = response.profileObj || {}; // Adjust according to the actual structure
        setUserName(userInfo.name || ''); // Fallback to empty string if name is not available
        setIsAuthenticated(true);
    };

    const handleLoginFailure = (error) => {
        console.log("Login failed:", error);
        setIsAuthenticated(false);
        setUserName('');
    };

    const addCard = (newCard) => {
        if (!isAuthenticated) {
            setNotification({ message: 'Please Sign in to make your docs.', isVisible: true, type: 'error' });
            setTimeout(() => setNotification({ ...notification, isVisible: false }), 3000); // Hide after 3 seconds
            return;
        }

        if (!newCard.desc || !newCard.filesize || !newCard.tag.tagTitle) {
            setNotification({ message: 'All fields are required!', isVisible: true, type: 'error' });
            setTimeout(() => setNotification({ ...notification, isVisible: false }), 3000); // Hide after 3 seconds
            return;
        }

        setCards([...cards, { ...newCard, id: Date.now(), tag: { ...newCard.tag, isOpen: true } }]);
        setNotification({ message: 'Card added successfully!', isVisible: true, type: 'add' });
        setTimeout(() => setNotification({ ...notification, isVisible: false }), 3000); // Hide after 3 seconds
        setIsModalOpen(false); // Close the modal after adding the card
    };

    const deleteCard = (id) => {
        if (!isAuthenticated) {
            setNotification({ message: 'Please Sign in to delete cards.', isVisible: true, type: 'error' });
            setTimeout(() => setNotification({ ...notification, isVisible: false }), 3000); // Hide after 3 seconds
            return;
        }
        setCards(cards.filter(card => card.id !== id));
        setNotification({ message: 'Card deleted successfully!', isVisible: true, type: 'delete' });
        setTimeout(() => setNotification({ ...notification, isVisible: false }), 3000); // Hide after 3 seconds
    };

    return (
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-20 flex-wrap p-5'>
            {/* Google Sign-In Button and User Greeting */}
            <div className="fixed top-5 right-5 z-50">
                {!isAuthenticated ? (
                    <GoogleLogin
                        onSuccess={handleLoginSuccess}
                        onError={handleLoginFailure}
                        buttonText="Sign In with Google"
                    />
                ) : (
                    <div className="flex items-center gap-4">
                        <span className="text-white">Hello, {userName}</span>
                        <button
                            onClick={() => {
                                setIsAuthenticated(false);
                                setUserName('');
                            }}
                            className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded"
                        >
                            Sign Out
                        </button>
                    </div>
                )}
            </div>

            {cards.map((item) => (
                <Card
                    key={item.id}
                    data={item}
                    reference={ref}
                    onDelete={() => deleteCard(item.id)}
                    isAuthenticated={isAuthenticated} // Pass authentication status
                />
            ))}
            <button
                onClick={() => {
                    if (!isAuthenticated) {
                        setNotification({ message: 'Please Sign in to make your docs.', isVisible: true, type: 'error' });
                        setTimeout(() => setNotification({ ...notification, isVisible: false }), 3000); // Hide after 3 seconds
                    } else {
                        setIsModalOpen(true);
                    }
                }}
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
