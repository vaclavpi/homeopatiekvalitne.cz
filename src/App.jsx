import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';

const Home = () => (
  <div className="max-w-4xl mx-auto px-4 py-12 space-y-10 text-gray-800">
  <h1 className="text-4xl font-serif text-violet-900 mb-6">Homeopatie – cesta k uzdravení</h1>

  <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
    <p>
      Homeopatickou poradnu jsem založila v roce 2012 na základě poptávky mých prvních spokojených klientů.
      Jejich důvěra mě inspirovala pokračovat v cestě léčby a porozumění.
    </p>
    <p className="mt-4">
      V dětství jsem snila o tom, že budu zdravotní sestrou. Zdravotní komplikace mi ale změnily plány,
      a tak jsem vystudovala klasickou filologii. Až po narození druhé dcery jsem objevila
      <span className="text-[#7E7E1A] font-semibold"> sílu přírodní léčby</span> – a našla své místo v homeopatii.
    </p>
  </div>

  <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
    <h2 className="text-2xl font-serif text-violet-900 mb-3">O mně</h2>
    <p>
      Odjakživa mě zajímalo zdraví a léčení. Dnes se věnuji zejména:
    </p>
    <ul className="mt-3 list-disc list-inside space-y-1 text-[#7E7E1A] font-medium">
      <li>konstituční homeopatii</li>
      <li>fytoterapii</li>
      <li>autopatii</li>
    </ul>
  </div>

  <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
    <h2 className="text-2xl font-serif text-violet-900 mb-3">Moje cesta</h2>
    <div className="space-y-4">
      <div className="flex items-start">
        <i className="fa-solid fa-heart-circle-plus text-[#7E7E1A] mt-1 mr-3"></i>
        <p><strong>Založení poradny:</strong> V roce 2012 jsem začala pomáhat lidem jako homeopatka.</p>
      </div>
      <div className="flex items-start">
        <i className="fa-solid fa-user-graduate text-[#7E7E1A] mt-1 mr-3"></i>
        <p><strong>Studium klasické filologie:</strong> I když jsem se nevydala zdravotní cestou, pomáhání mi zůstalo blízké.</p>
      </div>
      <div className="flex items-start">
        <i className="fa-solid fa-leaf text-[#7E7E1A] mt-1 mr-3"></i>
        <p><strong>Objev homeopatie:</strong> Přirozený způsob léčby mi otevřel nové obzory.</p>
      </div>
    </div>
  </div>

  <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
    <h2 className="text-2xl font-serif text-violet-900 mb-3">Léčebná výživa & celiakie</h2>
    <p>
      Zjištění, že mám <span className="text-[#7E7E1A] font-semibold">celiakii</span>, mi změnilo život.
      Dnes pomáhám druhým najít cestu, jak zvládnout bezlepkovou stravu – nejen technicky, ale i lidsky.
    </p>

    <div className="grid md:grid-cols-2 gap-4 mt-6">
      <div className="bg-white rounded-xl p-4 border border-gray-200">
        <div className="flex items-center mb-2">
          <i className="fa-solid fa-seedling text-[#7E7E1A] mr-2"></i>
          <span className="font-semibold text-[#7E7E1A]">Diagnóza jako nový začátek</span>
        </div>
        <p>Zjištění celiakie přináší výzvy, ale i nové možnosti. Pomohu vám najít cestu ke zdraví.</p>
      </div>

      <div className="bg-white rounded-xl p-4 border border-gray-200">
        <div className="flex items-center mb-2">
          <i className="fa-solid fa-bread-slice text-[#7E7E1A] mr-2"></i>
          <span className="font-semibold text-[#7E7E1A]">Bezlepková strava bez stresu</span>
        </div>
        <p>Pomohu vám s výběrem potravin i s tím, jak zvládnout nový životní styl.</p>
      </div>

      <div className="bg-white rounded-xl p-4 border border-gray-200">
        <div className="flex items-center mb-2">
          <i className="fa-solid fa-apple-whole text-[#7E7E1A] mr-2"></i>
          <span className="font-semibold text-[#7E7E1A]">Výživa jako klíč ke zdraví</span>
        </div>
        <p>Co jíme, ovlivňuje jak se cítíme. Společně najdeme rovnováhu pro vaše tělo i duši.</p>
      </div>

      <div className="bg-white rounded-xl p-4 border border-gray-200">
        <div className="flex items-center mb-2">
          <i className="fa-solid fa-hand-holding-heart text-[#7E7E1A] mr-2"></i>
          <span className="font-semibold text-[#7E7E1A]">Praktické rady a podpora</span>
        </div>
        <p>Ráda se s vámi podělím o osobní zkušenosti a tipy, které pomáhají každý den.</p>
      </div>
    </div>
  </div>
</div>
);


