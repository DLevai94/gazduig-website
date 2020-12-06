/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import Circle from '../images/small-circle.svg';
import ListIcon from '../components/svg/listIcon';

import RocketIcon from '../components/svg/rocketIcon';
import TheatreIcon from '../components/svg/theatreIcon';
import LightBulbIcon from '../components/svg/lightbulbIcon';
import NightIcon from '../components/svg/teamicons12';
import UnitedIcon from '../components/svg/teamicons13';
import MetalIcon from '../components/svg/teamicons14';
import GuitarIcon from '../components/svg/teamicons15';
import ComicIcon from '../components/svg/teamicons16';
import PankratorIcon from '../components/svg/teamicons17';
import BikeIcon from '../components/svg/teamicons18';
import GyrosIcon from '../components/svg/teamicons19';
import MedalIcon from '../components/svg/teamicons20';
import HockeyIcon from '../components/svg/teamicons21';
import CatIcon from '../components/svg/teamicons22';
import StarIcon from '../components/svg/teamicons23';
import HandshakeIcon from '../components/svg/teamicons24';
import PaperIcon from '../components/svg/teamicons25';
import IgYellowIcon from '../components/svg/teamicons26';
import FootballIcon from '../components/svg/teamicons27';
import MicIcon from '../components/svg/teamicons28';
import MountainsIcon from '../components/svg/teamicons29';
import BookIcon from '../components/svg/teamicons30';
import ChampIcon from '../components/svg/teamicons36';
import Bence from '../images/team-bence.png';
import Reka from '../images/team-reka.png';
import Dani from '../images/team-dani.png';
import Gergo from '../images/team-gergo.png';
import Box from '../images/boxing-gloves.png';

