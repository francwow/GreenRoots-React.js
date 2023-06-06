import aceiteVideo1 from "../assets/videos/aceite.mp4";
import chapstickVideo1 from "../assets/videos/chapstick.mp4";
import jabonVideo1 from "../assets/videos/jabon.mp4";
import aceiteVideo2 from "../assets/videos/aceite.webm";
import chapstickVideo2 from "../assets/videos/chapstick.webm";
import jabonVideo2 from "../assets/videos/jabon.webm";

type tiendaItem = {
  name: string;
  video1: string;
  video2: string;
  index: number;
};

export const tiendaItems: tiendaItem[] = [
  {
    name: "Aceite",
    video1: aceiteVideo1,
    video2: aceiteVideo2,
    index: 0,
  },
  {
    name: "Jabón líquido",
    video1: jabonVideo1,
    video2: jabonVideo2,
    index: 1,
  },
  {
    name: "Chapstick",
    video1: chapstickVideo1,
    video2: chapstickVideo2,
    index: 2,
  },
];
