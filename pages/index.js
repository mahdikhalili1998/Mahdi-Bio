import Image from "next/image";
import styles from "../styles/index.module.css";
export default function Home() {
  return (
    <div className="mx-auto h-screen overflow-hidden rounded-xl bg-[#10213c] ">
      <div className="relative">
        <div className={styles.code}></div>
        <Image
          className="absolute -left-16 -top-4 h-[18rem] w-auto"
          src="/images/mahdi.png"
          alt="mahdi"
          width={500}
          height={700}
        />
      </div>
      <div className="">
        <h2 className="ml-[4rem] mt-4 text-center font-mono text-xl">
          <span className="text-white"> Hi! I'm </span>
          <span className="bg-multiColer bg-clip-text font-sans text-2xl font-extrabold text-transparent">
            Mahdi
          </span>
        </h2>
        <ul className="font-none mt-6 flex flex-col items-center justify-center gap-8">
          <li className="flex place-items-center gap-4 rounded-xl bg-blue-600 px-4 py-2 shadow-lg shadow-blue-400">
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
          <li className="flex place-items-center gap-8 rounded-xl bg-black px-4 py-2 shadow-lg shadow-gray-600">
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
          <li className="flex place-items-center gap-4 rounded-xl bg-pink-600 px-4 py-2 shadow-lg shadow-pink-800">
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
          <li className="flex place-items-center gap-4 bg-green-600 rounded-xl px-4 py-2 shadow-lg shadow-green-600">
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
  );
}
