"use client";
import {
  Input,
  Button,
  Spacer,
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
import { useState } from "react";
import { RiImageAddFill } from "react-icons/ri";
import { IoAddSharp } from "react-icons/io5";
import useAddPlaceHook from "@/components/hooks/useAddPlaceHook";
interface Props {
  params: {
    userID: string;
  };
}

const AddPlacePage = (props: Props) => {
  const [image, setImage] = useState("/images/noImage.jpg"); // Set the initial image to the default image of the place
  const { userID } = props.params;
  console.log(userID);
  console.log(props);
  
  return (
    <Card className="mx-[4rem] my-[1rem]">
      <CardHeader className="px-4 pt-12 pb-6 flex-col items-start">
        <h1 className="font-bold pl-[1rem] text-xl">
          Add a Place
          <span>
            <IoAddSharp />
          </span>
        </h1>
      </CardHeader>


    </Card>
  );
};

export default AddPlacePage;
