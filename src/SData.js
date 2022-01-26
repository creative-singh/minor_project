import web from "./images/s1.jpg";
import app from "./images/s2.jpg";
import software from "./images/s3.jpg";
import digital from "./images/s4.jpg";
import android from "./images/s5.jpg";
import marketing from "./images/s6.jpg";

const SData = [
  {
    imgsrc: web,
    title: "Web Development",
    text: "Websites promotes your business 24/7: No employee, I mean literally no employee will do that.",
    redirection: "/web-dev",
  },
  {
    imgsrc: app,
    title: "App Development",
    text: "We believe that strong mobile technology enhances lives in meaningful ways.",
    redirection: "/app-dev",
  },
  {
    imgsrc: software,
    title: "BlockChain Development",
    text: "Accelerate digital transformation initiatives with Blockchain development.",
    redirection: "/block-chain-dev",
  },
  {
    imgsrc: digital,
    title: "IoT App",
    text: "We are pros at optimizing your operational core to build IoT-connected systems for you — regardless of sector.",
    redirection: "/iot-app",
  },
  {
    imgsrc: android,
    title: "Cloud Application",
    text: "The power of today's new cloud capabilities is vast and growing. See how Intuz can make it work for your business.",
    redirection: "/cloud-app",
  },
  {
    imgsrc: marketing,
    title: "App Marketing",
    text: "We have the knowledge to undertake app store optimization and app advertising that boosts your app downloads.",
    redirection: "/app-marketing",
  },
];

export default SData;
