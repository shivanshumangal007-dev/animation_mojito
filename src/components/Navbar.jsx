import React from 'react'
import { navLinks } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {

    useGSAP(()=>{
        const navTween = gsap.timeline({
            scrollTrigger : {
                trigger: "nav",
                start: "bottom top",
                // scrub: true,
            }
        })

        navTween.fromTo('nav', {
            backgroundColor : 'transparent'
        },{
            backgroundColor: "00000050",
            backdropFilter: "blur(2px)",
            duration: 1,
            ease: "power1.inOut",
        })
    })
  return (
    <nav className='navbar-class'>
      <div>
        <a href="#home">
            <p className='capitalize align-middle flex-center gap-3'><img src="/images/logo.png" className='inline-block' alt="logo" />velvet pour</p>
        </a>
        <ul>
            {
                navLinks.map((link) => (
                    <li key={link.id}>
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                ))
            }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
