"use client";
import { ComponentProps } from "react";
import { Toaster as ReactHotToaster, ToastBar } from "react-hot-toast";
import { cn } from "~/lib/utils";

type ToasterProps = ComponentProps<typeof ReactHotToaster>;

export function Toaster(props: ToasterProps) {
  const { position = "bottom-left", toastOptions = {}, ...restprops } = props;
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
      {...restprops}
    >
      {(t) => <ToastBar toast={t} style={{ maxWidth: "100%" }} />}
    </ReactHotToaster>
  );
}
