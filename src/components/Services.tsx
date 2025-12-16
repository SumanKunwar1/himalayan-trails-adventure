import { Bike, Footprints, Compass } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Bike,
      title: '1. Mountain Biking',
      items: [
        'Kathmandu Valley Rides: 1–7 days',
        'Pokhara, Chitwan & Annapurna Biking Trips: 1–15 days',
      ],
    },
    {
      icon: Footprints,
      title: '2. Trekking Packages',
      items: [
        'Everest Region Treks: 7–20 days',
        'Annapurna Region Treks: 5–20 days',
        'Langtang Region Treks: 7–15 days',
        'Far West Treks (Khaptad & Api Himal): 10–30 days',
      ],
    },
    {
      icon: Compass,
      title: '3. Adventure & Cultural Tours',
      items: [
        'Jungle Safari: Chitwan National Park & Bardia National Park (1–3 days)',
        'White Water Rafting: Bhote Koshi, Trisuli & Seti Rivers',
        'Kathmandu Valley Sightseeing: 1–7 days',
        'Bhutan Cultural Tours: 7–15 days',
        'Tibet Overland Tours: 12–21 days',
        'Everest Mountain Flight Tours',
      ],
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the Himalayas through our diverse range of adventure experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl shadow-card p-6 md:p-8 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
