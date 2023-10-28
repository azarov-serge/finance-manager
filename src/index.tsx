import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/app';

const root = document.getElementById('root') as HTMLElement;

createRoot(root).render(<App />);
