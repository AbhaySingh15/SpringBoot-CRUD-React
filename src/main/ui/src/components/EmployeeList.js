import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";
import {baseURL} from "../employeeRestAPI";

export default function EmployeeList({employeesData,setEmployeesData}) {
    async function deleteEmployee(id){
        try{
            const response = await axios.delete(baseURL+`/api/employees/${id}`)
            console.log(response.data);
        }catch(error){
            console.log("error thrown");
        }
    }


    function onClickDelete(id,event) {
        event.preventDefault();
        console.log(id);
        deleteEmployee(id);
        let employeeToBeDeleted = employeesData.findIndex(employee=>employee.id===id);
        console.log(employeeToBeDeleted);
        if(employeeToBeDeleted > -1){
            let newArr = [...employeesData];
            newArr.splice(employeeToBeDeleted,1);
            setEmployeesData(newArr);
        }
    }

    return (
        <TableContainer component={Paper} sx={{mx:6, width:'auto',justifyContent:'center', display:'flex'}}>
            <Table aria-label="simple table" sx={{mx:5}}>
                <TableHead>
                    <TableRow>
                        <TableCell>Employee Name</TableCell>
                        <TableCell>last Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell align={"center"}>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employeesData.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0} }}
                        >
                            <TableCell component="th" scope="row">
                                {row.firstName}
                            </TableCell>
                            <TableCell>{row.lastName}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>
                                <Box sx={{display:'flex', justifyContent:'center'}}>
                                <Button variant="contained">Edit</Button>
                                    <Box sx={{mx:2}}></Box>
                                <Button variant="contained" onClick={(event)=>onClickDelete(row.id,event)} color="error" >Delete</Button>
                                </Box>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
