import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faArrowRight, faBookOpen } from '@fortawesome/free-solid-svg-icons';

export default function ProverbDetail( { datas } ) {

  const param = useParams();
  const titleId = param.id1;
  const proverbId = param.id2;
  const [ proverb, setProverb ] = useState( [] );
  let navigate = useNavigate();

  useEffect( () => {

    const proverbs = datas.Proverbs;
    setProverb( proverbs.filter( p => ( p.TitleId == titleId && p.ProverbId == proverbId ) ) );

  }, [ datas ] );

  const clickHandler = () => {

       navigate( `/proverbs/${titleId} ` )

  }

  return (
         
         <div className=' h-screen bg-gradient-to-r to-main from-sec'>

              <div className=" max-w-6xl mx-auto p-8 ">

                  { proverb.map( p => (

                    <div className="">

                        <div className=" flex gap-2 items-center ">

                            <FontAwesomeIcon icon={ faBookOpen } className=' text-sienna text-lg mt-1' />
                            <h1 className=' text-sienna font-bold text-lg' > { p.ProverbName } </h1>

                        </div>

                        <div className=" w-[800px] mx-auto p-8 my-28 border-2 border-sienna rounded-lg ">

                            <p className=' font-bold text-drab leading-9'> { p.ProverbDesp } </p>

                        </div>

                        <div onClick={ clickHandler } className=" flex justify-center cursor-pointer">

                            <button className=' text-white text-sm font-senibold bg-sienna p-2 px-4 rounded transition-all hover:bg-drab '> တခြားစကားပုံများကို ကြည့်မယ် </button>

                        </div>

                    </div>

                  ) ) }

              </div>

         </div>
  )
}
