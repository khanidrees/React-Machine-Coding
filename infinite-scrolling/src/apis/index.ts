const POSTS_PER_PAGE = 10;
const TOTAL_POSTS = 100;

export const getPosts = async (pageNo=1)=>{


    return new Promise((resolve, reject)=>{
        if(pageNo*POSTS_PER_PAGE> TOTAL_POSTS) return resolve([]);
        setTimeout(()=>{
            let posts = [];
            for(let i=0;i<10;i++){
                posts.push({
                    id:(pageNo-1)*POSTS_PER_PAGE+i,
                    title: 'post '+((pageNo-1)*POSTS_PER_PAGE+i+1)
                })
            }
            console.log(posts)
            resolve(posts);
        },1000);
    })
     
}