import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostComments from './index';

describe('Teste para o componente PostComments', () => {
    it('Deve permitir inserir dois comentários', () => {
        render(<PostComments />);

        const input = screen.getByTestId('input-comentario');
        const botao = screen.getByTestId('btn-enviar');

        // Primeiro comentário
        fireEvent.change(input, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(botao);

        // Segundo comentário
        fireEvent.change(input, { target: { value: 'Segundo comentário' } });
        fireEvent.click(botao);

        // Verificações
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
});
