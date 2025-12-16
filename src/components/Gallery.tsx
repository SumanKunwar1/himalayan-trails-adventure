import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';

const Gallery = () => {
  const images = [
    { src: gallery1, alt: 'Guests enjoying mountain biking tour' },
    { src: gallery2, alt: 'Adventure tour in the Himalayas' },
    { src: gallery3, alt: 'Trekking expedition with clients' },
    { src: gallery4, alt: 'Group tour in Nepal mountains' },
  ];

  return (
    <section id="gallery" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Adventures
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Moments captured from our guests enjoying their Himalayan adventures
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-xl overflow-hidden group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-mountain-dark/0 group-hover:bg-mountain-dark/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
