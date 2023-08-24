import React from 'react';

const LatestArticles = () => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        <style>
          {`
            .zoom:hover img {
              transform: scale(1.1);
            }
          `}
        </style>
        <h2 className="mb-12 text-center text-3xl font-bold">Latest Product</h2>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Article 1 */}
          <div className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20" data-te-ripple-init data-te-ripple-color="light">
            <img src="https://blog.sellfy.com/wp-content/uploads/2021/05/Repeated-words-copy-6.png" className="w-full align-middle transition duration-300 ease-linear" />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                <div className="flex h-full items-end justify-start">
                  <div className="m-6 text-white">
                    <h5 className="mb-3 text-lg font-bold">I miss the sun</h5>
                    <p>
                      <small>
                        Published <u>13.01.2022</u> by Anna Maria Doe
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
            </a>
          </div>

          {/* Article 2 */}
          <div className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20" data-te-ripple-init data-te-ripple-color="light">
            <img src="https://5.imimg.com/data5/SELLER/Default/2022/1/RE/PE/PD/11162429/casual-t-shirts-500x500.jpg" className="w-full align-middle transition duration-300 ease-linear" />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                <div className="flex h-full items-end justify-start">
                  <div className="m-6 text-white">
                    <h5 className="mb-3 text-lg font-bold">
                      Adventure in the desert
                    </h5>
                    <p>
                      <small>Published <u>12.01.2022</u> by Mark Equel</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
            </a>
          </div>

          {/* Article 3 */}
          <div className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20" data-te-ripple-init data-te-ripple-color="light">
            <img src="data:image/jpeg;base64,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" className="w-full align-middle transition duration-300 ease-linear" />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                <div className="flex h-full items-end justify-start">
                  <div className="m-6 text-white">
                    <h5 className="mb-3 text-lg font-bold">Lonely mountain</h5>
                    <p>
                      <small>
                        Published <u>10.01.2022</u> by Bilbo baggins
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
            </a>
          </div>

          {/* Add more articles here, if needed */}
        </div>
      </section>
    </div>
  );
};

export default LatestArticles;
