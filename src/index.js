import React from 'react'
import ReactDOM from 'react-dom/client';
import Section from './Section.js';
import {API_BASE, getHello} from './constants';

 const component = <Section />;


const rootElement = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElement);
root.render(component);
