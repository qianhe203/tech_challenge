import React from 'react';
import styled from 'styled-components'

function SongPage() {
    const TableHeader = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
        display: table-caption;
        font-weight: bold;
    `;

    const Container = styled.div`
        width:100%;
        padding-right:15px;
        padding-left:15px;
        margin-right:auto;
        margin-left:auto;
        display: table;
    `;
        // display:flex;
        // flex-wrap:wrap;
        // margin-right:15px;
        // margin-left:15px;
    const HeadRow = styled.div`
        display: table-header-group;
        background-color: gray;
        font-weight: bold;
    `;

    const HeadCell = styled.div`
        display: table-cell;
        padding: 10px;
        border-bottom: 1px solid black;
    `; 

    const TableBody = styled.div`
        display: table-row-group;
    `;

    const Row = styled.div`

        display: table-row;

    `;
        // position:relative;
        // width:100%;
        // padding-right:15px;
        // padding-left:15px;
        // border:1px solid #343a40;
        // flex:0 0 25%;
        // max-width:25%
    const Col = styled.div`
        display: table-cell;
        border:1px solid #343a40;

    `;
  return (
    <div className="App">
      <Container>
          <TableHeader> Top Songs</TableHeader> 
            <HeadRow> 
                <HeadCell>A</HeadCell>
                <HeadCell>B</HeadCell>
                <HeadCell>C</HeadCell>
                <HeadCell>D</HeadCell>
                <HeadCell>E</HeadCell>
                <HeadCell>F</HeadCell>
                <HeadCell>A</HeadCell>
                <HeadCell>B</HeadCell>
                <HeadCell>C</HeadCell>
                <HeadCell>D</HeadCell>
                <HeadCell>E</HeadCell>
                <HeadCell>F</HeadCell>
                <HeadCell>A</HeadCell>
                <HeadCell>B</HeadCell>
                <HeadCell>C</HeadCell>
                <HeadCell>D</HeadCell>
                <HeadCell>E</HeadCell>
                <HeadCell>F</HeadCell>
            </HeadRow>

            <TableBody>
                <Row>
                    <Col>1</Col>
                    <Col>2</Col>
                    <Col>3</Col>
                    <Col>4</Col>
                    <Col>5</Col>
                    <Col>6</Col>
                    <Col>1</Col>
                    <Col>2</Col>
                    <Col>3</Col>
                    <Col>4</Col>
                    <Col>5</Col>
                    <Col>6</Col>
                    <Col>1</Col>
                    <Col>2</Col>
                    <Col>3</Col>
                    <Col>4</Col>
                    <Col>5</Col>
                    <Col>6</Col>
                </Row>

                <Row>
                    <Col>1</Col>
                    <Col>2</Col>
                    <Col>3</Col>
                    <Col>1</Col>
                    <Col>2</Col>
                    <Col>3</Col>
                    <Col>1</Col>
                    <Col>2</Col>
                    <Col>3</Col>
                    <Col>4</Col>
                    <Col>5</Col>
                    <Col>6</Col>
                    <Col>1</Col>
                    <Col>2</Col>
                    <Col>3</Col>
                    <Col>4</Col>
                    <Col>5</Col>
                    <Col>6</Col>
                </Row>
            </TableBody>

      </Container>
    </div>
  );
}

export default SongPage;
