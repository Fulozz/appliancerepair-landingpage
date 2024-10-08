import React from 'react'
import Logo from "../assets/eletronicacentral-logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    const copyInput = () => {
        var copyText = "O melhor lugar para consertar seus eletrodomesticos! https://eletronicacentral.vercel.app/";
    
        navigator.clipboard.writeText(copyText);
        alert("Link copiado: " + copyText);
      }
  return (
    <div className="footer-wrapper py-[90px] pt-24 flex bg-primary px-[90px] " id="contato">
        <div className="footer-section-one  ">
            <div className="footer-logo-container ml-8 max-w-[160px]  ">
                <img src={Logo} alt="logo" className="w-24" />
            </div>
            <div className="footer-icons mt-5  ml-3 flex">
                <a href="/" className='mt-8 mr-4 text-secondary'><FaYoutube size={32} /></a>
                <a href="/" className='mt-8 mr-4 text-secondary'><FaFacebook size={32} /></a>
                <a href="/" className='mt-8 mr-4 text-secondary'><FaInstagram size={32} /></a>
            </div>
        </div>
    <div className="footer-section-two flex-1 flex justify-end">
      <div className="footer-section-columns  flex flex-col min-w-[190px]">
        <a href="#work"><span className='mx-2 my-1 font-semibold text-white cursor-pointer'>Qualidade</span></a>
        <a href="#home"><span className='mx-2 my-1 font-semibold text-white cursor-pointer'>Ajuda</span></a>
        <span className='mx-2 my-1 font-semibold text-white cursor-pointer' onClick={copyInput}>Compartilhar</span>
      </div>
      <div className="footer-section-columns flex flex-col min-w-[190px]">
        <span className='mx-2 my-1 font-semibold text-white cursor-pointer'><a href="tel:+5535998784997" >(35)998784997 - Mateus</a></span>
        <span className='mx-2 my-1 font-semibold text-white cursor-pointer'><a href="tel:+5535998692587">(35)99869-2587 - Cida Moreira</a></span>
        <span className='mx-2 my-1 font-semibold text-white cursor-pointer'><a href="tel:+5535998404048">(35)99840-4048  - Dalmo</a></span>
        <span className='mx-2 my-1 font-semibold text-white cursor-pointer'>eletronicacentral_campestre@hotmail.com</span>
        <span className='mx-2 my-1 font-semibold text-white cursor-pointer'>Rua Poços de Caldas, 85</span>
        
      </div>
      <div className="footer-section-columns flex flex-col min-w-[190px]">
        <span className='mx-2 my-1 font-semibold text-white cursor-pointer'>Feito com ❤ por <a href="https://www.linkedin.com/in/thiagoandrade072/">Thiago Silva Andrade</a></span>
      </div>
    </div>
  </div>
  )
}

export default Footer