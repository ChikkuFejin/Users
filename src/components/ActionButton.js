import React from 'react'

function ActionButton({
   isChecked,
   userData,
   usersData,
   setUsersData,
   label,
   buttonClassName,
   type,
   handleClick
}) {
    const handleChange=(e)=>{
        const {checked}=e.target;
        userData.status=checked;
        setUsersData(usersData.map(i=>i.id===userData.id?userData:i));
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
