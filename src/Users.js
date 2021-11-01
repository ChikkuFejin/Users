import Layout from "./components/layout";
import Head from './components/Head';
import { useState ,useEffect} from "react";
import DataTable from './components/DataTable';
import UserCreateModal from "./components/UserCreateModal";
import usersController from "./users.controller";

function Users() {
  const usersJsonData=require('./users.json');

  const [usersData,setUsersData]=useState(usersJsonData);


  const getAllUsers=async ()=>{
    usersController.index().then(res=>{

    setUsersData(res.data);
    // console.log(res)
    }).catch(e=>console.error(e));
}
useEffect(()=>{
  getAllUsers();
},[])
  return (
    <Layout>
          <Head
            title="Users"
            button={<UserCreateModal
              setUsersData={setUsersData}
              usersData={usersData}
              getAllUsers={getAllUsers}
            
            />}
          />
          
          <DataTable
            usersData={usersData}
            getAllUsers={getAllUsers}
          />

    </Layout>
   
  );
}

export default Users;
