import BackHandler from "@/components/backHandler";
import { Button, useModal, Modal } from "@geist-ui/core";
import { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Image from "next/image";
import NextJS from "../../public/next.svg";
const About = () => {
  const { visible, setVisible, bindings } = useModal();
  const router = useRouter();
  const [boleh, setBoleh] = useState(false);

  return (
    <>
      <Modal {...bindings}>
        <Modal.Title>Mari Kyta Saling Kenal</Modal.Title>

        <Modal.Content>
          <p>Yang bener?, coba click button di bawah tuh</p>
        </Modal.Content>
        <Modal.Action
          passive
          onClick={() => Promise.all([setVisible(false), setBoleh(true)])}
        >
          Ayo Kenalan Kyta! {"( Click )"}
        </Modal.Action>
      </Modal>
      <div className="w-full h-screen bg-gradient-to-t from-yellow-500 to-white">
        <BackHandler title={"Hey"} />

        {!boleh ? (
          <div className="p-3">
            <p>Ini yang bener boleh kenalan?</p>
            <div className="flex gap-2">
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <button
                  className="p-2 bg-orange-300 rounded-xl border text-orange-700 border-orange-500"
                  onClick={() => router.back()}
                >
                  Gak Boleh Kenalan
                </button>
              </motion.div>
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <button
                  className="p-2 bg-orange-300 rounded-xl border text-orange-700 border-orange-500"
                  onClick={() => setVisible(true)}
                >
                  Boleh Kenalan
                </button>
              </motion.div>
            </div>
          </div>
        ) : (
          <div className="px-3">
            <p>Makasih ya Bila</p>
          </div>
        )}
        {boleh ? (
          <div className="p-3">
            <p className="m-0">Kenalin temen aku biasa panggil aku : </p>
            <p className="m-0">{'"Fandy NextJS", "Fanvercel"'}</p>
            <p className="m-0">Aku Kelas R, Semester 1.</p>
            <p className="m-0  border-black">
              Aku MDI, management data blablabla
            </p>
            <p className="m-0  border-black">Aku suka makan bakpao :D</p>
            <div className="my-2 w-full bg-yellow-500 rounded-full h-1" />
            <p className="m-0 ">
              Web ini memang sengaja aku buat untuk kenalan sama Bila
            </p>
            <p className="m-0 text-black">Salam Kenal yo</p>
            <p className="m-0 text-black">Makasi waktunya ya</p>
          </div>
        ) : null}
        {/* <Image src={NextJS} className={"w-36 h-36 p-4"} /> */}

        {/* <div class="flex flex-row items-center overflow-x-scroll px-4 gap-2">
          {Kesukaan.map((s, key) => {
            return (
              <div
                key={key}
                className="w-36 flex-none h-16 bg-white/50 border border-yellow-500 rounded-xl flex items-center justify-center"
              >
                <p className="w-auto font-bold text-gray-500">{s.name}</p>
              </div>
            );
          })}
        </div>
        <div className="p-3 bg-white my-4">
          <p className="m-0 text-yellow-500 font-bold">
            Disini tuh yg aku gak suka
          </p>
        </div>
        <div class="flex flex-row items-center overflow-x-scroll px-4 gap-2">
          {GaSuka.map((s, key) => {
            return (
              <div
                key={key}
                className="w-36 flex-none h-16 bg-white/50 border border-yellow-500 rounded-xl flex items-center justify-center"
              >
                <p className="w-auto font-bold text-gray-500">{s.name}</p>
              </div>
            );
          })}
        </div> */}
      </div>
    </>
  );
};

export default About;

const Kesukaan = [
  {
    name: "Pemrograman",
    route: "/about/coding",
  },
  {
    name: "Denger Music",
    route: "/about/music",
  },
  {
    name: "Beatbox",
    route: "/about/beatbox",
  },
  {
    name: "Membaca",
    route: "/about/read",
  },
  {
    name: "Main Game",
    route: "/about/game",
  },
  {
    name: "Bakpao Hunter",
    route: "/about/bakpao",
  },
];

const GaSuka = [
  {
    name: "Anime",
    route: "/about/anime",
  },
  {
    name: "Politik",
    route: "/about/politic",
  },
  {
    name: "Keriwehan",
    route: "/about/keriwehan",
  },
];
