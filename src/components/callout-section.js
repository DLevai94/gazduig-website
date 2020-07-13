import React from 'react';
import CalloutBranding from './svg/calloutBranding';
import CalloutCopy from './svg/calloutCopy';
import CalloutIg from './svg/calloutIg';
import CalloutPrint from './svg/calloutPrint';
import CalloutSocial from './svg/calloutSocial';
import CalloutWebsite from './svg/calloutWebsite';

const data = [
  {
    icon: <CalloutBranding className="w-16" />,
    title: 'Arculattervezés',
    description: 'A profi és egységes megjelenés ugyanilyen minőségi portékát sejtet. Tüntesd fel magad jó színben!',
  },
  {
    icon: <CalloutWebsite className="w-16" />,
    title: 'Web-, és applikáció dizájn',
    description:
      'Egy weboldal olyan, mint egy kapu az ügyfeleid előtt. Zárva akarod tartani, azt a kaput, vagy nyitva?',
  },
  {
    icon: <CalloutSocial className="w-16" />,
    title: 'Social anyagok dizájnja',
    description:
      'A legunalmasabb dolgot is izgalmassá lehet tenni a dizájn erejével. Használj ütős dizájnokat és érdekelni fogod őket!',
  },
  {
    icon: <CalloutPrint className="w-16" />,
    title: 'Print anyagok dizájnja',
    description: 'Valahogy érdekesebbnek tűnnek a leírtak, hogyha a papíron lévő tinta látványra is jól mutat, nemde?',
  },
  {
    icon: <CalloutCopy className="w-16" />,
    title: 'Szövegírás',
    description:
      'A célközönséged nyelvén megírt, átgondolt, jól tagolt és pontos szöveg eléri a célját, bármi is legyen az!',
  },
  {
    icon: <CalloutIg className="w-16" />,
    title: 'Insta márkaépítés',
    description: 'Az ügyfeleink 90%-át az instának köszönhetjük. Szerezzünk együtt néhány vevőt neked is?',
  },
];

const CalloutSection = () => {
  return (
    <section className="container mx-auto -mt-64">
      <h2 className="font-display font-extrabold text-2xl pl-16">
        Ez itt az
        <br /> eszköztárunk
      </h2>
      <div className="flex flex-wrap -mx-4 overflow-hidden">
        {data.map(({ title, description, icon }) => (
          <div key={title} className="callout-card">
            <div className="w-3/12">{icon}</div>
            <div className="w-9/12">
              <h3 className="font-extrabold">{title}</h3>
              <p className="font-light leading-tight text-sm">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CalloutSection;
