import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
  Textarea,
} from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";
import { MapContainer, TileLayer, Popup, useMap } from "react-leaflet";
import { CircleMarker } from 'react-leaflet/CircleMarker'



import "leaflet/dist/leaflet.css";
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
import EditCard from "./EditCard";
import ToastComponent from "@/components/UI/Toast";
import {FC} from 'react'
export default function PlaceCard({
  title,
  address,
  description,
  image,
  id,
  isAuthorized,
  location,
}: {
  title: string;
  address: string;
  description: string;
  image: string;
  id: string;
  isAuthorized: boolean;
  location: {
    lat: number;
    lng: number;
  };
}) {
  const ChangeView: FC<{ center: {lat:number,lng:number}, zoom: number }> = ({ center, zoom }) => {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  };
  console.log(location)
  const MyMapComponent = ({ position = location }) => {
    return (
      <MapContainer className="z-30 w-[100vw] h-[25vw]">
        <ChangeView center={position} zoom={13} />
        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        <CircleMarker center={position}>
          {" "}
          <Popup>This is your location.</Popup>
        </CircleMarker>
      </MapContainer>
    );
  };
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [editMode, setEditMode] = useState(false);
  const [editSuccess, setEditSuccess] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  
  const [coverSpinner, setCoverSpinner] = useState(false);

  const {
    formState,
    errors,
    handleChange,
    handleUpdate,
    isLoading,
    handleDeletePlace,
  } = usePlaceHandler({ placeID: id, setEditMode });
  const handleEditPlace = () => {
    setCoverSpinner(true);
    setTimeout(() => {
      setCoverSpinner(false);
      setEditMode(true);
    }, 1000);
  };
  let imageURL =
    process.env.NEXT_PUBLIC_DEV === "true"
      ? `${process.env.NEXT_PUBLIC_URL_BACKEND}${image}`
      : image;
  console.log(isAuthorized);

  if (editMode) {
    return (
      <EditCard
        key={id}
        image={image}
        description={description}
        title={title}
        address={address}
        id={id}
        setEditMode={setEditMode}
        setEditSuccess={setEditSuccess}
      />
    );
  }

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
              <Button
                color="danger"
                onPress={() => {
                  handleDeletePlace();
                  onClose();
                }}
              >
                Delete
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
  let Buttons = isAuthorized ? (
    <>
      {" "}
      <Button
        size="lg"
        className="text-lg duration-200 transition-all hover:text-black"
        fullWidth
        color="primary"
        variant="ghost"
        onClick={()=>{setShowLocation(!showLocation)}}
      >
         {!showLocation ? `View On Map`:`Hide Map`}
      </Button>
      <Button
        size="lg"
        onClick={handleEditPlace}
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
      onClick={()=>{setShowLocation(!showLocation)}}

    >
         {!showLocation ? `View On Map`:`Hide Map`}
    </Button>
  );
  return (
    <div className={`relative ${coverSpinner ? `bg-white/30 ` : ``}`}>
      {editSuccess && (
        <ToastComponent
          titleText="Success"
          descriptionText="Place info has been updated successfully. "
        />
      )}
      {coverSpinner ? (
        <div className="flex justify-center items-center h-full w-full absolute inset-0 bg-white opacity-75 z-50">
          <Spinner size="lg" />
        </div>
      ) : null}
      {modal}
      <Card className="shadow-lg mx-auto w-full xl:w-[55%] md:w-[80%] border my-6">
        <CardHeader>
          <div className="mx-auto flex justify-center w-full">
            <Image src={imageURL} alt="image" className="max-w-full h-auto" />
          </div>
          <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-blue-300/10 " />
        </CardHeader>
        <CardBody className="z-30">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0">
            <div className="flex flex-col md:w-1/2 space-y-2 ">
              <label>Title</label>

              <Input
                isDisabled={true}
                defaultValue={title}
                className="max-w-xs z-30 !opacity-100 !w-full !md:w-auto "
                variant="faded"
              />
            </div>

            <div className="flex flex-col md:w-1/2 space-y-2">
              <label>Address</label>

              <Input
                isDisabled={true}
                defaultValue={address}
                variant="faded"
                className="max-w-xs z-30 !opacity-100 "
              />
            </div>
          </div>

          <div className="flex flex-col  space-y-2 my-4 w-full">
            <label>Description</label>
            <Textarea
              placeholder="Enter your description"
              className="z-30 !opacity-100"
              defaultValue={description}
              onValueChange={(v) => {}}
              isDisabled={true}
              variant="faded"
              fullWidth
            />
          </div>
        </CardBody>
        <CardFooter className="pt-3 flex flex-col space-y-3 z-30">
          {Buttons}
        </CardFooter>
      {showLocation && <MyMapComponent />
}
      </Card>
    </div>
  );
}
