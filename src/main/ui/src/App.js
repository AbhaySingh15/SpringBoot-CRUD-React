import './components/Appbar'
import Appbar from "./components/Appbar";
import Typography from "@mui/material/Typography";
import EmployeeList from "./components/EmployeeList";
import AddEmployeeForm from "./components/AddEmployeeForm";
import {useEffect, useState} from "react";
import axios from "axios";
import {baseURL} from "./employeeRestAPI";

function App() {
    const [employeesData,setEmployeesData] = useState([]);

    async function getEmployeesData(){
        try{
            const response = await axios.get(baseURL+"/api/employees");
            console.log(response.data);
            setEmployeesData(response.data);
        }catch(error){
            console.log("error thrown");
        }
    }

    useEffect(() => {
        getEmployeesData();
    },[]);

  return (
    <div style={{textAlign:'center'}}>
      <Appbar />
      <Typography variant="h5" component="div" sx={{my:2}}>Add User</Typography>
        <AddEmployeeForm employeesData={employeesData} setEmployeesListData={setEmployeesData}/>
        <EmployeeList employeesData={employeesData} setEmployeesData={setEmployeesData}/>
    </div>
  );
}

export default App;
