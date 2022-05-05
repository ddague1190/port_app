import React from 'react'

const LegendItem = ({index, name, description}) => {
    return (
        <div key={index} className="pt-6">
            <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                <div className="-mt-6">
                    <div>
                        <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                           icon
                        </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{name}</h3>
                    <p className="mt-5 text-base text-gray-500">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default LegendItem