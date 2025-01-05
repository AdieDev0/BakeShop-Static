import React, { useEffect } from "react";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const centerCoordinates = {
  //   LATITUDE
  lat: 14.536106,
  // LONGTITUDE
  lng: 120.979501,
};

const GoogleMapComponent = () => {
  useEffect(() => {
    // GOOGLE MAP API KEY
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDz6Ksxzwrk5KMWjqqF0og7P61qXKzitA4`;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize the map after the script is loaded
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: centerCoordinates,
        zoom: 12,
      });

      // Add a marker to the map
      new window.google.maps.Marker({
        position: centerCoordinates,
        map: map,
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-red-300 via-red-500 to-pink-500 min-h-screen py-10 px-5 md:px-20 font-sans">
      <div className="bg-white py-10 px-5 md:px-20 rounded-xl max-w-7xl mx-auto shadow-lg min-h-screen">
        <h1 className="text-center text-3xl font-Josefin-Sans text-black font-bold mb-10">
          LOCATION
        </h1>

        {/* Google Map Container */}
        <div id="map" style={containerStyle}></div>

        {/* Footer */}
        <footer className="footer text-base-content p-10 mt-10">
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
                <span className="label-text text-black">
                  Enter your email address
                </span>
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

export default GoogleMapComponent;
