import Image from 'next/image';
import React from 'react';
import imgFooter from '../../public/Img/FooterLogo.png';
import banner from '../../public/Img/bannerFooter.png';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className='relative bg-[#c8fc03] h-[330px]'>
      <figure className='absolute top-[-95px] right-[44px] fill-black'>
        <Image
          src={banner}
          alt={'imgBanner'}
          width={145}
          height={175}
          objectFit={'cover'}
        />
      </figure>
      <div className='flex justify-around w-[auto] max-w-[1000px] mx-[auto] ml-[110px] '>
        <div className='mt-[65px]'>
          <figure className='mb-[10px]'>
            <Image
              src={imgFooter}
              alt={'imgFooter'}
              width={300}
              height={100}
              objectFit={'cover'}
            />
          </figure>
          <p className='text-[14px] mb-[10px]'>
            <span className='font-medium'>VPĐD:</span> 523 Tô Hiến Thành, P.14,
            Q.10, TP. HCM
          </p>
          <p className='text-[14px]'>
            <span className='font-medium'>Hotline:</span> 0908630695 | 09:00 -
            17:00 (T2-T6)
          </p>
        </div>
        <div className='grid mt-[65px] text-[14px]'>
          <p className='font-medium mb-[-10px]'>About US</p>
          <p className='mb-[-10px]'>Introduce</p>
          <p>Contact Us</p>
        </div>
        <div className='grid mt-[65px] text-[14px]'>
          <p className='font-medium'>Works</p>
          <p>Design2D</p>
          <p>3d Modeling</p>
          <p>Videos/VFX</p>
        </div>
      </div>
      <p className='text-center p-[25px] w-[100%] border-t-[1px] mt-[24px] border-black'>
        Copyright © Studio. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
