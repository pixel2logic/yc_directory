import { STARTUPS_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";
import React from "react";
import StartupCard, { StartupTypeCard } from "./StartupCard";
import { client } from "@/sanity/lib/client";

const UserStartups = async ({ id }: { id: string }) => {
  const startups = await client.fetch(STARTUPS_BY_AUTHOR_QUERY, { id });

  return (
    <div>
      {startups.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
          {startups.map((startup: StartupTypeCard) => (
            <li
              key={startup._id}
              className="w-full flex justify-center"
            >
              <div>
                <StartupCard post={startup} />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-result">No posts yet</p>
      )}
    </div>
  );
};

export default UserStartups;