const WhatIsHomeopathy = () => (
<div className="max-w-4xl mx-auto px-4 py-12">
  <h1 className="text-4xl font-serif text-violet-900 mb-10 border-b pb-4">Co je to homeopatie?</h1>

  <section className="mb-10">
    <p className="mb-4">
      <strong className="text-violet-900">Homeopatie</strong> je téměř 200 let stará,
      <span className="text-[#7E7E1A] font-medium"> neinvazivní léčebná metoda</span>,
      která si dnes stále nachází své místo v léčebných postupech.
      Název pochází z řeckého slova znamenajícího „podobně trpící“.
    </p>
    <p>
      A právě to je její hlavní princip:
      <strong className="text-violet-900"> léčit podobné podobným</strong>. Látka, která nemoc způsobí,
      může ve stopovém množství podnítit organismus k <span className="text-[#7E7E1A] font-semibold">samouzdravení</span>.
    </p>
  </section>

  <section className="mb-10">
    <h2 className="text-2xl font-serif text-[#7E7E1A] mb-4">Historie homeopatie</h2>
    <p>
      Homeopatii popsal německý lékař <strong className="text-violet-900">Samuel Hahnemann</strong> (1755–1843),
      který objevil více než sto léků. Dnes je <span className="text-[#7E7E1A] font-semibold">druhou nejrozšířenější</span>
      alternativní metodou na světě – hned po tradiční čínské a indické medicíně.
    </p>
  </section>

  <section className="mb-10">
    <h2 className="text-2xl font-serif text-[#7E7E1A] mb-4">Typy homeopatie</h2>
    <p className="mb-2">Rozlišujeme dva hlavní přístupy:</p>
    <ul className="list-disc list-inside space-y-2 text-gray-800">
      <li><strong className="text-violet-900">Klasická (konstituční)</strong> – zaměřuje se na <span className="text-green-700">celkový stav</span> pacienta.</li>
      <li><strong className="text-violet-900">Akutní</strong> – řeší <span className="text-[#7E7E1A]">momentální obtíže</span> jako rýma či horečka.</li>
    </ul>
  </section>

  <section className="mb-10">
    <h2 className="text-2xl font-serif text-[#7E7E1A] mb-4">Homeopatie a další terapie</h2>
    <p>
      Homeopatie se často kombinuje s dalšími přírodními metodami jako je
      <strong className="text-violet-900"> fytoterapie</strong>,
      <strong className="text-violet-900"> autopatie</strong>,
      nebo třeba <span className="text-[#7E7E1A]">změna stravy a životního stylu</span>.
    </p>
  </section>

  <section className="mb-10">
    <h2 className="text-2xl font-serif text-[#7E7E1A] mb-4">Proč je důležitá konzultace?</h2>
    <p>
      Homeopat s vámi <span className="text-[#7E7E1A] font-medium">probere potíže i vaše celkové nastavení</span>,
      a díky zkušenostem (často i softwaru) vám doporučí ten nejvhodnější lék.
    </p>
  </section>

  <section className="mb-10">
    <h2 className="text-2xl font-serif text-green-700 mb-4">Co lze léčit homeopatií?</h2>
    <p className="mb-4">Pomáhá při celé řadě obtíží:</p>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 list-disc list-inside text-violet-900">
      <li>nespavost</li>
      <li>chronická únava</li>
      <li>deprese</li>
      <li>migrény</li>
      <li>opakované záněty dýchacích cest</li>
      <li>astma</li>
      <li>diabetes</li>
      <li>trávicí problémy</li>
      <li>alergie</li>
      <li>bolesti kloubů</li>
      <li>ekzémy</li>
      <li>problémy s kojením</li>
      <li>těhotenské nevolnosti</li>
      <li>krevní tlak</li>
      <li>osteoporóza</li>
      <li>bradavice</li>
    </ul>
  </section>

  <section className="mt-12">
    <p className="text-lg font-semibold text-violet-900">
      Zajímá vás, zda může homeopatie pomoci i vám?
      <span className="text-green-700"> Kontaktujte mě – ráda vám poradím!</span>
    </p>
  </section>
</div>


);

