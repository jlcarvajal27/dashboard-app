import {
  IoBrowsersOutline,
  IoCalculator,
  IoFootball,
  IoHeartOutline,
  IoLogoReact,
} from "react-icons/io5";
import { SideBarMenuItem } from "./SideBarMenuItem";

const menuItems = [
  // {
  //   path: "/dashboard/main",
  //   icon: <IoBrowsersOutline size={40} />,
  //   title: "Dashboard",
  //   subtitle: "Visualizacion",
  // },

  // {
  //   path: "/dashboard/counter",
  //   icon: <IoCalculator size={40} />,
  //   title: "Counter",
  //   subtitle: "Contador client-side",
  // },
  {
    path: "/dashboard/pokemons",
    icon: <IoFootball size={40} />,
    title: "Pokemons",
    subtitle: "Generation static",
  },
  {
    path: "/dashboard/favorites",
    icon: <IoHeartOutline size={40} />,
    title: "favorites",
    subtitle: "Global State",
  },
];

export const SideBars = () => {
  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className=" flex items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="mr-1" />
          <span>Next</span>
          <span className="text-blue-500 text-xs">Proyect</span>
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>

      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span className="text-sm md:text-base font-bold">
            Jorge Luis Carvajal
          </span>
        </a>
      </div>

      <div id="nav" className="w-full px-6">
        {menuItems.map((item) => (
          <SideBarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  );
};
