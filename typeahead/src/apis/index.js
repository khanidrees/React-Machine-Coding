import axios from 'axios';
const NAME= ["apple","banana","random","names","just","for","suggestions","for","typeahead","api",
    "apple","banana","random","names","just","for","suggestions","for","typeahead","api"
]

export  const getSuggestions=async(val,signal)=>{

    const response = await axios.get('https://dummyjson.com/products/search?q='+val+'&limit=10',
        {
            signal: signal
        }
    );
    const products =  response?.data?.products?.map((prod)=> prod?.title);
    console.log(response);
    console.log(products);
    return products;
    // return new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //         resolve(NAME.filter((item)=>item?.includes(val)));
    //     },400)
    // });
}