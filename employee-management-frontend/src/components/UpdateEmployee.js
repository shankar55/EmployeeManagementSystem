import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import employeeServiceInstance from '../services/EmployeeService';

const UpdateEmployee = () => {

    const {id} =useParams();
    const navigate=useNavigate();
    const[employee,setEmployee]=useState({
        id:id,
        firstName:"",
        lastName:"",
        emailId:"",
        phoneNo:"",
    });

    const handleChange=(e)=>{
        const value=e.target.value;
        setEmployee({...employee,[e.target.name]:value})
    };

    useEffect(() => {
      const fetchData=async ()=>{
        try{
            const response=await employeeServiceInstance.getEmployeeById(id);
            setEmployee(response.data);
        }catch(error){
            console.log(error);
        }
      };
      fetchData();
    }, [id])
    

    const updateEmployee=(e)=>{
        e.preventDefault();
        employeeServiceInstance.updateEmployee(employee,id).then((response)=>{
            navigate("/employeeList");
        }).catch((error)=>{
            console.log(error);
        });
    };

  return (
    <div className="flex max-w-2xl  mx-auto shadow border-b">
    <div className="px-8 py-9">
        <div className="font-thin text-2xl tracking-wider">
        <h1>Update Employee</h1>
        </div>
        <div className="items-center justify-center h-14  w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">FirstName</label>
            <input type="text" name="firstName" value={employee.firstName} onChange={(e)=>handleChange(e)} className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14  w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">LastName</label>
            <input type="text" name="lastName" value={employee.lastName} onChange={(e)=>handleChange(e)} className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14  w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Email</label>
            <input type="text" name="emailId" value={employee.emailId} onChange={(e)=>handleChange(e)} className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14  w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">PhoneNo</label>
            <input type="phoneNo" name="phoneNo" value={employee.phoneNo} onChange={(e)=>handleChange(e)}  className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14  w-full my-4 space-x-4 pt-4">
            <button onClick={updateEmployee}  className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-2">Update</button>
            <button onClick={()=>navigate("/employees")} className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-2">Cancel</button>
        </div>
    </div>
</div>
  )
}

export default UpdateEmployee