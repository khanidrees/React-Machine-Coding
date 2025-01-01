import { useState, useEffect, useRef } from 'react';
import { getPosts } from '../apis/index';
const ScrollPage = () => {
    const [posts, setPosts] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const lastCardRef = useRef(null);
    const observer = useRef(new IntersectionObserver((entries)=>{
        console.log(entries);
            if(entries[0].isIntersecting){
                console.log('inte');
                setPageNo(p=>p+1);
            }
        }));

    useEffect( ()=>{
        loadMore(pageNo);
        
    },[pageNo]);

    useEffect(()=>{
        
        if(!lastCardRef.current) return
        observer.current.observe(lastCardRef.current);
        // observer.observe(document.querySelector('.card'));
        // it will observe all card divs
        
        return ()=>{
                observer.current.disconnect();
        }
    },[posts])

    async function loadMore(pageNo){
        setIsLoading(true);
        const res = await getPosts(pageNo);
        if(res){
            setPosts((prev)=>[...prev,...res]);
            setIsLoading(false);
        }
    }
    console.log(posts);
  return (
    <div id='scroll-container'>{posts.map((item)=>{
        console.log(item);
        return <div key={item.id} ref={item?.id == posts.length-1? lastCardRef:null} className='card' >
                <h2>{item.title}</h2>
             </div>
    })
    }
    {isLoading &&
        <div>Loading...</div>
    }
    </div>
  )
}

export default ScrollPage