import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
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
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
 
const navListMenuItems = [
  {
    title: "Text Annotation",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
  },
  {
    title: "Image Annotation",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
  },
  {
    title: "Video Annotation",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
  },
  {
    title: "Audio Annotation",
    description: "Learn how we can help you achieve your goals.",
    icon: SunIcon,
  },
  {
    title: "Data Collection",
    description: "Reach out to us for assistance or inquiries",
    icon: GlobeAmericasIcon,
  },
  {
    title: "Contact",
    description: "Find the perfect solution for your needs.",
    icon: PhoneIcon,
  },
  {
    title: "Blogs",
    description: "Read insightful articles, tips, and expert opinions.",
    icon: NewspaperIcon,
  },
  {
    title: "Surveys",
    description: "Find the perfect solution for your needs.",
    icon: RectangleGroupIcon,
  },
  {
    title: "About Us",
    description: "Learn more about our history, services and work culture.",
    icon: TagIcon,
  },
];
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
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
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    ),
  );
 
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
          <Typography as="div" variant="small" className="font-medium ">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-white"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Services
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
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
 
function NavList() {
  return (
    <List className="mt-3 mb-0 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-0">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to="/"><ListItem className="flex items-center gap-2 py-2 pr-4 text-white">About</ListItem></Link>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-white">
          Contact
        </ListItem>
      </Typography>
    </List>
  );
}
 

const Header = () => {
    const [openNav, setOpenNav] = React.useState(false);
 
    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false),
      );
    }, []);
  return (
    <>
         <Navbar className="mx-auto w-screen px-4 py-2  bg-[#282828] home-header-border">
      <div className="flex items-center justify-between text-white">
      <Link to="/" >

      <Typography
          as="a"
         
          variant="h6"
          className="mr-4 cursor-pointer py-1 lg:ml-2 text-[23px]"
        >
           PartyPaglu
           {/* <p className="text-[8px] font-normal">of the data, by the data, for the data</p> */}
        </Typography>

      </Link>
        
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex ">
          {/* <Button variant="text" size="sm" color="white">
            Log In
          </Button> */}
          <Link to="/client-login">

          <Button variant="gradient" color="red" size="sm">
           Host Party?
          </Button>

          </Link>
         
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
            Log In
          </Button>
          <Button variant="gradient" size="sm" fullWidth>
            Sign In
          </Button>
        </div>
      </Collapse>
    </Navbar>
    </>
  )
}

export default Header
