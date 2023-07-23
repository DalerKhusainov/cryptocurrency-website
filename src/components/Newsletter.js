// COMPONENTS
import NewsletterForm from "./NewsletterForm";

const Newsletter = () => {
  return (
    <section
      className="py-[40px] lg:py-[88px] bg-newsletter bg-cover"
      id="contact"
    >
      <div className="container mx-auto">
        <div
          className="flex flex-col items-center justify-between p-12 lg:flex-row bg-blue rounded-2xl lg:bg-newsletterBox lg:bg-no-repeat lg:h-[216px]"
          data-aos="fade-up"
          data-aos-offset="400"
        >
          {/* TEXT */}
          <div className="flex-1 w-full">
            <h3 className="mb-4 h3">Start mining now</h3>
            <p className="max-w-[348px] mb-8">
              Join now with CRAPPO to get the latest news and start mining now
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
