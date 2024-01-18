import React from 'react';
import { YMInitializer } from 'react-yandex-metrika';

function YM() {
  return (
    <YMInitializer 
      accounts={[53875261]} 
      options={{
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
      }} 
    />
  );
}

export default YM;