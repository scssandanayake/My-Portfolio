import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";

//page components
import Social from "@/components/ui/Social";
import Photo from "@/components/ui/Photo";
import AnimatedText2 from "@/components/main/AnimatedText2";

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
            <span className="text-xl ml-1">ML Developer.</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <AnimatedText2 />
            </h1>
            <p className="max-w-[500px] mb-9 text-white/90">
              I'm a Machine Learning and Data Science Developer. I have
              experience in building machine learning models, data analysis, and
              data visualization.
            </p>

            {/* button & socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center
                text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* image */}
          <div>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
