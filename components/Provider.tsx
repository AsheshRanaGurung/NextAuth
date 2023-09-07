"use client";
import React from "react";

import { SessionProvider } from "next-auth/react";

interface IProvider {
  children: React.ReactNode;
  session?: any;
}
const Provider: React.FC<IProvider> = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
