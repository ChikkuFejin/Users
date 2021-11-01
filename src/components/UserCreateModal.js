import { useState } from "react";
import { Modal,Button } from "react-bootstrap";
import { toast } from "react-toastify";
import usersController from "../users.controller";

export default function UserCreateModal({
    getAllUsers
}) {
    const [show, setShow] = useState(false);
    const [errorData,setErorData]=useState({});
    const intialFormData={
        id:"",
        name:"",
        email:"",
        phone:"",
        status:1
    }
    const [formData,setFormData]=useState(intialFormData)
  const validationInput=(e)=>{
    let {name,value,type,required}=e.target;
    let err="";
    const regExpEmail = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/
    const regExpPhone = /^\d{10}$/

    // if(required){
      switch (name) {
        case "email":
           err=""
           if(formInputs?.email){
            required=formInputs.email?.required||false
           }
           
          if(required){
            if(!value){
              err="Required "+name;
            }else if( !(regExpEmail.test(value))){
              err="Please Enter Valid"+name;
            }
          }
          else{
             if(value?.length>0&& !(regExpEmail.test(value))){
              err="Please Enter Valid"+name;
            }
          }
          return err
          
          
          break;
      case "phone":
         err=""
         if(formInputs?.phone){
          required=formInputs.phone?.required||false
         }
        if(required){
          if(!value){
           err="Required "+name;
          }else if( !(regExpPhone.test(value))){
            err="please Enter Valid"+name;
          }
        }else{
          if(value?.length>0&& !(regExpPhone.test(value))){
           err="please Enter Valid"+name;
          }
        }
        return err
        
      case "name":
         err=""
         if(formInputs?.name){
          required=formInputs.name?.required||false
         }
        if(required){
          if(!value){
            err="Required "+name;
          }
        }
        if(value?.length>0&& value.length<3){
          err="minmum 3 char  "
        }
         return err
        break;
      
        default:
          return err;
          break;
      }
    // }

  }

const formInputs={
  name:{
    name:"name",
    required:true,
    value:"",
    label:"name",
    type:"text"
  },
  email:{
    name:"email",
    required:false,
    value:"",
    label:"email",
    type:"email"
  },
  phone:{
    name:"phone",
    required:false,
    value:"",
    label:"Phone",
    type:"number"
  }

}
    const handleInputChange=(e)=>{
        
      const {name,value,type,required,dataValidate}=e.target;
      console.log("validate",dataValidate);
      console.log('validationInput(e)',validationInput(e))
      let ValidateValue=validationInput(e);
      if(ValidateValue){
        errorData[name]=ValidateValue;
          setErorData(errorData);
      }else{
        delete errorData[name];
        setFormData(errorData);
      }
      
      
        setFormData({...formData,[name]:value})
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const formSubmit=async (e)=>{
        e.preventDefault();

        let err={}
       if(Object.keys(formData)){
         Object.keys(formData).map(name=>{
           if(formInputs[name]){
            formInputs[name].value=formData[name];
            let ValidateValue=validationInput({target:formInputs[name]});
            if(ValidateValue){
              err[name]=ValidateValue;
            }else{
              delete err[name];
            }
        
       }
      });
    }

        if(Object.keys(err).length>0){
          setErorData(err);
          toast.warning("Give valid data");
        }else{
          
        
        
        await usersController.createOrUpdate(formData).then(res=>{
          console.log(res);
          setFormData(intialFormData);
      
          toast.success(res.message);
          setErorData({});
         handleClose();
         getAllUsers();

        }).catch(e=>alert(e.message));
       
       
       }
    }
  
    return (
      <>
        <Button variant="primary" size="sm" onClick={handleShow}>
          Add
        </Button>
  
        <Modal show={show} onHide={handleClose} className="user-create-modal" >
          <Modal.Header closeButton className="px-2 py-1  "  >
            <Modal.Title className="h6" >Add User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {console.log(errorData)}
              <form onSubmit={formSubmit}>
                  <div className="row">
                    {
                      Object.keys(formInputs)?.length>0&&(
                        Object.keys(formInputs).map((input,idx)=>{
                         return <InputForm
                            name={input}
                            value={formData[input]}
                            required={formInputs[input].required||false}
                            errorData={errorData}
                            onChange={handleInputChange}
                            label={formInputs[input].label}
                            keys={idx}
                            inputType={formInputs[input].type}
                          />
                        })
                      )
                    }
                      
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
  

  function InputForm({
   
    errorData,
  onChange,
    name,
    value,
    required=false,
    label,
    keys,inputType

  }){
    {console.log(name)}
    return (
      <div className="col-12 form-group mb-3" key={keys+1}>
      <label>{label} {required&&<span className="text-danger">*</span>}</label>
      <input 
        className={`form-control ${errorData?.[name]&&"is-invalid"}`}
        name={name}
        value={value}
        onChange={onChange}
        type={inputType}
        // required
      />
      <span className="invalid-feedback ">{errorData?.[name]&&errorData[name]}</span>
  </div>
    )
  }