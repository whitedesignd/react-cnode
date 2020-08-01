import React,{useState,useRef,useEffect} from 'react';
import './page.scss'
export default function Pagination(props) {
    
    // showPages 展示的页数
    // toatl 总页数
    // onChange 传递给父组件的页数 
    const {showPages, total,onChange} = props;
    // 列表的 dom 序号
    const [domIndex,setDomIndex] = useState(0);
    // dom 结构
    const [pageList,setPageList] = useState([]);
    // 当前页
    const [currentPage,setCurrentPage] = useState(1);
    // 快速跳转
    const [quickJumper,setQuickJumper] = useState();
    // ul 的 ref
    const ul = useRef();

    /**
     * @param {number} left 从左边第一个页
     * @param {boolean} curr 当前页码 添加class
     * @returns array
     */
    const list = (left,curr) => {
        let arr = [];
        for(let i = left; i < (showPages + left) ; i++){ 
            if(i == curr){
                arr.push(<li key={i} page={i} className='page-active' >{i}</li>)
            }else{
                arr.push(<li key={i} page={i}>{i}</li>)
            }
        }
        return arr;
    };
    useEffect(()=>{
        setPageList([...list(currentPage,currentPage)]);
    },[]);

    useEffect(() =>{
        onChange(currentPage);
    },[currentPage])
   
    const clickTarget = (e)=>{
        e.preventDefault();
        if(e.target.classList.contains('page-active')) return;
        let target =  e.target;
        ul.current.children[domIndex].classList.remove('page-active');
        target.classList.add('page-active');
        setDomIndex(d => target.getAttribute('page') % showPages == 0?showPages-1:target.getAttribute('page') % showPages -1);
        setCurrentPage(Number(target.getAttribute('page')));
    };

    const leftHand = (e) =>{
        e.preventDefault(); 
        if(currentPage == 1)  return ;
        if((currentPage - 1) % showPages == 0) {
            setPageList([...list(currentPage - showPages,currentPage - 1 )]);
            ul.current.children[0].classList.remove('page-active');
            ul.current.children[domIndex].classList.add('page-active');  
            setCurrentPage(currentPage-1);
            setDomIndex(showPages - 1);
        }else{
            ul.current.children[domIndex].classList.remove('page-active');
            ul.current.children[domIndex - 1].classList.add('page-active');  
            setDomIndex(d => d > 0?d-1:0);
            setCurrentPage(currentPage - 1);
        }        
    }

    const rightHand = (e) =>{
        e.preventDefault();
        if(currentPage == total) return;
        if(currentPage % showPages == 0){
            setPageList([...list(currentPage+1,currentPage+1)]);
            setCurrentPage(currentPage+1);
            setDomIndex(0);
        }else{
            ul.current.children[domIndex].classList.remove('page-active');
            ul.current.children[domIndex + 1].classList.add('page-active');
            setDomIndex(d => d > showPages - 1?0:d+1);
            setCurrentPage(currentPage+1);
        }
    }
    const inputValueChange = (e) =>{
        e.preventDefault();
        setQuickJumper(e.target.value)
    }
    const handKeyUp = (e) => {
        e.preventDefault();
        switch (e.keyCode) {
            case 8:
                setQuickJumper(v => {
                    let value = Number(v.toString().substr(0,v.length-1))
                    return value== 0?'':value;
                })
                break;
            case 13:
                if( quickJumper > total || quickJumper < 1) return '';
                let remain = quickJumper % showPages;
                let per = remain == 0 ?Math.floor((quickJumper - 1) / showPages):Math.floor(quickJumper/ showPages);
               
                setPageList([...list(per*showPages + 1,quickJumper)])
                setCurrentPage(Number(quickJumper));
                setDomIndex(remain == 0?showPages -1:remain - 1);
                console.log(currentPage,domIndex);
                setQuickJumper('');
                break;
            default:
                break;
        }
    }
    return (
        <div className='pagination'>
            <div className={`next-page ${currentPage == 1? 'next-pagination-disabled':''}`}  onClick={leftHand}><svg viewBox="64 64 896 896" focusable="false"  data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path></svg>
            </div>
            <ul className='page' ref={ul} onClick={clickTarget}>
                {
                    pageList
                }
            </ul>
            <div className={`next-page ${currentPage == total? 'next-pagination-disabled':''}`} onClick={rightHand}>
                <svg viewBox="64 64 896 896" focusable="false"  data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path></svg>
            </div>
            <div className="quick-jumper">
                跳转至
                <input type="text" 
                    value={quickJumper}
                    onChange={inputValueChange}
                    onKeyUp={handKeyUp}
                ></input> 页
            </div>
        </div>
    )
};
