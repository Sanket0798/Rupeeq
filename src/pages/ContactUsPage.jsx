import { ContactUsHero } from '../components/sections';
import { TrustSection } from '../components/shared';
import { BlogCTASection } from '../components/sections';

/**
 * ContactUsPage - Contact Us page
 * Displays contact form and information
 */
const ContactUsPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Contact Form */}
      <section id="contact-us-hero">
        <ContactUsHero />
      </section>

      {/* Trust Section */}
      <TrustSection />

      {/* CTA Section */}
      <div className='mt-10'>
        <BlogCTASection />
      </div>
    </div>
  );
};

export default ContactUsPage;
