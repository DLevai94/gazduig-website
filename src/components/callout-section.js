import React from 'react';
import CalloutBranding from './svg/calloutBranding';
import CalloutCopy from './svg/calloutCopy';
import CalloutIg from './svg/calloutIg';
import CalloutPrint from './svg/calloutPrint';
import CalloutSocial from './svg/calloutSocial';
import CalloutWebsite from './svg/calloutWebsite';
import Callout1 from './svg/callout1.svg';
import Callout2 from './svg/callout2.svg';
import Callout3 from './svg/callout3.svg';
import Callout4 from './svg/callout4.svg';
import Callout5 from './svg/callout5.svg';
import Callout6 from './svg/callout6.svg';

const data = [
  {
    icon: <CalloutBranding className="w-16" />,
    title: 'Arculattervezés',
    description: 'A profi és egységes megjelenés ugyanilyen minőségi portékát sejtet. Tüntesd fel magad jó színben!',
    bgImage: Callout1,
  },
  {
    icon: <CalloutWebsite className="w-16" />,
    title: 'Web-, és applikáció dizájn',
    description:
      'Egy weboldal olyan, mint egy kapu az ügyfeleid előtt. Zárva akarod tartani, azt a kaput, vagy nyitva?',
    bgImage: Callout2,
  },
  {
    icon: <CalloutSocial className="w-16" />,
    title: 'Social anyagok dizájnja',
    description:
      'A legunalmasabb dolgot is izgalmassá lehet tenni a dizájn erejével. Használj ütős dizájnokat és érdekelni fogod őket!',
    bgImage: Callout3,
  },
  {
    icon: <CalloutPrint className="w-16" />,
    title: 'Print anyagok dizájnja',
    description: 'Valahogy érdekesebbnek tűnnek a leírtak, hogyha a papíron lévő tinta látványra is jól mutat, nemde?',
    bgImage: Callout4,
  },
  {
    icon: <CalloutCopy className="w-16" />,
    title: 'Szövegírás',
    description:
      'A célközönséged nyelvén megírt, átgondolt, jól tagolt és pontos szöveg eléri a célját, bármi is legyen az!',
    bgImage: Callout5,
  },
  {
    icon: <CalloutIg className="w-16" />,
    title: 'Insta márkaépítés',
    description: 'Az ügyfeleink 90%-át az instának köszönhetjük. Szerezzünk együtt néhány vevőt neked is?',
    bgImage: Callout6,
  },
];

const CalloutSection = () => {
  return (
    <section className="xl:-mt-64 z-50 relative">
      <div className="max-w-full mx-auto lg:px-6">
        <h2 className="font-display font-extrabold text-2xl mb-8 text-center md:text-left">Ez itt az eszköztárunk</h2>

        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-8 px-4 lg:px-0">
          {data.map(({ title, description, icon, bgImage }, index) => (
            <div
              key={title}
              className={`callout-card bg-no-repeat ${index < 3 ? 'bg-left' : 'bg-right'}`}
              style={{ backgroundImage: `url(${bgImage})` }}>
              <div className="w-3/12">{icon}</div>
              <div className="w-9/12">
                <h3 className="font-extrabold">{title}</h3>
                <p className="font-light leading-tight tracking-tight text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CalloutSection;
