import {
  AiFillCheckCircle,
  AiFillEye,
  AiFillEyeInvisible,
  AiFillQuestionCircle,
} from "react-icons/ai";
import { BiSad } from "react-icons/bi";
import { BsFillCheckCircleFill, BsRocketTakeoff } from "react-icons/bs";
import { FaFlag, FaRegFaceLaughBeam, FaRegFaceSmileWink } from "react-icons/fa6";
import { ImAccessibility } from "react-icons/im";
import { IoIosCloseCircle } from "react-icons/io";
import { IoRocket } from "react-icons/io5";

export default function Icon({
  icon,
  onClick,
}: {
  icon: string;
  onClick?: any;
}) {
  return (
    <>
      {
        {
          default: <ImAccessibility onClick={onClick} />,
          eye: <AiFillEye onClick={onClick} />,
          eyeHiden: <AiFillEyeInvisible onClick={onClick} />,
          flag: <FaFlag />,
          rocket: <IoRocket />,
          success: <BsFillCheckCircleFill />,
          check: <AiFillCheckCircle />,
          close: <IoIosCloseCircle />,
          question: <AiFillQuestionCircle />,
          rocket_empty: <BsRocketTakeoff />,
          laught_empty: <FaRegFaceLaughBeam />,
          sad_empty: <BiSad />,
          smile_empty: <FaRegFaceSmileWink/>
        }[icon]
      }
    </>
  );
}
