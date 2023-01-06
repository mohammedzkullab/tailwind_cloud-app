import { Button, Container } from "components";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-2">
      <Container className="grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600">
        <div className="my-2">
          <p className="text-2xl font-bold uppercase">Support</p>
          <ul className="text-start">
            <li className="pl-1">lorem </li>
            <li className="pl-1">lorem </li>
            <li className="pl-1">lorem </li>
            <li className="pl-1">lorem </li>
            <li className="pl-1">lorem </li>
          </ul>
        </div>
        <div className="my-2">
          <p className="text-2xl font-bold uppercase">Support</p>
          <ul className="text-start">
            <li className="pl-1">lorem </li>
            <li className="pl-1">lorem </li>
            <li className="pl-1">lorem </li>
            <li className="pl-1">lorem </li>
          </ul>
        </div>
        <div className="my-2">
          <p className="text-2xl font-bold uppercase">Support</p>
          <ul className="text-start">
            <li className="pl-1">lorem </li>
            <li className="pl-1">lorem </li>
            <li className="pl-1">lorem </li>
          </ul>
        </div>
        <div className="my-2">
          <p className="text-2xl font-bold uppercase">Support</p>
          <ul className="text-start">
            <li className="pl-1">lorem </li>
            <li className="pl-1">lorem </li>
            <li className="pl-1">lorem </li>
            <li className="pl-1">lorem </li>
          </ul>
        </div>

        <div className="col-span-2 flex flex-col justify-center">
          <div className="my-4">
            <p className="text-3xl">Subscribe to our newsletter </p>
            <p className="text-xl my-4">Minim duis irure velit excepteur. </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex flex-col sm:flex-row gap-2"
          >
            <input
              type="email"
              placeholder="Enter your Email"
              className="p-4 rounded-md w-full text-black"
            />
            <Button className="p-4">Subscibe</Button>
          </form>
        </div>
      </Container>
      <Container className="flex flex-col justify-between md:flex-row ">
        <p className="py-4">2022 Workflow, LLC. All rights reserved</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaTwitch />
          <FaGithub />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
