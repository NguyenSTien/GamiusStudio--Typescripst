import React from 'react';
import Image from 'next/image';
import ContactCall from '../../public/Img/ContactCall.png';
import ContactMail from '../../public/Img/ContactMail.png';
import ContactForm from './ContactForm/ContactForm';

type Props = {};

const Contact = (props: Props) => {
  return (
    <div>
      <div className='relative bg-[#1c262e] text-[white] p-[200px]'>
        <div className='flex justify-center'>
          <div className=''>
            <div>
              <p className='text-[#c8fc03] text-[34px] font-bold'>
                Get in touch
              </p>
              <p className='mb-[100px] pr-[20px]'>
                We always welcome all challenges and treat your needs with a
                maximum of responsiveness. Feel free to get in touch with us and
                talk about you.
              </p>
            </div>
            <div>
              <div className='flex items-center mb-[20px]'>
                <figure className='w-[40px] h-[40px] bg-[#9ca3af] p-[10px] rounded-[50%] mr-[10px]'>
                  <Image
                    src={ContactCall}
                    alt={'contactCall'}
                    width={50}
                    height={50}
                    objectFit={'cover'}
                  />
                </figure>
                123 456 789
              </div>
              <div className='flex items-center'>
                <figure className='w-[40px] h-[40px] bg-[#9ca3af] p-[10px] rounded-[50%] mr-[10px]'>
                  <Image
                    src={ContactMail}
                    alt={'contactCall'}
                    width={50}
                    height={50}
                    objectFit={'cover'}
                  />
                </figure>
                gamiusstudio@gmail.com
              </div>
            </div>
          </div>
          <div className=''>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
