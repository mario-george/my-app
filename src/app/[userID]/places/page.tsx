// display list of user places (and allow edit and delete only for the authenticated user or authorized user)
"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PlaceCard from "@/components/UI/PlaceCard";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
  Textarea,
} from "@nextui-org/react";
interface Props {
  params: {
    userID: string;
  };
}
interface RootState {
  user: {
    user: {
      token?: string | null;
      userID?: string | null;
      expirationDate?: Date | null;
    };
    loggedIn?: boolean | null;
  };
}
const Place = (props: Props) => {
  const [places, setPlaces] = useState([]);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const GlobalStateUser = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    let fetchPlaces = async () => {
      const resp = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}places/user/${props.params.userID}`
      );
      const respData = await resp.json();
      console.log(respData);
      setPlaces(respData.places);
    };
    // Fetch data from external API
    fetchPlaces();
    if (GlobalStateUser.userID === props.params.userID) {
      setIsAuthorized(true);
    }
  }, []);



  return (
    <>
      {places.length !== 0 ? (
        places.map((p) => {
          const { image, description, title, id, address } = p;
          return (
            <PlaceCard
              image={image}
              description={description}
              title={title}
              address={address}
              id={id}
              isAuthorized={isAuthorized}
            />
          );
        })
      ) : (
        <>No places found for the user</>
      )}
    </>
  );
};

export default Place;
