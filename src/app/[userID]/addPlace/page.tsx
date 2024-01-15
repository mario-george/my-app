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
import { Props } from "@/components/types/userTypes";
import { Typography } from "@/components/shared/material-tailwind";
import {Divider} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";

const AddPlacePage = (props: Props) => {
  const [image, setImage] = useState("/images/noImage.jpg"); // Set the initial image to the default image of the place
  const { userID } = props.params;

  const { formState, errors, handleChange, handleSubmit, isLoading } =
    useAddPlaceHook({ userID });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Handle the image file upload
    let file;
    if (event.target.files && event.target.files.length === 1) {
      file = event.target.files[0];
      readImage(file);
    }
  };
  const readImage = (file: File) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        setImage(reader.result);
      }
    };

    reader.readAsDataURL(file);
  };
  return (
    <Card className="mx-auto my-[1rem] container max-w-3xl">
      <CardHeader className="px-4 pt-12 pb-6 flex-col items-start">
        <h1 className="flex font-bold pl-[1rem] text-xl text-white rounded-lg bg-[#B1A296] px-3 w-full py-6">
          <span className="flex items-center space-x-3  ">
            <span>Add a Place</span>
            <span>
              <IoAddSharp />
            </span>
          </span>

        </h1>
      </CardHeader>

      <CardBody>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-x-4">
            <div className="flex flex-col space-y-3">

          <Input
            label="Title"
            name="title"
            value={formState.title}
            onChange={handleChange}
            required
          />
          {errors.title && (
            <Typography className="text-red-500" placeholder="">
              {errors.title}
            </Typography>
          )}{" "}
            </div>

            <div className="flex flex-col space-y-3">
              
          <Input
            label="Address"
            name="address"
            value={formState.address}
            onChange={handleChange}
            required
          />
          {errors.address && (
            <Typography className="text-red-500" placeholder="">
              {errors.address}
            </Typography>
          )}
              </div>
          </div>
          <Spacer y={1} />
          <Spacer y={1} />
          
          
          
          {" "}
          <Input
            label="Description"
            name="description"
            value={formState.description}
            onChange={handleChange}
            required
          />
          <Spacer y={1} />{" "}
          {errors.description && (
            <Typography className="text-red-500" placeholder="">
              {errors.description}
            </Typography>
          )}{" "}
      <Divider className="my-4" />

          <input
            type="file"
            accept=".jpg,.png,.jpeg"
            onChange={handleImageUpload}
            style={{ display: "none" }}
            id="place-image"
          />
          <Spacer y={1} />{" "}

          <div className="flex flex-col justify-center ">
            <img
              src={image}
              className="max-w-[400px] max-h-[400px] mx-auto rounded-lg shadow-xl "
              alt="Place Image"
              onClick={() => {
                const uploadButton = document.getElementById("place-image");
                if (uploadButton) {
                  uploadButton.click();
                }
              }}
            />

            <Button
              variant="ghost"
              color="secondary"
              type="button"
              className="my-2 max-w-[400px] mx-auto "
              onClick={() => {
                const uploadButton = document.getElementById("place-image");
                if (uploadButton) {
                  uploadButton.click();
                }
              }}
            >
              <span>Upload Image</span>
              <RiImageAddFill className="text-xl" />
            </Button>
          </div>
          <Spacer y={1} />
          <Button color="secondary" type="submit" isLoading={isLoading} fullWidth>
            Submit
          </Button>{" "}
        </form>
      </CardBody>
    </Card>
  );
};

export default AddPlacePage;
