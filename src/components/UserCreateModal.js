import { useState } from "react";
import { Modal,Button } from "react-bootstrap";

export default function UserCreateModal({
    usersData,
    setUsersData
}) {
    const [show, setShow] = useState(false);
    const intialFormData={
        id:"",
        name:"",
        email:"",
        phone:"",
        status:1
    }
    const [formData,setFormData]=useState(intialFormData)
  
    const handleInputChange=(e)=>{
      
        const {name,value}=e.target;
        setFormData({...formData,[name]:value})
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const formSubmit=(e)=>{
        e.preventDefault();
       
       if(formData.name?.length>0){
        formData.id=Math.floor(Math.random() * 10000);
        setUsersData(usersData.concat(formData));
        setFormData(intialFormData);
       handleClose()
       }else{
         alert("required name")
       }
    }
  
    return (
      <>
        <Button variant="primary" size="sm" onClick={handleShow}>
          Add
        </Button>
  
        <Modal show={show} onHide={handleClose} className="user-create-modal">
          <Modal.Header closeButton className="px-2 py-1  " >
            <Modal.Title className="h6">Add User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <form onSubmit={formSubmit}>
                  <div className="row">
                      <div className="col-12 form-group mb-3">
                          <label>Name <span className="text-danger">*</span></label>
                          <input 
                            className="form-control"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            type="text"
                            required
                          />
                      </div>
                      <div className="col-12 form-group mb-3">
                          <label>Email</label>
                          <input 
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            type="email"
                          />
                      </div>
                      <div className="col-12 form-group mb-3">
                          <label>Phone</label>
                          <input 
                            className="form-control"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            type="number"
                          />
                      </div>
                      
                    <div className="align-right">
                        <button className="btn btn-light btn-sm" type="button" onClick={handleClose}>Cancel</button>
                        <button className="btn btn-primary btn-sm">Add</button>
                    </div>
                  </div>
              </form>
          </Modal.Body>
         
        </Modal>
      </>
    );
  }
  
