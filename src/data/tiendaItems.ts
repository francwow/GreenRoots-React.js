import aceiteVideo from "../assets/videos/aceite.mp4";
import chapstickVideo from "../assets/videos/chapstick.mp4";
import jabonVideo from "../assets/videos/jabon.mp4";

type tiendaItem = {
  name: string;
  video: string;
  index: number;
};

export const tiendaItems: tiendaItem[] = [
  {
    name: "Aceite",
    video: aceiteVideo,
    index: 0,
  },
  {
    name: "Jabón líquido",
    video: jabonVideo,
    index: 1,
  },
  {
    name: "Chapstick",
    video: chapstickVideo,
    index: 2,
  },
];
