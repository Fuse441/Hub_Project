"use client";

import { useState } from "react";
import { Divider } from "@heroui/divider";

import { stacks } from "@/config/stack";
import Stack from "@/components/stacks";
import Worker from "@/components/worker";
export default function Home() {
  const [total, setTotal] = useState(stacks.length);
  const [current, setCurrent] = useState(1); // เริ่มต้นจากหน้า 1

  // การคำนวณการแสดงข้อมูลตามหน้า
  const itemsPerPage = 1; // กำหนดจำนวนโปรเจกต์ที่จะแสดงในแต่ละหน้า
  const currentPageItems = stacks.slice(
    (current - 1) * itemsPerPage,
    current * itemsPerPage,
  );

  return (
    <>
      <div className="flex justify-between">
        <section className="flex flex-col m-10">
          <h1 className="font-bold text-7xl">Hello I&apos;m</h1>
          <h2 className="text-3xl">Jiranon Khemklad</h2>
          <h2>Software Engineer</h2>
        </section>

        <section className="flex m-5">
          <Stack />
        </section>
      </div>
      <Divider />
      <section className="pt-10">
        <Worker />
      </section>
    </>
  );
}
