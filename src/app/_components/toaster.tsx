"use client";
import { ComponentProps } from "react";
import { Toaster as ReactHotToaster, ToastBar } from "react-hot-toast";
import { cn } from "~/lib/utils";

type ToasterProps = ComponentProps<typeof ReactHotToaster>;

export function Toaster(props: ToasterProps) {
  const { position = "bottom-left", toastOptions = {} } = props;
  return (
    <ReactHotToaster
      position={position}
      toastOptions={{
        ...toastOptions,
        className: cn(
          "flex w-full min-w-72 justify-start bg-black md:w-auto",
          toastOptions.className,
        ),
      }}
    >
      {(t) => <ToastBar toast={t} />}
    </ReactHotToaster>
  );
}
