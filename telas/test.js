import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Despesa from './Despesa'; // Importe seu componente Despesa

describe('Despesa Component', () => {
    test('renders Despesa component with correct props', () => {
        const { getByText } = render(<Despesa categoria="Comida" valor={50} />);

        // Verifica se o componente está renderizado com os valores corretos
        expect(getByText('Comida')).toBeTruthy();
        expect(getByText('R$50,00')).toBeTruthy();
    });

    test('onPress calls detalhes function', () => {
        const detalhesMock = jest.fn(); // Cria uma função mock para detalhes
        const { getByText } = render(<Despesa categoria="Comida" valor={50} detalhes={detalhesMock} />);

        // Simula o pressionamento do componente
        fireEvent.press(getByText('Comida R$50,00'));

        // Verifica se a função detalhes foi chamada corretamente
        expect(detalhesMock).toHaveBeenCalled();
    });
});