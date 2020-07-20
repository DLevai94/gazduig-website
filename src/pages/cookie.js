import React from 'react';

const CookiePage = () => {
  return (
    <div>
      <div className="">
        <h3>HATÁLYOS: 2019. JANUÁR 1.</h3>
        <h3>1. MIK AZOK A COOKIE-K (SÜTIK), ÉS HOGYAN TUDOD MÓDOSÍTANI A BEÁLLÍTÁSOKAT?</h3>
        <p>
          A „cookie”-k (továbbiakban: „cookie” vagy „süti”) olyan kis szöveges fájlok, amelyeket egy weboldal
          felhasználhat arra, hogy még hatékonyabbá tegye a felhasználói élményt.
        </p>
        <p>
          Néhány “süti” csak átmeneti és eltűnik a böngésző bezárásával, míg léteznek tartós változatok is, melyek
          huzamosabb ideig számítógépén maradnak. A jogszabályok szerint a sütiket abban az esetben tárolhatjuk a
          látogató eszközén, ha erre feltétlenül szükség van a weboldalunk működése érdekében.
        </p>
        <p>
          Minden egyéb típusú süti használatához a látogató engedélyére van szükségünk. Jelen weboldal különféle sütiket
          használ. A weboldalon megjelenő néhány sütit harmadik fél szolgáltatóink helyezik el.
        </p>
        <p>
          A böngészők lehetőséget adnak a süti-beállítások megváltoztatására. A legtöbb böngésző alapértelmezettként
          automatikusan elfogadja a sütiket, de ez megváltoztatható annak érdekében, hogy a beállítást követően
          megakadályozza az automatikus elfogadást.
        </p>
        <p>
          Ha többet szeretnél megtudni a böngésző beállításainak módosításáról, nézd át a böngésző utasításait vagy
          súgóját. A legnépszerűbb böngészők süti-beállításairól az alábbi linkeken tájékozódhatsz:
        </p>
        <p className="text text--gray">
          <a href="https://support.google.com/accounts/answer/61416?hl=hu" target="_blank" rel="noreferrer">
            Google Chrome
          </a>
        </p>
        <p className="text text--gray">
          <a href="https://support.mozilla.org/hu/kb/S%C3%BCtik%20kezel%C3%A9se" target="_blank" rel="noreferrer">
            Firefox
          </a>
        </p>
        <p className="text text--gray">
          <a
            href="http://windows.microsoft.com/hu-hu/internet-explorer/delete-manage-cookies#ie=ie-11"
            target="_blank"
            rel="noreferrer">
            Microsoft Internet Explorer 11
          </a>
        </p>
        <p className="text text--gray">
          <a
            href="http://windows.microsoft.com/hu-hu/internet-explorer/delete-manage-cookies#ie=ie-10"
            target="_blank"
            rel="noreferrer">
            Microsoft Internet Explorer 10
          </a>
        </p>
        <p className="text text--gray">
          <a href="http://windows.microsoft.com/hu-hu/windows-10/edge-privacy-faq" target="_blank" rel="noreferrer">
            Microsoft Edge
          </a>
        </p>
        <p className="text text--gray">
          <a
            href="http://support.apple.com/kb/index?page=search&amp;q=cookies%20safari"
            target="_blank"
            rel="noreferrer">
            Safari
          </a>
        </p>
        <h3>2. HOL TÖRTÉNIK MEG TÁJÉKOZTATÁS ÉS A HOZZÁJÁRULÁS A SÜTI KEZELÉSSEL KAPCSOLATBAN?</h3>
        <p>
          Amikor a honlapunkat első alkalommal látogatod meg, akkor egy pop-up (felugró) ablak jelenik meg a képernyő
          tetején, és meg tudod határozni azt, hogy mely sütikhez adod a hozzájárulásod.
        </p>
        <p>
          Ezen tájékoztató ablak tartalmaz egy linket ehhez az{' '}
          <a href="https://gazduig.hu/adatvedelmi-tajekoztató">Adatvédelmi Tájékoztatóhoz</a> is is.
        </p>
        <h3>3. SÜTIK TÍPUSAI</h3>
        <p>
          <b>3.1. Elengedhetetlenül szükséges sütik</b>
        </p>
        <p>
          Az elengedhetetlen sütik weboldalunk használhatóságát segítik azáltal, hogy engedélyeznek olyan alapvető
          funkciókat, mint az oldalon való navigáció és a weboldal biztonságos területeihez való hozzáférés.&nbsp;
        </p>
        <p>A weboldal ezen sütik nélkül nem tud megfelelően működni.</p>
        <ul>
          <li>PHPSESSID A felhasználói munkamenet állapotát megőrzi az oldalkérések között. böngésző bezárásáig</li>
          <li>CookieConsent Eltárolja a felhasználó sütikezelési nyilatkozatát az adott domain-en. 1 év</li>
        </ul>
        <ul>
          <li>__cfduid A Cloudflare tartalomkiszolgáló azonosítja az internetes forgalmat. 1 év</li>
          <li>
            JSESSIONID Egyedi, anonim azonosítót rendel minden oldalmegnyitáshoz az oldal használhatóságának javítása
            érdekében böngésző bezárásáig
          </li>
          <li>
            wp_woocommerce_session_ Megőrzi a kosár tartalmát az oldalak közötti navigálás során böngésző bezárásáig
          </li>
          <li>
            woocommerce_items_in_cart Megőrzi a kosár tartalmát az oldalak közötti navigálás során böngésző bezárásáig
          </li>
          <li>
            wc_cart_hash_ Egyedi azonosítót társít minden vásárlóhoz, hogy a rendszer össze tudja kapcsolni a
            rendeléseket a vásárlóval 1 nap
          </li>
        </ul>
        <p>
          <b>3.2. Preferenciális sütik</b>
        </p>
        <p>
          A preferenciális sütik használatával olyan információkat tudunk megjegyezni, amelyek megváltoztatják a
          weboldal bizonyos magatartását, illetve kinézetét, erre példa lehet az általad előnyben részesített nyelv vagy
          a régió, amelyben tartózkodsz.
        </p>
        <p>
          <b>3.3. Statisztikai célú sütik</b>
        </p>
        <p>
          <span>
            Az adatok névtelen formában való gyűjtésén és jelentésén keresztül a statisztikai sütik segítenek a weboldal
            tulajdonosának abban, hogy megértse, hogyan lépnek interakcióba a látogatók a weboldallal.
          </span>
        </p>
        <ul>
          <li>
            _ga Egyedi azonosítót rögzít, segítségével anonim statisztikai adatokat készít a weboldal használatával
            kacsolatban. 2 év
          </li>
          <li>
            _gid Egyedi azonosítót rögzít, segítségével anonim statisztikai adatokat készít a weboldal használatával
            kacsolatban. 2 év
          </li>
          <li>_gat A Google Analytics használja a lekérések gyakoriságának szabályzásához. böngésző bezárásáig</li>
          <li>
            collect A Google Analytics számára gyűjt adatot a felhasználó eszközéről és böngészési szokásairól,
            különböző eszközökön és marketingcsatornákon át. böngésző bezárásáig
          </li>
        </ul>
        <p>
          <b>3.4. Marketing célú sütik</b>
        </p>
        <p>
          A személyre szabott sütiket a látogatók weboldal-tevékenységének nyomon követésére használjuk. A cél az, hogy
          minél relevánsabb hirdetéseket tegyünk közzé az egyéni felhasználók számára, preferenciájuknak megfelelő
          tartalmat jelenítsünk meg, valamint aktivitásra buzdítsuk őket.
        </p>
        <ul>
          <li>
            ads/ga-audiences A Google Adwords használja, olyan felhasználók célzásához, akiknek a böngészési szokásaik
            alapján magasabb vásárlási hajladósága feltételezhető. böngésző bezárásáig
          </li>
          <li>
            pref Egyedi azonosítót rögzít, melyből a Google statisztikát készít a felhasználó által YouTube-on
            megtekintett videókról. 8 hónap
          </li>
          <li>
            fr A Facebook használja, olyan felhasználók célzásához, akiknek a böngészési szokásaik alapján magasabb
            vásárlási hajladósága feltételezhető. 3 hónap
          </li>
          <li>
            tr A Facebook használja, olyan felhasználók célzásához, akiknek a böngészési szokásaik alapján magasabb
            vásárlási hajladósága feltételezhető. böngésző bezárásáig
          </li>
        </ul>
        <h3>4. A SÜTIK BEÁLLÍTÁSAINAK ELLENŐRZÉSE ÉS LETILTÁSA</h3>
        <p>
          A modern böngészők engedélyezik a “süti beállítások” módosítását. A böngészők egy része alapértelmezettként
          automatikusan elfogadja a “sütiket”, de ez a beállítás is megváltoztatható annak érdekében, hogy a jövőre
          nézve megakadályozza a látogató az automatikus elfogadást.
        </p>
        <p>
          Átállítás esetén a böngésző a továbbiakban minden alkalommal felajánlja a “sütik beállításának” választási
          lehetőségét.
        </p>
        <p>
          Az Adatkezelő a “sütik” engedélyezése esetén sem jegyez meg semmilyen azonosítót vagy jelszót. A látogató a
          “sütik” elfogadása esetén is teljes biztonságban használhatja a szolgáltatásokat.
        </p>
        <p>
          Felhívjuk látogatóink figyelmét, hogy mivel a “sütik” célja a weboldal használhatóságának és folyamatainak
          támogatása, valamint megkönnyítése, a “sütik” letiltása esetén nem tudjuk garantálni, hogy a látogató képes
          lesz a weboldal valamennyi funkciójának teljes körű használatára.
        </p>
        <p>A weboldal ez esetben a tervezettől eltérően működhet a böngészőben.</p>
      </div>
    </div>
  );
};

export default CookiePage;
