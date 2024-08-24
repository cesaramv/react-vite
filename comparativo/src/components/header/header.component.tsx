import { useEffect } from 'react'
import './header.component.scss'

function HeaderComponent() {

    useEffect(()=> {
        const handleScroll = () => {
            const header = document.querySelector("header");
            header?.classList.toggle('sticky', window.scrollY > 0);
          };
          window.addEventListener("scroll", handleScroll);
      
          return () => {
            window.removeEventListener("scroll", handleScroll);
          };
    }, [])

    return (
        <header>
            <a href="#" className='logo'>Food<span>.</span></a>
            <ul className='navigation'>
                <li><a href="#banner">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#expert">Expert</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </header>
    )
}

export default HeaderComponent
