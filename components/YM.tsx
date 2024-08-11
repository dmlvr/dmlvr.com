import { YM_COUNTER } from "@/const";
import React from "react";
import { YMInitializer } from "react-yandex-metrika";

function YM() {
  return (
    <>
      {YM_COUNTER && (
        <YMInitializer
          accounts={[YM_COUNTER]}
          options={{
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true,
          }}
        />
      )}
    </>
  );
}

export default YM;
