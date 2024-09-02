import { BiLogoFacebook } from "react-icons/bi"
import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io5"

function Navbar() {
  return (
    <nav className="flex">
      <div>
        <p>Foodieland</p>
      </div>
      <ul className="flex">
        <li>Home</li>
        <li>Recipes</li>
        <li>Blog</li>
        <li>Contact</li>
        <li>About us</li>
      </ul>
      <div className="flex text-3xl">
        <BiLogoFacebook />
        <IoLogoTwitter />
        <IoLogoInstagram />
      </div>
    </nav>
  )
}

export default Navbar