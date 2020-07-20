import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import InstagramIcon from '../components/svg/instagramIcon';
import LinkedInIcon from '../components/svg/linkedInIcon';
import ListIcon from '../components/svg/listIcon';
import BrainIcon from '../components/svg/brainIcon';
import TimeIcon from '../components/svg/timeIcon';
import DataIcon from '../components/svg/dataIcon';
import ChatIcon from '../components/svg/chatIcon';
import FistsIcon from '../components/svg/fistsIcon';
import FireIcon from '../components/svg/fireIcon';
import RocketIcon from '../components/svg/rocketIcon';
import TheatreIcon from '../components/svg/theatreIcon';
import LightBulbIcon from '../components/svg/lightbulbIcon';
import Bence from '../images/team-bence.png';
import Reka from '../images/csapat-reka.png';
import Dani from '../images/csapat-dani.png';
import Gergo from '../images/csapat-gergo.png';

function Team() {
  const data = useStaticQuery(graphql`
    query {
      heroImg: file(relativePath: { eq: "team-metal.png" }) {
        childImageSharp {
          fluid(maxHeight: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
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
      <section className="container mx-auto">
        <section className="flex flex-row justify-around items-center">
          <div className="w-6/12">
            <h1 className="text-5xl font-display font-extrabold leading-tight mb-8">
              Mi az a Gazduig, és
              <br /> miben rejlik az ütősség?
            </h1>
            <ul className="grid grid-cols-2 grid-rows-2 gap-6 col-gap-56">
              <li className="flex items-start font-light">
                <ListIcon className="w-16 mr-2" />
                Nem csak egy újabb ügynökség a többi mellé
              </li>
              <li className="flex items-start font-light">
                <ListIcon className="w-16 mr-2" />
                Nem az a csapat, aki majd mindent beígér neked
              </li>
              <li className="flex items-start font-light">
                <ListIcon className="w-16 mr-2" />
                Nem azok a tipikus kivitelezők, akikkel már találkoztál
              </li>
              <li className="flex items-start font-light">
                <ListIcon className="w-16 mr-2" />
                Végképp nem pár művész, aki bűvészkedni akar
              </li>
            </ul>
          </div>
          <div className="" style={{ animation: 'float 4s ease-in-out infinite' }}>
            <Img fluid={data?.heroImg?.childImageSharp?.fluid} className="w-96" />
          </div>
        </section>
        <section>
          <h2 className="font-display text-2xl font-extrabold my-16">Mondatok, amelyek aranyat érnek számunkra</h2>
          <div className="lg:-mx-8 grid lg:grid-rows-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded shadow-brand flex items-start p-4 pr-24">
              <div className="mr-4">
                <BrainIcon className="w-10" />
              </div>
              <div>
                <h3 className="font-extrabold text-sm leading-tight mb-2">Ha nem megy így, majd megy úgy.</h3>
                <p className="font-light text-sm leading-tight">
                  Az esetek 99%-ában újító szándékkal állunk a dolgokhoz..
                  <br />
                  <br />
                  Olyat akarunk letenni eléd, amit eddig még nem láttál.
                </p>
              </div>
            </div>
            <div className="bg-white rounded shadow-brand flex items-start p-4 pr-24">
              <div className="mr-4">
                <TimeIcon className="w-10" />
              </div>
              <div>
                <h3 className="font-extrabold text-sm leading-tight mb-2">
                  Jó munkához nem idő kell, hanem szakértelem.
                </h3>
                <p className="font-light text-sm leading-tight">
                  Nem hisszük el, hogy mindennek napokig/hetekig/hónapokig kell tartania ahhoz, hogy jó legyen.
                  <br />
                  <br />
                  Nem kapkodunk, de az időd pénz.
                </p>
              </div>
            </div>
            <div className="bg-white rounded shadow-brand flex items-start p-4 pr-24">
              <div className="mr-4">
                <DataIcon className="w-10" />
              </div>
              <div>
                <h3 className="font-extrabold text-sm leading-tight mb-2">Adat nélkül a dizájnolás csak díszítés.</h3>
                <p className="font-light text-sm leading-tight">
                  Minden munkánk adatvezérelt úton készül el. Sok kérdést teszünk fel a projekt előtt és közben, hogy a
                  végén ne csak valami szépet, de hasznosat kapj.
                </p>
              </div>
            </div>
            <div className="bg-white rounded shadow-brand flex items-start p-4 pr-24">
              <div className="mr-4">
                <ChatIcon className="w-10" />
              </div>
              <div>
                <h3 className="font-extrabold text-sm leading-tight mb-2">Nem kell a zsargonok csapdájába esnünk.</h3>
                <p className="font-light text-sm leading-tight">
                  Attól, hogy komoly dolgokról beszélgetünk, és üzleti okokból találkozunk, még teremthetünk egy baráti,
                  laza légkört, ahol nem baj, ha az ember nem tökéletes.
                </p>
              </div>
            </div>
            <div className="bg-white rounded shadow-brand flex items-start p-4 pr-24">
              <div className="mr-4">
                <FistsIcon className="w-10" />
              </div>
              <div>
                <h3 className="font-extrabold text-sm leading-tight mb-2">
                  Nem az vagy, amit hiszel, az vagy, amit elérsz.
                </h3>
                <p className="font-light text-sm leading-tight">
                  Hangzik el a DSP zenekar Kirakat című számában. Azon vagyunk, hogy telepakoljuk az asztalt, mintsem
                  hazudjuk azt, hogy tele van.
                </p>
              </div>
            </div>
            <div className="bg-white rounded shadow-brand flex items-start p-4 pr-24">
              <div className="mr-4">
                <FireIcon className="w-10" />
              </div>
              <div>
                <h3 className="font-extrabold text-sm leading-tight mb-2">
                  Ha más meg tudja csinálni, akkor én is meg tudom csinálni. Ha senki sem képes rá, én csak azért is
                  megcsinálom.
                </h3>
                <p className="font-light text-sm leading-tight">
                  Így állunk hozzá mindenhez, legyen az munka, vagy nem munka. A veled közös projektet is így kezeljük.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="bg-gray-200 -mt-28 pb-40">
        <div className="container mx-auto pt-48">
          <h2 className="font-display text-2xl font-extrabold my-8">Ismerj meg minket pár perc alatt!</h2>
          <div className="bg-white shadow-brand rounded pl-16 pt-8 pr-8 flex flex-col mb-10">
            <h3 className="font-extrabold text-2xl mb-6">Gazdig Bence - CEO & Dizájner csávó</h3>
            <div className="flex">
              <div className="w-8/12 grid md:grid-cols-2 md:grid-rows-4 col-gap-20 row-gap-10 mb-10">
                <div className="flex items-start ">
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
                <div className="flex items-start ">
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
                <div className="flex items-start ">
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
                <div className="flex items-start ">
                  <div className="mr-4">
                    <TheatreIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Éjszakai műszak</h4>
                    <p className="font-light text-sm leading-tight">
                      Nem hiszem, hogy napi 8 órában maradandót lehet alkotni, így a nap összes óráját szívesen töltöm
                      hasznosan.
                    </p>
                  </div>
                </div>
                <div className="flex items-start ">
                  <div className="mr-4">
                    <TheatreIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">United</h4>
                    <p className="font-light text-sm leading-tight">
                      9 éves korom óta Manchester United drukker vagyok, de más csapatok rajongóival is szívesen
                      dolgozom együtt.
                    </p>
                  </div>
                </div>
                <div className="flex items-start ">
                  <div className="mr-4">
                    <TheatreIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Jó fej vagyok</h4>
                    <p className="font-light text-sm leading-tight">Esküszöm! Volt, hogy már mások is mondták!</p>
                  </div>
                </div>
                <div className="flex items-start ">
                  <div className="mr-4">
                    <TheatreIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Lazac</h4>
                    <p className="font-light text-sm leading-tight">
                      Fontosnak éreztem megosztani, hogy a lazac az egyik kedvenc ételem, ha már ilyen lazac sávó
                      vagyok.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-4/12 relative">
                <img src={Bence} className="absolute bottom-0 right-4" />
              </div>
              <div className="self-center flex flex-col">
                <a href="https://instagram.com/gazduig" rel="noreferrer">
                  <InstagramIcon className="w-8 mb-8 hover:opacity-50" />
                </a>
                <a href="https://linkedin.com/in/gazduig" rel="noreferrer">
                  <LinkedInIcon className="w-8 mt-8 hover:opacity-50" />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-brand rounded pl-16 pt-8 pr-8 flex flex-col mb-10">
            <h3 className="font-extrabold text-2xl mb-6">Bergyár Gergő - Dizájner bajnok</h3>
            <div className="flex">
              <div className="w-8/12 grid md:grid-cols-2 md:grid-rows-4 col-gap-20 row-gap-10 mb-10">
                <div className="flex items-start ">
                  <div className="mr-4">
                    <RocketIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Metal</h4>
                    <p className="font-light text-sm leading-tight">
                      Nyugi, nem az ördög hű követője vagyok, sőt még egyetlen kecskét sem áldoztam fel.
                    </p>
                  </div>
                </div>
                <div className="flex items-start ">
                  <div className="mr-4">
                    <LightBulbIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Képregény</h4>
                    <p className="font-light text-sm leading-tight">5 éves korom óta szeretnék Pókember lenni.</p>
                  </div>
                </div>
                <div className="flex items-start ">
                  <div className="mr-4">
                    <TheatreIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Pankráció</h4>
                    <p className="font-light text-sm leading-tight">Ez a pókemberré válás első lépése.</p>
                  </div>
                </div>
                <div className="flex items-start ">
                  <div className="mr-4">
                    <TheatreIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Önfejlesztés</h4>
                    <p className="font-light text-sm leading-tight">
                      Y Generációmhoz híven fejlődésemet a Youtube, udemY és könYvek támogatják mai napig.
                    </p>
                  </div>
                </div>
                <div className="flex items-start ">
                  <div className="mr-4">
                    <TheatreIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Bringázás</h4>
                    <p className="font-light text-sm leading-tight">Csak a két kerék, kitartóan védem a környezetet.</p>
                  </div>
                </div>
                <div className="flex items-start ">
                  <div className="mr-4">
                    <TheatreIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Gyros</h4>
                    <p className="font-light text-sm leading-tight">Több éve keresem a tökéletes Gyros receptjét.</p>
                  </div>
                </div>
              </div>
              <div className="w-4/12 relative">
                <img src={Gergo} className="absolute bottom-0 right-4" />
              </div>
              <div className="self-center flex flex-col">
                <a href="https://instagram.com/x" rel="noreferrer">
                  <InstagramIcon className="w-8 mb-8 hover:opacity-50" />
                </a>
                <a href="https://linkedin.com/in/x" rel="noreferrer">
                  <LinkedInIcon className="w-8 mt-8 hover:opacity-50" />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-brand rounded pl-16 pt-8 pr-8 flex flex-col mb-10">
            <h3 className="font-extrabold text-2xl mb-6">Dabasi Réka - Sportdizájn specialista</h3>
            <div className="flex">
              <div className="w-8/12 grid md:grid-cols-2 md:grid-rows-4 col-gap-20 row-gap-10 mb-10">
                <div className="flex items-start ">
                  <div className="mr-4">
                    <RocketIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Versenyszellem</h4>
                    <p className="font-light text-sm leading-tight">
                      Amibe belekezdek, azt csakis 100%-osan szeretem csinálni.
                    </p>
                  </div>
                </div>
                <div className="flex items-start ">
                  <div className="mr-4">
                    <LightBulbIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Sport</h4>
                    <p className="font-light text-sm leading-tight">
                      Már több mint 14 éve jégkorongozom versenyszerűen, innen ered számomra a sport iránt érzett
                      szeretet.
                    </p>
                  </div>
                </div>
                <div className="flex items-start ">
                  <div className="mr-4">
                    <TheatreIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Állatok</h4>
                    <p className="font-light text-sm leading-tight">
                      Van egy kutyám, Bruno és egy macskám, akit csak cicának hívnak. Az általam készített dizájnok a
                      kisállat névválasztással ellentétben kreatívak.
                    </p>
                  </div>
                </div>
                <div className="flex items-start ">
                  <div className="mr-4">
                    <TheatreIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Önfejlesztés</h4>
                    <p className="font-light text-sm leading-tight">
                      Non-formális oktatási keretek között is folyamatosan fejlesztem magam, igyekszem minél jobban
                      szélesíteni az ismereteimet.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-4/12 relative">
                <img src={Reka} className="absolute bottom-0 right-4" />
              </div>
              <div className="self-center flex flex-col">
                <a href="https://instagram.com/x" rel="noreferrer">
                  <InstagramIcon className="w-8 mb-8 hover:opacity-50" />
                </a>
                <a href="https://linkedin.com/in/x" rel="noreferrer">
                  <LinkedInIcon className="w-8 mt-8 hover:opacity-50" />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-brand rounded pl-16 pt-8 pr-8 flex flex-col mb-10">
            <h3 className="font-extrabold text-2xl mb-6">Tímár Dani - Minden szövegek írója</h3>
            <div className="flex">
              <div className="w-8/12 grid md:grid-cols-2 md:grid-rows-4 col-gap-20 row-gap-10 mb-10">
                <div className="flex items-start ">
                  <div className="mr-4">
                    <RocketIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Skillek</h4>
                    <p className="font-light text-sm leading-tight">
                      17 éves koromban rájöttem, hogy a képességeim fogják kifizetni a számláim.
                    </p>
                  </div>
                </div>
                <div className="flex items-start ">
                  <div className="mr-4">
                    <LightBulbIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Sales</h4>
                    <p className="font-light text-sm leading-tight">
                      Az értékesítésben találtam meg az első munka iránti szerelmemet. 5 év tapasztalatom van benne, de
                      elkezdtem más vizekre evezni.
                    </p>
                  </div>
                </div>
                <div className="flex items-start ">
                  <div className="mr-4">
                    <TheatreIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Írás</h4>
                    <p className="font-light text-sm leading-tight">
                      Hobbiként kezdtem el írni. Meseíró versenyeken és blogokon át vezetett az út odaáig, hogy együtt
                      dolgozhassunk.
                    </p>
                  </div>
                </div>
                <div className="flex items-start ">
                  <div className="mr-4">
                    <TheatreIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Instagram</h4>
                    <p className="font-light text-sm leading-tight">
                      Egyedül csinálom az Üzleti Farkas oldalt. Mondhatnék sok mindent, de beszéljen helyettem inkább az
                      oldal.
                    </p>
                  </div>
                </div>
                <div className="flex items-start ">
                  <div className="mr-4">
                    <TheatreIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Sport</h4>
                    <p className="font-light text-sm leading-tight">
                      Több csapatsportban is kipróbáltam magam, de a foci az örök szerelem.
                    </p>
                  </div>
                </div>
                <div className="flex items-start ">
                  <div className="mr-4">
                    <TheatreIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Rap</h4>
                    <p className="font-light text-sm leading-tight">
                      8 éves voltam, amikor meghallottam életem első rap zenéjét. Azóta is a szívem csücske.
                    </p>
                  </div>
                </div>
                <div className="flex items-start ">
                  <div className="mr-4">
                    <TheatreIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Maximalizmus</h4>
                    <p className="font-light text-sm leading-tight">
                      Ez az előnyöm és a hátrányom is. Az utolsó pillanatig tökéletesítem néha a dolgokat, mindig a
                      legjobbat akarom nyújtani.
                    </p>
                  </div>
                </div>
                <div className="flex items-start ">
                  <div className="mr-4">
                    <TheatreIcon className="w-10" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm leading-tight mb-2">Saját könyv</h4>
                    <p className="font-light text-sm leading-tight">
                      Az egyik nagy célom, hogy könyvet írjak. Egy regény és egy életrajzi is tervben van.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-4/12 relative">
                <img src={Dani} className="absolute bottom-0 right-4" />
              </div>
              <div className="self-center flex flex-col">
                <a href="https://instagram.com/x" rel="noreferrer">
                  <InstagramIcon className="w-8 mb-8 hover:opacity-50" />
                </a>
                <a href="https://linkedin.com/in/x" rel="noreferrer">
                  <LinkedInIcon className="w-8 mt-8 hover:opacity-50" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="-mt-16 rounded bg-gray-900 text-white text-2xl font-display font-extrabold ml-16 inline-block px-8 py-4 pr-20 mb-8">
          <p>
            A kreatív dolgokban vagyunk otthon. Viszont
            <br /> vannak remek partnereink, akikkel kiegészülve
            <br /> a kreativitáson túli területeket is lefedjük.
          </p>
        </div>
        <div className="grid md:rid-cols-2 lg:grid-cols-4 mb-32">
          <div className="rounded shadow-brand bg-white">
            <p>kep</p>
            <div>
              <p>Lévai Dávid és csapata</p>
              <p>Egyedi web-, és mobilapp fejlesztés</p>
            </div>
          </div>
        </div>
        <div className="rounded w-1/2 border-2 border-gray-900 bg-white p-8 mb-32">
          <p>
            Erre a helyre kerülnek majd a díjaink, amelyeket olyan projektekért kapunk, mint mondjuk a tiéd. Nagyon
            szeretnénk párat, így mindent megteszünk értük.
          </p>
          <p>Nem hiszed? Dolgozzunk együtt, és meglátod!</p>
          <button className="primary-btn">Besz</button>
        </div>
      </section>
    </Layout>
  );
}

export default Team;
