import { Button, FormControl, FormLabel, Input, Box } from "@chakra-ui/react";
import { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [coordenadaX, setCoordenadaX] = useState("");
    const [coordenadaY, setCoordenadaY] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        

        //Criar novo
        try {
            const response = await axios.post('http://localhost:3000/clientes', {
                nome,
                email,
                telefone,
                coordenadaX,
                coordenadaY,
            });

            console.log('Cliente criado!', response.data);
        } catch (error) {
            console.error('Erro ao criar cliente!', error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <FormControl display="flex" flexDir="column" gap={4}>
                    <Box>
                        <FormLabel>Nome</FormLabel>
                        <Input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </Box>
                    <Box>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Box>
                    <Box>
                        <FormLabel>Telefone</FormLabel>
                        <Input
                            type="text"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                        />
                    </Box>
                    <Box>
                        <FormLabel>coordenadaX</FormLabel>
                        <Input
                            type="number"
                            value={coordenadaX}
                            onChange={(e) => setCoordenadaX(e.target.value)}
                        />
                    </Box>
                    <Box>
                        <FormLabel>coordenadaY</FormLabel>
                        <Input
                            type="number"
                            value={coordenadaY}
                            onChange={(e) => setCoordenadaY(e.target.value)}
                        />
                    </Box>
                </FormControl>
                <Button type="submit" colorScheme="blue" mr={3}>
                    Cadastrar
                </Button>
            </form>
        </>
    )
}

export default Form;