const Consultation = () => (
<div className="max-w-4xl mx-auto px-4 py-12">
  <h1 className="text-4xl font-serif mb-8" style={{ color: '#7E7E1A' }}>Konzultace</h1>

  <div className="space-y-12 text-gray-800">

    <section className="space-y-4">
      <h2 className="text-2xl font-serif mb-2" style={{ color: '#7E7E1A' }}>Mgr. Slavomíra Ochotnická</h2>
      <div className="bg-violet-100 rounded-lg p-4">
        <p className="mb-1">Třebízského 1245<br />250 88 Čelákovice</p>
        <p className="mb-1"><strong>Telefon:</strong> <a href="tel:+420776297250" className="underline" style={{ color: '#7E7E1A' }}>+420 776 297 250</a></p>
        <p className="mb-1"><strong>Email:</strong> <a href="mailto:slavomira.ochotnicka@seznam.cz" className="underline" style={{ color: '#7E7E1A' }}>slavomira.ochotnicka@seznam.cz</a></p>
        <p><strong>Facebook:</strong> <a href="#" target="_blank" className="underline" style={{ color: '#7E7E1A' }}>Navštivte náš Facebook</a></p>
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-serif mb-4" style={{ color: '#7E7E1A' }}>Kde nás najdete</h2>
      <div className="rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d20448.956290529008!2d14.766075000000003!3d50.158901!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470bf698dd6080bb%3A0xaadc29b2763422d7!2zVMWZZWLDrXpza8OpaG8gMTI0NS8xLCAyNTAgODggxIxlbMOha292aWNlLCDEjGVza28!5e0!3m2!1scs!2sus!4v1743441671093!5m2!1scs!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-serif mb-4" style={{ color: '#7E7E1A' }}>Konzultační místnost v Čelákovicích</h2>
      <img
        src="konzultacni-mistnost.jpg"
        alt="Konzultační místnost v Čelákovicích"
        className="rounded-lg shadow-md w-full"
      />
    </section>

    <section>
      <h2 className="text-2xl font-serif mb-4" style={{ color: '#7E7E1A' }}>Jak konzultace probíhá?</h2>
      <p>
        První konzultace trvá přibližně <strong>90 minut</strong>. Během tohoto času se věnujeme detailnímu rozboru vašeho zdravotního stavu, životního stylu a aktuálních potíží. Každý člověk je jiný, a proto hledáme řešení, které odpovídá právě vám.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-serif mb-4" style={{ color: '#7E7E1A' }}>Co s sebou?</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Aktuální lékařské zprávy</li>
        <li>Seznam užívaných léků</li>
        <li>Poznámky o vašich symptomech nebo změnách stavu</li>
      </ul>
    </section>

    <section className="bg-violet-100 rounded-lg p-6">
      <p className="font-semibold" style={{ color: '#7E7E1A' }}>
        Máte otázky nebo si chcete domluvit termín? Neváhejte se ozvat – ráda vám pomohu najít cestu ke zdraví.
      </p>
    </section>

  </div>
</div>


);

