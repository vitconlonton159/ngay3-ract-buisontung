import React from 'react'

export default function BST_FuncDemo(props) {
    return(
        <div>
          <hr/>
          <h2> Function comp demo</h2>
          <h3>su dung thuoc tinh t props</h3>  
          <p>userName: {props.userName}</p>
          <p>fullName: {props.fullName}</p>
          <p>age: {props.age}</p>
        </div>
    )
}