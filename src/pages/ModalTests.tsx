import React, { useState } from 'react';
import { Button, Modal } from '../components';

const ModalTests = () => {
    const [modalAberta, setModalAberta] = useState(false);

    return (
        <>
            <Modal useScrim showCloseButton modalOpened={modalAberta} onCloseButtonClick={() => setModalAberta(false)}>
                Teste.
            </Modal>

            <Button primary onClick={() => setModalAberta(true)}>Abrir Modal</Button>
        </>
        
    );
};

export default ModalTests;