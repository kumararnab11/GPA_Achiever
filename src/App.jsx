import { useState } from 'react'
import './App.css'

function App() {

const [cgpa1,set1]=useState(0);
const [cgpa2,set2]=useState(0);
const [cgpa3,set3]=useState(0);
const [cgpa4,set4]=useState(0);
const [cgpa5,set5]=useState(0);
const [cgpa6,set6]=useState(0);
const [cgpa7,set7]=useState(0);
const [cgpa8,set8]=useState(0);

const [cr1,setCr1]=useState(0);
const [cr2,setCr2]=useState(0);
const [cr3,setCr3]=useState(0);
const [cr4,setCr4]=useState(0);
const [cr5,setCr5]=useState(0);
const [cr6,setCr6]=useState(0);
const [cr7,setCr7]=useState(0);
const [cr8,setCr8]=useState(0);

const [calculatedValue,calc]=useState(0);

const calcu=()=>{
  let total=(cgpa1*cr1)+(cgpa2*cr2)+(cgpa3*cr3)+(cgpa4*cr4)+(cgpa5*cr5)+(cgpa6*cr6)+(cgpa7*cr7)+(cgpa8*cr8)
  let totalCredit=cr1+cr2+cr3+cr4+cr5+cr6+cr7+cr8
  calc(total/totalCredit)
}

  return (
    <>
      <div className="shadow-xl rounded-xl bg-white shadow-red-700">
        <div>
          <h1 className="flex p-5 ml-5 font-extrabold text-red-700 font-sans text-2xl">GPA ACHIEVER</h1>
        </div>
        <div className='grid grid-cols-3 p-5'>
          <div></div>
          <div className='font-bold'>Your Cgpa</div>
          <div className='font-bold'>Total Credits</div>
        </div>
        <div className='bg-blue-700 h-1 mx-5 md:mx-10 rounded-full'></div>
        <div>
          <div className='grid grid-cols-3 pt-5'>
            <div className='mx-5 mt-2 px-3 font-bold text-gray-700'>1st sem</div>
            <input type="text" className='mx-5 mt-1 px-3 border-blue-500 border-2 rounded-md' onChange={(e)=>{set1(Number(e.target.value))}}/><input type='text' className='mx-5 mt-1 px-3 border-blue-500 border-2 rounded-md' onChange={(e)=>{setCr1(Number(e.target.value))}} />
          </div>
          <div className='grid grid-cols-3 pt-5'>
            <div className='mx-5 mt-1 px-3 font-bold text-gray-700'>2nd sem</div>
            <input type="text" className='mx-5 mt-1 px-3 border-blue-500 border-2 rounded-md'onChange={(e)=>{set2(Number(e.target.value))}}/><input type='text' className='mx-5 mt-1 px-3 border-blue-500 border-2 rounded-md' onChange={(e)=>{setCr2(Number(e.target.value))}} />
          </div>
          <div className='grid grid-cols-3 pt-5'>
            <div className='mx-5 mt-1 px-3 font-bold text-gray-700'>3rd sem</div>
            <input type="text" className='mx-5 mt-1 px-3 border-blue-500 border-2 rounded-md'onChange={(e)=>{set3(Number(e.target.value))}}/><input type='text' className='mx-5 mt-1 px-3 border-blue-500 border-2 rounded-md' onChange={(e)=>{setCr3(Number(e.target.value))}} />
          </div>
          <div className='grid grid-cols-3 pt-5'>
            <div className='mx-5 mt-1 px-3 font-bold text-gray-700'>4th sem</div>
            <input type="text" className='mx-5 mt-1 px-3 border-blue-500 border-2 rounded-md'onChange={(e)=>{set4(Number(e.target.value))}}/><input type='text' className='mx-5 mt-1 px-3 border-blue-500 border-2 rounded-md' onChange={(e)=>{setCr4(Number(e.target.value))}} />
          </div>
          <div className='grid grid-cols-3 pt-5'>
            <div className='mx-5 mt-1 px-3 font-bold text-gray-700'>5th sem</div>
            <input type="text" className='mx-5 mt-1 px-3 border-blue-500 border-2 rounded-md'onChange={(e)=>{set5(Number(e.target.value))}}/><input type='text' className='mx-5 mt-1 px-3 border-blue-500 border-2 rounded-md'  onChange={(e)=>{setCr5(Number(e.target.value))}}/>
          </div>
          <div className='grid grid-cols-3 pt-5'>
            <div className='mx-5 mt-1 px-3 font-bold text-gray-700'>6th sem</div>
            <input type="text" className='mx-5 mt-1 px-3 border-blue-500 border-2 rounded-md'onChange={(e)=>{set6(Number(e.target.value))}}/><input type='text' className='mx-5 mt-1 px-3 border-blue-500 border-2 rounded-md' onChange={(e)=>{setCr6(Number(e.target.value))}} />
          </div>
          <div className='grid grid-cols-3 pt-5'>
            <div className='mx-5 mt-1 px-3 font-bold text-gray-700'>7th sem</div>
            <input type="text" className='mx-5 mt-1 px-3 border-blue-500 border-2 rounded-md'onChange={(e)=>{set7(Number(e.target.value))}}/><input type='text' className='mx-5 mt-1 px-3 border-blue-500 border-2 rounded-md' onChange={(e)=>{setCr7(Number(e.target.value))}} />
          </div>
          <div className='grid grid-cols-3 pt-5'>
            <div className='mx-5 mt-1 px-3 font-bold text-gray-700'>8th sem</div>
            <input type="text" className='mx-5 mt-1 px-3 border-blue-500 border-2 rounded-md'onChange={(e)=>{set8(Number(e.target.value))}}/><input type='text' className='mx-5 mt-1 px-3 border-blue-500 border-2 rounded-md' onChange={(e)=>{setCr8(Number(e.target.value))}} />
          </div>
          
        </div>
        <div className='relative'>
          <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-6' onClick={calcu}>Calculate</button>
          <div className='absolute bottom-5 right-5 text-red-700 font-bold'>DGPA: {calculatedValue}</div>
        </div>
      </div>
    </>
  )
}

export default App

