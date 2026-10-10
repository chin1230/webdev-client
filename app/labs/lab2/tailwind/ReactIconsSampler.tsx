import "@/app/labs/lab2/tailwind/utilities.css";
import { IoCloudOutline } from "react-icons/io5";
import { BsStarFill } from "react-icons/bs";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
// With AI
import { MdFavorite } from "react-icons/md";
import { HiOutlineBell } from "react-icons/hi2";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>

      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />

        <IoCloudOutline className="text-4xl text-green-600" />
        <BsStarFill className="text-4xl text-yellow-500" />
        {/* With AI */}
        <MdFavorite className="text-4xl text-blue-600" />
        <HiOutlineBell className="text-4xl text-purple-600" />
      </div>
    </div>
  );
}