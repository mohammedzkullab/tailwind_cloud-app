import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";

import supportImage from "assets/support.jpg";
import { Card } from "components";

const Support = () => {
  return (
    <div id="support" className="w-full mt-24">
      <div className="h-[700px] w-full bg-gray-900/90 absolute -z-10">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supportImage}
          alt="/"
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="text-center text-white px-4 py-12">
          <h3 className="text-3xl uppercase">Support</h3>
          <h2 className="text-6xl py-6">Finding the right team</h2>
          <p className="py-4 text-slate-300 text-xl">
            Quis dolore commodo laborum ut Lorem eu. Dolor eiusmod sunt in id
            ullamco id enim tempor eu ullamco mollit nostrud reprehenderit
            ullamco id enim tempor eu ullamco mollit nostrud reprehenderit
            dolor. Culpa
          </p>
        </div>
        <div className="flex flex-col md:flex-row relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 ">
          <SupportItem
            Icon={PhoneIcon}
            heading="sales"
            content="Nisi Lorem deserunt eiusmod et laboris laboris aliqua esse fugiat dolor aliquip."
          />
          <SupportItem
            Icon={ChipIcon}
            heading="Media Inquires"
            content="Nisi Lorem deserunt eiusmod et laboris laboris aliqua esse fugiat dolor aliquip."
          />
          <SupportItem
            Icon={SupportIcon}
            heading="Technical support"
            content="Nisi Lorem deserunt eiusmod et laboris laboris aliqua esse fugiat dolor aliquip."
          />
        </div>
      </div>
    </div>
  );
};

const SupportItem = ({ Icon, heading, content }) => (
  <Card className="flex flex-col justify-between text-black ">
    <div className="p-8">
      <Icon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
      <p className="text-5xl font-bold my-4">{heading}</p>
      <p className="text-gray-600 text-xl">{content}</p>
    </div>
    <div className="bg-slate-100 pl-8 py-4">
      <p className="flex items-center text-indigo-600 cursor-pointer">
        Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
      </p>
    </div>
  </Card>
);

export default Support;
