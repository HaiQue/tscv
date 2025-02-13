import SpeakerProfile from "./SpeakerProfile";
import photo1 from "../imgs/edited_photo_1.png";
import photo2 from "../imgs/edited_photo_2.png";

function RenderSpeakers() {
  return (
    <div>
      <SpeakerProfile
        imageUrl={photo1}
        category="Culture of Reinvention"
        name="Erin Meyer"
        description="INSEAD vadybos ir inovacijų profesorė, bestselerio 'No Rules Rule' bendraautorė..."
        buttonText="Daugiau apie Erin Meyer"
        theme="dark"
      />
      <SpeakerProfile
        imageUrl={photo2}
        category="Dark Side of Leadership"
        name="Prof. Manfred Kets de Vries"
        description="Lyderystės provokatorius, Raoul de Vitry d'Avaucourt..."
        buttonText="Daugiau apie Prof. Manfred Kets de Vries"
        imagePosition="right"
        theme="light"
      />
      <SpeakerProfile
        imageUrl={photo1}
        category="Culture of Reinvention"
        name="Erin Meyer"
        description="INSEAD vadybos ir inovacijų profesorė, bestselerio 'No Rules Rule' bendraautorė..."
        buttonText="Daugiau apie Erin Meyer"
        theme="dark"
      />
      <SpeakerProfile
        imageUrl={photo2}
        category="Dark Side of Leadership"
        name="Prof. Manfred Kets de Vries"
        description="Lyderystės provokatorius, Raoul de Vitry d'Avaucourt..."
        buttonText="Daugiau apie Prof. Manfred Kets de Vries"
        imagePosition="right"
        theme="light"
      />
      <SpeakerProfile
        imageUrl={photo1}
        category="Culture of Reinvention"
        name="Erin Meyer"
        description="INSEAD vadybos ir inovacijų profesorė, bestselerio 'No Rules Rule' bendraautorė..."
        buttonText="Daugiau apie Erin Meyer"
        theme="dark"
      />
      <SpeakerProfile
        imageUrl={photo2}
        category="Dark Side of Leadership"
        name="Prof. Manfred Kets de Vries"
        description="Lyderystės provokatorius, Raoul de Vitry d'Avaucourt..."
        buttonText="Daugiau apie Prof. Manfred Kets de Vries"
        imagePosition="right"
        theme="light"
      />
    </div>
  );
}

export default RenderSpeakers;
