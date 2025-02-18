import React from "react";

function About() {
  return (
    <div className="py-16 bgw`">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-5/12 lg:w-5/12">
            <img src="./src/assets/startup.jpg" alt="image" />
          </div>
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
              officiis velit, voluptates mollitia vel optio repudiandae,
              pariatur maiores expedita reiciendis nesciunt sunt libero at
              molestiae animi, saepe enim architecto voluptatem!
            </p>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              praesentium accusantium ad quo aut quia, et sed modi voluptatem
              incidunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
