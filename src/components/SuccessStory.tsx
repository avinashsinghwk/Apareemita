import { ArrowRight } from "lucide-react";
import {  useState } from "react";

export function SuccessStory({title, children, description}: {title: string, children: React.ReactNode, description: string}){
  const [isbtnclick, setIsButtonClick] = useState(false)

    return <div className="bg-pink-50 rounded-2xl p-8 md:p-12">
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className={`text-gray-700 ${isbtnclick ? 'hidden': ''}`}>{description}</p>
    {isbtnclick && (children)}
    <button onClick={()=> {setIsButtonClick(!isbtnclick)}} className="mt-6 cursor-pointer text-pink-600 font-semibold hover:text-pink-700 flex items-center gap-2">
      {isbtnclick ? "Read Less": 'Read Full Story'} <ArrowRight size={20} />
    </button>
  </div>
}