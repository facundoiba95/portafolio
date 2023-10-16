import React, { useState } from 'react'
import { CardAddProjectContainerStyles, InfoAddProjectContainerStyles } from './CardAddProjectStyles';
import { useDispatch, useSelector } from 'react-redux';
import Compressor from 'compressorjs';
import { createProject } from '../../../redux/features/projects/projectSlice';
import Loader from '../Loader/Loader';
import CardNotification from '../CardNotification/CardNotification';

const CardAddProject = () => {
    const [ inputNameProject, setInputNameProject ] = useState('');
    const [ inputLinkProject, setInputLinkProject ] = useState('');
    const [ inputLinkWebsite, setInputLinkWebsite ] = useState('');
    const [ inputContent, setInputContent ] = useState('');
    const [ inputTechstack, setInputTechstack ] = useState('');
    const [ techStackList, setTechStackList ] = useState([]);
    const [ loadImg1, setLoadImg1 ] = useState('https://yt3.googleusercontent.com/mKt5ip78z-tXcJ2GpHE-qWLKsSNqqOBneSeGPV7ISLXc8w8dADgceYC9QIlw424NjSkT_SZB-w=s900-c-k-c0x00ffffff-no-rj');
    const [ loadImg2, setLoadImg2 ] = useState('https://yt3.googleusercontent.com/mKt5ip78z-tXcJ2GpHE-qWLKsSNqqOBneSeGPV7ISLXc8w8dADgceYC9QIlw424NjSkT_SZB-w=s900-c-k-c0x00ffffff-no-rj');
    const [ loadImg3, setLoadImg3 ] = useState('https://yt3.googleusercontent.com/mKt5ip78z-tXcJ2GpHE-qWLKsSNqqOBneSeGPV7ISLXc8w8dADgceYC9QIlw424NjSkT_SZB-w=s900-c-k-c0x00ffffff-no-rj');
    const [ loadImg4, setLoadImg4 ] = useState('https://yt3.googleusercontent.com/mKt5ip78z-tXcJ2GpHE-qWLKsSNqqOBneSeGPV7ISLXc8w8dADgceYC9QIlw424NjSkT_SZB-w=s900-c-k-c0x00ffffff-no-rj');
    const dispatch = useDispatch();
    const isLoading = useSelector( state => state.projectSlice.isLoading );
    const statusProject = useSelector( state => state.projectSlice.status );

    const changeImgLoading = (e, id) => {
        const imageVariables = {
          img1: setLoadImg1,
          img2: setLoadImg2,
          img3: setLoadImg3,
          img4: setLoadImg4,
        };
      
        if (imageVariables[id]) {
          imageVariables[id](URL.createObjectURL(e.target.files[0]));
        }
      };

    
    const handleCompressorImage = (e) => {
        const idImage = e.target.dataset.id;
        const imagen = document.getElementById(idImage);

        let list = new DataTransfer(); // nueva lista de FileList, se envia al backend
        console.log(imagen.files[0]);

        new Compressor(imagen.files[0], {
          quality: 0.8, 
          success: (compressedResult) => {
            if(compressedResult.size > 10485760) { // este numero es el limite de tamaño de archivo que soporta Cloudinary
              alert('Debes subir imagenes menores a 10Mb')
            //   setLoadImg('https://res.cloudinary.com/drltuglgt/image/upload/v1678577444/Logo_original_fgbfbs.png');
               console.log('Ocurrio un error');
              imagen.value = '';
              return;
             } else {
              changeImgLoading(e, idImage)
              let file = new File([compressedResult], compressedResult.name);
              list.items.add(file);
              const myListFiles = list.files;
              imagen.files = myListFiles;
             }   
          }
        });       
      };

    const addTechstack = (e) => {
      e.preventDefault();
      setTechStackList([... techStackList, inputTechstack])
      console.log(typeof techStackList);
      setInputTechstack('');
    }

    const deleteTechItem = (e) => {
        const dataTech = e.target.dataset.tech;
        setTechStackList(techStackList.filter(tech => tech !== dataTech ))
    }

    const sendProject = (e) => {
      e.preventDefault();
      window.scrollTo(0,0);
      const formData = document.querySelector('#form')
      dispatch(createProject(formData))
    }

    const renderCard = () => {
      return (
      <CardAddProjectContainerStyles onSubmit={(e) => sendProject(e)} id='form'>
        <h2 className='titleCard'>Agregar nuevo proyecto</h2>
        <InfoAddProjectContainerStyles >
            <span>
              <label htmlFor="inputNameProject">Nombre del proyecto:</label>
              <input type="text" value={inputNameProject} name='nameProject' id='inputNameProject' placeholder='Nombre del proyecto' onChange={(e) => setInputNameProject(e.target.value)}/>
            </span>
            <span>
                <label htmlFor="inputLinkProject">Link del proyecto:</label>
                <input type="text" value={inputLinkProject} name='linkProject' id='inputLinkProject' placeholder='Link del proyecto' onChange={(e) => setInputLinkProject(e.target.value)}/>
            </span>
            <span>
                <label htmlFor="inputLinkWebsite">Link del sitio web:</label>
                <input type="text" value={inputLinkWebsite} name='linkWebsite' id='inputLinkWebsite' placeholder='Link del sitio web' onChange={(e) => setInputLinkWebsite(e.target.value)}/>
            </span>
            <span>
                <label htmlFor="inputContent">Descripción del proyecto:</label>
                <textarea name="content" value={inputContent} placeholder='Descripción del proyecto' id="inputContent" cols="30" rows="10" mul onChange={(e) => setInputContent(e.target.value)}></textarea>
            </span>
            <span className='addTechContainer'>
                <label htmlFor="inputTech">Tecnologías:</label>
                <input type="text" value={inputTechstack} id='inputTechstack' placeholder='Tecnologias utilizadas' onChange={(e) => setInputTechstack(e.target.value)}/>
                <ul>
                    {
                        techStackList.map( tech => {
                            return (
                                <li key={tech} data-tech={tech}>
                                    {tech}
                                    <p onClick={(e) => deleteTechItem(e)} data-tech={tech}>x</p>
                                </li>
                            )
                        })
                    }
                </ul>
                <input type='hidden' name='techStack' value={JSON.stringify(techStackList)} />
                <button className='addTech' onClick={(e) => addTechstack(e)}>Agregar</button>
            </span>
            <span>
                <p>Agregar vista previa:</p>
                <div className='containerImages'>
                    <span>
                      <input type="file" accept='image/*' name='img1' id='img1' data-id='img1'onChange={(e) => handleCompressorImage(e)}/>
                      <img src={loadImg1} alt="img 1" />
                    </span>
                    <span>
                        <input type="file" accept='image/*' name='img2' id='img2' data-id='img2'onChange={(e) => handleCompressorImage(e)}/>
                        <img src={loadImg2} alt="img 2" />
                    </span>
                    <span>
                        <input type="file" accept='image/*' name='img3' id='img3' data-id='img3'onChange={(e) => handleCompressorImage(e)}/>
                        <img src={loadImg3} alt="img 3" />
                    </span>
                    <span>
                        <input type="file" accept='image/*' name='img4' id='img4' data-id='img4'onChange={(e) => handleCompressorImage(e)}/>
                        <img src={loadImg4} alt="img 4" />
                    </span>
                </div>                
            </span>
        </InfoAddProjectContainerStyles>
        <button>Enviar formulario</button>
      </CardAddProjectContainerStyles>
      )
    }

  return (
    <>
    {
      isLoading 
      ? <Loader />
      : statusProject == 200 
      ? <CardNotification title={'El proyecto se creó con éxito!'} condition={200}/>
      : renderCard()
    }
    </>
    )
}

export default CardAddProject


