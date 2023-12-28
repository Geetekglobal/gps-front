import React, { useState } from 'react';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [userRole, setUserRole] = useState('');
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handleFirstNameChange = (e) => {
      setFirstName(e.target.value);
    };
  
    const handleLastNameChange = (e) => {
      setLastName(e.target.value);
    };
  
    const handleMobileNumberChange = (e) => {
      setMobileNumber(e.target.value);
    };
  
    const handleUserRoleChange = (e) => {
      setUserRole(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your signup logic here
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Username:', username);
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      console.log('Mobile Number:', mobileNumber);
      console.log('User Role:', userRole);
    };
  
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={handleUsernameChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={handleFirstNameChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={handleLastNameChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-600">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={mobileNumber}
                onChange={handleMobileNumberChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">User Role</label>
              <div className="flex">
                <label className="mr-4">
                  <input
                    type="radio"
                    name="userRole"
                    value="buyer/tenant"
                    checked={userRole === 'buyer/tenant'}
                    onChange={handleUserRoleChange}
                    className="mr-2"
                  />
                  Buyer/Tenant
                </label>
                <label className="mr-4">
                  <input
                    type="radio"
                    name="userRole"
                    value="owner"
                    checked={userRole === 'owner'}
                    onChange={handleUserRoleChange}
                    className="mr-2"
                  />
                  Owner
                </label>
                <label className="mr-4">
                  <input
                    type="radio"
                    name="userRole"
                    value="student"
                    checked={userRole === 'student'}
                    onChange={handleUserRoleChange}
                    className="mr-2"
                  />
                  Student
                </label>
                <label className="mr-4">
                  <input
                    type="radio"
                    name="userRole"
                    value="agent"
                    checked={userRole === 'agent'}
                    onChange={handleUserRoleChange}
                    className="mr-2"
                  />
                  Agent
                </label>
                <label className="mr-4">
                  <input
                    type="radio"
                    name="userRole"
                    value="agency"
                    checked={userRole === 'agency'}
                    onChange={handleUserRoleChange}
                    className="mr-2"
                  />
                  Agency
                </label>
                <label>
                  <input
                    type="radio"
                    name="userRole"
                    value="builder"
                    checked={userRole === 'builder'}
                    onChange={handleUserRoleChange}
                    className="mr-2"
                  />
                  Builder
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
}

export default Signup