"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const dashboard = () => {
  const { data: session } = useSession();
  if (!session) {
    const router = useRouter();
    router.push("/login");
  }

  return <>dashboard rock</>;
};

export default dashboard;
