"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";

export function Room({ children }: { children: ReactNode }) {
const params = useParams();

  return (
    <LiveblocksProvider publicApiKey={"pk_dev_OUxnwa0iOUOh5-cau4sUnYyFmJctbyCkf6QXbR_M8yFd0PkIY3GZ8sPADqzXe15l"}>
      <RoomProvider id={params.documentId as string}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}