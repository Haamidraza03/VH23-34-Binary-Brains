import React, {useState} from 'react'
import data from "./TemplateData.json";

function Groups() {
  const [searchTerm,setSearchTerm] = useState("");
  return (
    <>
      <div style={{marginTop:"90px"}}>
        <div className="searchInput">
          <input type="text" placeholder='Search Here...' onChange={(event)=>{
            setSearchTerm(event.target.value);
          }}/>
        </div>
        <div className="templatecontainer">
          {
            data
              .filter((val)=>{
                if(searchTerm === ""){
                  return true;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                    return true;
                }
                return false;
              })
              .map((val)=>{
                return(
                    <div className='col-md-3 rounded-4 bg-white' key={val.id}>
                        <img src={val.image} alt="" />
                        <h3>{val.name}</h3>
                        <p>{val.desc}</p>
                        <p className='fs-5'>${val.price}</p>
                    </div>
                )
              })
          }
        </div>
      </div>
    </>
  )
}

export default Groups
