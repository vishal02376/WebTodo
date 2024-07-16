import './Faq.css';
import { useState } from 'react';
import { Question } from './question';


function Faq(){
   let [CurrentData, SetData] = useState(Question[0].id);
    let Result = Question.map((value, index)=>{
        let data = {
           
            CurrentData, SetData, value
        }
        return(
            <ChildFaq AllResult = { data}/>
        )
    })


    return(
        <>
        <h1 className='heading'>Frequently Asked Questions (FAQ)</h1>
        <div className="OuterDiv">
          
          {Result}
           
        </div>
        </>
    )
}

export default Faq;

function ChildFaq({AllResult}){
    let  { value,  CurrentData, SetData}  = AllResult;
    return(
        <>
         <div className="innerDiv">
                <h2 onClick={()=>SetData(value.id)}>{value.Question}</h2>
                <p className={CurrentData === value.id ? 'active' : ''}>{value.Anawer}</p>
            </div>
        </>
    )
}