"use client";

import dynamic from "next/dynamic";

const UserButton = dynamic(
  () => import("@clerk/nextjs").then((mod) => mod.UserButton),
  {
    ssr: false,
  },
);

const UserButtonClerk = () => {
  return (
    <div className="mt-1">
      <UserButton />
    </div>
  );
};

export default UserButtonClerk;
