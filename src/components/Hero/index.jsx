import heroImage from "assets/cyber-bg.png";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";
import { Button } from "components";
const Hero = () => {
  return (
    <div
      id="home"
      className="bg-zinc-200 flex items-start justify-between flex-col md:flex-row w-full h-screen"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:justify-start w-full px-2 py-4">
          <p className="text-2xl">Unique sequencing & Production</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold ">
            Cloud managment
          </h1>
          <p className="text-2xl">This is our Tech brand</p>
          <Button className="py-3 px-6 sm:w-[60%] my-4">Get Started</Button>
        </div>
        <picture>
          <img className="w-full" src={heroImage} alt="/" />
        </picture>
        <div
          className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl"
        >
          <div className="md:flex items-center justify-center">
            <FloatItem Icon={CloudUploadIcon} content="App Security" />
            <FloatItem Icon={DatabaseIcon} content="Dashboard Design" />
            <FloatItem Icon={ServerIcon} content="Cloud Data" />
            <FloatItem Icon={PaperAirplaneIcon} content="API" />
          </div>
        </div>
      </div>
    </div>
  );
};

const FloatItem = ({ Icon, content }) => {
  return (
    <p className="flex px-4 py-2 text-slate-500">
      <Icon className="h-6 text-indigo-600" />
      {content}
    </p>
  );
};
export default Hero;
