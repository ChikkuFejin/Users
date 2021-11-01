import React from 'react'
import { toast } from 'react-toastify';
import usersController from '../users.controller';

function ActionButton({
   isChecked,
   userData,
   getAllUsers
}) {
    const handleChange=async (e)=>{
        const {checked}=e.target;
        userData.status=checked;
        await usersController.createOrUpdate(userData).then(res=>{
            getAllUsers();
            toast.success(res.message)
        }).catch(e=>console.error(e.message));
        
    }


            return (
                <>
                   
                    <div className="form-check form-switch ">
                         <input 
                         className="form-check-input" 
                         type="checkbox" 
                         id="flexSwitchCheckDefault" 
                         checked={isChecked} 
                            onChange={handleChange}
        
                         />
                    </div>
                </>
            )
           
          
    
}

export default ActionButton
