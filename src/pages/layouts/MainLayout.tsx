import React, { ReactNode } from "react";
import NavigationBar from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='min-h-screen bg-gray-100'>
      <NavigationBar />
      <main>
        <div className='py-10 sm:py-16'>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
