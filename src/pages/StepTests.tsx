import React, { useCallback, useMemo, useState } from 'react';
import { Col, Container, Pagination, Row, Step } from '../components';

const StepTests : React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);


    const x = useMemo(() => [
        {start: 5, end: 95}
    ], []);

    const steps = useMemo(() => ['Exemplo de Rótulo 1', 'Exemplo de Rótulo 2', 'Exemplo de Rótulo 3'], []);

    const onChange = useCallback((value : any) => {
        setCurrentStep(value);
    }, []);

    const onChangePag = useCallback((newPage : any) => {
        setCurrentPage(newPage);
    }, []);

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        {currentPage === 1 && <span>Estou na Página 1</span>}
                        {currentPage === 2 && <span>Estou na Página 2</span>}
                        {currentPage === 3 && <span>Estou na Página 3</span>}
              
                        <Pagination onChange={onChangePag} pageCount={100} ellipsis={x}/>
                    </Col>
                </Row>
            </Container>
            <Step 
                steps={steps}
                orientation="vertical"
                labelPosition="right" 
                initialStep={1}
                onChange={onChange}
            />
        </>
        
    );
};

export default StepTests;