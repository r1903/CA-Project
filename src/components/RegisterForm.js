import React,{Component} from "react";
import UserLoginForm from "./UserLoginForm";
import UserPersonalDetails from "./UserPersonalDetails";

export default class RegisterForm extends Component {
    state={
          step:1,
          username:"",
          password:"",
          confirmPwd:"",
          membershipnum:"",
          address1:"",
          address2:"",
          town:"",
          district:"",
          state:"",
          phone:"",
          mobile:"",
          errors:
                {
                    username:'',
                    password:'',
                    confirmPwd:'',
                    membershipnum:''
                },
      }

    next = () =>{
          const {step} = this.state;
          this.setState({ step:step+1});
      }

    previous = () =>{
        const {step} = this.state;
        this.setState({ step:step - 1});
    }

    handleChange= (e) =>{
        const { name, value } = e.target;
        this.setState({[name]: value}, () => {
            if(this.haveErrors())   
               this.validateForm();  
        });
        
    }

    validateForm = () => {
       
        let errors = this.state.errors;
        let formisValid = true ;
        errors.username ='';
        errors.password ='';
        errors.confirmPwd ='';
        errors.membershipnum ='';
       
        if (!this.state.username || this.state.username.trim().length < 3) 
        {
            console.log(this.state.username)
            errors.username = 'Please enter the username/Email address'
            formisValid = false
        }

        if (this.state.password.trim().length < 8) 
        {
            errors.password = 'Password length should have atlest 8 charcters'
            formisValid = false
        }
    
        if (this.state.password !== this.state.confirmPwd) 
        {
            errors.confirmPwd = 'Password and Confirm Password field should match'
            formisValid = false
        }
    
        if(this.state.step===2){
            console.log(this.state.membershipnum.trim().length)
            if (this.state.membershipnum.trim().length === 0) 
            {
                errors.membershipnum = 'Membership number is required'
                formisValid = false
            }
        }

        this.setState({errors :errors})
        return formisValid;

      }

    haveErrors = () => {
        let haveError = false;
        Object.keys(this.state.errors).map((key) => {
          if (this.state.errors[key].length > 0) {
            haveError = true;
          }
        });
        return haveError;
      };

        render(){
            const {step,} =this.state;
            if(step===1){
                return(
                    <UserLoginForm
                     next={this.next}
                     handleChange={this.handleChange}
                     values={this.state}
                     validateForm={this.validateForm}
                     errors={this.haveErrors}

                    />
                )
            }else{
                return(
                    <UserPersonalDetails
                     previous={this.previous}
                     handleChange={this.handleChange}
                     values={this.state}
                     validateForm={this.validateForm}
                     errors={this.haveErrors}
                    />
                )

            }
            
        }
}

