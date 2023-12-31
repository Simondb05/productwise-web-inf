import React from "react";
import Image from "next/image";
import tonyScreenshot from "@img/tonyscreenshot.png";

const page = () => {
  return (
    <div className="justify-center">
      <section className="flex justify-center justify-items-center flex-col">
        <div className="text-center text-6xl flex-row">
          Jouw persoonlijke{" "}
          <span className="text-green-500">supermarkthulp.</span>
        </div>
        <div className=" flex flex-column justify-center mt-10">
          <Image src={tonyScreenshot} height={500} alt="Screenshot" />
          <p>Alle </p>
        </div>
      </section>
    </div>
  );
};

export default page;
