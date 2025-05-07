import React from 'react';
import logo from '../../assets/images/footer-logo.svg' 
import { footerLinks } from '../constants';


const Footer: React.FC = () => {
  return (
    <footer className="lg:py-20 py-10 px-3 lg:px-10 bg-[url('/footer.svg')] bg-no-repeat bg-right-bottom">
      <div className="container flex flex-col gap-10 max-w-7xl mx-auto lg:px-34 md:px-5 p-0">
        <div>
          <img alt="Logo" className="h-[63px] w-[226px]" src={logo} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h6 className="font-semibold uppercase">{section.title}</h6>
              <ul className="mt-6 grid sm:gap-5 gap-3 list-none">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="xl:text-base text-sm text-black block whitespace-nowrap opacity-70 hover:opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:opacity-100"
                    >
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="md:pt-16 pt-8 flex gap-3 md:flex-row flex-col justify-between items-center blade-top-padding-xl text-sm">
          <h6 className="whitespace-nowrap">©2025. All Rights Reserved.</h6>
          <h6 className="md:block hidden whitespace-nowrap">Supreme House, 110, 16th Road, Chembur, Mumbai - 400071.</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
