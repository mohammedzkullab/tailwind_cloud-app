import { Container } from "components";

const About = () => {
  return (
    <Container id="about" className="text-center mt-36 md:mt-18">
      <div>
        <p className="text-5xl font-bold">
          Trusted by developers across the world
        </p>
        <p className="text-3xl text-zinc-400 my-4">
          Trusted by developers across the world
        </p>
      </div>
      <div className="my-4 px-2 grid md:grid-cols-3 gap-2 mt-4">
        <Feature heading="100%" content="Completion" />
        <Feature heading="24/7" content="Delivery" />
        <Feature heading="100K" content="Transactions" />
      </div>
    </Container>
  );
};

export default About;

const Feature = ({ heading, content }) => (
  <div className="border py-8 rounded-xl shadow-lg px-12 ">
    <h1 className="text-5xl text-indigo-600 font-bold">{heading}</h1>
    <p className="text-zinc-400 text-xl mt-2">{content}</p>
  </div>
);
