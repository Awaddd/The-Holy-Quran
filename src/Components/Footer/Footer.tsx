import React from "react"
import logo from '../../Assets/Images/Al-Furqan-logos_black.png'

export interface FooterProps {

}

function Footer() {
  return (
    <footer className="py-10 sm:py-10 footer bg-base-200 footer-center">
      <div>
        <div className="w-48 sm:w-72 pb-2/4 sm:pb-2/4 relative">
          <img src={logo} className="w-full h-full absolute object-cover" />
        </div>
        <p className="mt-4 font-bold">Qur'an at your convenience</p>
        <p>Copyright © 2021 - All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
