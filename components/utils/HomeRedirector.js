"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const HomeRedirector = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/home");
  }, []);
  return;
};

export default HomeRedirector;
