import { IoHome, IoStatsChart } from "react-icons/io5";
import { HiSquares2X2 } from "react-icons/hi2";
import { TbPointFilled } from "react-icons/tb";
import { AiFillMessage } from "react-icons/ai";
import { FaRectangleList } from "react-icons/fa6";
import { BsMegaphoneFill } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";

interface Route {
  name: string;
  icon: JSX.Element;
  route: string;
  subRoutes?: {
    name: string;
    icon: JSX.Element;
    route: string;
  }[];
}

export const SibeBarOptions: Route[] = [
  {
    route: "/challenge",
    name: "Inicio",
    icon: <IoHome />,
  },
  {
    route: "/challenge/analyzer",
    name: "Analyzer",
    icon: <HiSquares2X2 />,
  },
  // {
  //   route: "/challenge/metrics",
  //   name: "Metrics",
  //   icon: <IoStatsChart />,
  // },
  {
    name: "Promociones",
    icon: <BsMegaphoneFill />,
    route: "",
    subRoutes: [
      {
        name: "Promociones vigentes",
        route: "/offers",
        icon: <TbPointFilled />,
      },
      {
        name: "Cuentas promocionales",
        route: "/challenge/promo",
        icon: <TbPointFilled />,
      },
    ],
  },
  {
    route: "/challenge/orders",
    name: "Órdenes",
    icon: <FaRectangleList />,
  },
  {
    route: "/profile",
    name: "Perfil",
    icon: <BiSolidUser />,
  },
  {
    route: "/soporte",
    name: "Soporte",
    icon: <AiFillMessage />,
  },
];
