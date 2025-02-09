import SpeakerProfile from "./Speakers";
import photo1 from "../imgs/photo_1.jpg";
import photo2 from "../imgs/photo_2.jpg";

function RenderSpeakers() {
  return (
    // Add return statement
    <div>
      <SpeakerProfile
        imageUrl={photo1}
        category="Culture of Reinvention"
        name="Erin Meyer"
        description="INSEAD vadybos ir inovacijų profesorė, bestselerio 'No Rules Rule' bendraautorė..."
        buttonText="Daugiau apie Erin Meyer"
      />

      <SpeakerProfile
        imageUrl={photo2}
        category="Dark Side of Leadership"
        name="Prof. Manfred Kets de Vries"
        description="Lyderystės provokatorius, Raoul de Vitry d'Avaucourt..."
        buttonText="Daugiau apie Prof. Manfred Kets de Vries"
        imagePosition="right"
      />
    </div>
  );
}

export default RenderSpeakers;
