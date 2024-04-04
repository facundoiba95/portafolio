import React from 'react'
import { HowCreatePortafolioContainerStyles, TechStackListStyles, TechStackItemStyles, ContentHowCreatePortafolioContainerStyles } from './HowCreatePortafolioStyles'
import { FaGoogle, FaServer, FaNodeJs, FaReact, FaHtml5, FaCss3, FaGitAlt} from 'react-icons/fa';
import { SiReactrouter, SiJsonwebtokens, SiExpress, SiMongodb, SiRedux, SiStyledcomponents, SiJavascript, SiPostman } from 'react-icons/si';
import { BsDatabaseFillCheck } from 'react-icons/bs';
import { AiOutlineCloud } from 'react-icons/ai';
import { MdAlternateEmail } from 'react-icons/md';

const HowCreatePortafolio = () => {
  return (
    <HowCreatePortafolioContainerStyles>
        <h1>¿ Cómo se creó este portafolio ?</h1>
        <h2>Tecnologías utilizadas</h2>
        <TechStackListStyles>
            <TechStackItemStyles>
                <FaReact className='iconTech'/>
                <h3>React JS</h3>
            </TechStackItemStyles>
            <TechStackItemStyles>
                <SiExpress className='iconTech'/>
                <h3>Express</h3>
            </TechStackItemStyles>
            <TechStackItemStyles>
                <SiMongodb className='iconTech'/>
                <h3>Mongo DB</h3>
            </TechStackItemStyles>
            <TechStackItemStyles>
                <SiRedux className='iconTech'/>
                <h3>Redux Toolkit JS</h3>
            </TechStackItemStyles>
            <TechStackItemStyles>
                <SiStyledcomponents className='iconTech'/>
                <h3>Styled Components</h3>
            </TechStackItemStyles>
            <TechStackItemStyles>
                <FaNodeJs className='iconTech'/>
                <h3>Node JS</h3>
            </TechStackItemStyles>
            <TechStackItemStyles>
                <BsDatabaseFillCheck className='iconTech'/>
                <h3>CRUD Database</h3>
            </TechStackItemStyles>
            <TechStackItemStyles>
                <SiReactrouter className='iconTech'/>
                <h3>React Router DOM</h3>
            </TechStackItemStyles>
            <TechStackItemStyles>
                <AiOutlineCloud className='iconTech'/>
                <h3>Servicios Cloud</h3>
            </TechStackItemStyles>
            <TechStackItemStyles>
                <FaServer className='iconTech'/>
                <h3>Cloud server</h3>
            </TechStackItemStyles>
            <TechStackItemStyles>
                <SiJsonwebtokens className='iconTech'/>
                <h3>JSON Web Tokens</h3>
            </TechStackItemStyles>
            <TechStackItemStyles>
                <MdAlternateEmail className='iconTech'/>
                <h3>Nodemailer</h3>
            </TechStackItemStyles>
            <TechStackItemStyles>
                <FaGoogle className='iconTech'/>
                <h3>Google API's</h3>
            </TechStackItemStyles>
        </TechStackListStyles>
        <ContentHowCreatePortafolioContainerStyles>
            <h2>Descripción.</h2>
            <p> Para desarrollar este portafolio, se utilizaron las tecnologías mencionadas anteriormente.</p>
            <p> Se realizaron operaciones como: </p>
            <ul>
                <li>
                    <p>● Creación de contenido, a través de formularios que incluyen texto e imagen. El contenido multimedia se sube a un CDN, Cloudinary especificamente, y no queda alojado en el servidor.</p>
                </li>
                <li>
                    <p>● El contenido multimedia se comprime en el cliente utilizando Compressor JS y luego se envía al servidor para su posterior carga. </p>
                </li>
                <li> 
                    <p>● Envío de emails utilizando API de Google y Nodemailer.</p>
                </li>
                <li>
                    <p>● Manejos de estados globales a través de: Redux Toolkit JS para manejar datos complejos, conectar APIs, y useContext para pasar propiedades en toda la aplicación. </p>
                </li>
                <li>
                    <p>● Autenticación de usuario e inicio de sesión a através de JSON Web Tokens. </p>
                </li>
                <li>
                    <p>● CRUD en base de datos, para crear nuevos proyectos, agregar nuevo usuario o nuevo certificado. </p>
                </li>
                <li>
                    <p>● Cloud Server, para alojar el backend del proyecto. <br /> Dato adicional: en el Servicio Cloud utilizo un <em>reverse proxy</em> para poder redirigir las peticiones al servidor correspondiente y asi poder alojar diferentes proyectos en un solo servicio. </p>
                </li>
                <li>
                    <p>● Los estilos del proyecto fueron agregados con la libreria Styled Components. Utilizando "props" para renderizado condicional. </p>
                </li>
            </ul>
        </ContentHowCreatePortafolioContainerStyles>
    </HowCreatePortafolioContainerStyles>
    )
}

export default HowCreatePortafolio