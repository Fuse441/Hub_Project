import React from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Link } from "@heroui/link";

import { works as worksRaw, type IWorks } from "@/config/work";
import Gallery from "@/components/gallery";

function Worker() {
  const workerIcon = "";
  const works: IWorks[] = worksRaw; // 🔥 Cast ให้ชัดเจนตรงนี้

  return (
    <div>
      {works.map((work, index) => (
        <div key={index} className="mb-5">
          <Accordion variant="splitted" key={index}>
            <AccordionItem
              aria-label={work.projectName}
              title={work.projectName.toUpperCase()}
            >
              <Link
                isExternal
                showAnchorIcon
                className="mb-10 mr-2"
                href={work.link}
              >
                {work.link
                  ? "Visit source code on GitHub."
                  : "ไม่สามารถเผยแพร่ได้"}
              </Link>

              <Gallery images={work.images} />

              <br />
              <p className="whitespace-pre-wrap">{work.description}</p>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </div>
  );
}

export default Worker;
