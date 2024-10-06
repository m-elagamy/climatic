"use client";

import dynamic from "next/dynamic";

const Dialog = dynamic(() => import("./Dialog"), {
  ssr: false,
  loading: () => null,
});
import SearchButton from "./SearchButton";
import useSearchDialogContext from "@/hooks/useSearchDialog";

export default function SearchDialog() {
  const { open } = useSearchDialogContext();

  return (
    <>
      <SearchButton />
      {open && <Dialog />}
    </>
  );
}
