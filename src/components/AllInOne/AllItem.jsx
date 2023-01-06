import { CheckIcon } from "@heroicons/react/outline";

export const AllItem = ({ heading, content }) => (
  <div className="flex">
    <div className="pt-4">
      <CheckIcon className="w-8 mr-4 text-green-600" />
    </div>
    <div>
      <h2 className="my-2 text-2xl">{heading}</h2>
      <p className="text-lg pt-2 pb-4">{content}</p>
    </div>
  </div>
);
