import React, { Component } from 'react';
import Navbar from './navbar';

class Dashboard extends Component {
  render() { 
    return (
      <React.Fragment>
        <Navbar />
        <h2 className='text-center p-4'>Hey Welcome</h2>
        <div className='mx-auto max-w-1xl px-4 flex flex-col  items-center justify-between'>
          <button class="border rounded-lg block w-80 pl-10 p-2.5 dark:bg-gray-700 dark:text-white"> Total Number Of Order</button>
          <button class="border rounded-lg block w-80 pl-10 p-2.5 my-4 dark:bg-gray-700 dark:text-white"> Total Number Of Order Created</button>
          <button class="border rounded-lg block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:text-white"> Total Number Of Order Cancelled</button>
        </div>

        <div className='my-8 p-4 mx-auto max-w-2xl dark:bg-gray-700 dark:text-white h-64 text-center'>
          Total Api
        </div>
        
      </React.Fragment>
    );
  }
}
 
export default Dashboard;