const Antidotas = () => (
<div className="max-w-4xl mx-auto px-4 py-12">
  <h1 className="text-4xl font-serif text-violet-900 mb-8">Podání léku</h1>
  <div className="prose max-w-none text-gray-800">
    <p className="mb-6">
      <strong className="text-[#7E7E1A]">Homeopatika se skladují na suchém a tmavém místě</strong>, mimo dosah mikrovlné trouby, mobilního telefonu nebo jiného elektromagnetického záření.
    </p>

    <h2 className="text-2xl font-serif text-[#7E7E1A] mt-10 mb-4">Správné podání léku</h2>
    <p>
      <strong className="text-[#7E7E1A]">Homeopatický lék</strong> (laktózové nebo sacharózové kuličky) se vkládá do úst buď na plastové (ne kovové) lžičce nebo z víčka tubičky. Není vhodné se léků dotýkat prsty.
    </p>

    <h2 className="text-2xl font-serif text-violet-900 mt-10 mb-4">Důležité pokyny před a po podání</h2>
    <p>
      <strong className="text-[#7E7E1A]">Je vhodné aspoň 30 minut</strong> (doporučuji 1 hodinu) před a po podání (konstitučního) léku nic nejíst, nepít, nekouřit, (nelíbat se :-) ).  
      U akutních stavů je ale nutné lék podat co nejrychleji a opakovat po několika minutách.
    </p>

    <h2 className="text-2xl font-serif text-violet-900 mt-10 mb-4">Dlouhodobý účinek konstitučního léku</h2>
    <p>
      <strong className="text-[#7E7E1A]">Správně zvolený konstituční lék</strong> působí dlouhodobě (několik týdnů až měsíců).  
      U lidí s pravidelnou medikací může být potřeba častější opakování.
    </p>

    <h2 className="text-2xl font-serif text-violet-900 mt-10 mb-4">Kombinace s alopatickými léky</h2>
    <p>
      Homeopatika lze <strong className="text-[#7E7E1A]">bezpečně kombinovat s alopatickými léky</strong>. Nejsou s nimi v kontraindikaci.
    </p>

    <h2 className="text-2xl font-serif text-violet-900 mt-10 mb-4">Koupě homeopatických léků</h2>
    <p>
      Běžné homeopatické léky jsou k dostání v lékárně za cca 80–100 Kč. Pokud nejsou skladem, obvykle je lékárna doobjedná do druhého dne.
    </p>

    <h2 className="text-2xl font-serif text-violet-900 mt-10 mb-4">Objednávka zahraničních homeopatických léků</h2>
    <p>
      Zahraniční léky je možné objednat – do týdne budou připraveny k vyzvednutí.
    </p>

    <h2 className="text-2xl font-serif text-violet-900 mt-10 mb-4">Co může účinek homeopatik rušit?</h2>
    <p>Antidotující faktory zahrnují:</p>
    <ul className="list-disc list-inside text-gray-700 space-y-2">
      <li>RTG záření a elektromagnetická rezonance</li>
      <li>Kafr (často v mastech a balzámech)</li>
      <li>Mentol (čaj, zubní pasta)</li>
      <li>Kofeinové nápoje, zejména káva</li>
      <li>Tvrdý alkohol</li>
    </ul>
  </div>
</div>

);

