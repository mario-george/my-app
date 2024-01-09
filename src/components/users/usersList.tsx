"use client";
import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { User as UserElement } from "@nextui-org/react";

import { useState, useEffect } from "react";
interface User {
  id: string;
  places: Array<any>;
  name: string;
  image: string;
}
export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from external API
    fetch(`${process.env.NEXT_PUBLIC_API_URL}users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.allUsers);
        console.log(typeof data.allUsers[0]._id);
        console.log(typeof data.allUsers[0].id);
      });
  }, []);

  return (
    <>
      {users.length !== 0 ? (
        users?.map((u: User) => {
          let imageURL = `${process.env.NEXT_PUBLIC_URL_BACKEND}${u.image}`;
          let descriptionInfo =
            u.places.length === 0 ? "No Places" : "Places :" + u.places.length;
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
        })
      ) : (
        <>Loading</>
      )}
    </>
  );
}