function Team() {
  return (
    <Layout>
      <SEO
        keywords={[
          'kreatív',
          'ügynökség',
          'budapest',
          'budapesti kreatív ügynökség',
          'creative agency budapest',
          'arculattervezés',
          'márka',
          'ütős',
          'dizájner csávó',
          'gazduig',
        ]}
        title="Ezek vagyunk"
      />
      <section className="container mt-28 mx-auto px-4 sm:px-6 lg:px-8 relative">
        <section className="flex flex-col md:flex-row justify-start items-center ml-16">
          <div className="md:w-5/12">
            <h1 className="text-5xl font-display font-extrabold leading-brand mb-8">
              Mi az a Gazduig, és
              <br />
              miben rejlik az ütősség?
            </h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-2 xl:gap-6 xl:col-gap-16 leading-tight text-lg">
              <li className="flex items-start font-light max-w-8">
                <ListIcon className="w-12 mr-2" />
                Nemcsak egy újabb ügynökség a többi mellé
              </li>
              <li className="flex items-start font-light max-w-8">
                <ListIcon className="w-12 mr-2" />
                Nem az a csapat, aki mindent csak beígér neked
              </li>
              <li className="flex items-start font-light max-w-8">
                <ListIcon className="w-12 mr-2" />
                Nem azok a tipikus kivitelezők, akikkel már találkoztál
              </li>
              <li className="flex items-start font-light max-w-8">
                <ListIcon className="w-12 mr-2" />
                Végképp nem pár művész, aki bűvészkedni akar
              </li>
            </ul>
            <section>
              <h2 className="font-display text-4xl font-extrabold my-6 leading-brand">
                6 mondat, amely
                <br />
                aranyat ér számunkra
              </h2>
              <div className="flex flex-col">
                <div className="flex flex-col items-start py-4">
                  <div className="flex flex-row align-middle content-center items-center relative mb-8">
                    <img src={Circle} className="h-8 absolute left-0 top-0 -ml-4 -mt-4 z-0" />
                    <p className="text-3xl font-black absolute z-10">01</p>
                    <div className="w-10 h-1 bg-gray-900 ml-12"></div>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg leading-tight mb-2">Ha nem megy így, majd megy úgy.</h3>
                    <p className="font-light text-lg leading-tight">
                      Az esetek 99%-ában újító szándékkal állunk a dolgokhoz.
                      <br />
                      Olyat akarunk letenni eléd, amit eddig még nem láttál.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start py-4 xl:pr-24">
                  <div className="flex flex-row align-middle content-center items-center relative mb-8">
                    <img src={Circle} className="h-8 absolute left-0 top-0 -ml-4 -mt-4 z-0" />
                    <p className="text-3xl font-black absolute z-10">02</p>
                    <div className="w-10 h-1 bg-gray-900 ml-12"></div>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg leading-tight mb-2">
                      Jó munkához nem idő kell, hanem szakértelem.
                    </h3>
                    <p className="font-light text-lg leading-tight">
                      Nem hisszük el, hogy mindennek napokig/hetekig/hónapokig kell tartania ahhoz, hogy jó legyen. Nem
                      kapkodunk, de az időd pénz.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start py-4 xl:pr-24">
                  <div className="flex flex-row align-middle content-center items-center relative mb-8">
                    <img src={Circle} className="h-8 absolute left-0 top-0 -ml-4 -mt-4 z-0" />
                    <p className="text-3xl font-black absolute z-10">03</p>
                    <div className="w-10 h-1 bg-gray-900 ml-12"></div>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg leading-tight mb-2">
                      Adat nélkül a dizájnolás csak díszítés.
                    </h3>
                    <p className="font-light text-lg leading-tight">
                      Minden munkánk adatvezérelt úton készül el. Sok kérdést teszünk fel a projekt előtt és közben,
                      hogy a végén ne csak valami szépet, de hasznosat kapj.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start py-4 xl:pr-24">
                  <div className="flex flex-row align-middle content-center items-center relative mb-8">
                    <img src={Circle} className="h-8 absolute left-0 top-0 -ml-4 -mt-4 z-0" />
                    <p className="text-3xl font-black absolute z-10">04</p>
                    <div className="w-10 h-1 bg-gray-900 ml-12"></div>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg leading-tight mb-2">
                      Nem kell a zsargonok csapdájába esnünk.
                    </h3>
                    <p className="font-light text-lg leading-tight">
                      Attól, hogy komoly dolgokról beszélgetünk, és üzleti okokból találkozunk, még teremthetünk egy
                      baráti, laza légkört, ahol nem baj, ha az ember nem tökéletes.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start py-4 xl:pr-24">
                  <div className="flex flex-row align-middle content-center items-center relative mb-8">
                    <img src={Circle} className="h-8 absolute left-0 top-0 -ml-4 -mt-4 z-0" />
                    <p className="text-3xl font-black absolute z-10">05</p>
                    <div className="w-10 h-1 bg-gray-900 ml-12"></div>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg leading-tight mb-2">
                      Nem az vagy, amit hiszel, az vagy, amit elérsz.
                    </h3>
                    <p className="font-light text-lg leading-tight">
                      Hangzik el a DSP zenekar Kirakat című számában. Azon vagyunk, hogy telepakoljuk az asztalt,
                      mintsem hazudjuk azt, hogy tele van.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start py-4 xl:pr-24">
                  <div className="flex flex-row align-middle content-center items-center relative mb-8">
                    <img src={Circle} className="h-8 absolute left-0 top-0 -ml-4 -mt-4 z-0" />
                    <p className="text-3xl font-black absolute z-10">06</p>
                    <div className="w-10 h-1 bg-gray-900 ml-12"></div>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg leading-tight mb-2">
                      Ha más meg tudja csinálni, akkor én is meg tudom csinálni. Ha senki sem képes rá, én csak azért is
                      megcsinálom.
                    </h3>
                    <p className="font-light text-lg leading-tight">
                      Így állunk hozzá mindenhez, legyen az munka, vagy nem munka. A veled közös projektet is így
                      kezeljük.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="hidden md:block sticky transition top-5 self-start">
            <img src={Box} className="md:w-48 lg:w-80 sticky top-0" alt="Gazduig Creative Agency Rolunk" />
          </div>
        </section>
      </section>
      <section className="bg-gray-100 -mt-28 pb-32">
        <div className="container mx-auto pt-48 px-4 lg:px-8 xl:px-0">
          <h2 className="font-display text-2xl font-extrabold my-4 text-center">Ismerj meg minket pár perc alatt!</h2>
          <div className="bg-white shadow-brand rounded pl-16 pt-8 pr-8 flex flex-col mb-10">
            <h3 className="font-extrabold text-2xl mb-6">Gazdig Bence - CEO & Dizájner csávó</h3>
            <div className="flex flex-row">
              <div className="hidden md:grid lg:w-8/12 md:grid-cols-2 md:grid-rows-3 col-gap-20 row-gap-10 mb-10">
                <div className="flex items-start">
                  <div className="mr-4">
                    <RocketIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Önfejlesztés</h4>
                    <p className="font-light text-sm leading-tight">
                      Az összes tudásom a YouTube, Insta, Udemy, Libri négyszög valamelyikéből szereztem.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4">
                    <LightBulbIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Kreativitás</h4>
                    <p className="font-light text-sm leading-tight">
                      Mivel nem tanultam a dizájnról semmit szervezett iskolai keretek között, így nem követek egyetlen
                      “kötelező” vonalat sem.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4">
                    <TheatreIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Csak lazán</h4>
                    <p className="font-light text-sm leading-tight">
                      Az utolsó dolog, amit tőlem hallani fogsz, az a keretek közé szorított fekete-fehér bizniszzsargon
                      lesz.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4">
                    <NightIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Éjszakai műszak</h4>
                    <p className="font-light text-sm leading-tight">
                      Nem hiszem, hogy napi 8 órában maradandót lehet alkotni, így a nap összes óráját szívesen töltöm
                      hasznosan.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4">
                    <UnitedIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">United</h4>
                    <p className="font-light text-sm leading-tight">
                      9 éves korom óta Manchester United drukker vagyok, de más csapatok rajongóival is szívesen
                      dolgozom együtt.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4">
                    <MetalIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Jó fej vagyok</h4>
                    <p className="font-light text-sm leading-tight">Esküszöm! Volt, hogy már mások is mondták!</p>
                  </div>
                </div>
                {/* <div className="flex items-start">
                  <div className="mr-4">
                    <LazacIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Lazac</h4>
                    <p className="font-light text-sm leading-tight">
                      Fontosnak éreztem megosztani, hogy a lazac az egyik kedvenc ételem, ha már ilyen lazac sávó
                      vagyok.
                    </p>
                  </div>
                </div> */}
              </div>
              <div className="md:w-4/12 w-10/12 relative">
                <img src={Bence} className="lg:absolute bottom-0 right-4" alt="Gazdig Bence" />
              </div>
              <div className="flex self-center w-2/12 flex-col">
                <a href="https://instagram.com/gazduig" rel="noreferrer"></a>
                <a href="https://linkedin.com/in/gazduig" rel="noreferrer"></a>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-brand rounded pl-16 pt-8 pr-8 flex flex-col mb-10">
            <h3 className="font-extrabold text-2xl mb-6">Bergyár Gergő - Dizájner bajnok</h3>
            <div className="flex flex-row">
              <div className="hidden md:grid lg:w-8/12 grid md:grid-cols-2 md:grid-rows-3 col-gap-20 row-gap-10 mb-10">
                <div className="flex items-start">
                  <div className="mr-4">
                    <GuitarIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Metal</h4>
                    <p className="font-light text-sm leading-tight">
                      Nyugi, nem az ördög hű követője vagyok, sőt még egyetlen kecskét sem áldoztam fel.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4">
                    <ComicIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Képregény</h4>
                    <p className="font-light text-sm leading-tight">5 éves korom óta szeretnék Pókember lenni.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4">
                    <PankratorIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Pankráció</h4>
                    <p className="font-light text-sm leading-tight">Ez a pókemberré válás első lépése.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4">
                    <RocketIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Önfejlesztés</h4>
                    <p className="font-light text-sm leading-tight">
                      Y Generációmhoz híven fejlődésemet a Youtube, udemY és könYvek támogatják mai napig.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4">
                    <BikeIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Bringázás</h4>
                    <p className="font-light text-sm leading-tight">Csak a két kerék, kitartóan védem a környezetet.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4">
                    <GyrosIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Gyros</h4>
                    <p className="font-light text-sm leading-tight">Több éve keresem a tökéletes Gyros receptjét.</p>
                  </div>
                </div>
              </div>
              <div className="md:w-4/12 w-10/12 relative">
                <img src={Gergo} className="lg:absolute bottom-0 right-4" alt="Bergyár Gergő" />
              </div>
              <div className="flex self-center w-2/12 flex-col">
                <a href="https://www.instagram.com/gangstro.graphics/" rel="noreferrer"></a>
                <a href="https://www.linkedin.com/in/gerg%C5%91-bergy%C3%A1r-4195b31b0/" rel="noreferrer"></a>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-brand rounded pl-16 pt-8 pr-8 flex flex-col mb-10">
            <h3 className="font-extrabold text-2xl mb-6">Dabasi Réka - Sportdizájn specialista</h3>
            <div className="flex flex-row">
              <div className="hidden md:grid lg:w-8/12 grid md:grid-cols-2 md:grid-rows-3 col-gap-20 row-gap-10 mb-10">
                <div className="flex items-start">
                  <div className="mr-4">
                    <MedalIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Versenyszellem</h4>
                    <p className="font-light text-sm leading-tight">
                      Amibe belekezdek, azt csakis 100%-osan szeretem csinálni.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4">
                    <HockeyIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Sport</h4>
                    <p className="font-light text-sm leading-tight">
                      Már több mint 14 éve jégkorongozom versenyszerűen, innen ered számomra a sport iránt érzett
                      szeretet.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4">
                    <CatIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Állatok</h4>
                    <p className="font-light text-sm leading-tight">
                      Van egy kutyám, Bruno és egy macskám, akit csak cicának hívnak. Az általam készített dizájnok a
                      kisállat névválasztással ellentétben kreatívak.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4">
                    <RocketIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Önfejlesztés</h4>
                    <p className="font-light text-sm leading-tight">
                      Non-formális oktatási keretek között is folyamatosan fejlesztem magam, igyekszem minél jobban
                      szélesíteni az ismereteimet.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4">
                    <ChampIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Sikerek</h4>
                    <p className="font-light text-sm leading-tight">
                      A sportban már sok sikert magaménak tudhatok, voltam már több, mint 10 világbajnokságon, és a
                      csapatommal is többszörös országos bajnokok vagyunk, így a célom, hogy az üzleti szférában is
                      legalább ennyire sikeres legyek!
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-4/12 w-10/12 relative">
                <img src={Reka} className="lg:absolute bottom-0 right-4" alt="Dabasi Réka" />
              </div>
              <div className="flex self-center w-2/12 flex-col">
                <a href="https://www.instagram.com/1r5.design/" rel="noreferrer"></a>
                <a href="https://www.linkedin.com/in/r%C3%A9ka-dabasi15/" rel="noreferrer"></a>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-brand rounded pl-16 pt-8 pr-8 flex flex-col mb-10">
            <h3 className="font-extrabold text-2xl mb-6">Tímár Dani - Minden szövegek írója</h3>
            <div className="flex flex-row">
              <div className="hidden md:grid lg:w-8/12 md:grid-cols-2 md:grid-rows-4 col-gap-20 row-gap-10 mb-10">
                <div className="flex items-start">
                  <div className="mr-4">
                    <StarIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Skillek</h4>
                    <p className="font-light text-sm leading-tight">
                      17 éves koromban rájöttem, hogy a képességeim fogják kifizetni a számláim.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4">
                    <HandshakeIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Sales</h4>
                    <p className="font-light text-sm leading-tight">
                      Az értékesítésben találtam meg az első munka iránti szerelmemet. 5 év tapasztalatom van benne, de
                      elkezdtem más vizekre evezni.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4">
                    <PaperIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Írás</h4>
                    <p className="font-light text-sm leading-tight">
                      Hobbiként kezdtem el írni. Meseíró versenyeken és blogokon át vezetett az út odaáig, hogy együtt
                      dolgozhassunk.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4">
                    <IgYellowIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Instagram</h4>
                    <p className="font-light text-sm leading-tight">
                      Egyedül csinálom az Üzleti Farkas oldalt. Mondhatnék sok mindent, de beszéljen helyettem inkább az
                      oldal.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4">
                    <FootballIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Sport</h4>
                    <p className="font-light text-sm leading-tight">
                      Több csapatsportban is kipróbáltam magam, de a foci az örök szerelem.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4">
                    <MicIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Rap</h4>
                    <p className="font-light text-sm leading-tight">
                      8 éves voltam, amikor meghallottam életem első rap zenéjét. Azóta is a szívem csücske.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4">
                    <MountainsIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Maximalizmus</h4>
                    <p className="font-light text-sm leading-tight">
                      Ez az előnyöm és a hátrányom is. Az utolsó pillanatig tökéletesítem néha a dolgokat, mindig a
                      legjobbat akarom nyújtani.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4">
                    <BookIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Saját könyv</h4>
                    <p className="font-light text-sm leading-tight">
                      Az egyik nagy célom, hogy könyvet írjak. Egy regény és egy életrajzi is tervben van.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-4/12 w-10/12 relative">
                <img src={Dani} className="lg:absolute bottom-0 right-4" alt="Tímár Dani" />
              </div>
              <div className="flex self-center w-2/12 flex-col">
                <a href="https://www.instagram.com/uzletifarkas/" rel="noreferrer"></a>
                <a href="https://www.linkedin.com/in/daniel-tim%C3%A1r-b2267a175/" rel="noreferrer"></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-32">
          <div className="ml-16 max-w-4xl">
            <p className="font-extrabold leading-none text-4xl mb-12">
              Erre a helyre kerülnek majd a díjaink, amelyeket olyan projektekért kapunk, mint mondjuk a tiéd.
              <br />
              Nem hiszed? Dolgozzunk együtt, és meglátod!
            </p>
            <Link to="/contact">
              <button className="primary-btn">Beszélgessünk</button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Team;
