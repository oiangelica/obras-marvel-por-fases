import './Footer.css'

const Footer = () => { 
    return ( 
        <section className='footer'>
            <div className='redes'>
                <a href='https://github.com/oiangelica' target="_blank"><img src='imagens/github-icon.svg' className='icons-redes'/></a>
                <a href='https://www.linkedin.com/in/angelicacoelhoo/' target="_blank"><img src='imagens/linkedin-icon.svg' className='icons-redes'/></a>
                <a href='https://www.instagram.com/oiangelicaa/' target="_blank"><img src='imagens/instagram.svg' className='icons-redes'/></a>
            </div>
            <img src='/imagens/marvel-studios.png' className='footer-img'/>
            <p>Desenvolvido por: <a href='#' target="_blank" >Angélica Coelho</a></p>
        </section>
    )
}

export  default Footer