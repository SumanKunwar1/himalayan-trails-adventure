import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactDetails = [
    {
      icon: MapPin,
      label: 'Address',
      value: 'Budhanilkantha-4, Kathmandu, Nepal',
      subValue: 'P.O. Box: 12370, Kathmandu',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+977-9841207642',
      subValue: 'WhatsApp / Viber available',
      href: 'tel:+9779841207642',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'prbista@gmail.com',
      href: 'mailto:prbista@gmail.com',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Contact Details
          </h2>
          <p className="text-lg text-muted-foreground">
            P. R. Bista
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {contactDetails.map((contact, index) => {
              const Icon = contact.icon;
              const Content = () => (
                <div className="bg-card rounded-2xl shadow-card p-6 text-center hover:shadow-elevated transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">
                    {contact.label}
                  </h3>
                  <p className="text-muted-foreground">{contact.value}</p>
                  {contact.subValue && (
                    <p className="text-sm text-secondary mt-1 flex items-center justify-center gap-1">
                      {contact.label === 'Phone' && <MessageCircle className="w-4 h-4" />}
                      {contact.subValue}
                    </p>
                  )}
                </div>
              );

              return contact.href ? (
                <a key={index} href={contact.href} className="block">
                  <Content />
                </a>
              ) : (
                <div key={index}>
                  <Content />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
