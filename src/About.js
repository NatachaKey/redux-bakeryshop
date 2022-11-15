import video from './coverr-valentine-s-day-cakes-and-cookies-5828-1080p.mp4';
const About = ()=>{
    return(
    
            <div >
            <video autoPlay muted loop className='background-video'>
                <source src={video} type="video/mp4" />
                
            </video>
            <div className='aboutLines'>
               <p className='par'>CANDYSHOP</p>
               <p className='par'>Your favourite genuine sweets</p>
            <p className='par italic'>Since 1948</p>  
            </div>
           
        </div>
       
      
    
    )
}

export default About;
