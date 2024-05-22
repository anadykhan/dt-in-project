import { RiLogoutBoxRLine } from "react-icons/ri";
import { FaUser, FaDonate } from "react-icons/fa";
import { MdEventNote } from "react-icons/md";

const sideitem = [
    {
        key: 1, 
        title: 'Cause',
        route: '/causes-table',
        icon: FaDonate 
    },
    {
        key: 2, 
        title: 'Events',
        route: '/events-table',
        icon: MdEventNote 
    },
    {
        key: 3, 
        title: 'Users',
        route: '/users-table',
        icon: FaUser
    },
    // {
    //     key: 4, 
    //     title: 'Logout',
    //     icon: RiLogoutBoxRLine
    // }
];

export default sideitem;
