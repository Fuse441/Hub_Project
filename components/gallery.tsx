import React, { useState } from "react";
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

function Gallery({ images }: { images: string[] }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = useState<"blur">("blur");
  const [currentImage, setItem] = useState(images);
  const [currentPage, setPage] = useState(1);
  const handleOpen = (backdrop: any) => {
    setBackdrop(backdrop);
    onOpen();
  };

  return (
    <>
      <Button onPress={onOpen} isDisabled={images.length > 0 ? false : true}>
        {images.length > 0 ? "ตัวอย่าง" : "ไม่สามารถเพยแพร่ได้"}
      </Button>
      <Modal backdrop={backdrop} isOpen={isOpen} size="4xl" onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Gallery</ModalHeader>
              <ModalBody>
                <div key={currentPage} className="justify-center flex">
                  <Image
                    alt=""
                    className="w-full"
                    src={currentImage[currentPage - 1]}
                  />
                </div>
              </ModalBody>

              <ModalFooter>
                <Pagination
                  loop
                  showControls
                  className="flex justify-center w-full"
                  initialPage={1}
                  total={images.length}
                  onChange={setPage}
                />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Gallery;
