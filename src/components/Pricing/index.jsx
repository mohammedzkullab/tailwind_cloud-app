import { Card, Container } from "components";
import Button from "components/Button";
import { CheckIcon } from "@heroicons/react/solid";

const Pricing = () => {
  return (
    <div>
      <div
        id="pricing"
        className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"
      ></div>
      <Container className="relative">
        <div className="text-gray-400 text-center">
          <h3 className="text-3xl">Pricing</h3>
          <h1 className="text-6xl font-bold py-4">
            The right price for your research
          </h1>
          <p className="text-gray-400 py-4 text-3xl">
            Fugiat sit deserunt occaecat aliqua labore amet culpa ipsum
            in.Officia nostrud est consectetur ut aliqua excepteur nulla anim
            excepteur.
          </p>
        </div>
        <div className="grid md:grid-cols-2 my-4">
          <PricingCard
            packageType="standered"
            price="$49"
            description="Non dolor id proident est deserunt Lorem laborum."
            features={["feature 1 ", "feature 2 ", " feature 3", "feature 4"]}
          />
          <PricingCard
            packageType="gold"
            packageColor="bg-amber-200"
            price="$99.99"
            description="Non dolor id proident est deserunt Lorem laborum."
            features={["feature 1 ", "feature 2 ", " feature 3", "feature 4"]}
          />
        </div>
      </Container>
    </div>
  );
};

const PricingCard = ({
  packageType,
  packageColor = "bg-indigo-200",
  price,
  description,
  features = [],
}) => (
  <Card className="text-slate-900 m-4 p-8">
    <span
      className={`uppercase px-3 py-1 ${packageColor} text-indigo-900 font-semibold rounded-2xl text-sm`}
    >
      {packageType}
    </span>
    <p className="text-6xl py-4 text-bold ">
      {price}
      <span className="text-xl text-slate-500 ">/mo</span>
    </p>
    <p className="text-2xl py-8 text-slate-500">{description}</p>
    <div className="text-2xl">
      {features &&
        features.map((item, index) => (
          <p className="flex py-4" key={index}>
            <CheckIcon className="w-8 mr-5 text-green-600" /> {item}
          </p>
        ))}
    </div>
    <Button className="w-full py-4 my-4">Get Started</Button>
  </Card>
);
export default Pricing;
