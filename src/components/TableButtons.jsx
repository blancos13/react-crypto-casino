import React from 'react'

const TableButtons = ({menuItems}) => {

  return (
    <div className='flex justify-between lg:gap-x-2 xl:gap-x-8 gap-x-2 lg:px-0 px-2 w-full'>
        {
            menuItems.map((val) => {
                // console.log(val);
                return <button key={val.id} className='bg-gray-700 xl:w-[300px] w-[150px] lg:w-[400px]  rounded-md h-8 lg:h-12 text-white hover:bg-gray-600 transition duration-200 text-[0.5rem] lg:text-base z-0 '>{val}</button>
            })
        }
    </div>
  )
}

export default TableButtons