const Pricing = () => (
  <section class="homeopathy">
  <div class="homeopathy-container max-w-4xl mx-auto px-4 py-12">
      <h1 class="text-4xl font-serif text-[#7E7E1A] mb-8">Ceník</h1>
      <p class="text-lg text-gray-700 mb-6"><strong>Konzultační hodiny pouze po předchozí telefonické domluvě pondělí až pátek</strong>. Sobota s příplatkem 100 Kč k ceně konzultace.</p>
      
   
      <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white shadow-lg rounded-lg p-6">
              <h2 class="text-2xl font-serif text-violet-900 mb-4">Vstupní konzultace (60 - 90 min.)</h2>
              <p class="text-3xl font-bold text-[#7E7E1A] mb-4">2000 Kč</p>
              <ul class="text-gray-700 space-y-2">
                  <li>✓ Podrobná anamnéza</li>
                  <li>✓ Individuální léčebný plán</li>
              </ul>
          </div>

          <div class="bg-white shadow-lg rounded-lg p-6">
              <h2 class="text-2xl font-serif text-violet-900 mb-4">Každá další konzultace (30 - 45 min.)</h2>
              <p class="text-3xl font-bold text-[#7E7E1A] mb-4">500 - 700 Kč</p>
              <ul class="text-gray-700 space-y-2">
                  <li>✓ Zhodnocení pokroku</li>
                  <li>✓ Úprava léčebného plánu</li>
              </ul>
          </div>

          <div class="bg-white shadow-lg rounded-lg p-6">
              <h2 class="text-2xl font-serif text-violet-900 mb-4">Akutní homeopatie (úrazy, štípnutí, kousnutí aj.)</h2>
              <p class="text-3xl font-bold text-[#7E7E1A] mb-4">300 Kč</p>
              <ul class="text-gray-700 space-y-2">
                  <li>✓ Rychlá pomoc při akutních potížích</li>
              </ul>
          </div>

          <div class="bg-white shadow-lg rounded-lg p-6">
              <h2 class="text-2xl font-serif text-violet-900 mb-4">Telefonické konzultace pro registrované klienty do 10 minut</h2>
              <p class="text-3xl font-bold text-[#7E7E1A] mb-4">zdarma</p>
              <ul class="text-gray-700 space-y-2">
                  <li>✓ Rychlá konzultace bez poplatků</li>
              </ul>
          </div>
      </div>

      <div class="grid md:grid-cols-2 gap-8 mt-8">
          <div class="bg-white shadow-lg rounded-lg p-6">
              <h2 class="text-2xl font-serif text-violet-900 mb-4">Telefonické konzultace nad 10 minut</h2>
              <p class="text-3xl font-bold text-[#7E7E1A] mb-4">200 - 400 Kč</p>
              <ul class="text-gray-700 space-y-2">
                  <li>✓ Podle délky hovoru</li>
              </ul>
          </div>

          <div class="bg-white shadow-lg rounded-lg p-6">
              <h2 class="text-2xl font-serif text-violet-900 mb-4">Při léčbě dvou členů rodiny pro třetího vstupní konzultace</h2>
              <p class="text-3xl font-bold text-[#7E7E1A] mb-4">sleva</p>
              <ul class="text-gray-700 space-y-2">
                  <li>✓ Sleva při současné léčbě více členů rodiny</li>
              </ul>
          </div>

          <div class="bg-white shadow-lg rounded-lg p-6">
              <h2 class="text-2xl font-serif text-violet-900 mb-4">Bezlepková poradna (60 min.)</h2>
              <p class="text-3xl font-bold text-[#7E7E1A] mb-4">500 Kč</p>
              <ul class="text-gray-700 space-y-2">
                  <li>✓ Poradenství ohledně bezlepkové diety</li>
              </ul>
          </div>
      </div>

      <article class="mt-12">
          <h2 class="text-2xl font-serif text-violet-900 mb-4">Informace</h2>
          <ul class="text-gray-700 space-y-4">
              <li><strong>V případě online konzultace platba předem.</strong></li>
              <li>Možnost zakoupení <strong>dárkových poukazů.</strong></li>
              <li>Možnost platby <strong>v hotovosti, převodem na účet či QR kódem a prostřednictvím služby Benefit Plus.</strong></li>
              <li><strong>Číslo účtu: 304122517</strong></li>
              <li><strong>Kód banky (ČSOB): 0300</strong></li>
              <li>Možnost konzultace u klienta (doprava po Čelákovicích zdarma, jinak 6 Kč/km)</li>
          </ul>
          
          <p class="mt-4">Veškeré dotazy prosím pište na <a href="mailto:slavomira.ochotnicka@seznam.cz" class="text-violet-600">slavomira.ochotnicka@seznam.cz</a> nebo volejte na <strong>+420 776 297 250</strong>.</p>
          <p class="mt-4 text-sm text-gray-500">Ceník platný od 1. 1. 2025.</p>
      </article>
  </div>
</section>

);

const HomeopathyBox = () => (
  <div className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="text-4xl font-serif text-violet-900 mb-8">Homeopatická lékárnička</h1>
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-serif text-violet-900 mb-4">Základní vybavení</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-violet-50 p-4 rounded-lg">
            <h3 className="font-serif text-violet-900 mb-2">Pro akutní stavy</h3>
            <ul className="text-gray-700 space-y-1">
              <li>• Arnica montana 30CH</li>
              <li>• Belladonna 15CH</li>
              <li>• Apis mellifica 15CH</li>
            </ul>
          </div>
          <div className="bg-violet-50 p-4 rounded-lg">
            <h3 className="font-serif text-violet-900 mb-2">Pro běžné obtíže</h3>
            <ul className="text-gray-700 space-y-1">
              <li>• Nux vomica 15CH</li>
              <li>• Chamomilla 15CH</li>
              <li>• Rhus toxicodendron 9CH</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
);



