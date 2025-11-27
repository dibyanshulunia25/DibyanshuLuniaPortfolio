import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer-container ">
            <div className="flex flex-col justify-center items-center">
                <p>© {new Date().getFullYear()} Dibyanshu Lunia. All rights reserved.</p>
            </div>
            <div className="socials">
                {socialImgs.map((img)=>(
                    <a key={img.name} href={img.link} target="_blank" >
                        <img src={img.imgPath} alt={img.name} className='size-7 hover:cursor-pointer hover:scale-125 transform-content transition-transform ease-in-out' />
                    </a>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer