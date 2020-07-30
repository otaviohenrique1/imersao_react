import React from 'react';
import styled from "styled-components";
import './../../index.css';

const Titulo404 = styled.h1`
    text-align: center;
`;

function Pagina404() {
    return (
        <Titulo404>
            Erro 404 - Página não encontrada
        </Titulo404>
    );
}

export default Pagina404;