import earthImg from '../planets/earth.png';
import jupiterImg from '../planets/jupiter.png';
import marsImg from '../planets/mars.png';
import mercuryImg from '../planets/mercury.png';
import saturnImg from '../planets/saturn.png';
import uranusImg from '../planets/uranos.png';
import venusImg from '../planets/venus.png';
import neptuneImg from '../planets/neptune.png';

import earthPixel from '../pixelPlanets/earthPixel.png';
import jupiterPixel from '../pixelPlanets/jupiterPixel.png';
import marsPixel from '../pixelPlanets/marsPixel.png';
import mercuryPixel from '../pixelPlanets/mercuryPixel.png';
import saturnPixel from '../pixelPlanets/saturnPixel.png';
import uranusPixel from '../pixelPlanets/uranusPixel.png';
import venusPixel from '../pixelPlanets/venusPixel.png';
import neptunePixel from '../pixelPlanets/neptunePixel.png';
import plutoPixel from '../pixelPlanets/plutoPixel.png';
import erisPixel from '../pixelPlanets/erisPixel.png';
import haumeaPixel from '../pixelPlanets/haumeaPixel.png';
import makemakePixel from '../pixelPlanets/makemakePixel.png';
import ceresPixel from '../pixelPlanets/ceresPixel.png';

export const planets = [
    {
      title: "Earth",
      image: earthImg,
      description: "Earth is the third planet from the Sun and the only known place in the universe where life exists. It has a diverse climate and a protective atmosphere."
    },
    {
      title: "Jupiter",
      image: jupiterImg,
      description: "Jupiter is the largest planet in the Solar System, known for its Great Red Spot and strong magnetic field. It is a gas giant with more than 75 moons."
    },
    {
      title: "Mars",
      image: marsImg,
      description: "Mars, the 'Red Planet,' is known for its iron-rich soil and the possibility of past liquid water. It has the largest volcano in the Solar System, Olympus Mons."
    },
    {
      title: "Mercury",
      image: mercuryImg,
      description: "Mercury is the smallest and closest planet to the Sun. It has extreme temperature variations and a heavily cratered surface."
    },
    {
      title: "Saturn",
      image: saturnImg,
      description: "Saturn is famous for its stunning ring system made of ice and rock. It is a gas giant with a strong magnetic field and numerous moons, including Titan."
    },
    {
      title: "Uranus",
      image: uranusImg,
      description: "Uranus is a unique ice giant that rotates on its side. It has a pale blue color due to methane in its atmosphere and faint ring systems."
    },
    {
      title: "Venus",
      image: venusImg,
      description: "Venus, often called Earth's twin, has a thick, toxic atmosphere with extreme greenhouse effects, making it the hottest planet in the Solar System."
    },
    {
      title: "Neptune",
      image: neptuneImg,
      description: "Neptune is the farthest planet from the Sun and has the strongest winds in the Solar System. It has a deep blue color due to methane in its atmosphere."
    }
];
export const Classification = {
  inner: {
    title: "Inner Planets",
    description: "The inner planets, also known as terrestrial planets, are rocky worlds located within the asteroid belt. They have dense metallic cores, relatively thin atmospheres, and varied surface conditions. Due to their proximity to the Sun, they experience shorter orbital periods and greater temperature variations. While some, like Earth, support life, others, such as Venus and Mercury, have extreme environments.",
    examples: ["Mercury", "Venus", "Earth", "Mars"],
    images: [mercuryPixel, venusPixel, earthPixel, marsPixel]
  },
  outer: {
    title: "Outer Planets",
    description: "The outer planets, also known as gas giants (or ice giants in the case of Uranus and Neptune), are massive planets located beyond the asteroid belt. Unlike terrestrial planets, they lack a well-defined solid surface and are composed mainly of hydrogen, helium, and other gases. They have extensive ring systems, powerful magnetic fields, and numerous moons. Jupiter and Saturn are classified as gas giants, while Uranus and Neptune, with their higher concentrations of ices like water, ammonia, and methane, are called ice giants.",
    examples: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    images: [jupiterPixel, saturnPixel, uranusPixel, neptunePixel]
  },
  dwarf: {
    title: "Dwarf Planets",
    description: "Dwarf planets are celestial bodies that orbit the Sun and have sufficient mass to assume a nearly round shape. However, they do not meet the criteria of clearing their orbital paths of other debris, which distinguishes them from full-fledged planets. These objects are often found in the Kuiper Belt, beyond Neptune, although some, like Ceres, reside in the asteroid belt. Dwarf planets can have moons and exhibit unique surface compositions, often containing ice and rock.",
    examples: ["Pluto", "Eris", "Haumea", "Makemake", "Ceres"],
    images: [plutoPixel, erisPixel, haumeaPixel, makemakePixel, ceresPixel]
  }

};