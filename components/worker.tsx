import React from 'react'
import PropTypes from 'prop-types'
import { Image } from '@heroui/image'
import { works } from '@/config/work';
import {Accordion, AccordionItem} from "@heroui/accordion";
import { Link } from '@heroui/link';
import { Button } from '@heroui/button';
function Worker() {
    const workerIcon = ""
  return (
    <>
    <div>
        {works.map(((work,index) => (
          <div>
          <Accordion key={index}  variant="splitted">
          <AccordionItem aria-label={work.projectName} title={work.projectName}>
          <Link isExternal showAnchorIcon href={work.link} className='m-2 '>
          Visit source code on GitHub.
        </Link>
        <br></br>
        <p className='whitespace-pre-line'>
            {work.description}
            </p>
            {/* <Button onPress={onOpen}>Open Modal</Button> */}
          </AccordionItem>
          </Accordion>
          {/* <div className='flex flex-row'>
           {
            work.images.map(((image,index) => (
              <Image
              key={index}
              className='p-2'
      alt="HeroUI hero Image"
      src={image}
      width={300}
    />
            )))
           }
           </div> */}
          </div>
          
          
        )))
          
        }
    </div>

    </>
  )
}

Worker.propTypes = {}

export default Worker
