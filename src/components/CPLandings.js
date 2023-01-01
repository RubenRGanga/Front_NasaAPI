import React, {useState, useEffect, Component} from 'react'
import axios from 'axios';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { TableWithBrowserPagination, Column, Button} from 'react-rainbow-components';

import './styles/CPLandings.css'
import FormLandings from './FormLandings.js';

const endPointLandings = 'https://ruben-proyecto-nasa-backend.onrender.com/api/astronomy/landings/'

function CPLandings(){
    const [landings, setLandings] = useState([])

    const fetchLandings = async () => {
        const result = await fetch(endPointLandings);
        return result.json();
    }

    const deleteLanding = async (_id) => {
        try {
          await axios.delete(endPointLandings + `/delete/${_id}`);
          setLandings(landings.filter(landing => landing.id !== _id));
        } catch (error) {
          console.error(error);
        }
      }
    

    function TableLandings() {
        const { data, isLoading } = useQuery('landings', fetchLandings);
            return (
                <>
                <FormLandings/>
                <div className="tableLandings">
                    <TableWithBrowserPagination pageSize={20}  keyField='_id'isLoading={isLoading} data={data} variant={'listview'}>  
                        <Column header="NANE" field='name'/>
                        <Column header="CLASS" field='recclass'/>
                        <Column header="MASS (g)" field='mass'/>
                        <Column header="YEAR" field='year'/>
                        <Column header="LATITUDE" field='reclat'/>
                        <Column header="LONGITUDE" field='reclong'/>
                    </TableWithBrowserPagination>
                </div>
                </>
            );
    }

    const queryClient = new QueryClient();


return (
    <div className="listaLandings">
        <QueryClientProvider client={queryClient}>
            <TableLandings/>
        </QueryClientProvider>
    </div>
)

}

export default CPLandings;
