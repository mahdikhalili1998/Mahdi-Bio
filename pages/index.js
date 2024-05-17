import Image from "next/image";
import styless from "../styles/index.module.css";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import styles from "../styles/main.module.css";
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showUl, setShowUl] = useState(false);
  // console.log(showUl);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);

    setTimeout(() => {
      setShowUl(true);
    }, 3515);
  }, [loading, showUl]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="mx-auto  overflow-hidden rounded-xl bg-[#10213c] ">
          <div className="relative">
            <div
              className={!showUl ? styless.notShowCode : styless.showCode}
            ></div>
            <Image
              className="absolute -left-16 -top-4 h-[18rem] w-auto "
              src="/images/mahdi.png"
              alt="mahdi"
              width={500}
              height={700}
            />
          </div>
          <div className="mb-10">
            <h2 className="ml-[4rem] mt-4 text-center font-mono text-xl">
              <span className="text-white"> Hi! I'm </span>
              <span className="bg-multiColer bg-clip-text font-sans text-2xl font-extrabold text-transparent">
                Mahdi
              </span>
            </h2>
            <ul
              className={
                !showUl
                  ? styles.ulSide
                  : `${styles.ulCenter} font-none mt-6 flex flex-col items-center justify-center gap-8`
              }
            >
              <li
                className={`${styles.ani} flex place-items-center gap-4 rounded-xl px-4 py-2 shadow-lg shadow-blue-400`}
              >
                <Image
                  className="w-12 rounded-full"
                  width={50}
                  height={40}
                  src="/images/tel.jpg"
                  alt="telgram"
                />
                <a
                  className="font-semibold text-blue-100"
                  href="https://t.me/mehdi_lhj"
                  target="_blank"
                >
                  My Telegram
                </a>
              </li>
              <li
                className={`${styles.gitti} flex place-items-center gap-8 rounded-xl px-4 py-2 shadow-lg shadow-gray-600`}
              >
                <Image
                  className="clipp w-14 rounded-full"
                  width={70}
                  height={70}
                  src="/images/gitt.jpg"
                  alt="github"
                />
                <a
                  className="font-semibold text-white"
                  href="https://github.com/mahdikhalili1998"
                  target="_blank"
                >
                  My GitHub
                </a>
              </li>
              <li
                className={`${styles.inista} flex place-items-center gap-4 rounded-xl px-4 py-2 shadow-lg shadow-pink-800`}
              >
                <Image
                  className="w-12 rounded-full"
                  width={60}
                  height={50}
                  src="/images/insta.jpg"
                  alt="github"
                />
                <a
                  className="font-semibold text-pink-100"
                  href="https://instagram.com/mahdi_lhj"
                  target="_blank"
                >
                  My Instagram
                </a>
              </li>
              <li
                className={`${styles.wha} flex place-items-center gap-4 rounded-xl px-4 py-2 shadow-lg shadow-green-600`}
              >
                <Image
                  className="w-12 rounded-full"
                  width={65}
                  height={70}
                  src="/images/whatsapp.jpg"
                  alt="github"
                />
                <a
                  className="font-semibold text-white"
                  href="https://wa.me/989389668917"
                  target="_blank"
                >
                  My WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
