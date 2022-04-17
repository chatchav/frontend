import React, { useEffect } from "react";
import Header from '../components/header';
import Footer from '../components/footer';


interface Props {
  title?: string;
  metaDesc?: string;
  children: JSX.Element;
  image?: string;
  url?: string;
  type?: string;
}

const _title = "BEYOND GODLIKE";

const Layout: React.FC<Props> = ({children}) => {

  useEffect(() => {
    
  }, []);
  return (
    <>

      <Header />
      <main className="mt-14 lg:mt-18 custom-text-color">
        <div className="mx-auto fix-line-height">
          {children}
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default Layout;
