import { Loader2 } from "lucide-react";

export default function AdminLoading() {
  return (
    <>
      <div className="flex flex-row justify-center">
        <Loader2 className="size-24 animate-spin text-blue-500 block" />
      </div>
      <div className="flex flex-row justify-center">
        <p className="text-blue-950 font-bold ">Loading...</p>
      </div>
    </>
  );
}
