import React from "react";

const Footer = () => (
  <footer className="w-full py-6 mt-10 text-center bg-dark/80 border-t border-light/10">
    <span className="text-light/70 text-sm">
      &copy; {new Date().getFullYear()} Jerome Mondol. All rights reserved.
    </span>
  </footer>
);

export default Footer;
