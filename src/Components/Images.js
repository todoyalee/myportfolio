import React,{useState} from 'react'
import {urls} from './Necessities'
import {useTransition,animated} from 'react-spring'
import useInterval from 'react-useinterval'

function Images() {
    const [index, setIndex] = useState(0);
  

    const increment =()=>{
        setIndex(prev => (prev+1)%urls.length)
    }
    useInterval(increment,3000)

    const transition = useTransition([urls[index]],{
        from : {transform:'translateX(-40%)', opacity:0},
        enter: {transform:'translateX(0)', opacity:1},
        leave: {transform:'translateX(40%)', opacity:0}
    })

    

    return (
        <div className="images">
            {transition((style, item)=>
                item?<animated.div 
                className="theImage"
                style={{ 
                    background: `url(${item})`,
                    ...style
                }}
                />:''
            )}
        </div>
    )

    
}

export default Images
