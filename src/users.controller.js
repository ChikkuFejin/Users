class Users{

 localkey="local-users";
 data=[];

constructor(){
    let localData=window.localStorage.getItem(this.localkey);
    this.data=localData&&JSON.parse(localData)||[];
    console.log('this',this.data,this);
}
 index(){

let resMsg={
    status:1,
    data:this.data||[],
    message:"success",
}

return new Promise((resolve,reject)=>{resMsg.status?resolve(resMsg):reject(resMsg)})

}
 createOrUpdate(data){
    let resMsg={
        status:1,
        data:this.data||[],
        message:`${data.id?"updated":"created"}`,
    }
    let userData=this.data;
    
    if(data.id){
        userData=userData.map(i=>i.id===data.id?data:i);
    }else{
        data.id=Math.floor(Math.random() * 10000);
        userData=userData.concat(data)
    }
   
    this.data=userData;
    window.localStorage.setItem(this.localkey,JSON.stringify(userData));

    return new Promise((resolve,reject)=>{resMsg.status?resolve(resMsg):reject(resMsg)})

}
 
 update(id,data){

}




}

export default new Users();