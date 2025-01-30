"use client";
import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push("/login");
  }

  return <>dashboard rock</>;
};

export default Dashboard;
