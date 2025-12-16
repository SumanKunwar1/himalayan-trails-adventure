import { Bike } from 'lucide-react';

const Specialization = () => {
  return (
    <section id="specialization" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-full mb-6">
              <Bike className="w-8 h-8 text-secondary" />
            </div>
            
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Specialization
            </h2>
            
            <h3 className="font-heading text-xl md:text-2xl font-semibold text-secondary mb-8">
              The Mountain Biking Advantage
            </h3>
          </div>
          
          <div className="bg-card rounded-2xl shadow-card p-8 md:p-12">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
              While we excel in diverse adventures, our heart beats for two wheels. We possess unrivaled local knowledge of Nepal's best single tracks, hidden trails, and mountain passes—making us the preferred choice for bikers seeking authentic, challenging, and culturally immersive riding experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialization;
