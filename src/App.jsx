import React from 'react';
import Background from './components/Background';
import Fore from './components/Fore';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
    return (
        <GoogleOAuthProvider clientId="116644296400-hlhd54belava6k8eu5lrqmoat44tpf3b.apps.googleusercontent.com">
            <div className="App">
                <Background />
                <Fore />
            </div>
        </GoogleOAuthProvider>
    );
}

export default App;
