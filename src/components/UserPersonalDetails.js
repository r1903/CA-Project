import React from "react";
import background from "./Banner.jpg"

const UserPersonalDetails = (props) => {
    const previous = e =>{
        e.preventDefault();
        props.previous();
    }

    const handleSubmit = e =>{
        e.preventDefault();
        if(props.validateForm())
        console.log(props.values);
        {/* onces the data is sent to the database, we need to reset the state values here */}
    }
    
    const styles = {
      background:`url(${background}) no-repeat fixed`,
      backgroundSize: 'cover'
    }

    return (
        <div className="flex items-center w-full" style={styles}>
          <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
            <h1 className="block w-full text-center uppercase text-xl text-grey-darkest font-bold mb-6">Registration</h1>
            <p className=" text-sm font-medium leading-5 pb-2 text-center"> Please enter your personal details</p>
            <hr className="pb-6"/>
            <form method="POST" onSubmit={handleSubmit}>
                <div className="mt-6">
                    <label htmlFor="membershipnum" className="block text-sm font-medium leading-5 text-gray-700">
                        Membership Number
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input id="membershipnum" 
                              type="text" 
                              required 
                              name="membershipnum"
                              className="block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" 
                              value={props.values.membershipnum}
                              onChange={props.handleChange}
                      />
                   </div>
                   <div className="text-sm font-medium leading-5 text-red-500">{props.values.errors.membershipnum}</div>
                </div>
                <div className="mt-6">
                    <label htmlFor="address1" className="block text-sm font-medium leading-5 text-gray-700">
                        Address1
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input id="address1" 
                            type="text" 
                            required 
                            name="address1"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" 
                            value={props.values.address1}
                            onChange={props.handleChange}
                      />
                    </div>
              </div>
              <div className="mt-6">
                  <label htmlFor="address2" className="block text-sm font-medium leading-5 text-gray-700">
                      Address2
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">
                      <input id="address2" 
                            type="text" 
                            required 
                            name="address2"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" 
                            value={props.values.address2}
                            onChange={props.handleChange}
                      />
                  </div>
              </div>
                <div className="mt-6">
                    <label htmlFor="town" className="block text-sm font-medium leading-5 text-gray-700">
                        Town
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input id="town" 
                            type="text" 
                            required 
                            name="town"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" 
                            value={props.values.town}
                            onChange={props.handleChange}
                            />
                    </div>
                </div>
                <div className="mt-6">
                    <label htmlFor="district" className="block text-sm font-medium leading-5 text-gray-700">
                       District
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input id="district" 
                            type="text"  
                            name="district"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" 
                            value={props.values.district}
                            onChange={props.handleChange}
                            />
                    </div>
                </div>
                <div className="mt-6">
                    <label htmlFor="state" className="block text-sm font-medium leading-5 text-gray-700">
                        State
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input id="state" 
                            type="text" 
                            name="state"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" 
                            value={props.values.state}
                            onChange={props.handleChange}
                      />
                    </div>
                </div>
                <div className="mt-6">
                    <label htmlFor="phone" className="block text-sm font-medium leading-5 text-gray-700">
                        Phone
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input id="phone" 
                            type="text" 
                            required 
                            name="phone"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" 
                            value={props.values.phone}
                            onChange={props.handleChange}
                            />
                    </div>
                </div>
                <div className="mt-6">
                    <label htmlFor="mobile" className="block text-sm font-medium leading-5 text-gray-700">
                        Mobile
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input id="mobile" 
                            type="text" 
                            required 
                            name="mobile"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" 
                            value={props.values.mobile}
                            onChange={props.handleChange}
                            />
                    </div>
                </div>
                <div className="mt-6 flex justify-between">
                    <button type="submit" 
                            className="block py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-900"
                            onClick={previous}
                            >
                         Previous
                    </button>
                    <button type="submit" 
                            className="block py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-900"
                            disabled={props.errors()}
                            >
                        Register
                    </button>
                </div>
            </form>
          </div>
        </div>
    );
}


   export default UserPersonalDetails;
 