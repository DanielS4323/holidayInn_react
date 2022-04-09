import React, { useState } from 'react'
import defImg from '../../assets/images copy/hotel-default.jpg'

function AddNew() {

  const [newImage, SetNewImage] = useState(null)

  return (
   <div className='row'>
     <div className='col-6'>
       <input type='file' onChange={(e)=>SetNewImage(e.target.files[0])}/>
       <div className="col-6 text-end">
         <button className='btn btn-secondary my-3'>Upload</button>
         <div className='col my-3'>
         <img src={newImage ? URL.createObjectURL(newImage) : defImg} alt='default' className='img-fluid'/>

         </div>
         </div>
     </div>
    <div className='col-6'>
     
      <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" name="name" id="name" placeholder="Name" 
              />
           
            </div>
            <div className="form-group">
              <label  htmlFor="place">Place</label>
              <input type="text" className="form-control" name="place" id="place" placeholder=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" className="form-control" name="address" id="address" placeholder="Address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="rating">Rating</label>
              <input type="number" className="form-control" name="rating" id="rating" placeholder="0"
              />
            </div>
            <div className="form-group">
                <label htmlFor="desc">Description</label>
                <textarea className="form-control" name="desc" id="desc" rows="3"
                ></textarea>
              </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
    
    </div>


   </div>
  )
}

export default AddNew