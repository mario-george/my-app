"use client";
import { ReactElement, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Spinner } from "@nextui-org/react";


import dynamic from 'next/dynamic';

const PlaceCard = dynamic(() => import('@/components/UI/PlaceCard'), { ssr: false });
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
  creator?:string
}
const Places = () => {
  const [places, setPlaces] = useState<Array<PlaceType> | undefined>();
  const GlobalStateUser = useSelector((state: RootState) => state.user.user);

  const [content, setContent] = useState<ReactElement>(
    <div className="fixed inset-0 flex justify-center items-center">
      <Spinner label="Loading..." color="warning" size="lg" className="" />
    </div>
  );

  useEffect(() => {
    let fetchPlaces = async () => {
      try {
        const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}places/`);
        const respData = await resp.json();
        console.log(respData)
        if (!resp.ok) {
          throw new Error("Something went wrong!");
        }

        setPlaces(respData.places);
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
  }, [GlobalStateUser]);
  console.log("myid"+GlobalStateUser.userID)

  return (
    <>
      {places == undefined
        ? content
        : places?.map((p: PlaceType) => {
            console.log(p.creator)
            let isAuthorized = false;

            if (GlobalStateUser.userID === p.creator) {
              isAuthorized = true;
            }
            const { image, description, title, id, address, location ,imageFileName} = p;
let PlaceCardProps={
  key:id,
  image,
  description,
  title,
  address,
  id,
  isAuthorized,
  location,
  imageFileName
}
            return (
            <>
                  <PlaceCard
               {...PlaceCardProps}
              /></>
            );
          })}
    </>
  );
};

export default Places;
