import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { SquaresPlusIcon, SunIcon } from "@heroicons/react/24/solid";
import logo from "../../assets/Images/logo.png";
import Container from "./Container";
import { NavLink } from "react-router-dom";

const navListMenuItems = [
  {
    title: "Realtime Data Analysis",
    icon: SquaresPlusIcon,
    path: "/realtime",
  },
  {
    title: "Realtime Temperature Analysis",
    icon: SunIcon,
    path: "/realtime-temperature-analysis",
  },
];

export function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(({ icon, title, path }, key) => (
    <NavLink to={path} key={key} className="block">
      <MenuItem className="flex items-center gap-3 rounded-lg">
        <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2">
          {React.createElement(icon, {
            strokeWidth: 2,
            className: "h-6 text-gray-900 w-6",
          })}
        </div>
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm font-bold"
          >
            {title}
          </Typography>
        </div>
      </MenuItem>
    </NavLink>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-bold">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-bold text-gray-900 hover:text-[#4CAE4F]"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Services
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 font-bold hover:text-[#4CAE4F] transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 font-bold hover:text-[#4CAE4F] transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

export function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="/"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center font-bold hover:text-[#4CAE4F] text-black  gap-2 py-2 pr-4">
          Home
        </ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex text-black hover:text-[#4CAE4F] font-bold items-center gap-2 py-2 pr-4">
          Contact Us
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex text-black hover:text-[#4CAE4F] font-bold items-center gap-2 py-2 pr-4">
          About Us
        </ListItem>
      </Typography>
    </List>
  );
}

export default function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto rounded-none px-4 max-w-full py-2">
      <Container>
        <div className="flex items-center justify-between text-black-gray-900">
          <NavLink to="/" className="flex items-center">
            <img className="h-8 w-8 mr-2" src={logo} alt="Logo" />
            <h1 className="text-primary font-medium text-xl sm:text-2xl">
              <span className="text-secondary font-semibold">E</span>
              nviro Monitor
            </h1>
          </NavLink>
          <div className="hidden lg:flex items-center">
            <NavList />
          </div>
          <div className="flex items-center lg:hidden">
            <IconButton
              variant="text"
              color="black"
              className="p-2"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="h-6 w-6 text-secondary" strokeWidth={3} />
              ) : (
                <Bars3Icon className="h-6 w-6 text-primary" strokeWidth={3} />
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Container>
    </Navbar>
  );
}
