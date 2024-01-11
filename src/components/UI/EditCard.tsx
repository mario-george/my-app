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
      
      </Card>
    </>
  );
}
