import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";
import { Image } from "@heroui/image";
import { Pagination } from "@heroui/pagination";
import { image } from "@heroui/theme";

function Gallery({images}:{images:string[]}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = useState<"blur">("blur");
  const [currentImage,setItem] = useState(images)
  const [currentPage,setPage] = useState(1)
  const handleOpen = (backdrop: any) => {
    setBackdrop(backdrop);
    onOpen();
  };

  return (
    <>
      <Button onPress={onOpen}>รูปภาพ</Button>
      <Modal backdrop={backdrop} isOpen={isOpen} size="4xl" onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Gallery</ModalHeader>
              <ModalBody>
                <div   key={currentPage}>
                    
                  <Image
            
                    alt=""
                    src={currentImage[currentPage]}
                    className="w-full"
                 
                  />
                </div>
              
              </ModalBody>
              
              <ModalFooter>
              <Pagination className="flex justify-center w-full"  onChange={setPage} showControls loop initialPage={1} total={images.length-1} />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

Gallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Gallery;
