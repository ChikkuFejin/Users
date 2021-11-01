import React from 'react'
import ActionButton from './ActionButton'

function DataTable({
    usersData,
    getAllUsers
}) {

    return (
        <div className="p-3 shadow">
            <table className="table table-borderless">
                <thead className="bg-light">
                    <tr>
                        <th>Sl. No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersData?.map((user,idx)=>(
                            <tr className={`border border-light ${user.status?"data-row-success":'data-row-danger'}`} key={idx+1}>
                                <td>{idx+1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.status?
                                        <span className="text-success   ">Active</span>
                                        :<span className="text-danger ">Deactive</span>
                                    }</td>
                                <td>
                                    
                                        <ActionButton
                                        isChecked={user.status}
                                        userData={user}
                                        type="switch"
                                        getAllUsers={getAllUsers}
                                        />
                                    
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DataTable
