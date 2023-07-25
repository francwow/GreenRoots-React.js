import aceiteImg from "../assets/webpImages/aceite_carousel_cuadrado.webp";
import jabonImg from "../assets/webpImages/jabon_carousel_cuadrado.webp";
import chapstickImg from "../assets/webpImages/chapstick_carousel_cuadrado.webp";

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
    nameES: "Greenstick",
    nameEN: "Greenstick",
    img: chapstickImg,
    index: 2,
  },
];
