import { Button } from "@geist-ui/core";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
const App = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-t from-yellow-500 to-white">
      <div className="flex flex-col items-center justify-center">
        <motion.p
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-violet-500 text-7xl font-bold"
        >
          🫠
        </motion.p>
        <div className="text-center w-full flex items-center justify-center">
          <p className="text-sm">
            Kalo boleh kenalan, ayo kenalan, kalau enggak, yaudah nonton youtube
            aja
          </p>
        </div>
        <div className="flex flex-col gap-4 w-fit">
          <Button onClick={() => router.push("/about")}>
            Ayo Kita Kenalan! Bil.
          </Button>
          <Button
            type="error-light"
            onClick={() => router.push("https://youtube.com")}
          >
            Youtube
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
