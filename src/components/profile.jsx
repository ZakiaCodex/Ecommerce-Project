function Profile (props) {
let Product=[
  {product_id:1,title:"English", price:22,category:"IT",description:"i love coding"},
   {product_id:2,title:"Urdu", price:24,category:"CS",description:"i love coding"},
    {product_id:3,title:"Atomic Habits", price:32,category:"math",description:"i love math"}
]
  // 1: Create list of student objects
let res=Product.filter((pro)=>{
  return pro.price>props.maxPrice
}) 
return(
  <div>
  {
    res.map((pro,index)=>{
      return(
        <div>
    <h2 key={index}>Product ID: {pro.product_id}</h2>
    <h2>Name:{pro.title}</h2>
    <h2>Price: {pro.price}</h2>
      <h2>Category:{pro.category}</h2>
 </div>
      )
        })
      }

  
  </div>
)

}
export default Profile;
