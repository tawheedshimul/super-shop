import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto gap-4 md:gap-8 lg:gap-16 md:px-8 lg:py-12 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 lg:pr-12">
          <h1 className="text-3xl font-extrabold tracking-tight leading-tight md:text-4xl lg:text-5xl xl:text-6xl">
            Payments tool for software companies
          </h1>
          <p className="mt-4 text-base text-gray-600 md:text-lg lg:text-xl">
            From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.
          </p>
          <div className="mt-6 flex ">
            <a href="#" className="inline-block mt-3 px-6 py-4 text-lg font-medium text-center text-gray-800 border rounded-lg border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white ">
              Get started
            </a>
            <a href="#" className="mx-2 inline-block mt-3 px-6 py-4 text-lg font-medium text-center text-gray-800 border rounded-lg border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white ">
              Speak to Sales
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img className="object-contain w-full h-auto md:max-w-full md:h-auto lg:max-w-none" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
