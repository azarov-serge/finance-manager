import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/app';

import './shared/languages/i18n';

const root = document.getElementById('root') as HTMLElement;

createRoot(root).render(<App />);
