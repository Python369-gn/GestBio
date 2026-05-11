import './index.css';
import { screens } from './screens.ts';

// Simple Router / Page Switcher
const app = document.getElementById('app');

function navigate(page: string) {
    if (!app) return;
    
    // Always scroll to top on navigation
    window.scrollTo(0, 0);
    
    const renderFunc = (screens as any)[page];
    if (renderFunc) {
        app.innerHTML = renderFunc();
    } else {
        app.innerHTML = `<div class="p-10"><h1>404 - Page non trouvée</h1><button onclick="navigate('login')" class="text-primary underline">Retour à la connexion</button></div>`;
    }
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
    navigate('login');
});

// Expose navigate globally for onclick handlers in template strings
(window as any).navigate = navigate;
