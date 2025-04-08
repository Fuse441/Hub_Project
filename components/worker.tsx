import React from "react";

import { works as worksRaw, type IWorks } from "@/config/work";
import { Link } from "@heroui/link";
import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { Chip } from "@heroui/chip";
import { InView } from "react-intersection-observer";
function Worker() {
  const workerIcon = "";
  const works: IWorks[] = worksRaw; // 🔥 Cast ให้ชัดเจนตรงนี้

  return (
    <div className="w-full flex flex-col items-center gap-3">
      {works.map((work, index) => (
        <div key={index}>
          {/* Left Side: Text Content */}

          <InView threshold={0.2}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`transition duration-700 ease-in-out  ${inView ? "opacity-100 -translate-y-4" : "opacity-0"}`}
              >
                <div
                  className={`flex flex-col ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} gap-6 w-11/12 max-w-4xl relative`}
                >
                  <div className=" w-full  flex flex-col gap-3 p-6 ">
                    <p className="text-sm font-semibold">Featured Project</p>
                    <h3 className="text-2xl font-bold ">{work.projectName}</h3>
                    <Card className="">
                      <CardBody>
                        <p className="whitespace-pre-line">
                          {work.description}
                        </p>
                      </CardBody>
                    </Card>
                    <Link className="text-sm  underline" href={work.link}>
                      {work.link
                        ? "Visit source code on GitHub."
                        : "ไม่สามารถเผยแพร่ได้"}
                    </Link>
                  </div>

                  <div className="w-[250px] h-[250px] flex items-center justify-center">
                    <Image
                      className="max-w-full max-h-full object-contain  shadow-xl border-solid border-2  hover:scale-125 "
                      src={work.logo}
                    />
                  </div>
                </div>
              </div>
            )}
          </InView>
        </div>
      ))}
    </div>
  );
}

export default Worker;
