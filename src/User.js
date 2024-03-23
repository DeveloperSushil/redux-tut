import React from 'react'
const User=(props)=>{
    const {data}=props;
    return(
        <div>
            <h1>User component</h1>
            <h1>Name : {data.name}</h1>
            <h1>Age : {data.age}</h1>
            <h1>Email : {data.email}</h1>
        </div>
    )
}

export default User;