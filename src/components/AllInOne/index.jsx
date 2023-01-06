import React from "react";
import { AllItem } from "./AllItem";

const AllInOne = () => {
  const items = [
    {
      heading: "Notifications",
      content:
        "Incididunt velit id anim quis duis sint enim proident dolore ut duis ut consequat nisi",
    },
    {
      heading: "Notifications",
      content:
        "Incididunt velit id anim quis duis sint enim proident dolore ut duis ut consequat nisi",
    },
    {
      heading: "Notifications",
      content:
        "Incididunt velit id anim quis duis sint enim proident dolore ut duis ut consequat nisi",
    },
    {
      heading: "Notifications",
      content:
        "Incididunt velit id anim quis duis sint enim proident dolore ut duis ut consequat nisi",
    },
    {
      heading: "Notifications",
      content:
        "Incididunt velit id anim quis duis sint enim proident dolore ut duis ut consequat nisi",
    },
    {
      heading: "Notifications",
      content:
        "Incididunt velit id anim quis duis sint enim proident dolore ut duis ut consequat nisi",
    },
    {
      heading: "Notifications",
      content:
        "Incididunt velit id anim quis duis sint enim proident dolore ut duis ut consequat nisi",
    },
    {
      heading: "Notifications",
      content:
        "Incididunt velit id anim quis duis sint enim proident dolore ut duis ut consequat nisi",
    },
  ];
  return (
    <div id="platforms" className="my-16">
      <div className="max-w-[1240px] mx-auto px-2">
        <div className="text-black text-center">
          <h1 className="text-6xl font-bold py-4">All-In-One Plaform</h1>
          <p className="text-gray-400 py-4 text-xl">
            Fugiat sit deserunt occaecat aliqua labore amet culpa ipsum
            in.Officia nostrud est consectetur ut aliqua excepteur nulla anim
            excepteur.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 px-2">
          {items.map((item, index) => (
            <AllItem
              key={index}
              heading={item.heading}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
