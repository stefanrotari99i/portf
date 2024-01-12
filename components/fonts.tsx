import { Heebo } from "next/font/google";
import localFont from "next/font/local";

const inter = Heebo({ subsets: ["latin"] });

export const millwon = localFont({
  src: "../public/fonts/millwon.woff2",
  display: "swap",
});

export const simplemade = localFont({
  src: "../public/fonts/simplemade.ttf",
  display: "swap",
});

export const mugesta = localFont({
  src: "../public/fonts/Mugesta.otf",
  display: "swap",
});

export const latherrich = localFont({
  src: "../public/fonts/latherrich.ttf",
  display: "swap",
});

export const idgrotesk = localFont({
  src: [
    {
      path: "../public/fonts/idgrotesk/IDGrotesk-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/idgrotesk/IDGrotesk-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/idgrotesk/IDGrotesk-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/idgrotesk/IDGrotesk-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/idgrotesk/IDGrotesk-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});
