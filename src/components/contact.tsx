import React, { useEffect } from 'react';
import AOS from 'aos';
import dataJson from '@/data/data.json';
import ContactCard from '@/components/contact-card';
import Tilt from 'react-parallax-tilt';

interface Contact {
  title: string;
  image: string;
  link: string;
}

function Contacts() {
  const data: Contact[] = dataJson.contact;

  useEffect(() => {
    AOS.init({
      once: false,
      offset: 50,
    });
  }, []);

  return (
    <section id="Contacts" className="col-span-6 text-center mt-8">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Contacts
      </h1>
      <ul className="flex flex-wrap justify-center gap-4">
        {data.map((contact, index) => (
          <Tilt key={index}>
            <li className="flex flex-col items-center" data-aos="fade-up">
              <ContactCard contact={contact} />
            </li>
          </Tilt>
        ))}
      </ul>
    </section>
  );
}

export default Contacts;
