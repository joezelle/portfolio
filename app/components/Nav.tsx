// Nav.tsx
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Type definitions for navigation data
interface NavItem {
  name: string;
  path: string;
  icon: JSX.Element;
}

// nav data
export const navData: NavItem[] = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  { name: "contact", path: "/contact", icon: <HiEnvelope /> },
];

const Nav: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 w-full md:static md:flex md:w-auto bg-white md:bg-transparent z-50">
      {/* Navigation Links */}
      <div className="flex justify-around items-center gap-x-8 md:gap-x-12 text-lg py-4 px-6 bg-gray-900 md:bg-transparent text-white md:static md:flex-row">
        {navData.map((link, index) => (
          <Link
            className={`${
              link.path === pathname ? "text-accent" : "text-white"
            } relative flex items-center group hover:text-accent transition-all duration-300`}
            href={link.path}
            key={index}
          >
            {/* Tooltip */}
            <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
              <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.name}
                </div>
                {/* Triangle */}
                <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
              </div>
            </div>
            {/* Icon */}
            <div>{link.icon}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
