import { Mountain } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Mountain className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            About Us
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Established in 2010 under the Nepal Government's Tourism Law, Everest Mountain Bikes Company is a pioneer in active adventure travel across Nepal, Tibet, and Bhutan. We don't just show you the Himalayas—we let you feel them under your tires and beneath your boots. With a core specialization in mountain biking and high-altitude trekking, our expert local guides ensure journeys that are as safe as they are spectacular.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
