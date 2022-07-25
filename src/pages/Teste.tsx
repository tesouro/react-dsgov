import { useEffect, useState } from 'react';
import Select from 'react-select';

const Teste: React.FC = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    const [selectedOption, setSelectedOption] = useState<any>(null);

    useEffect(() => {
        console.log(selectedOption);
    }, [selectedOption]);

    return (
        <div>
            <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
            />
        </div>
    );
};

export default Teste;
