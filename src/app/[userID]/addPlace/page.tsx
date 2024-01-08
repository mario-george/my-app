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

  const { formState, errors, handleChange, handleSubmit, isLoading } =
    useAddPlaceHook({userID});

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
    <Card className="mx-[4rem] my-[1rem]">
      <CardHeader className="px-4 pt-12 pb-6 flex-col items-start">
        <h1 className="font-bold pl-[1rem] text-xl">
          Add a Place
          <span>
            <IoAddSharp />
          </span>
        </h1>
      </CardHeader>

      <CardBody>
        <form onSubmit={handleSubmit}>
          <Input
            label="Title"
            name="title"
            value={formState.title}
            onChange={handleChange}
            required
          />
          <Spacer y={1} />
          <Input
            label="Address"
            name="address"
            value={formState.address}
            onChange={handleChange}
            required
          />
          <Spacer y={1} />
          <Input
            label="Location"
            name="location"
            value={formState.location}
            onChange={handleChange}
            required
          />
          <Spacer y={1} />
          <Input
            label="Description"
            name="description"
            value={formState.description}
            onChange={handleChange}
            required
          />
          <Spacer y={1} />
          <input
            type="file"
            accept=".jpg,.png,.jpeg"
            onChange={handleImageUpload}
            style={{ display: "none" }}
            id="place-image"
          />
          <div className=" ">
            <img
              src={image}
              className="max-w-[400px] max-h-[400px]"
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
         
        </form>
      </CardBody>
    </Card>
  );
};

export default AddPlacePage;
