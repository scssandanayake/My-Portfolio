import { FiDownload } from "react-icons/fi";
import { Button } from "../ui/Button";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div
          className="flex flex-col xl:flex-row items-center justify-between
      xl:pt-8 xl:pb-24"
        >
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">ML & DS Dev</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">Chamara Sandanayake</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/90">
              I'm a Machine Learning and Data Science Developer. I have
              experience in building machine learning models, data analysis, and
              data visualization.
            </p>

            {/* button & socials */}
            <div>
              <Button>
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
            </div>
          </div>

          {/* image */}
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