const AboutUs = () => (
  <div className="max-w-4xl mx-auto px-4 py-12 space-y-10 text-gray-800">
  <h1 className="text-4xl font-serif text-violet-900 mb-6">Homeopatie – cesta k uzdravení</h1>

  <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
    <p>
      Homeopatickou poradnu jsem založila v roce 2012 na základě poptávky mých prvních spokojených klientů.
      Jejich důvěra mě inspirovala pokračovat v cestě léčby a porozumění.
    </p>
    <p className="mt-4">
      V dětství jsem snila o tom, že budu zdravotní sestrou. Zdravotní komplikace mi ale změnily plány,
      a tak jsem vystudovala klasickou filologii. Až po narození druhé dcery jsem objevila
      <span className="text-[#7E7E1A] font-semibold"> sílu přírodní léčby</span> – a našla své místo v homeopatii.
    </p>
  </div>

  <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
    <h2 className="text-2xl font-serif text-violet-900 mb-3">O mně</h2>
    <p>
      Odjakživa mě zajímalo zdraví a léčení. Dnes se věnuji zejména:
    </p>
    <ul className="mt-3 list-disc list-inside space-y-1 text-[#7E7E1A] font-medium">
      <li>konstituční homeopatii</li>
      <li>fytoterapii</li>
      <li>autopatii</li>
    </ul>
  </div>

  <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
    <h2 className="text-2xl font-serif text-violet-900 mb-3">Moje cesta</h2>
    <div className="space-y-4">
      <div className="flex items-start">
        <i className="fa-solid fa-heart-circle-plus text-[#7E7E1A] mt-1 mr-3"></i>
        <p><strong>Založení poradny:</strong> V roce 2012 jsem začala pomáhat lidem jako homeopatka.</p>
      </div>
      <div className="flex items-start">
        <i className="fa-solid fa-user-graduate text-[#7E7E1A] mt-1 mr-3"></i>
        <p><strong>Studium klasické filologie:</strong> I když jsem se nevydala zdravotní cestou, pomáhání mi zůstalo blízké.</p>
      </div>
      <div className="flex items-start">
        <i className="fa-solid fa-leaf text-[#7E7E1A] mt-1 mr-3"></i>
        <p><strong>Objev homeopatie:</strong> Přirozený způsob léčby mi otevřel nové obzory.</p>
      </div>
    </div>
  </div>

  <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
    <h2 className="text-2xl font-serif text-violet-900 mb-3">Léčebná výživa & celiakie</h2>
    <p>
      Zjištění, že mám <span className="text-[#7E7E1A] font-semibold">celiakii</span>, mi změnilo život.
      Dnes pomáhám druhým najít cestu, jak zvládnout bezlepkovou stravu – nejen technicky, ale i lidsky.
    </p>

    <div className="grid md:grid-cols-2 gap-4 mt-6">
      <div className="bg-white rounded-xl p-4 border border-gray-200">
        <div className="flex items-center mb-2">
          <i className="fa-solid fa-seedling text-[#7E7E1A] mr-2"></i>
          <span className="font-semibold text-[#7E7E1A]">Diagnóza jako nový začátek</span>
        </div>
        <p>Zjištění celiakie přináší výzvy, ale i nové možnosti. Pomohu vám najít cestu ke zdraví.</p>
      </div>

      <div className="bg-white rounded-xl p-4 border border-gray-200">
        <div className="flex items-center mb-2">
          <i className="fa-solid fa-bread-slice text-[#7E7E1A] mr-2"></i>
          <span className="font-semibold text-[#7E7E1A]">Bezlepková strava bez stresu</span>
        </div>
        <p>Pomohu vám s výběrem potravin i s tím, jak zvládnout nový životní styl.</p>
      </div>

      <div className="bg-white rounded-xl p-4 border border-gray-200">
        <div className="flex items-center mb-2">
          <i className="fa-solid fa-apple-whole text-[#7E7E1A] mr-2"></i>
          <span className="font-semibold text-[#7E7E1A]">Výživa jako klíč ke zdraví</span>
        </div>
        <p>Co jíme, ovlivňuje jak se cítíme. Společně najdeme rovnováhu pro vaše tělo i duši.</p>
      </div>

      <div className="bg-white rounded-xl p-4 border border-gray-200">
        <div className="flex items-center mb-2">
          <i className="fa-solid fa-hand-holding-heart text-[#7E7E1A] mr-2"></i>
          <span className="font-semibold text-[#7E7E1A]">Praktické rady a podpora</span>
        </div>
        <p>Ráda se s vámi podělím o osobní zkušenosti a tipy, které pomáhají každý den.</p>
      </div>
    </div>
  </div>
</div>
);

