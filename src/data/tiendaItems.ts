import aceiteImg from "../assets/webpImages/aceite_carousel.webp";
import jabonImg from "../assets/webpImages/jabon_carousel.webp";
import chapstickImg from "../assets/webpImages/chapstick_carousel.webp";

type tiendaItem = {
  nameES: string;
  nameEN: string;
  img: string;
  index: number;
};

export const tiendaItems: tiendaItem[] = [
  {
    nameES: "Aceite",
    nameEN: "Oil",
    img: aceiteImg,
    index: 0,
  },
  {
    nameES: "Jabón líquido",
    nameEN: "Liquid Soap",
    img: jabonImg,
    index: 1,
  },
  {
    nameES: "Chapstick",
    nameEN: "Chapstick",
    img: chapstickImg,
    index: 2,
  },
];
