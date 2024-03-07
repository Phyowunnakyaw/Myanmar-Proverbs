import React from 'react'
import Titles from '../components/Titles'
import Error from '../components/Error'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import Loading from '../components/Loading'

export default function Home( { datas, error, loading } ) {

  return (
        
         <div className=' bg-gradient-to-r to-main from-sec' >

             <div className=" max-w-6xl mx-auto p-4 space-y-8 py-10 pb-28">

                 <div className=" flex gap-2 items-center ">

                     <FontAwesomeIcon icon={ faBookOpen } className=' text-sienna text-xl' />
                     <h1 className=' font-bold text-lg text-sienna'> မြန်မာစကားပုံအက္ခရာစဉ်ဇယား </h1>

                 </div>

                 { error && <Error error={error} /> }
                 { loading && <Loading /> }
                 { !loading && !error && <Titles datas={datas} /> }

                 <div className=" w-[800px] mx-auto flex gap-4 ">

                     <FontAwesomeIcon icon={ faBook } className=' mt-[9px] text-xl text-sienna' />

                     <p className=' text-drab font-bold leading-8' > စကားပုံဟူသည် လူအများ ဆင်ခြင်မှတ်သားဖွယ် ဖြစ်အောင် စံပြုပုံခိုင်း အသုံးပြုလေ့ရှိသော ထိရောက်ကျစ်လျစ်သည့် စကားရပ် ဟု စာပေပညာရှင်တို့က ဖွင့်ဆိုသတ်မှတ်ကြပါသည်။ </p>

                 </div>

             </div>

         </div>
  )
}
