import React, {useEffect, useState} from 'react';
import { useMutation, useQuery, gql } from '@apollo/client';
import styled from 'styled-components';
import TableCells from './TableCells';
import { ISongProps } from '../resources/ISongProps';
import {GET_SONGS, ORDER_SONGS, ORDER_ARTISTS, ORDER_DATE, ORDER_PLAY, ORDER_A, ORDER_B, ORDER_C, ORDER_D, ORDER_E, ORDER_F, ORDER_G, ORDER_H, ORDER_I, ORDER_J, ORDER_K, ORDER_L,ORDER_M,ORDER_N, ORDER_O, ORDER_P} from '../resources/constants'


function SongPage() {
    const [songData, setSongData] = useState([]);
    const { loading, error, data } = useQuery(GET_SONGS);
    const [ updateSongs ] = useMutation(ORDER_SONGS);
    const [ updateArtists ] = useMutation(ORDER_ARTISTS);
    const [ updateDate ] = useMutation(ORDER_DATE);
    const [ updatePlay ] = useMutation(ORDER_PLAY);
    const [ updateA ] = useMutation(ORDER_A);
    const [ updateB ] = useMutation(ORDER_B);
    const [ updateC ] = useMutation(ORDER_C);
    const [ updateD ] = useMutation(ORDER_D);
    const [ updateE ] = useMutation(ORDER_E);
    const [ updateF ] = useMutation(ORDER_F);
    const [ updateG ] = useMutation(ORDER_G);
    const [ updateH ] = useMutation(ORDER_H);
    const [ updateI ] = useMutation(ORDER_I);
    const [ updateJ ] = useMutation(ORDER_J);
    const [ updateK ] = useMutation(ORDER_K);
    const [ updateL ] = useMutation(ORDER_L);
    const [ updateM ] = useMutation(ORDER_M);
    const [ updateN ] = useMutation(ORDER_N);
    const [ updateO ] = useMutation(ORDER_O);
    const [ updateP ] = useMutation(ORDER_P);

    useEffect(() => {
        if(loading === false && data){
            setSongData(data.songs);
        }
    }, [loading, data]);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log(songData)

    const TableHeader = styled.h1`
        font-size: 1.5em;
        text-align: center;
        // color: palevioletred;
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

    const HeadCell = styled.div`
        display: table-cell;
        padding: 10px;
        border-bottom: 1px solid black;
        cursor: pointer;
        &:hover {
            color: darkslategrey;
          }
    `; 

    const HeadRow = styled.div`
        display: table-header-group;
        background-color: gray;
        font-weight: bold;
    `;

    const TableBody = styled.div`
        display: table-row-group;
    `;

    const Row = styled.div`
        display: table-row;
    `;

    const Col = styled.div`
        display: table-cell;
        border:1px solid #343a40;

    `;

  return (
    <div className="App">
      <Container>
          <TableHeader> Top Songs</TableHeader> 
            <HeadRow> 
                <HeadCell onClick={() => updateSongs().then( (updatedData: any) =>{ 
                    setSongData(updatedData.data.orderBySong);
                    } )}>Song</HeadCell>
                <HeadCell onClick={() => updateArtists().then( (updatedData: any) =>{ 
                    setSongData(updatedData.data.orderByArtist);
                    } )}>Artist</HeadCell>
                <HeadCell onClick={() => updateDate().then( (updatedData: any) =>{ 
                    setSongData(updatedData.data.orderBySongReleaseDate);
                    } )}>SongReleaseDate</HeadCell>
                <HeadCell onClick={() => updatePlay().then( (updatedData: any) =>{ 
                    setSongData(updatedData.data.orderByPlayCount);
                    } )}>PlayCount</HeadCell>
                <HeadCell onClick={() => updateA().then( (updatedData: any) =>{ 
                    setSongData(updatedData.data.metricA);
                    } )}>metricA</HeadCell>
                <HeadCell onClick={() => updateB().then( (updatedData: any) =>{ 
                    setSongData(updatedData.data.metricB);
                    } )}>metricB</HeadCell>
                <HeadCell onClick={() => updateC().then( (updatedData: any) =>{ 
                    setSongData(updatedData.data.metricC);
                    } )}>metricC</HeadCell>
                <HeadCell onClick={() => updateD().then( (updatedData: any) =>{ 
                    setSongData(updatedData.data.metricD);
                    } )}>metricD</HeadCell>
                <HeadCell onClick={() => updateE().then( (updatedData: any) =>{ 
                    setSongData(updatedData.data.metricE);
                    } )}>metricE</HeadCell>
                <HeadCell onClick={() => updateF().then( (updatedData: any) =>{ 
                    setSongData(updatedData.data.metricF);
                    } )}>metricF</HeadCell>
                <HeadCell onClick={() => updateG().then( (updatedData: any) =>{ 
                    setSongData(updatedData.data.metricG);
                    } )}>metricG</HeadCell>
                <HeadCell onClick={() => updateH().then( (updatedData: any) =>{ 
                    setSongData(updatedData.data.metricH);
                    } )}>metricH</HeadCell>
                <HeadCell onClick={() => updateI().then( (updatedData: any) =>{ 
                    setSongData(updatedData.data.metricI);
                    } )}>metricI</HeadCell>
                <HeadCell onClick={() => updateJ().then( (updatedData: any) =>{ 
                    setSongData(updatedData.data.metricJ);
                    } )}>metricJ</HeadCell>
                <HeadCell onClick={() => updateK().then( (updatedData: any) =>{ 
                    setSongData(updatedData.data.metricK);
                    } )}>metricK</HeadCell>
                <HeadCell onClick={() => updateL().then( (updatedData: any) =>{ 
                    setSongData(updatedData.data.metricL);
                    } )}>metricL</HeadCell>
                <HeadCell onClick={() => updateM().then( (updatedData: any) =>{ 
                    setSongData(updatedData.data.metricM);
                    } )}>metricM</HeadCell>
                <HeadCell onClick={() => updateN().then( (updatedData: any) =>{ 
                    setSongData(updatedData.data.metricN);
                    } )}>metricN</HeadCell>
                <HeadCell onClick={() => updateO().then( (updatedData: any) =>{ 
                    setSongData(updatedData.data.metricO);
                    } )}>metricO</HeadCell>
                <HeadCell onClick={() => updateP().then( (updatedData: any) =>{ 
                    setSongData(updatedData.data.metricP);
                    } )}>metricP</HeadCell>
            </HeadRow>

            <TableBody>
                {songData.map((song: ISongProps) => (
                    <TableCells song={song.song} artist={song.artist} songReleaseDate={song.songReleaseDate} playCount={song.playCount} metricA={song.metricA} 
                    metricB={song.metricB} metricC={song.metricC} metricD={song.metricD} metricE={song.metricE} metricF={song.metricF} metricG={song.metricG} 
                    metricH={song.metricH} metricI={song.metricI} metricJ={song.metricJ} metricK={song.metricK} metricL={song.metricL} metricM={song.metricM} metricN={song.metricN} metricO={song.metricO} metricP={song.metricP}>
                    </TableCells>
                ))}              
            </TableBody>

      </Container>
    </div>
  );
}

export default SongPage;
