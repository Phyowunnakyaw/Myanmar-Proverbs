import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

 function Titles( { datas } ) {

    const [ proverbsTitle, setProverbsTitle ] = useState( [] );
    useEffect( () => {
      setProverbsTitle( datas.ProverbsTitle );
    }, [ datas ] );

  return (
        
         <div className=' p-8 '>

             <p className=' text-center pb-4 text-base font-bold text-drab '> မိမိကြည့်ရှုလိုသော သက်ဆိုင်ရာ အက္ခရာကိုနှိပ်၍ ရှာဖွေဖတ်ရှုနိုင်ပါသည်။ </p>

             <div className=" w-[800px] mx-auto grid grid-cols-11 gap-[2px] p-[2px] border-2 border-sienna bg-white "  >

             { proverbsTitle.map ( title => (

                 <div className='flex justify-center items-center p-5 border-2 border-sienna ' key={ title.TitleId }>

                     <Link to={ `/proverbs/${ title.TitleId }` } className=' group cursor-pointer '> 
                     
                          <h1 className=' text-drab font-bold group-hover:underline'> { title.TitleName } </h1>
                     
                     </Link>

                 </div>

             ) ) }

             </div>

         </div>
  )
}

export default Titles;
