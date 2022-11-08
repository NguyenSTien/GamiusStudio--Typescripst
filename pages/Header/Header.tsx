import Image from 'next/image';
import React from 'react';
import imgHeader from '../../public/Img/LogoStudio.png';
import iconContact from '../../public/Img/bigFlashYellow.png';

type Props = {};

const Header = (props: Props) => {
  return (
    <div className='flex justify-around bg-[#070911] h-[82px] w-[100%] text-[#fff]'>
      <div>
        <figure className='w-[200px] h-[100px] mt-[35px] ml-[-10px]'>
          <Image
            src={imgHeader}
            alt={'imgHeader'}
            width={100}
            height={100}
            objectFit={'cover'}
          />
        </figure>
      </div>
      <div className='flex justify-between p-[10px]'>
        <button className='ml-[50px] border-b-[3px] mb-[-10px] font-medium'>
          Home
        </button>
        <button className='ml-[50px] border-b-[3px] mb-[-10px] font-medium'>
          Works
        </button>
        <button className='ml-[50px] border-b-[3px] mb-[-10px] font-medium'>
          About Us
        </button>
        <button className=' relative ml-[50px] font-bold bg-[#c8fc03] text-black h-[35px] mt-[20px] px-[0px] rounded-tl-[5px] rounded-bl-[5px] rounded-r-[25px] w-[170px]'>
          <p className='ml-[-40px]'>CONTACT NOW</p>
          <figure className='w-[25px] h-[25px] absolute top-[5px] right-[10px] bg-black rounded-[50%] p-[5px]'>
            <Image
              src={iconContact}
              alt={'iconContact'}
              width={25}
              height={25}
              objectFit={'cover'}
              className='text-[#c8fc03] fill-[#c8fc03]'
            />
          </figure>
        </button>
      </div>
    </div>
  );
};

export default Header;
