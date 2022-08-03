import { useEffect, useState } from 'react';

interface FormularioProps {
    campos : any[];
}

const Formulario = ({campos} : FormularioProps) => {
    const [lista, setLista] = useState<any>({});

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => setLista((prevLista : any) => ({ ...prevLista, [e.target.name]: e.target.value }));

    useEffect(() => {
        console.log(lista);
    }, [lista]);

    return (
        <div>
            {campos.map((campo, index) => 
                <input 
                    key={index}
                    type={campo.tipo}
                    value={lista[campo.id] || ''} 
                    name={campo.id}
                    onChange={handleChange} 
                />
            )}
            
        </div>
    );
};

export default Formulario;