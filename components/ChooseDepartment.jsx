import React from 'react'

const ChooseDepartment = ({year}) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-evenly shadow-xl">
            <h1 className="text-4xl">{year.name}</h1>
            {console.log(year.name)}
        </div>
    )
}

export default ChooseDepartment
