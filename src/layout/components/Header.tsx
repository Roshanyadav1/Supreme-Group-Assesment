import React from 'react';

// import images 
import logo from '../../assets/images/supreme_logo.svg';
import linked from '../../assets/images/linked-in.svg';
import language from '../../assets/images/language.svg';
import Image from '../../components/Image';

// import custom hooks
import { useHeader } from '../hooks/useHeader';

const Header: React.FC = () => {
  const { visible } = useHeader();

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white z-50 shadow transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <div className="container mx-auto py-2 md:px-10 px-2">
        <div className="flex justify-between items-center">
          <Image alt="Supreme Group" className="h-[41px] w-[146px]" src={logo} />

          <div className="hidden md:flex justify-center items-center gap-10">
            <button
              type="button"
              className="h-[50px] cursor-pointer px-4 py-2 text-lg border border-white text-black hover:bg-[#00BFFF] rounded-full transition-all bg-[#5CD6FF] border-[#00BFFF]"
            >
              Contact Us
            </button>
            <Image src={linked} alt="LinkedIn" className="cursor-pointer w-6 h-6" />
            <Image src={language} alt="Language" className="cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;