import './FolderView.css';
import { useState } from 'react';

const FolderView = ({data,depth=0}) => {
    const [toggleArr, setToggleArr] = useState(Array?.from({length:data?.length}).fill(false));
    console.log(toggleArr);
    const toggleFolder = (idx)=>{
        const newArr = [...toggleArr];
        newArr[idx] = !newArr[idx];
        console.log(newArr);
        setToggleArr(newArr);
    }
  return (
    <div style={{}}>
        {data?.map((folder, idx)=>{
            const isParent = Array?.isArray(folder?.children) && folder?.children?.length>0;
            return (<div key={idx}>
            <div 
            onClick={()=>{
                if(!isParent) return;
                toggleFolder(idx)
            }}
            className='folder' style={{marginLeft: depth*10+'px'}}>
                <div>{folder?.name}</div>
                { isParent &&
                    <div>{toggleArr[idx]? '-':'+'}</div>
                }
            </div>
            {isParent && toggleArr[idx] &&
                <FolderView data={folder?.children} depth={depth+1}/>
            }
            </div>)
        })
        }
    </div>
  )
}

export default FolderView