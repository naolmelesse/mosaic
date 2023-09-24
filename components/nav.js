import Link from "next/link";
import {PiShoppingCartSimpleBold} from 'react-icons/pi';
import { NavStyles, NavItems, NavLinks, NavLink, Logo } from "@/styles/Nav";
import Cart from "./Cart";
import { useStateContext } from "@/lib/context";
import User from "./User";
import { BiHomeAlt2 } from "react-icons/bi";
import { RiCustomerServiceLine } from "react-icons/ri";
import { IoGridOutline } from "react-icons/io5";
import { BsBrush, BiUser } from "react-icons/bs";

export default function Nav(){
    const { showCart, setShowCart, totalQuantity } = useStateContext();
    const { AnimatePresence, motion } = require('framer-motion');
    return(
        <NavStyles>
                <Link href="/"><Logo>MOSAIC</Logo></Link>
                <NavLinks>
                    <Link href="/"><NavLink><BiHomeAlt2/> Home</NavLink></Link>
                    <Link href="#"><NavLink><IoGridOutline/> Gallery</NavLink></Link>
                    <Link href=""><NavLink><BsBrush/> Studio</NavLink></Link>
                    <Link href="#"><NavLink><RiCustomerServiceLine/> Contact</NavLink></Link>
                </NavLinks>
            <NavItems>
                <User/>
                <div onClick={() => setShowCart(true)}>
                    { totalQuantity > 0 && <motion.span initial={{scale: 0}} animate={{scale: 1}}>{totalQuantity}</motion.span>}
                    <PiShoppingCartSimpleBold/>
                    <p>Cart</p>
                </div>
            </NavItems>
            <AnimatePresence>
            {showCart && <Cart/>}
            </AnimatePresence>
        </NavStyles>
    )
}