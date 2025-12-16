import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      author: 'Valerie & Chris',
      date: 'April 2014',
      content: `First, let me say that the team in Nepal are fantastic. We can't stress enough how we appreciated the hospitality and flexibility. Bista did an excellent job coordinating the latter half of our trip...`,
    },
    {
      author: 'Kevin, Sally & Angus',
      date: 'March 2011',
      trip: 'Poon Hill/Ghorepani',
      content: `A truly great experience from start to finish...`,
    },
    {
      author: 'St. Andrews British School, Thailand',
      date: '',
      trip: 'Trekking trails',
      content: `• Great trails
• Lots to see
• Perhaps too short a trekking time on some days?...`,
    },
    {
      author: 'Himalayan High',
      date: 'Nov 2013',
      trip: 'Kathmandu and Annapurna area Mountain Bike adventure – Jomsom–Muktinath–Pokhara',
      content: `Comment: After viewing a Youtube video - Himalayan High"...`,
    },
    {
      author: 'Giovanni from Italy',
      date: 'April 2014',
      trip: 'Round Annapurna Tour',
      content: `I experienced the Annapurna mountain bike tour in April / May 2014...`,
    },
    {
      author: 'Alisdair Craig',
      date: 'April 2017',
      content: `I've just returned from Nepal after 4 great days of MTBing with Shishir...`,
    },
    {
      author: 'Joseph Templin, USA',
      date: 'October 2026',
      trip: 'Round Annapurna with Tilicho Lake',
      content: `Thank you! It was great seeing you...`,
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What our adventurers say about their experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-card p-6 md:p-8 flex flex-col"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              <p className="text-muted-foreground leading-relaxed flex-grow mb-6 whitespace-pre-line">
                {testimonial.content}
              </p>
              
              <div className="border-t border-border pt-4">
                <p className="font-heading font-semibold text-foreground">
                  {testimonial.author}
                </p>
                {testimonial.date && (
                  <p className="text-sm text-muted-foreground">
                    {testimonial.date}
                  </p>
                )}
                {testimonial.trip && (
                  <p className="text-sm text-secondary font-medium mt-1">
                    {testimonial.trip}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
