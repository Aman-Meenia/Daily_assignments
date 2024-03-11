import React from "react";

const Main = () => {
  return (
    <>
      <div className="font-[sans-serif] bg-white p-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 gap-x-12">
            <div className="text-right">
              <img
                src="https://readymadeui.com/photo.webp"
                alt=""
                className="inline rounded-lg lg:w-10/12 w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-[#333] text-4xl font-extrabold mb-6">
                Welcome to Our Website
              </h2>
              <p className="text-base text-gray-500 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                ac enim velit. Donec iaculis, dui sed auctor ultricies, eros
                enim faucibus nisl, ac semper eros eros vitae nulla. Donec non
                quam in enim semper dignissim.
              </p>
              <p className="text-base text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                aliquam, ipsum vel iaculis bibendum, justo turpis ullamcorper
                mauris, non aliquam nisi purus vel nisl. Integer efficitur
                turpis in bibendum tincidunt. Nulla facilisi. Vestibulum
                fringilla leo et purus consectetur, vel tincidunt dolor rhoncus.
              </p>
              <a
                href="javascript:void(0);"
                className="inline-block mt-6 px-6 py-2.5 bg-green-500 text-white text-base font-medium rounded-md hover:bg-green-600"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 px-4 max-w-6xl mx-auto font-[sans-serif] text-gray-600 p-10">
        <div className="card bg-white rounded-lg shadow-md p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Boost Your Productivity
          </h3>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac
            habitasse platea dictumst. Proin quis quam vel nisi commodo blandit.
            Ut sed elit sit amet turpis venenatis porta.
          </p>
          <ul className="list-disc mt-4 space-y-2 pl-4">
            <li className="text-sm">Increased efficiency</li>
            <li className="text-sm">Improved focus and organization</li>
            <li className="text-sm">Reduced time spent on tasks</li>
          </ul>
          <a
            href="javascript:void(0);"
            className="inline-block px-4 py-2 bg-blue-500 text-white text-sm font-bold rounded-lg mt-4"
          >
            Get Started
          </a>
        </div>
        <div className="card bg-white rounded-lg shadow-md p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Simplify Your Workflow
          </h3>
          <p className="text-base">
            Nullam in elit ac velit placerat consectetur nec sed sapien. Duis
            sit amet lorem eu elit malesuada tristique. Donec ultricies mi nec
            erat aliquet, sed suscipit orci mollis.
          </p>
          <ul className="list-disc mt-4 space-y-2 pl-4">
            <li className="text-sm">Automated tasks and workflows</li>
            <li className="text-sm">
              Seamless collaboration and communication
            </li>
            <li className="text-sm">Enhanced project management</li>
          </ul>
          <a
            href="javascript:void(0);"
            className="inline-block px-4 py-2 bg-green-500 text-white text-sm font-bold rounded-lg mt-4"
          >
            Learn More
          </a>
        </div>
        <div className="card bg-white rounded-lg shadow-md p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Achieve Your Goals
          </h3>
          <p className="text-base">
            Nunc aliquet eros ultricies, hendrerit eros et, malesuada leo. Proin
            tincidunt purus at diam ultrices, in fringilla purus auctor. Nam eu
            diam eget purus semper tincidunt.
          </p>
          <ul className="list-disc mt-4 space-y-2 pl-4">
            <li className="text-sm">Set clear and achievable goals</li>
            <li className="text-sm">Track your progress and stay motivated</li>
            <li className="text-sm">
              Celebrate your successes and learn from your mistakes
            </li>
          </ul>
          <a
            href="javascript:void(0);"
            className="inline-block px-4 py-2 bg-purple-500 text-white text-sm font-bold rounded-lg mt-4"
          >
            Start Today
          </a>
        </div>
      </div>
    </>
  );
};

export default Main;
