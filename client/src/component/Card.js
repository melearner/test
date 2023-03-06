import React from 'react'

function Card(data) {
    const dataArray=data.props.data.electricity;
    const status=data.props.status;
    if (!status)
    return (data.props.message)
console.log(dataArray[0])
  return (
    <div className='flex flex-col justify-center items-center mt-8'>
        {dataArray.map((data,i)=>{
            return (
                <div key={i} className='w-3/4 h-60 mt-4 mb-4 flex-col  border-2 border-solid border-gray-200 rounded-lg'>
                   <div className='flex flex-col text-center justify-center items-center'>
                    <img className='h-10 w-1/12 ' src={data.provider_image} alt="img"/>
                   <h1 className='text-xl ml-4 font-bold'>{data.provider_name}</h1> 
                   
               
                   <p>{data.plan_desc}</p> 
                    <h1 className=' ml-4 font-bold'>{data.dmo_percentage.Ausgrid} {data.plan_name_below_data}</h1>
                    <p><strong>Payment Options:</strong> {data.payment_options}</p>
                   </div>
                   <div className='text-center hover:text-blue-600 ml-2 text-gray-400 font-bold'>
                    <a href={data.plan_document}>Basic Plan Information Document</a>
                    
                    </div>

                    <p className='text-center'>{data.cooling_off_period.slice(3,19)} cooling off period</p>
                   
                   
                </div>
            )
        })
         }
    </div>
  )
}

export default Card