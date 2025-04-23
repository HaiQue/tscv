import SpeakerProfile from "./SpeakerProfile";
import photo1 from "../imgs/edited_photo_1.png";
import photo2 from "../imgs/edited_photo_2.png";
import photoSpeaker1 from "../imgs/Andrius Macas.png";
import photoSpeaker2 from "../imgs/Arunas Gelmanas.png";
import photoSpeaker3 from "../imgs/Riin Kullaste.png";
import photoSpeaker4 from "../imgs/Aurora.png";
import photoSpeaker5 from "../imgs/Agneta wikman.png";

function RenderSpeakers() {
  return (
    <div>
      {/* max width ~550px rekomenduotina jam */}
      <SpeakerProfile
        id="speaker1"
        imageUrl={photoSpeaker1}
        category="Racionalus kraujo naudojimas – gerokai anksčiau nei ligoninės erdvėse"
        name="Andrius Macas"
        description="Prof. dr. Andrius Macas ne tik Lietuvos sveikatos universiteto Anesteziologijos klinikos vadovas ir LSMU Medicinos fakulteto dekanas, bet ir visuomenėje gerai žinoma asmenybė. Jo nuomonės klausiama įvairiais klausimais, profesorių galime išvysti ir išgirsti televizijos ir radijo laidose, o mintis ir komentarus skaityti ne tik naujienų portaluose, bet ir socialinėje erdvėje, kur jo veiklą seka gausus būrys sekėjų. Profesorius buvo vienas pirmųjų, kuris pradėjo garsiai kalbėti apie pacientų saugą Lietuvoje ir neabejotinai nusipelnė pacientų saugos ambasadoriaus vardo. Konferencijos  metu prof. Andrius Macas diskutuos, kaip tausoti kraują gerokai anksčiau nei pačioje ligoninėje."
        buttonText="Daugiau apie prof. dr. Andrių Macą"
        theme="dark"
      />
      <SpeakerProfile
        id="speaker2"
        imageUrl={photoSpeaker2}
        category="Konservuotas kraujas - atgal į ateitį?"
        name="Arūnas Gelmanas"
        description="Arūnas Gelmanas, medicinos mokslų daktaras, LSMU Anesteziologijos klinikos profesorius. Šiuo metu vadovauja Anesteziologijos klinikos Centrinio anesteziologinio skyriaus Ortopedijos traumatologijos sektoriui. Kepenų transplantacijos grupės narys, aktyviai dalyvavęs kuriant anestezijos metodikas kepenų persodinimo operacijoms. Beveik 30 metų  vadovauja rezidentams regioninės anestezijos ir traumų ciklams. Dalyvauja rengiant mokymo priemones ir vadovėlius, vadovauja studentų mokslo darbų rengimui, ypač domisi kraujavimo valdymo traumų ir operacijų metu problematika. Baltijos regioninės anestezijos draugijos tarybos narys, Europos regioninės anestezijos draugijos narys, Europos anesteziologijos ir intensyvios terapijos draugijos narys, Pažangios traumos gyvybės palaikymo (ATLS®) fakulteto narys."
        buttonText="Daugiau apie Arūną Gelmantą"
        imagePosition="right"
        theme="light"
      />
      <SpeakerProfile
        id="speaker3"
        imageUrl={photoSpeaker3}
        category="Pacientų kraujo valdymas Šiaurės Estijos medicinos centro ligoninėje"
        name="Riin Kullaste"
        description="Gydytoja Riin Kullaste Šiaurės Estijos medicinos centro ligoninės kraujo banke dirbo 1997–2005 m. ir vėl grįžo 2022–2025 m. Tarp šių laikotarpių ji užėmė įvairias pareigas Kraujo centre, 14 metų vadovavo kaip direktorė."
        buttonText="Daugiau apie Johan Norberg"
        theme="dark"
      />
      <SpeakerProfile
        id="speaker4"
        imageUrl={photoSpeaker4}
        category="Pacientų kraujo valdymas Norvegijoje: 30 metų patirties perspektyva"
        name="Aurora Espinosa Fernandez"
        description="56 metų imunologijos ir transfuzinės medicinos specialistė su 30 metų patirtimi. Dirba asocijuota gydytoja Oslo universiteto ligoninės Imunologijos ir transfuzinės medicinos skyriuje, didžiausioje Norvegijos ligoninėje. Yra Norvegijos pacientų kraujo valdymo (PBM) darbo grupės vadovė ir buvusi Norvegijos hemovigilance darbo grupės narė. Taip pat yra NATA direktorių valdybos narė. Pagrindinės domėjimosi sritys – imunohematologija, kraujo naudojimas, pacientų kraujo valdymas (PBM) ir viskoelastinis testavimas. Dauguma jos publikacijų yra susijusios su šiomis sritimis."
        buttonText="Daugiau apie Aurora Espinosa Fernandez"
        theme="light"
        imageSize="small"
      />
      {
        <SpeakerProfile
          id="speaker5"
          imageUrl={photoSpeaker5}
          category="Trombocitų tiekimo sprendimai nutolusiose ligoninėse"
          name="Agneta Wikman"
          description="Prof. dr. Agneta Wikman nuo 2022 m. kovo 1 d. yra Transfuzinės medicinos docentė Klinikinės mokslo, intervencijos ir technologijų skyriuje bei konsultantė Karolinska universiteto ligoninėje. Jos klinikiniai tyrimai apima transfuzinės medicinos ir imunologijos sritis, ypač nėščių moterų diagnostiką ir stebėseną, kai susidaro antikūnai prieš vaisiaus kraujo ląsteles. Dabartiniai projektai susiję su kraujavimo gydymu, šaldytų trombocitų prieinamumo didinimu ir ilgesniu kraujo produktų saugojimo laiku nutolusių regionų ligoninėse. Taip pat ji rengia tyrimus dėl liofilizuotos plazmos taikymo priešhospitalinėje kraujavimo valdyme."
          // buttonText="Daugiau apie Agnetą Wikman"
          theme="dark"
        />
        /* 
      <SpeakerProfile
        id="speaker6"
        imageUrl={photo2}
        category="Dark Side of Leadership"
        name="Hal Gregersen"
        description="Lyderystės provokatorius, Raoul de Vitry d'Avaucourt..."
        buttonText="Daugiau apie Hal Gregersen"
        imagePosition="right"
        theme="light"
      /> */
      }
    </div>
  );
}

export default RenderSpeakers;
