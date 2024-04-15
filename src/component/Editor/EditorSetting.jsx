import React, { useState } from 'react'


const EditorSetting = () => {
  const [contrast, setcontrast] = useState(0)
  const [brightness, setbrightness] = useState(0)
  const [sharpness, setsharpness] = useState(0)
  const [opacity, setopacity] = useState(0)
  return (
    <>
      <div className="flex flex-col items-center justify-center rounded-lg m-4 smooth-entry h-80 min-w-96 border border-gray-300">
        <h1 className='font-medium text-xl p-4 m-1'>Properties</h1>
        <h1 className='font-medium text-sm'>opacity</h1>
        <input
          type="range"
          className='block mb-2 text-sm font-medium accent-slate-500 '
          min={0}
          max={10}
          default={0}
          value={opacity}
          onChange={(e) => {
            setopacity(e.target.value);
          }}
        />
        <h1 className='font-medium text-sm'>Contrast</h1>
        <input
          type="range"
          className='block mb-2 text-sm font-medium accent-slate-500 '
          min={0}
          max={10}
          default={0}
          value={contrast}
          onChange={(e) => {
            setcontrast(e.target.value);
          }}
        />
        <h1 className='font-medium text-sm'>Brightness</h1>
        <input
          type="range"
          className='block mb-2 text-sm font-medium accent-slate-500'
          min={0}
          max={10}
          default={0}
          value={brightness}
          onChange={(e) => {
            setbrightness(e.target.value);
          }}
        />
        <h1 className='font-medium text-sm'>sharpness</h1>
        <input
          type="range"
          className='block mb-2 text-sm font-medium accent-slate-500'
          min={0}
          max={10}
          default={0}
          value={sharpness}
          onChange={(e) => {
            setsharpness(e.target.value);
          }}
        />
      </div>
    </>
  )
}

export default EditorSetting