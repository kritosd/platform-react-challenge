import React from 'react'
import { createRoot } from "react-dom/client";
import App from './App';

const element = document.getElementById('root') as HTMLElement

const root = createRoot(element)

root.render(<App/>)