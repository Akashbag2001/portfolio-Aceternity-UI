import React from 'react'

function Title({text, className}:{text:string,className?:string}) {
  return (
    <div className={className}>
            <h1 className="flex text-3xl font-bold group-hover:text-green-400 transition-all">
             {text}
            </h1>
            <div className="w-40 h-2 rounded-full bg-indigo-500"></div>
            <div className="w-40 h-2 rounded-full bg-green-500 translate-x-2"></div>
          </div>
  )
}

export default Title
