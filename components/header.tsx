import React from "react";
import { MenuHeader} from "../config/menu";

interface Props {
}

const Header: React.FC<Props> = ({}) => {
  React.useEffect(() => {
   
  }, []);

  return (
    <>
      <header className="custom-main-menu fixed w-full top-0 shadow-1 z-20">
        <div className="container mx-auto">
          <div className="flex flex-wrap custom-border-color-3 p-2">
            <div className="w-full lg:w-2/6 p-2">
              <a href={"/"}>
                <img src="/img/logo.png" alt="" width="200" style={{maxWidth: "none",display: "inline-block"}}/>
              </a>
            </div>
            <div className="w-full lg:w-4/6 flex justify-end">
                <ul className="flex self-center">
                  {
                    MenuHeader.map((o,i)=>(
                      <li key={i} className="mx-4 py-1">
                        <a href={o.href} className="px-3">
                          {o.label.th}
                        </a>
                      </li>
                    ))
                  }
                  <li className="mx-4 border-2 py-1 rounded-full border-pink-500">
                    <a href="" className="px-3">Regist</a>
                    {"/"}
                    <a href="" className="px-3">Login</a>
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </header>
      <header className="block lg:hidden">
      </header>
    </>
  );
};

export default Header;
