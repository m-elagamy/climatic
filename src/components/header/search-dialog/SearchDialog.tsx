import dynamic from "next/dynamic";

const Dialog = dynamic(() => import("./Dialog"), { ssr: false });
import SearchButton from "./SearchButton";

export default function SearchDialog() {
  return (
    <>
      <SearchButton />
      <Dialog />
    </>
  );
}