const GuestBook = () => (
  <div className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="text-4xl font-serif text-violet-900 mb-8">Kniha návštěv</h1>
    <div className="space-y-8">
      <div className="bg-violet-50 p-6 rounded-lg">
        <h2 className="text-2xl font-serif text-violet-900 mb-4">Napište nám svůj názor</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="name">Jméno</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="message">Zpráva</label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-violet-600 text-white px-6 py-2 rounded-lg hover:bg-violet-700 transition-colors"
          >
            Odeslat
          </button>
        </form>
      </div>
      
      <div className="space-y-6">
        <h2 className="text-2xl font-serif text-violet-900 mb-4">Reference našich klientů</h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-gray-700 mb-4">
            "Homeopatie mi pomohla s chronickými migrénami. Po třech měsících léčby jsem zaznamenala výrazné zlepšení."
          </p>
          <p className="text-violet-600 font-medium">- Marie K.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-gray-700 mb-4">
            "Oceňuji profesionální a současně lidský přístup. Díky homeopatické léčbě se můj syn zbavil častých angín."
          </p>
          <p className="text-violet-600 font-medium">- Jan P.</p>
        </div>
      </div>
    </div>
  </div>
);

const Partners = () => (
  <div className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="text-4xl font-serif text-violet-900 mb-8">Partnerské společnosti</h1>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-serif text-violet-900 mb-4">Homeopatická akademie</h2>
        <p className="text-gray-700 mb-4">
          Vzdělávací instituce zaměřená na výuku klasické homeopatie.
        </p>
        <a href="#" className="text-violet-600 hover:text-violet-800">Více informací →</a>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-serif text-violet-900 mb-4">Homeopatická lékárna</h2>
        <p className="text-gray-700 mb-4">
          Specializovaná lékárna s širokým sortimentem homeopatických přípravků.
        </p>
        <a href="#" className="text-violet-600 hover:text-violet-800">Více informací →</a>
      </div>
    </div>
  </div>
);

const Links = () => (
  <div className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="text-4xl font-serif text-violet-900 mb-8">Užitečné odkazy</h1>
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-serif text-violet-900 mb-4">Odborné organizace</h2>
        <div className="space-y-4">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-serif text-violet-900 mb-2">Česká komora homeopatů</h3>
            <p className="text-gray-700 mb-4">
              Profesní organizace sdružující kvalifikované homeopaty v ČR.
            </p>
            <a href="#" className="text-violet-600 hover:text-violet-800">Navštívit stránky →</a>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-serif text-violet-900 mb-2">Světová homeopatická organizace</h3>
            <p className="text-gray-700 mb-4">
              Mezinárodní organizace pro rozvoj a výzkum v homeopatii.
            </p>
            <a href="#" className="text-violet-600 hover:text-violet-800">Navštívit stránky →</a>
          </div>
        </div>
      </section>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/co-je-homeopatie" element={<WhatIsHomeopathy />} />
          <Route path="/konzultace" element={<Consultation />} />
          <Route path="/antidota" element={<Antidotas />} />
          <Route path="/cenik" element={<Pricing />} />
          <Route path="/lekarnicka" element={<HomeopathyBox />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/o-nas" element={<AboutUs />} />
          <Route path="/kniha-navstev" element={<GuestBook />} />
          <Route path="/partneri" element={<Partners />} />
          <Route path="/odkazy" element={<Links />} />
        </Routes>

        <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-t">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-serif text-violet-900 mb-6">Kontakt</h3>
                <div className="space-y-4 text-gray-600">
                  <p className="flex items-center hover:text-violet-600 transition-colors">
                    <MapPinIcon className="h-5 w-5 mr-3" />
                    Květinová 123, Praha 5
                  </p>
                  <p className="flex items-center hover:text-violet-600 transition-colors">
                    <PhoneIcon className="h-5 w-5 mr-3" />
                    +420 777 888 999
                  </p>
                  <p className="flex items-center hover:text-violet-600 transition-colors">
                    <EnvelopeIcon className="h-5 w-5 mr-3" />
                    info@homeopatie-praha.cz
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-serif text-violet-900 mb-6">Důležité odkazy</h3>
                <div className="space-y-4">
                  <p>
                    <a href="#" className="text-violet-600 hover:text-violet-800 transition-colors">
                      Zásady ochrany osobních údajů
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-violet-600 hover:text-violet-800 transition-colors">
                      Obchodní podmínky
                    </a>
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="mt-12 text-center text-gray-500 text-sm">
              © 2024 Homeopatické Poradenství. Všechna práva vyhrazena.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;