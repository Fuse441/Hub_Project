"use client";

import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import { Pagination } from "@heroui/pagination";
import { useTheme } from "next-themes";

import { stacks } from "@/config/stack";
function Stack() {
  const [total, setTotal] = useState(stacks.length);
  const [current, setCurrent] = useState(1);
  const stackTitle = [
    "Frameworks and Libraries",
    "Tools for Development and Collaboration",
    "Programming Languages",
  ];
  const itemsPerPage = 1;
  const currentPageItems = stackTitle.slice(
    (current - 1) * itemsPerPage,
    current * itemsPerPage,
  );

  const [currentTheme, setCurrentTheme] = useState<string | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (theme) setCurrentTheme(theme);
  }, [theme]);

  return (
    <div className="flex flex-col max-w-[600px] min-w-[250px]">
      <Card className="w-full">
        <CardHeader className="flex gap-3">
          {/* <Image
              alt="heroui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            /> */}
          <div className="flex flex-col">
            <p className="text-md"> {stackTitle[current - 1]} Stack Exp</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="flex flex-row w-full flex-wrap">
          {stacks
            .filter((item) => item.category == stackTitle[current - 1])
            .map((stack, index) => (
              <div key={index} className={`m-1.5`}>
                <Image
                  alt={stack.name}
                  className={`${currentTheme == "dark" && stack.background == true ? "invert-[100]" : ""}`}
                  height={45}
                  radius="none"
                  src={stack.icon}
                  title={stack.name}
                  width={45}
                />
              </div>
            ))}
        </CardBody>
        <Divider />
        <CardFooter>
          {/* <Link
              isExternal
              showAnchorIcon
              href="https://github.com/heroui-inc/heroui"
            >
              Visit source code on GitHub.
            </Link> */}
        </CardFooter>
      </Card>
      <div className="mt-5 justify-center flex">
        <Pagination
          loop
          showControls
          initialPage={current}
          total={3}
          onChange={setCurrent}
        />
      </div>
    </div>
  );
}

Stack.propTypes = {};

export default Stack;
