import React, { useEffect, useState } from 'react'
import defImg from '../../assets/images copy/hotel-default.jpg'
import { getAllAccoms, postAccom, postImage } from '../../service/service'

function AddNew() {

  const [newImage, SetNewImage] = useState(null)
  const [name, SetName] = useState('')
  const [city, SetCity] = useState('')
  const [address, SetAddress] = useState('')
  const [rating, SetRating] = useState(0)
  const [description, SetDescription] = useState('')
  const [image, SetImage] = useState('')
  const [allAccoms, SetAllAccoms] = useState([])

  useEffect(() => {
      getAllAccoms().then((res => {
        SetAllAccoms(res.data)        
      })
  )},[])

  const postImg = () => {
    const formData = new FormData()
      if(newImage) {
        formData.append('image',newImage)
      }       
      postImage(formData).then((res) => {
       SetImage(res.data.filename)
      })
  }


  const postHotel = () => {
      if(!name || !city || !address || !rating || !description || !image) {
        console.log('nije proso');
        return 
      }
      let obj = {
        _id: (allAccoms.length * 2) + 1,
        description,
        rating,
        address,
        name,
        city,
        image 
      }
      
      postAccom(obj).then((res) => {
        console.log('Sent');
      })
     
  }

  return (
   <div className='row'>
     <div className='col-6'>
       <input type='file' onChange={(e)=>SetNewImage(e.target.files[0])}/>
       <div className="col-6 text-end">
         <button className='btn btn-secondary my-3' onClick={postImg}>Upload</button>
         <div className='col my-3'>
         <img src={newImage ? URL.createObjectURL(newImage) : defImg} alt='default' className='img-fluid'/>

         </div>
         </div>
     </div>
    <div className='col-6'>
     
    
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input onChange={(e) => SetName(e.target.value)} type="text" className="form-control" name="name" id="name" placeholder="Name" 
              />
           
            </div>
            <div className="form-group">
              <label  htmlFor="place">Place</label>
              <input onChange={(e) => SetCity(e.target.value)} type="text" className="form-control" name="place" id="place" placeholder=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input onChange={(e) => SetAddress(e.target.value)} type="text" className="form-control" name="address" id="address" placeholder="Address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="rating">Rating</label>
              <input onChange={(e) => SetRating(e.target.value)} type="number" className="form-control" name="rating" id="rating" placeholder="0"
              />
            </div>
            <div className="form-group">
                <label htmlFor="desc">Description</label>
                <textarea onChange={(e) => SetDescription(e.target.value)} className="form-control" name="desc" id="desc" rows="3"
                ></textarea>
              </div>
            <button type="submit" className="btn btn-primary" onClick={postHotel}>Submit</button>
          
    
    </div>


   </div>
  )
}

export default AddNew