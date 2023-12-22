import React from "react";

const NavigationBar = () => {
  return (
    <div className="max-w-screen items-center justify-between p-4 flex flex-wrap mx-auto text-black shadow">
      ProductWise
      <div className="flex justify-between space-x-5">
        <div>
          <a href="/" className="hover:text-green-600 transition-colors">Home</a>
        </div>
        <div>Database</div>
        <div>Login</div>
      </div>
    </div>
  );
};

export default NavigationBar;
