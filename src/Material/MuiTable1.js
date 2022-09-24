import { height, width } from '@mui/system'
import { GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function customToolBar (){
    return(
        <GridToolbarContainer>
        <GridToolbarExport/>
        </GridToolbarContainer>
    )
}
export const MuiTable1 = () => {
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
        },{
            field: 'title',
            headerName: 'Title',
        },{
            field:'description',
            headerName:'Description',
            sortable:false
        },
        
        {
            field:'fees',
            headerName:'Fees',      
        }
    ]
    const [tutorials, settutorials] = useState([])
    const getAlltutorials = async()=>{

        await axios.get("https://tutorialapi1.herokuapp.com/tutorial").then(res=>{

            settutorials(res.data)
        })

    }

    useEffect(() => {
      
        getAlltutorials()
      
    }, [])
    
  return (
    <div style={{height:400,width:400}}>
        <DataGrid
        columns={columns}
        rows={tutorials}
        pageSize={5}
        checkboxSelection
        components={
            {
                Toolbar:customToolBar
            }
        }
        

        // checkboxSelection
        // disableSelectionOnClick

        
        />
            
        
    </div>
  )
}
