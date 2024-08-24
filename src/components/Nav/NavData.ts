import { IconType } from "react-icons";
import { MdHomeFilled } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
interface NavigationItem {
    label: string;
    href: string;
    icon: IconType;
  }

export const navigation : NavigationItem[] = [
    {
        label : "TV Shows",
        href : 'tv',
        icon : PiTelevisionFill
    },
    {
        label : "Movies",
        href : "movie",
        icon : BiSolidMoviePlay
    }
]

export const mobileNavigation = [
    {
        label : "Home",
        href : "/",
        icon : MdHomeFilled
    },
    ...navigation,
    {
        label : "search",
        href : "/search",
        icon : IoSearchOutline
    }
]