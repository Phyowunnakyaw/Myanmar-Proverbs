import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Proverbs( { datas } ) {

    const param = useParams();
    const paramId = param.id;
    const [ proverbs, setProverbs ] = useState( [] );
    const [ title, setTitle ] = useState( [] );
    let navigate = useNavigate();

    const proverbsTitle = datas.ProverbsTitle.find( ( item ) => {
         return item.TitleId == paramId ;
    } )

    useEffect( () => {
        
        const proverbs = datas.Proverbs;
        setProverbs( proverbs.filter( item => item.TitleId == paramId ) );
        setTitle( proverbsTitle.TitleName );

    }, [ datas ] )

    const clickHandler = ( ProverbId, TitleId ) => {

         navigate( `/proverbs/${TitleId}/${ProverbId}` )

    }

  return (
         
         <div className=' bg-gradient-to-r to-main from-sec'>

              <div className=" max-w-6xl mx-auto p-8 px-12 py-10 pb-24 ">

                  <div className=" flex gap-2 items-center ">

                      <FontAwesomeIcon icon={ faBookOpen } className=' text-sienna text-lg mt-1' />
                      <h1 className=' text-xl font-bold text-sienna '> { title } <span className=' text-drab text-base ' >  ( စကားပုံများ ) </span> </h1>

                  </div>

                  { proverbs.length ? ( <div className=" grid grid-cols-2 gap-y-4 mx-auto p-8 py-16 px-12 ">

                      { proverbs.map ( ( item, i ) => (

                      <ul className=" w-[400px] list-disc " key={ i }>
                          
                         <li className=' text-sienna text-sm font-bold transition cursor-pointer hover:text-drab ' 
                             onClick={ () => { clickHandler( item.ProverbId, item.TitleId ) } }> 
                            { item.ProverbName } 
                         </li>

                      </ul>

                      ) ) }

                  </div> ) : ( 

                  <div className="mx-auto p-8 py-16 px-12">

                      <p className='text-sienna text-md font-bold' > "{ title }" နှင့်ပတ်သတ်သောစကားပုံ မရှိပါ။ </p>

                  </div>

                  ) }

                  <div className=" flex justify-center py-6 my-12 border border-drab rounded-lg ">

                      <p className=' font-bold text-lg text-sienna' > "{ title }" အက္ခရာ ပြီး၏။ </p>

                  </div>

                  <Link to='/' className=" flex justify-end my-20 ">

                      <button className=' bg-sienna text-white text-sm font-semibold p-1 px-2 rounded transition-all hover:bg-drab' > Home </button>

                  </Link>

              </div>
     
         </div>
  )
}
