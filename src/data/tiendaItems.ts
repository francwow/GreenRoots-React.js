import aceiteImg from "../assets/webpImages/aceite_carousel.webp";
import jabonImg from "../assets/webpImages/jabon_carousel.webp";
import chapstickImg from "../assets/webpImages/chapstick_carousel.webp";

type tiendaItem = {
  name: string;
  img: string;
  index: number;
};

export const tiendaItems: tiendaItem[] = [
  {
    name: "Aceite",
    img: aceiteImg,
    index: 0,
  },
  {
    name: "Jabón líquido",
    img: jabonImg,
    index: 1,
  },
  {
    name: "Chapstick",
    img: chapstickImg,
    index: 2,
  },
];
