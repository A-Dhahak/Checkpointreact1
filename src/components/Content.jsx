import React from 'react';


const Content = () => {
    const Videos =  [
        {
            id: 1,
            
            title: "John Wick 1 Trailer",
            description: "ohn Wick Official Trailer #1 (2014) - Keanu Reeves, Willem Dafoe Movie HD",
            lien: "https://www.youtube.com/embed/C0BMx-qxsP4?si=jbyeA33OB4LTSPwY",
            
        },
        {
            id: 2,
            
            title: "The Dark Knight",
            description: "The Dark Knight (2008) Official Trailer #1 - Christopher Nolan Movie HD",
            lien: "https://www.youtube.com/embed/EXeTwQWrcwY?si=mTi143FoQ1yPUVWi",
            
        },
        {
            id: 3,
            
            title: "Interstellar",
            description: "Interstellar Official Trailer #2 (2014) - Matthew McConaughey, Christopher Nolan Sci-Fi Movie HD",
            lien: "https://www.youtube.com/embed/Lm8p5rlrSkY?si=_lzeYUbdRJHDClwO",
           
        }]
        
    return (
        <div>
            {Videos.map(el=>(
        <div>
          <div>
          <iframe src = {el.lien} height="200" width="300" frameborder="0" allowfullscreen></iframe>
          </div>
          <h2>{el.title}</h2>
          <span>{el.description}</span>
          
          
        
        
        </div>
      ))      }
        </div>
    );
}

export default Content;
