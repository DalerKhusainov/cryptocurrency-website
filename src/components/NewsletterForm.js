const NewsletterForm = () => {
  return (
    <form className="flex flex-col items-start flex-1 w-full gap-y-6 lg:flex-row lg:gap-x-10">
      <input
        className="text-base text-white input placeholder:text-white placeholder:text-base"
        type="text"
        placeholder="Enter your email"
      />
      <button className="px-8 bg-white btn text-darkblue hover:bg-white/70">
        Subscribe
      </button>
    </form>
  );
};

export default NewsletterForm;
