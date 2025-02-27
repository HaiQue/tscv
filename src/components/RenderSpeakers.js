import SpeakerProfile from "./SpeakerProfile";
import photo1 from "../imgs/edited_photo_1.png";
import photo2 from "../imgs/edited_photo_2.png";

function RenderSpeakers() {
  return (
    <div>
      <SpeakerProfile
        id="speaker1"
        imageUrl={photo1}
        category="Culture of Reinvention"
        name="Erin Meyer"
        description="INSEAD vadybos ir inovacijų profesorė, bestselerio 'No Rules Rule' bendraautorė..."
        buttonText="Daugiau apie Erin Meyer"
        theme="dark"
      />
      <SpeakerProfile
        id="speaker2"
        imageUrl={photo2}
        category="Dark Side of Leadership"
        name="Prof. Manfred Kets de Vries"
        description="Lyderystės provokatorius, Raoul de Vitry d'Avaucourt..."
        buttonText="Daugiau apie Prof. Manfred Kets de Vries"
        imagePosition="right"
        theme="light"
      />
      <SpeakerProfile
        id="speaker3"
        imageUrl={photo1}
        category="Culture of Reinvention"
        name="Johan Norberg"
        description="INSEAD vadybos ir inovacijų profesorė, bestselerio 'No Rules Rule' bendraautorė..."
        buttonText="Daugiau apie Johan Norberg"
        theme="dark"
      />
      <SpeakerProfile
        id="speaker4"
        imageUrl={photo2}
        category="Dark Side of Leadership"
        name="David McWilliams"
        description="Lyderystės provokatorius, Raoul de Vitry d'Avaucourt..."
        buttonText="Daugiau apie David McWilliams"
        imagePosition="right"
        theme="light"
      />
      <SpeakerProfile
        id="speaker5"
        imageUrl={photo1}
        category="Culture of Reinvention"
        name="Amy Gallo"
        description="INSEAD vadybos ir inovacijų profesorė, bestselerio 'No Rules Rule' bendraautorė..."
        buttonText="Daugiau apie Amy Gallo"
        theme="dark"
      />
      <SpeakerProfile
        id="speaker6"
        imageUrl={photo2}
        category="Dark Side of Leadership"
        name="Hal Gregersen"
        description="Lyderystės provokatorius, Raoul de Vitry d'Avaucourt..."
        buttonText="Daugiau apie Hal Gregersen"
        imagePosition="right"
        theme="light"
      />
    </div>
  );
}

export default RenderSpeakers;
