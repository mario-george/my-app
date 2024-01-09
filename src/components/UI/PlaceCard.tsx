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
  let content = isAuthorized ? <></> : <></>;
  let Buttons = isAuthorized ? (
    <>
      {" "}
      <Button
        size="lg"
        className="text-lg"
        fullWidth
        color="primary"
        variant="ghost"
      >
        View On Map{" "}
      </Button>
      <Button
        size="lg"
        className="text-lg"
        fullWidth
        color="secondary"
        variant="ghost"
      >
        Edit{" "}
      </Button>{" "}
      <Button
        size="lg"
        className="text-lg"
        fullWidth
        color="danger"
        variant="ghost"
        onClick={onOpen}
      >
        Delete{" "}
      </Button>
    </>
  ) : (
    <Button
      size="lg"
      className="text-lg"
      fullWidth
      color="primary"
      variant="ghost"
    >
      View On Map{" "}
    </Button>
  );
  return (
    <>
    {modal}
    <Card className="shadow-lg mx-auto w-full xl:w-[55%] md:w-[80%] border my-6">
      <CardHeader>
        <div className="mx-auto flex justify-center w-full">
          <Image src={image} alt="image" />
        </div>
        <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-blue-300/10 " />
      </CardHeader>
      <CardBody className="z-30">
        {content}
       
      </CardBody>
      <CardFooter className="pt-3 flex flex-col space-y-3 z-30">
        {Buttons}
      </CardFooter>
    </Card>
    </>
  );
}
