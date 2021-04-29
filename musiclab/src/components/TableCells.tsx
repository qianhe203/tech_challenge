import React, { FC } from 'react';
import styled from 'styled-components'
import { ISongProps } from '../resources/ISongProps';


const Row = styled.div`
    display: table-row;
`;

const Col = styled.div`
    display: table-cell;
    border:1px solid #343a40;
`;
const TableCells: FC<ISongProps> = ({ song, artist, songReleaseDate, playCount, metricA, metricB, metricC, metricD,
    metricE, metricF, metricG, metricH, metricI, metricJ, metricK, metricL, metricM, metricN, metricO, metricP }: ISongProps) => {
    return(
        <Row>
            <Col>{song}</Col>
            <Col>{artist}</Col>
            <Col>{songReleaseDate}</Col>
            <Col>{playCount}</Col>
            <Col>{metricA}</Col>
            <Col>{metricB}</Col>
            <Col>{metricC}</Col>
            <Col>{metricD}</Col>
            <Col>{metricE}</Col>
            <Col>{metricF}</Col>
            <Col>{metricG}</Col>
            <Col>{metricH}</Col>
            <Col>{metricI}</Col>
            <Col>{metricJ}</Col>
            <Col>{metricK}</Col>
            <Col>{metricL}</Col>
            <Col>{metricM}</Col>
            <Col>{metricN}</Col>
            <Col>{metricO}</Col>
            <Col>{metricP}</Col>
        </Row>
    );
}
export default TableCells;
