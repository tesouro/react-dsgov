

import React, { useState } from 'react';
import { Button, CookieBar, Modal, Tab, Carousel } from '../components';

const RandomTests = () => {
    const [tab, setTab] = useState(1);

    return (
        <>
            <Carousel interno>
                <Carousel.Page active pageTitle='Teste1' backgroundColor='blue-10' stepName="Step 01">

                </Carousel.Page>
                <Carousel.Page pageTitle='Teste2' backgroundColor='blue-10'>

                </Carousel.Page>

                <Carousel.Page pageTitle='Teste3' backgroundColor='blue-10'>

                </Carousel.Page>

                <Carousel.Page pageTitle='Teste4' backgroundColor='blue-10'>

                </Carousel.Page>
                <Carousel.Page pageTitle='Teste5' backgroundColor='blue-10'>

                </Carousel.Page>
            </Carousel>
        </>
        
    );
};

export default RandomTests;