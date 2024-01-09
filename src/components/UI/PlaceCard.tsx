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
  image = process.env.NEXT_PUBLIC_URL_BACKEND+ image;
  console.log(isAuthorized);
 
  const [editMode, setEditMode] = useState(false);

  return (
    <>
   
    </>
  );
}
