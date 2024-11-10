import React from "react";

function Contact() {
  return (
    <div id="Contact" className="bg-[#a99281]">
      <section className="text-yellow-950 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-yellow-950 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d115852.20673061378!2d66.9435779714627!3d24.850818003192575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m5!1s0x3eb33e75a28531d1%3A0x412558657f5ff4a8!2sGovernor%20House%20Sindh%2C%20Aiwan-e-Sadar%2C%20Civil%20Lines%2C%20Karachi%2C%20Pakistan!3m2!1d24.850840599999998!2d67.02598069999999!4m0!5e0!3m2!1sen!2sus!4v1725534339407!5m2!1sen!2sus"
            />
            <div className="bg-[#faede4] relative flex flex-wrap py-3 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-yellow-950 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Aiwan-e-Sadar,Civil Lines,75580,Governor House Sindh,
                  Pakistan,Karachi.
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-yellow-950 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed">
                  onlinework42101@email.com
                </a>
                <h2 className="title-font font-semibold text-yellow-950 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">0329-2018213</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-[#faede4] flex flex-col  md:ml-auto w-full md:py-4  mt-8  md:mt-auto ">
            <h2 className="text-yellow-950 text-3xl mb-10 font-medium title-font ml-3  mt-10">
              Contact
            </h2>
            <p className="leading-relaxed mb-10 text-yellow-950 ml-3 ">
              Feel Free To Connect Us
            </p>
            <div className="relative mb-10">
              <label
                htmlFor="name"
                className="leading-7 text-sm text-yellow-950 ml-3"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-11/12 ml-3 bg-white rounded border border-yellow-950 focus:border-yellow-950 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-yellow-950 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-10">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-yellow-950 ml-3"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-11/12 ml-3 bg-white rounded border border-yellow-950 focus:border-yellow-950 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-yellow-950 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-10">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-yellow-950 ml-3"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-11/12 ml-3 bg-white rounded border border-yellow-950 focus:border-yellow-950 focus:ring-2 focus:ring-yellow-900 h-32 text-base outline-none text-yellow-950 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>
            <button className="text-white  bg-yellow-950 w-40 ml-3 h-10 border-0 py-2 px-6 focus:outline-none hover:bg-[#6b5d53] rounded text-sm mb-10">
              Send Message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
