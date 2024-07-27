import ROUTES from "@/types/routes";
import Link from "next/link";
import React from "react";

const RoutePage = () => {
  return (
    <div className="space-x-12 py-2">
      <Link href={ROUTES.HOME} className="font-sans font-semibold text-lg">
        Home
      </Link>
      <Link href={ROUTES.CONTACT} className="font-sans font-semibold text-lg">
        Contact
      </Link>
      <Link href={ROUTES.ABOUT} className="font-sans font-semibold text-lg">
        About
      </Link>
      <Link href={ROUTES.REGISTER} className="font-sans font-semibold text-lg">
        Sign up
      </Link>
    </div>
  );
};

export default RoutePage;
