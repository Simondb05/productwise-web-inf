import React from "react";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <section className="max-w-screen items-center justify-between p-4 flex flex-wrap mx-auto text-black shadow mb-8">
      ProductWise
      <div className="flex justify-between space-x-5">
        <div>
          <Link href="/" className="hover:text-green-600 transition-colors">
            Home
          </Link>
        </div>
        <div><Link href="/database" className="hover:text-green-600 transition-colors">
            Database
          </Link></div>
        <div>Login</div>
      </div>
    </section>
  );
};

export default NavigationBar;
