import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faInstagram ,faTwitter} from '@fortawesome/free-brands-svg-icons'
interface Props {
  
}

const Footer: React.FC<Props> = ({}) => {
  return (
    <footer className="custom-main-menu custom-text-color-3 mx-auto">
        <div className="container mx-auto">
            <div className="flex flex-wrap px-2 py-2 justify-center lg:justify-start">
                <div className="w-full lg:w-2/6">
                    <p className="px-2 text-center lg:text-left">COPYRIGHT © 2021</p>
                </div>
                <div className="w-full lg:w-4/6 flex justify-end">
                    <a href="#" className="mx-4 py-1"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="#" className="mx-4 py-1"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="#" className="mx-4 py-1"><FontAwesomeIcon icon={faFacebookF} /></a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
