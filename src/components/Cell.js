import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETRIMINOES } from '../tetrominoes'

function Cell ({ type }) {
    return (
        <StyledCell type = { type } colour = { TETRIMINOES[type].colour } />
    );
}

export default Cell;
