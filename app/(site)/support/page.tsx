import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deepak SM - Support Page",
  description: "This is Support page for Solid Pro",
  icons: {
    icon: "/images/favicon.ico", 
  },
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pb-20 mb-22">
      <Contact />
    </div>
  );
};

export default SupportPage;
