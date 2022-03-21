import * as React from "react";
import Layout from "../components/Layout/Layout";
import SearchEngineOptimization from "../components/SearchEngineOptimization/SearchEngineOptimization";

export default function ContactPage() {
  return (
    <Layout>
      <SearchEngineOptimization title="Contact" />
      <div className="container max-w-3xl min-h-screen p-5 text-center">
        <h2>Contact</h2>
        <p>Are you interested in working with me?</p>
        <p>Let's create something amazing together.</p>
        <div className="p-5 mt-5 text-left rounded-md shadow-lg bg-light-gray">
          <form method="post" data-netlify="true" name="contact" className="flex flex-col items-stretch gap-5 p-5">
            <input type="hidden" name="contact" value="contact" />

            <label htmlFor="firstName" className="font-bold">
              First Name <span className="text-rose-500">*</span>
            </label>
            <input type="text" name="firstName" placeholder="Brandon" required={true} className="p-2 mb-5 rounded-md focus:outline-purple" />

            <label htmlFor="lastName" className="font-bold">
              Last Name <span className="text-rose-500">*</span>
            </label>
            <input type="text" name="lastName" placeholder="Lim" required={true} className="p-2 mb-5 rounded-md focus:outline-purple" />

            <label htmlFor="email" className="font-bold">
              Email <span className="text-rose-500">*</span>
            </label>
            <input type="email" name="email" placeholder="hello@justbrandonlim.com" required={true} className="p-2 mb-5 rounded-md focus:outline-purple" />

            <label htmlFor="message" className="font-bold">
              Message <span className="text-rose-500">*</span>
            </label>
            <textarea name="message" placeholder="Hi! I am..." required={true} className="p-2 mb-5 rounded-md md:mb-0 focus:outline-purple" />

            <button type="submit" className="self-center p-2 text-white transition-all duration-300 rounded-md shadow-lg md:mt-20 justify-self-center max-w-min bg-purple hover:bg-purple/80 hover:scale-125">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
