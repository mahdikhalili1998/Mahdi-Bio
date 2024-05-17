import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/main.module.css";
function Loading() {
  const [timer, setTimer] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTimer(false);
    }, 3000);
  }, [timer]);

  return (
    <div className="flex h-screen w-[23rem] items-center bg-[#10213c] text-center">
      <Image
        priority
        className={`${styles.loadingLogo} ${!timer ? styles.tran : null} h-[20rem] w-auto text-center`}
        src="/images/mahdi.png"
        alt="mahdi"
        width={500}
        height={700}
      />
    </div>
  );
}

export default Loading;
