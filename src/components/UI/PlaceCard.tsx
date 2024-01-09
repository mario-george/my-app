import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
  Textarea,
} from "@nextui-org/react";
import Link from "next/link";
import { Typography } from "@material-tailwind/react";
import { Image } from "@nextui-org/react";
import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import usePlaceHandler from '@/components/hooks/usePlaceHandler'
export default function PlaceCard({
  title,
  address,
  description,
  image,
  id,
  isAuthorized,
}: {
  title: string;
  address: string;
  description: string;
  image: string;
  id: string;
  isAuthorized: boolean;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
const {formState, errors, handleChange, handleUpdate, isLoading ,handleDeletePlace} = usePlaceHandler(id)
  image = process.env.NEXT_PUBLIC_URL_BACKEND+ image;
  console.log(isAuthorized);
  let modal = (
    <Modal
      backdrop="opaque"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
          exit: {
            y: -20,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: "easeIn",
            },
          },
        },
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Confirmation
            </ModalHeader>
            <ModalBody>
              <p>Are you sure you want to delete the selected place</p>
              <p>
                This action cann't be reversed,this place will be forever lost.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="danger" onPress={()=>{
                handleDeletePlace()
                onClose()
              }}>
                Delete
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
  const [editMode, setEditMode] = useState(false);

  return (
    <>
   
    </>
  );
}
