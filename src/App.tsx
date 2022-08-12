/* eslint-disable no-script-url */
/// <reference types="@welldone-software/why-did-you-render" />
import './wdyr';

import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import StepTests from './pages/StepTests';
import Tests from './pages/Tests';

function App() {
    return (
        <>
            <Tests />
        </>
    );
}

export default App;
