import React from "react";
import { works as worksRaw, type IWorks } from "@/config/work";
import { Link } from "@heroui/link";
import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { InView } from "react-intersection-observer";

type WorkLayout = "alternating" | "grid" | "minimal";

interface WorkerProps {
  layout?: WorkLayout;
}

function Worker({ layout = "minimal" }: WorkerProps) {
  const works: IWorks[] = worksRaw;

  const renderWork = (work: IWorks, index: number) => {
    switch (layout) {
      case "grid":
        return (
        <Card
  key={index}
  className="group relative overflow-hidden rounded-2xl border border-neutral-200/60 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)]"
>
  {/* Image Section */}
  <div className="relative h-56 overflow-hidden">
   <div className="flex items-center justify-center h-44 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
  <Image
    src={work.logo}
    className="max-h-20 w-auto object-contain opacity-90 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
  />
</div>
    {/* Soft gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
  </div>

  {/* Content */}
  <CardBody className="flex flex-col gap-4 p-6">
    <div>
      <h3 className="text-xl font-semibold tracking-tight group-hover:text-black dark:group-hover:text-white transition">
        {work.projectName}
      </h3>

      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
        {work.description}
      </p>
    </div>

    {work.link && (
      <Link
        href={work.link}
        className="inline-flex items-center gap-2 text-sm font-medium text-black dark:text-white transition group-hover:gap-3"
      >
        View Project
        <span className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </Link>
    )}
  </CardBody>
</Card>
        );

      case "minimal":
        return (
        <div
        key={index}
        className="group relative w-full border-b border-neutral-200 py-8 transition-colors first:border-t dark:border-neutral-800"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono text-neutral-400">
                0{index + 1}
              </span>
              <h3 className="text-xl font-medium tracking-tight md:text-2xl">
                {work.projectName}
              </h3>
            </div>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 md:text-base">
              {work.description}
            </p>
          </div>

          <div className="flex items-center gap-6">
            {work.link && (
              <Link
                href={work.link}
                className="group/link flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-500"
              >
                View Source
                <span className="inline-block transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1">
                  ↗
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
        );

      default: // alternating (original style improved)
        return (
          <InView key={index} threshold={0.2}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`transition duration-700 ${
                  inView
                    ? "opacity-100 -translate-y-2"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <div
                  className={`flex flex-col ${
                    index % 2 !== 0
                      ? "md:flex-row-reverse"
                      : "md:flex-row"
                  } gap-6 w-11/12 max-w-5xl`}
                >
                  <div className="flex flex-col gap-3 p-6 w-full">
                    <p className="text-sm font-semibold">
                      Featured Project
                    </p>
                    <h3 className="text-2xl font-bold">
                      {work.projectName}
                    </h3>
                    <Card>
                      <CardBody>
                        <p className="whitespace-pre-line">
                          {work.description}
                        </p>
                      </CardBody>
                    </Card>
                    {work.link && (
                      <Link
                        className="text-sm underline"
                        href={work.link}
                      >
                        View Source
                      </Link>
                    )}
                  </div>

                  <div className="w-[250px] h-[250px] flex items-center justify-center">
                    <Image
                      src={work.logo}
                      className="max-w-full max-h-full object-contain shadow-xl border-2 hover:scale-110 transition"
                    />
                  </div>
                </div>
              </div>
            )}
          </InView>
        );
    }
  };

  return (
    <div
      className={`w-full flex ${
        layout === "grid"
          ? "grid grid-cols-1 md:grid-cols-4 gap-6"
          : "flex-col gap-6 items-center"
      }`}
    >
      {works.map(renderWork)}
    </div>
  );
}

export default Worker;

