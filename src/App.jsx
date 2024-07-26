// App.jsx
import React, { useState, useEffect } from 'react';
import Background from './components/Background';
import Fore from './components/Fore';
import Preloader from './components/Preloader';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => setLoading(false), 3000); // 3 seconds loading time
        return () => clearTimeout(timer);
    }, []);

    return (
        <GoogleOAuthProvider clientId="116644296400-hlhd54belava6k8eu5lrqmoat44tpf3b.apps.googleusercontent.com">
            <div className="App min-h-screen bg-gradient-to-r from-neon-blue to-neon-purple text-white flex items-center justify-center">
                {loading ? <Preloader /> : (
                    <>
                        <Background />
                        <Fore />
                    </>
                )}
            </div>
        </GoogleOAuthProvider>
    );
}

export default App;
