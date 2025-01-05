import React from "react";

const Promos = () => {
  return (
    <div className="bg-gradient-to-b from-red-300 via-red-500 to-pink-500 min-h-screen py-10 px-5 md:px-20 font-sans">
      <div className="bg-white py-10 px-5 md:px-20 rounded-xl max-w-7xl mx-auto shadow-lg min-h-screen">
        <h1 className="text-center text-3xl font-Josefin-Sans text-black font-bold mb-[600px]">LOCATION</h1>
        

        
        {/* FOOTER */}
        <footer className="footer text-base-content p-10">
          <nav>
            <h6 className="footer-title text-xl text-black">Services</h6>
            <a className="link link-hover text-black">Branding</a>
            <a className="link link-hover text-black">Design</a>
            <a className="link link-hover text-black">Marketing</a>
            <a className="link link-hover text-black">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title text-xl text-black">Company</h6>
            <a className="link link-hover text-black">About us</a>
            <a className="link link-hover text-black">Contact</a>
            <a className="link link-hover text-black">Jobs</a>
            <a className="link link-hover text-black">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title text-xl text-black">Legal</h6>
            <a className="link link-hover text-black">Terms of use</a>
            <a className="link link-hover text-black">Privacy policy</a>
            <a className="link link-hover text-black">Cookie policy</a>
          </nav>
          <form>
            <h6 className="footer-title text-xl text-black">Newsletter</h6>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text text-black">Enter your email address</span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="ButterCup@site.com"
                  className="input input-bordered join-item bg-white placeholder-black/60 border-2"
                />
                <button className="btn join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </footer>
      </div>
      
    </div>
  );
};

export default Promos;
