import Layout from "./components/layout";
import Head from './components/Head';
import { useState } from "react";
import DataTable from './components/DataTable';
import UserCreateModal from "./components/UserCreateModal";

function Users() {
  const usersJsonData=require('./users.json');

  const [usersData,setUsersData]=useState(usersJsonData);


  return (
    <Layout>
          <Head
            title="Users"
            button={<UserCreateModal
              setUsersData={setUsersData}
              usersData={usersData}
            
            />}
          />
          <DataTable
            userData={usersData}
            usersData={usersData}
            setUsersData={setUsersData}
          />

    </Layout>
   
  );
}

export default Users;
