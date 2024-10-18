"use client";

import dynamic from "next/dynamic";

const Dialog = dynamic(() => import("./Dialog"), {
  ssr: false,
  loading: () => null,
});
import SearchButton from "./SearchButton";
import useToggleStateContext from "@/hooks/useToggleStateContext";

export default function SearchDialog() {
  const { isOpen } = useToggleStateContext();

  return (
    <>
      <SearchButton />
      {isOpen && <Dialog />}
    </>
  );
}
