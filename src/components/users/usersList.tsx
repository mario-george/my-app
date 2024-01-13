"use client";
import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { User as UserElement } from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";

import { useState, useEffect } from "react";
import {User} from '@/components/types/userTypes'


export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from external API
    fetch(`${process.env.NEXT_PUBLIC_API_URL}users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.allUsers);
        console.log(data.allUsers[0].image);
      });
  }, []);

  return (
    <>
      {users.length !== 0 ? (
        <div className=" w-full grid grid-cols-2 container mx-auto">
          {users?.map((u: User) => {
            let imageURL =
              process.env.NEXT_PUBLIC_DEV === "true"
                ? `${process.env.NEXT_PUBLIC_URL_BACKEND}${u.image}`
                : u.image;
            console.log(process.env.NEXT_PUBLIC_DEV);
            console.log(imageURL);
            let descriptionInfo =
              u.places.length === 0
                ? "No Places"
                : "Places :" + u.places.length;
            return (
              <>
                <Link href={`${u.id}/places`}>
                  <UserElement
                    className="my-2 mr-auto"
                    name={u.name}
                    description={descriptionInfo}
                    avatarProps={{
                      src: imageURL,
                    }}
                  />
                </Link>
              </>
            );
          })}{" "}
        </div>
      ) : (
        <div className=" fixed inset-0 flex justify-center items-center">
          <Spinner label="Loading..." color="success" size="lg" className="" />
        </div>
      )}
    </>
  );
}
