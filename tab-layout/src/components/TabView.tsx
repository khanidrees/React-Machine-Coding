import React, { FC, useState } from 'react';

interface Props{
    tabList: Tab[]
}
type Tab =  {
    label: string,
    content: FC
}

const TabView = ({ tabList } : Props) => {
    const [currentTab, setCurrentTab] = useState(0);
    console.log(tabList[currentTab]?.content);
    return (
    <div className='container'>
        <div className='btn-container'>
            {Array?.isArray(tabList) && tabList?.length>0 && tabList?.map((tab, ind)=>{
            return <button
            key={ind}
            onClick={()=>setCurrentTab(ind)}
            >{tab?.label}</button>
            })}
        </div>
        <div className='tab-content'>
        {tabList[currentTab]?.content}
        </div>
    </div>)
    
}

export default TabView