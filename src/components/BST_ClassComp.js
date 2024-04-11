
import React, {Component} from 'react';

class BST_ClassComp extends Component {
    constructor(props){
        super(props);
        this.state = {
            fistName:"bui",
            lastName:"son",
            userName:"tung",
        }
    }
    //arrow function
     Member = (props)=>{
        return(
        <div className='alert alert-succrss'>
            <h3>xin chao: {props.fullName} - ban da {this.props.age} tuoi.</h3>
        </div>
        );
    }

    ListMember = ()=>{
        return(
            <>
            <this.Member fullName="bui son tung" age="202" />
            <this.Member fullName="bui son tung1" age="203" />
            <this.Member fullName="bui son tung2" age="204" />
            </>
        )
    }
    render() {
        return(
        <div className='alert alert-danger'>
            <h2>Class comp demo</h2>
            <hr/>
            <h3>du lieu trong state</h3>
            <h4>xin chao {this.state.fistName} {this.state.lastName}</h4>
            <h3>du lieu tu props</h3>
            <p>Company:{this.props.company}</p>
            <p>Course: {this.props.course}</p>
            <hr/>
            <this.Member fullName="bui son tung" age ="24" />
            <hr/>
            {/*this.ListMember*/}
            <this.ListMember/>
        </div>
    );
}
   
}
export default BST_ClassComp