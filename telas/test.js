import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import TelaDespesa from './TelaDespesa';
import fetchMock from 'jest-fetch-mock';

describe('TelaDespesa Component', () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    test('envia os dados da despesa ao chamar a função sendDespesa', async () => {
        const { getByPlaceholderText, getByText } = render(<TelaDespesa />);

        const inputValor = getByPlaceholderText('Inserir valor');
        const inputDescricao = getByPlaceholderText('Descrição...');
        const buttonAdicionar = getByText('Adicionar');

        // Aqui preenche os input's
        fireEvent.changeText(inputValor, '100');
        fireEvent.changeText(inputDescricao, 'Descrição da despesa');

        // Simalução da 'função' fetch
        fetchMock.mockResponseOnce(JSON.stringify({ success: true }));

        // Simulando o clique do botão de adicionar
        fireEvent.press(buttonAdicionar);

        // Esperando a chamada da função
        await waitFor(() => {
            expect(fetchMock).toHaveBeenCalledWith(
                'http://10.220.30.122:3000/despesas',
                expect.objectContaining({
                    method: 'POST',
                    body: JSON.stringify({
                        data: expect.any(String), // Verificando o formato da data enviada
                        categoria: expect.any(String), // Verificando a categoria 'esperada'
                        valor: '100',
                        descricao: 'Descrição da despesa',
                    }),
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
            );
        });
    });
});
