import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardsData from "./CardsData"
import "../CSS/style.css"
import { useDispatch } from 'react-redux';
import {ADD} from "../redux/actions/action"

const Cards = () => {

  const [data, setData] = useState(CardsData)
 
const dispatch = useDispatch()


const send =(el)=>{
dispatch(ADD(el)) 
}





  return (
    <div className='container mt-3'>
      <h2 className='text-center'>Menu</h2>

      <div className='row d-flex justify-content-center align-items-center'>
        {
          data.map((el, id) => {
            return (
              <>
                <Card  sx={{ maxWidth: 345, height:400 }} className="mx-3 mt-4 card_style" >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="250"
                    image={el.imgdata}
                    className="mt-3"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                     {el.rname}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                     Price: Rs {el.price}
                    </Typography>
                  </CardContent>
                  <div className="button_div d-flex justify-content-center">
                  <Button className='col-lg-12' 
                  onClick={()=>send(el)}
                  style={{background:"blue",color:"White"}}>Add to Cart</Button>
                  </div>
                </Card>
              </>

            )
          })

        }

      </div>
    </div>
  )
}

export default Cards