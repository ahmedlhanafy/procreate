import { ImageData } from "./types";
import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpg";
import image4 from "./images/4.jpg";
import image5 from "./images/5.jpg";
import image6 from "./images/6.jpg";
import image7 from "./images/7.jpg";
import image8 from "./images/8.jpg";
import image9 from "./images/9.jpg";
import image10 from "./images/10.jpg";
import image11 from "./images/11.jpg";
import image12 from "./images/12.jpg";
import image13 from "./images/13.jpg";
import image14 from "./images/14.jpg";
import image15 from "./images/15.jpg";
import image16 from "./images/16.jpg";
import image17 from "./images/17.jpg";
import image18 from "./images/18.jpg";
import image19 from "./images/19.jpg";

export function calculateAspectRatioFit(srcWidth: number, srcHeight: number, maxWidth: number, maxHeight: number) {
  var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

  return { width: srcWidth * ratio, height: srcHeight * ratio };
}
export function getImage(id: string): ImageData {
  return getImages().find((image) => image.id === id);
}

export function getImages(): ImageData[] {
  return [
    {
      id: "1",
      author: "Sawyer Bengtson",
      width: 640,
      height: 960,
      url: image1
    },
    {
      id: "2",
      author: "Mehran Samani",
      width: 640,
      height: 359,
      url: image2
    },
    {
      id: "3",
      author: "Mohammad Amirahmadi",
      width: 640,
      height: 427,
      url: image3
    },
    {
      id: "4",
      author: "Leio McLaren",
      width: 640,
      height: 800,
      url: image4
    },
    {
      id: "5",
      author: "Malte Schmidt",
      width: 640,
      height: 960,
      url: image5
    },
    {
      id: "6",
      author: "Marcelo Cidrack",
      width: 640,
      height: 960,
      url: image6
    },
    {
      id: "7",
      author: "Marcelo Cidrack",
      width: 640,
      height: 427,
      url: image7
    },
    {
      id: "8",
      author: "James Eades",
      width: 640,
      height: 393,
      url: image8
    },
    {
      id: "9",
      author: "Johannes Plenio",
      width: 640,
      height: 360,
      url: image9
    },
    {
      id: "10",
      author: "Marcus Wallis",
      width: 640,
      height: 480,
      url: image10
    },
    {
      id: "11",
      author: "Lily Banse",
      width: 640,
      height: 480,
      url: image11
    },
    {
      id: "12",
      author: "Piotr Chrobot",
      width: 640,
      height: 360,
      url: image12
    },
    {
      id: "13",
      author: "Ingmar H",
      width: 640,
      height: 896,
      url: image13
    },
    {
      id: "14",
      author: "Andrew Broderick",
      width: 640,
      height: 960,
      url: image14
    },
    {
      id: "15",
      author: "Hunter Newton",
      width: 640,
      height: 427,
      url: image15
    },
    {
      id: "16",
      author: "Kevin Zhang",
      width: 640,
      height: 427,
      url: image16
    },
    {
      id: "17",
      author: "Quaid Lagan",
      width: 640,
      height: 347,
      url: image17
    },
    {
      id: "18",
      author: "Dave",
      width: 640,
      height: 896,
      url: image18
    },
    {
      id: "19",
      author: "Kseniia Ilinykh",
      width: 640,
      height: 360,
      url: image19
    },
  ];
}
