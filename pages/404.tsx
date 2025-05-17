import NotFound from "@/components/NotFound/NotFound";
import { Setting } from "@/types";
import React from "react";

export default function NotFoundPage(props: Setting) {
  return <NotFound {...props} />;
}
