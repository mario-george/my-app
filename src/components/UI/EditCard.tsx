import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
  Textarea,
} from "@nextui-org/react";
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
import usePlaceHandler from "@/components/hooks/usePlaceHandler";
export default function EditCard({
  title,
  address,
  description,
  image,
  id,setEditMode
}: {
  title: string;
  address: string;
  description: string;
  image: string;
  id: string;
  setEditMode:(value:boolean)=>void
}) {

  const {
    formState,
    errors,
    handleChange,
    handleUpdate,
    isLoading,
    handleDeletePlace,
  } = usePlaceHandler({ placeID: id,title,address,description });
  const handleEditPlace = () => {};
  let imageURL =
    process.env.NEXT_PUBLIC_DEV === "true"
      ? `${process.env.NEXT_PUBLIC_URL_BACKEND}${image}`
      : image;
  let modal = (
   
  );
  let Buttons = (
    <>
     
    </>
  );
  return (
    <>
      {modal}
      <Card className="shadow-lg mx-auto w-full xl:w-[55%] md:w-[80%] border my-6">
        <CardHeader>
          <div className="mx-auto flex justify-center w-full">
            <Image src={imageURL} alt="image" />
          </div>
          <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-blue-300/10 " />
        </CardHeader>
        <CardBody className="z-30">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0">
            <div className="flex flex-col md:w-1/2 space-y-2 ">
              <label>Title</label>

              <Input
                
                className="max-w-xs z-30  !w-full !md:w-auto "
                variant="faded"
              />
            </div>

            <div className="flex flex-col md:w-1/2 space-y-2">
              <label>Address</label>

              <Input
                variant="faded"
                className="max-w-xs z-30  "
                
              />
            </div>
          </div>

          <div className="flex flex-col  space-y-2 my-4 w-full">
            <label>Description</label>
            <Textarea
              placeholder="Enter your description"
              className="z-30 "
              variant="faded"
              fullWidth
            />
          </div>
        </CardBody>
        <CardFooter className="pt-3 flex flex-col space-y-3 z-30">
          {Buttons}
        </CardFooter>
      </Card>
    </>
  );
}
