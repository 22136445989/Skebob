import { StaticImageData } from "next/image";
import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface ICard {
  id: number;
  name: string;
  image: StaticImageData;
}
