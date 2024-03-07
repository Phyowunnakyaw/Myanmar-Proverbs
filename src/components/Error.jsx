import React from 'react'

export default function Error( { error } ) {
  return (
         
         <div className=' flex justify-center item-center py-40 ' >

             <p className=' text-xl font-bold text-sienna ' > { error } </p>

         </div>
  )
}
