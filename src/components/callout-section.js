import React from 'react';
import CalloutBranding from '../images/callout-branding.svg';
import CalloutCopy from '../images/callout-copy.svg';
import CalloutIg from '../images/callout-ig.svg';
import CalloutPrint from '../images/callout-print.svg';
import CalloutSocial from '../images/callout-social.svg';
import CalloutWebsite from '../images/callout-design.svg';
import Arrow from '../images/arrow.svg';

const data = [
  {
    icon: <img className="w-10" src={CalloutBranding} />,
    title: 'Arculattervezés',
    description: 'A profi és egységes megjelenés ugyanilyen minőségi portékát sejtet. Tüntesd fel magad jó színben!',
  },
  {
    icon: <img className="h-8" src={CalloutWebsite} />,
    title: 'Web-, és applikáció dizájn',
    description:
      'Egy weboldal olyan, mint egy kapu az ügyfeleid előtt. Zárva akarod tartani, azt a kaput, vagy nyitva?',
  },
  {
    icon: <img className="h-10" src={CalloutSocial} />,
    title: 'Social anyagok dizájnja',
    description:
      'A legunalmasabb dolgot is izgalmassá lehet tenni a dizájn erejével. Használj ütős dizájnokat és érdekelni fogod őket!',
  },
  {
    icon: <img className="h-8" src={CalloutPrint} />,
    title: 'Print anyagok dizájnja',
    description: 'Valahogy érdekesebbnek tűnnek a leírtak, hogyha a papíron lévő tinta látványra is jól mutat, nemde?',
  },
  {
    icon: <img className="h-10" src={CalloutCopy} />,
    title: 'Szövegírás',
    description:
      'A célközönséged nyelvén megírt, átgondolt, jól tagolt és pontos szöveg eléri a célját, bármi is legyen az!',
  },
  {
    icon: <img className="h-8" src={CalloutIg} />,
    title: 'Insta márkaépítés',
    description: 'Az ügyfeleink 90%-át az instának köszönhetjük. Szerezzünk együtt néhány vevőt neked is?',
  },
];

const CalloutSection = () => {
  return (
    <section className="bg-gray-100 p-16 max-w-full mx-auto relative">
      <h2 className="font-display font-extrabold text-4xl ml-6 md:ml-0 mb-24 text-left">Ez itt az eszköztárunk</h2>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-8 px-4 lg:px-0">
        {data.map(({ title, description, icon }) => (
          <div key={title} className="w-9/12">
            <div className="">{icon}</div>
            <div className="">
              <h3 className="font-extrabold text-lg">{title}</h3>
              <p className="font-light leading-tight tracking-tight text-sm">{description}</p>
            </div>
            <img src={Arrow} />
          </div>
        ))}
      </div>
      <p className="absolute top-32 -mr-52 right-0 transform -rotate-90 text-8xl text-gray-200 font-extrabold">
        Eszköztárunk
      </p>
    </section>
  );
};

export default CalloutSection;
