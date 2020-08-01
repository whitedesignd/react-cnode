import React,{useState,useEffect} from 'react';
import './backtotop.scss';
function Backtop() {
    const [isBottmn,setIsbottom] = useState(false);
    window.addEventListener("scroll", () => {
        let {
          scrollTop,
          scrollHeight,  
          clientHeight
        } = document.scrollingElement;
        // 当前滚动高度 + 视口高度 >= 文档总高度
        if (scrollTop + clientHeight >= scrollHeight*0.9) {
            setIsbottom(true);
        }
        if (scrollTop + clientHeight <= scrollHeight*0.65) {
            setIsbottom(false);
        }
    });
    const goTop = (e) => {
        e.preventDefault();
        window.scrollTo({ 
            top: 0, 
            behavior: "smooth" 
        });
        setIsbottom(false);
    }
    
    return (
        <div style={{opacity:isBottmn?1:0}} className='back-top' onClick={goTop}>
            返回顶部
        </div>
    )
}
export default Backtop;