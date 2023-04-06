/* eslint-disable no-script-url */
/// <reference types="@welldone-software/why-did-you-render" />
import './wdyr';

import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import StepTests from './pages/StepTests';
import Tests from './pages/Tests';
import PaginationTests from './pages/PaginationTests';
import ModalTests from './pages/ModalTests';
import TabTests from './pages/TabTests';

function App() {
    return (
        <div id="content">
            <TabTests />
        </div>
    );
}

export default App;
