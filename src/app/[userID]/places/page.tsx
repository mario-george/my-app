// display list of user places (and allow edit and delete only for the authenticated user or authorized user)
"use client";
import { ReactElement, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Spinner } from "@nextui-org/react";

import PlaceCard from "@/components/UI/PlaceCard";
import UserCardForUserPlaces from "@/components/users/UserCardForUserPlaces";

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
      render: boolean;
    };
    loggedIn?: boolean | null;
  };
}
interface PlaceType {
  location: {
    lat: number;
    lng: number;
  };
  image: string;
  description: string;
  title: string;
  address: string;
  id: string;
  imageFileName: string;
}

interface IUser {
  name: string;
  email: string;
  imageFileName: string;
}
const Place = (props: Props) => {
  const [places, setPlaces] = useState<Array<PlaceType> | undefined>();
  const [userData, setUserData] = useState<IUser | undefined>();

  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const GlobalStateUser = useSelector((state: RootState) => state.user.user);

  const [content, setContent] = useState<ReactElement>(
    <div className="fixed inset-0 flex justify-center items-center">
      <Spinner label="Loading..." color="warning" size="lg" className="" />
    </div>
  );

  useEffect(() => {
    let fetchPlaces = async () => {
      try {
        const resp = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}places/user/${props.params.userID}`
        );
        const respData = await resp.json();
        if (!resp.ok) {
          throw new Error("Something went wrong!");
        }
        setPlaces(respData.places);
        setUserData(respData.user);
        if(respData?.places?.length==0){
          setContent(
            <div className=" flex my-6 justify-center items-center">
              <p>No places found by this user</p>
            </div>
          );
        return
        }
      } catch (err) {
        setContent(
          <div className="fixed inset-0 flex justify-center items-center">
            <p>No places found</p>
          </div>
        );
      }
    };
    // Fetch data from external API
    fetchPlaces();
    if (GlobalStateUser.userID === props.params.userID) {
      setIsAuthorized(true);
    }
  }, [GlobalStateUser]);

  return (
    <>
      {<UserCardForUserPlaces user={userData as IUser} />}
      
      {places == undefined ||places?.length==0
        ? content
        : places?.map((p: PlaceType) => {
            const {
              image,
              description,
              title,
              id,
              address,
              location,
              imageFileName,
            } = p;
            let PlaceCardProps = {
              key: p.id,
              image: image,
              description: description,
              title: title,
              address: address,
              id: id,
              isAuthorized: isAuthorized,
              location: location,
              imageFileName,
            };
            return <PlaceCard {...PlaceCardProps} />;
          })}
    </>
  );
};

export default Place;
