import React from 'react';

const About = () => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Why is it so great?
        </h2>

        <div className="flex flex-wrap items-center">
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-6 lg:mb-0 lg:w-5/12">
            <div className="relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init data-te-ripple-color="light">
              <img src="https://mdbcdn.b-cdn.net/img/new/textures/full/98.jpg" className="w-full" />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,0%,0.4)] bg-fixed">
                  <div className="flex h-full items-center justify-center">
                    <div className="px-6 py-12 text-center text-white md:px-12">
                      <h3 className="mb-6 text-2xl font-bold uppercase">
                        The future is
                        <u className="text-[hsl(210,12%,80%)]">now</u>
                      </h3>
                      <p className="text-[hsl(210,12%,80%)]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Harum quia laboriosam error consequuntur fugit,
                        doloribus rerum, iure nesciunt amet quidem veniam
                        cupiditate hic fugiat dolore aperiam quisquam libero
                        earum quibusdam?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="w-full shrink-0 grow-0 basis-auto md:px-6 lg:w-7/12">
            <div className="mb-12 flex">
              <div className="shrink-0">
                <div className="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg dark:bg-[hsl(204,23%,30%)]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                    stroke="currentColor" className="h-6 w-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">Support 24/7</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nihil quisquam quibusdam modi sapiente magni molestias
                  pariatur facilis reprehenderit facere aliquam ex.
                </p>
              </div>
            </div>

            <div className="mb-12 flex">
              <div className="shrink-0">
                <div className="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg dark:bg-[hsl(204,23%,30%)]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                    stroke="currentColor" className="h-6 w-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">Safe and solid</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Eum nostrum fugit numquam, voluptates veniam neque quibusdam
                  ullam aspernatur odio soluta, quisquam dolore animi mollitia a
                  omnis praesentium, expedita nobis!
                </p>
              </div>
            </div>

            <div className="mb-12 flex">
              <div className="shrink-0">
                <div className="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg dark:bg-[hsl(204,23%,30%)]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                    stroke="currentColor" className="h-6 w-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-1.757 4.306a4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">Extremely fast</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Enim cupiditate, minus nulla dolor cumque iure eveniet facere
                  ullam beatae hic voluptatibus dolores exercitationem? Facilis
                  debitis aspernatur amet nisi iure eveniet facere?
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="shrink-0">
                <div className="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg dark:bg-[hsl(204,23%,30%)]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                    stroke="currentColor" className="h-6 w-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-1 font-bold">Live analytics</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Illum doloremque ea, blanditiis sed dolor laborum praesentium
                  maxime sint, consectetur atque ipsum ab adipisci ullam
                  aspernatur odio soluta, quisquam dolore
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
