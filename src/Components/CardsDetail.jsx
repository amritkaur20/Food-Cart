import React,{useEffect,useState} from 'react'
import Table from 'react-bootstrap/esm/Table';
import {useNavigate, useParams} from "react-router-dom"
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { DELETE,ADD, REMOVE } from '../redux/actions/action';
import { useDispatch } from 'react-redux';


const CardsDetail = () => {

  const [data,setData] = useState([]);
  const {id}= useParams()
  const getData = useSelector((state)=>state.cartreducer.carts)
const dispatch =useDispatch()

const navigate = useNavigate()
  
  const compare = ()=>{
    let comparedata = getData.filter((el)=>{
      return el.id == id
    });
    setData(comparedata)
  }

  const send =(el)=>{
    dispatch(ADD(el)) 
    }

  const dlt = (id)=>{
    dispatch(DELETE(id))
    navigate("/")
  }

const remove =(item)=>{
  dispatch(REMOVE(item))
}

    useEffect(()=>{
      compare();
    },[id])

    


  return (
  <>
    <div className="container mt-2">
    <h2 className='text-center'>Iteam Details Page
    </h2>
    <section className='container mt-3'>
          <div className="iteamsdetails">
          {
            data.map((el)=>{
return(
  <>
  <div className="items_img">
  <img src={el.imgdata} alt="" />
</div>

<div className="details">
  <Table>
    <tr>
      <td>
        <p> <strong>Restaurant</strong>  : {el.rname}</p>
        <p> <strong>Price</strong>  : Rs {el.price}</p>
        <p> <strong>Dishes</strong>  : {el.address}</p>
        <p> <strong>Total</strong>  :₹  {el.price * el.qnty}</p>

      <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
        <span style={{fontSize:24}} onClick={el.qnty <=1 ? ()=>dlt(el.id) : ()=>remove(el)}>-</span>
        <span style={{fontSize:22}}>{el.qnty}</span>
<span style={{fontSize:24}} onClick={()=>send(el)}>+</span>
</div>

      </td>
      <td>
        <p><strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}>{el.rating}	</span></p>
        <p><strong>Order Review :</strong> <span >{el.somedata}	</span></p>
        <p><strong>Remove :</strong> <span ><i className='fas fa-trash'  style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(el.id)}></i>	</span></p>
      </td>
    </tr>
  </Table>
</div>


  
  
  </>
)
            })
          }
         </div>
          </section>
    </div>
  </>
  )
}

export default CardsDetail;