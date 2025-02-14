import React from 'react'
import PropTypes from 'prop-types'
import { Image } from '@heroui/image'
import { works } from '@/config/work';
import {Accordion, AccordionItem} from "@heroui/accordion";
import { Link } from '@heroui/link';
import { Button } from '@heroui/button';
import Gallery from '@/components/gallery';

function Worker() {
    const workerIcon = ""
  return (
    <>
    <div>
        {works.map(((work,index) => (
          <div className='mb-5'>
          <Accordion key={index}  variant="splitted" >
          <AccordionItem aria-label={work.projectName} title={work.projectName}>
          <Link isExternal showAnchorIcon href={work.link} className='mb-10 mr-2'>
          Visit source code on GitHub.
        </Link>
        <Gallery  images={work.images}>
          
        </Gallery>
        <br></br>
        <p className='whitespace-pre-line'>
            {work.description}
            </p>
        
          </AccordionItem>
          </Accordion>
          </div>
          
          
        )))
          
        }
    </div>

    </>
  )
}

Worker.propTypes = {}

export default Worker
