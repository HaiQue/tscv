import React from "react";
import "./RefundPolicy.css";

const RefundPolicy = () => {
  return (
    <div className="refund-policy-container">
      <div className="refund-content">
        <h1>
          DALYVIO KEITIMO, DALYVAVIMO ATŠAUKIMO IR PINIGŲ GRĄŽINIMO TAISYKLĖS
        </h1>

        <section className="policy-section">
          <h2>DALYVIO KEITIMAS</h2>
          <p>
            Dalyvio vardas ir pavardė gali būti tikslinami / keičiami ne vėliau
            kaip likus 10 kalendorinėms dienoms iki renginio. Tokių atveju
            dalyvis turi susisiekti su konferencijos organizatoriais ir pateikti
            naujo dalyvio registracijos formai užpildyti reikiamus duomenis. Po
            šio termino keitimo galimybės nėra.
          </p>
        </section>

        <section className="policy-section">
          <h2>DALYVAVIMO ATŠAUKIMAS</h2>
          <div>
            <li>
              Jei dalyvavimas atšaukiamas likus ne mažiau kaip 30 kalendorinių
              dienų iki konferencijos, grąžinamas 100% sumokėtas dalyvio
              mokestis. Grąžinimas bus atliktas per 10 darbo dienų po atšaukimo
              patvirtinimo gavimo.
            </li>
            <li>
              Jei dalyvavimas atšaukiamas likus ne mažiau kaip 15 kalendorinių
              dienų iki konferencijos, grąžinamas 50% sumokėtas dalyvio
              mokestis. Grąžinimas bus atliktas per 10 darbo dienų po atšaukimo
              patvirtinimo gavimo.
            </li>
            <li>
              Jei dalyvavimas atšaukiamas likus 14 ir mažiau kalendorinėms
              dienoms iki konferencijos, dalyvio mokestis negrąžinamas. Tokiu
              atveju dalyvis praranda visą sumokėtą mokestį už dalyvavimą.
            </li>
          </div>
        </section>

        <section className="policy-section">
          <h2>Išimtys ir ypatingos sąlygos</h2>
          <p>
            Jeigu dalyvis dėl tam tikrų rimtų priežasčių (pvz., sveikatos
            problemų, nelaimingo atsitikimo) negali dalyvauti renginyje, gali
            būti svarstomos išimtys, tačiau grąžinimo sąlygos bus sprendžiamos
            atskirai ir tik pagal pateiktą dokumentaciją. Tokių atveju dalyvis
            turi nedelsdamas susisiekti su konferencijos organizatoriais ir
            pateikti reikalingus įrodymus.
          </p>
        </section>

        <section className="policy-section">
          <h2>Pinigų grąžinimo procedūra</h2>
          <h6>Pranešimo apie dalyvavimo atšaukimą teikimas</h6>
          <p>
            Dalyvis, norėdamas gauti pinigų grąžinimą, turi apie savo sprendimą
            raštu pranešti organizatoriams el. paštu
            konferencija@kraujodonoryste.lt. Pranešime turi būti nurodyta:
            Dalyvio vardas, pavardė. Data, iki kurios dalyvis nori atšaukti savo
            dalyvavimą.
          </p>
          <h6>Patvirtinimas apie atšaukimą</h6>
          <p>
            Gavę pranešimą apie atšaukimą, konferencijos organizatoriai per 3
            darbo dienas išsiunčia patvirtinimą, kad atšaukimas buvo gautas ir
            užregistruotas. Patvirtinime bus nurodyta, ar dalyvis turi teisę į
            grąžinimą pagal galiojančias taisykles (pvz., grąžinimo procentas ir
            grąžinimo suma).
          </p>
          <h6>Grąžinimo sumos apskaičiavimas</h6>
          <p>
            Atsižvelgiant į atšaukimo datą ir galiojančias pinigų grąžinimo
            taisykles, konferencijos organizatoriai apskaičiuos grąžintiną sumą.
          </p>
          <h6>Pinigų grąžinimo atlikimas</h6>
          <p>
            Po patvirtinimo apie atšaukimą ir grąžinimo sumos apskaičiavimo,
            pinigai bus pervedami į tą pačią sąskaitą, iš kurios buvo atliktas
            originalus mokėjimas. Pinigų grąžinimas bus atliktas per 10 darbo
            dienų nuo atšaukimo patvirtinimo gavimo dienos.
          </p>
          <h6>Pinigų grąžinimo pervedimo forma</h6>
          <p>
            Jei dalyvis atsiskaitė banko pavedimu, grąžinimas bus atliktas į tą
            pačią sąskaitą. Jei mokėjimas buvo atliktas kitais būdais (pvz.,
            kredito kortele, elektroniniu būdu), grąžinimo suma bus grąžinta į
            tą pačią mokėjimo sistemą. Išimtys ir papildomos sąlygos: Jei dėl
            išskirtinių aplinkybių (pvz., force majeure) renginys bus atšauktas
            organizatorių iniciatyva, dalyviai gaus 100% grąžinimą,
            nepriklausomai nuo atšaukimo datos. Jei dalyvis negauna grąžinimo
            per nurodytą laikotarpį (14 darbo dienų), jis turi apie tai
            informuoti konferencijos organizatorius, kurie atliks patikrinimus
            ir imsis reikalingų procedūrų.
          </p>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;
