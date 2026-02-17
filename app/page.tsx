/* eslint-disable prettier/prettier */
"use client";

import { Divider } from "@heroui/divider";
import { InView } from "react-intersection-observer";
import {Button} from "@heroui/button";
import AboutMe from "./about/page";
import Stack from "@/components/stacks";
import Worker from "@/components/worker";
import Particles from "@/components/reactbits/Backgrounds/Particles/Particles";
import { useState } from "react";
export default function Home() {
  const [layout,setLayout] = useState<any>("alternating");
  return (
    <>
 
      <div className="flex flex-col sm:flex-row">
        <section className="flex flex-col m-10">
          <h1 className="font-bold text-7xl">Hello I&apos;m</h1>
          <h2 className="text-3xl">Jiranon Khemklad</h2>
          <h2>Software Engineer</h2>
        </section>

        <section className="flex m-5 ">
          <Stack />
        </section>
      </div>
      <Divider />
      <Divider />

      <section>
        <InView threshold={0.2} >
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`transition duration-700 ease-in-out  ${inView ? "opacity-100 -translate-y-4" : "opacity-0"}`}
            >
              <AboutMe/>  
            </div>
          )}
        </InView>
      </section>

      <Divider />
       <section className="pt-10">
      <h1 className="text-5xl font-bold flex justify-center mb-5 animate-fadeZoomIn">
        Web Application / Script Automation
      </h1>

      {/* Layout Switch */}
      <div className="flex justify-center gap-4 mb-8">
        <Button
          onClick={() => {
            setLayout("alternating");
              console.log("Layout set to alternating");
            }}
          className={`px-4 py-2 rounded-lg border transition ${
            layout === "alternating"
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
        >
          Alternating
        </Button>
        {/**/}
        {/* <Button */}
        {/*   onClick={() =>{ console.log("test")  */}
        {/*       setLayout("grid")}} */}
        {/*   className={`px-4 py-2 rounded-lg border transition ${ */}
        {/*     layout === "grid" */}
        {/*       ? "bg-black text-white" */}
        {/*       : "bg-white text-black" */}
        {/*   }`} */}
        {/* > */}
        {/*   Grid */}
        {/* </Button> */}
        {/**/}
        <Button
          onClick={() => setLayout("minimal")}
          className={`px-4 py-2 rounded-lg border transition ${
            layout === "minimal"
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
        >
          Minimal
        </Button>
      </div>

      {/* Worker Render */}
      <Worker layout={layout} />
    </section>
    </>
  );
}
