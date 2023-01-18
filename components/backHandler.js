import { useRouter } from "next/router";

import { ArrowLeft } from "@geist-ui/icons";
const BackHandler = ({ title }) => {
  const router = useRouter();
  return (
    <div className="bg-white/30 border-b flex items-center border-yellow-500 backdrop-blur-sm sticky top-0 h-14 pl-4 gap-2">
      <button onClick={() => router.back()}>
        <ArrowLeft color="warning" />
      </button>
      <p className="font-bold text-yellow-500 text-xl">{title}</p>
    </div>
  );
};

export default BackHandler;
