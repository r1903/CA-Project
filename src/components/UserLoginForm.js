import React from "react";
import background from "./Banner.jpg"

const UserLoginForm = (props) => {
   const next = e =>{
      e.preventDefault();
        if(props.validateForm()){
        props.next()}
    }

    const styles = {
      backgroundImage:`url(${background})`,
      backgroundSize: 'cover'
    }
   
  return (
    <div className="flex items-center h-screen w-full" style={styles}>  
      <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
        <h1 className="block w-full text-center text-xl uppercase text-grey-darkest font-bold mb-6">Registration</h1>
        <p className="text-sm font-medium leading-5 pb-2 text-center "> Please enter your user details</p>
        <hr className="pb-6"/>
        <form onSubmit={next}>
          <div>
              <label htmlFor="username" className="block text-sm font-medium leading-5 text-gray-700">
                 Username/Email address
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input id="username" 
                      type="text" 
                      required 
                      name="username"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" 
                      value={props.values.username}
                      onChange={props.handleChange}
                      />
            </div>
            <div className="text-sm font-medium leading-5 py-2 text-red-500">{props.values.errors.username}</div>
          </div>
          <div className="mt-6">
            <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">
                Password
            </label>
            <div className="mt-1 rounded-md shadow-sm">
                <input id="password" 
                      type="password" 
                      required 
                      name="password"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" 
                      value={props.values.password}
                      onChange={props.handleChange}
                      />
            </div>
            <div className="text-sm font-medium leading-5 py-2 text-red-500">{props.values.errors.password}</div>
          </div>
          <div className="mt-6">
            <label htmlFor="confirmPwd" className="block text-sm font-medium leading-5 text-gray-700">
                Confirm Password
            </label>
            <div className="my-1 rounded-md shadow-sm">
                <input id="confirmPwd" 
                      type="password" 
                      required 
                      name= "confirmPwd"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" 
                      value={props.values.confirmPwd}
                      onChange={props.handleChange}
                      />
            </div>
            <div className="text-sm font-medium leading-5 py-2 text-red-500">{props.values.errors.confirmPwd}</div>
          </div>
          <div className="mt-6" >
                <button type="submit" 
                        className="block mx-auto py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-900"
                        disabled={props.errors()}
                        >
                    Next
                </button>
          </div>
        </form>
      </div>
    </div>
  );
}
  


export default UserLoginForm;

  
