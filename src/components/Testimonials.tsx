import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      author: 'Valerie & Chris',
      date: 'April 2014',
      content: ` “The team in Nepal was fantastic! Bista coordinated everything perfectly, and Shishir and Kumar tailored the routes to our riding skills. The Jungle Island Lodge was comfortable, and the staff were friendly. Everest Mountain Bike went above and beyond, cleaning our bikes and helping with laundry. A few minor communication issues, but overall a memorable trip!`,
    },
    {
      author: 'Kevin, Sally & Angus',
      date: 'March 2011',
      content: ` A truly great experience from start to finish. Everest Bike made planning easy, suggested extra activities like rafting and paragliding, and ensured safety throughout. Their local knowledge and recommended accommodations made the trip unforgettable.`,
    },
    {
      author: 'St. Andrews British School, Thailand',
      date: '',
      trip: 'Trekking trails',
      content: `Great trekking trails with plenty to see. Hotels and guesthouses were clean and comfortable. Food choices were excellent, guides were knowledgeable and friendly, and porters worked very hard. Overall, an enriching experience for our students.`,
    },
    {
      author: 'Himalayan High',
      date: 'Nov 2013',
      trip: 'Kathmandu and Annapurna area Mountain Bike adventure – Jomsom–Muktinath–Pokhara',
      content: `“EMB tailored a fantastic mountain biking adventure for us. The routes were incredible, accommodations and food excellent, and our guide Shishir made the experience even better. Even travel hiccups were handled smoothly. We had an amazing 14-day trip and felt fully supported throughout.`,
    },
    {
      author: 'Giovanni from Italy',
      date: 'April 2014',
      trip: 'Round Annapurna Tour',
      content: `The Annapurna mountain bike tour was unforgettable! The landscapes were stunning, climbs were manageable, and downhill rides incredible. Everest Mountain Bike’s organization was perfect, and their guides were highly professional. A must for biking and nature lovers!`,
    },
    {
      author: 'Alisdair Craig',
      date: 'April 2017',
      content: `“Four great days of MTBing with Shishir! The team was flexible, professional, and attentive. Bista’s arrangements and quick communication made everything seamless. Highly recommended!`,
    },
    {
      author: 'Joseph Templin, USA',
      date: 'October 2026',
      trip: 'Round Annapurna with Tilicho Lake',
      content: `An amazing trip full of experiences beyond my expectations. The team treated me like a king, and I can’t wait to return. Sharing Nepal stories has been a joy, and I’ll bring more friends next time!`,
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
