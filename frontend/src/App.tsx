import {useState,useEffect} from 'react';
import './App.css';
import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react'
import VisTempate from './components/VisTemplate';
import {Misc} from './types';
import DataService from './modules/DataService';
function App() {

  const api: DataService = new DataService();

  const [data,setData] = useState<Misc>({'key':0,'key2':1});

  async function testAPI() {
    const testResponse: string = await api.test();
    console.log('test result',testResponse);
  }

  useEffect(()=>{
    testAPI();
  },[]);

  return (
    <ChakraProvider>
      <div className="App" style={{'height':'calc(100% - 2.5em)','width':'99vw','margin':'1em'}}>
      <Grid
        templateColumns={'1fr 1fr 1fr'}
        gap={2}
        templateRows={'2em 1fr 1fr'}
        h='99%'
        w='100%'
      >
        <GridItem colSpan={3} className={'shadow'}>{'Banner'}</GridItem>
        <GridItem className={'shadow'}>{'Top Left'}</GridItem>
        <GridItem className={'shadow rounded'}>
          <VisTempate
            data={data}
          />
        </GridItem>
        <GridItem className={'shadow'}>{'Top Right'}</GridItem>
        <GridItem className={'shadow'}>{'Bottom Left'}</GridItem>
        <GridItem className={'shadow rounded'}>
          <VisTempate
            data={data}
          />
        </GridItem>
        <GridItem className={'shadow'}>{'Bottom Right'}</GridItem>
      </Grid>
    </div>
    </ChakraProvider>
  
    
  );
}
export default App;
