function Tailwind(){
    return(

        <>
             <div className="sm:flex justify-between pl-5 sm:items-center bg-cyan-100 ">
          <h1 className="mt-4 mb-3">LOGO</h1>
          <ul className="sm:flex gap-5 gap "> 
          
            <li ><a className="hover:text-cyan-400 hover:underline" href="#">Home</a></li>
            <li ><a className="hover:text-cyan-400 hover:underline" href="#">About</a></li>
            <li ><a className="hover:text-cyan-400 hover:underline" href="#">Content</a></li>
            <li ><a className="hover:text-cyan-400 hover:underline" href="#">Course</a></li>
          
          </ul>
                 
             <div className="pr-4">
             <button className="border-2 px-2 py-1 mt-4 bg-cyan-600 font-mono font-bold rounded-md hover:bg-cyan-700 hover:text-white">LOGIN</button>
             </div>
        </div>
        {/* hero section */}
        <div className="" >
          <img className="sm:w-screen sm:h-96 mb-8 h-44 w-96" src="2.jpg" alt=" Not found" />
        </div>
        <div className="sm:flex gap-3 w-screen" >
          <img className="h-64 w-96 pb-2 sm:w-1/3 sm:h-44" src="2.jpg" alt=" Not found" />
          <p className="  text-justify p-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi explicabo, non tempore quam veritatis cumque, iste vero libero, perspiciatis fugit repudiandae! Sint, perferendis inventore magni esse est, adipisci rerum illo dolore praesentium voluptas nemo ducimus tempora minima impedit ipsa placeat fugiat? Quia voluptatibus placeat harum libero quam, dignissimos doloremque perspiciatis odio suscipit hic optio vel corporis alias voluptas qui veniam officia ipsum fugit accusamus. Facere exercitationem saepe autem laboriosam iste? Quas doloribus reprehenderit et ut accusantium nemo vero, voluptatem expedita ab libero eaque suscipit, distinctio in! Excepturi a reprehenderit rem, totam Debitis, delectus qui!</p>
        </div>
       
            {/* second  */}
         
        <div className="sm:flex" >
        <img className="h-64 w-96 pb-2 sm:w-96 sm:h-44" src="2.jpg" alt=" Not found" />
          <p className="  text-justify p-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi explicabo, non tempore quam veritatis cumque, iste vero libero, perspiciatis fugit repudiandae! Sint, perferendis inventore magni esse est, adipisci rerum illo dolore praesentium voluptas nemo ducimus tempora minima impedit ipsa placeat fugiat? Quia voluptatibus placeat harum libero quam, dignissimos doloremque perspiciatis odio suscipit hic optio vel corporis alias voluptas qui veniam officia ipsum fugit accusamus. Facere exercitationem saepe autem laboriosam iste? Quas doloribus reprehenderit et ut accusantium nemo vero, voluptatem expedita ab libero eaque suscipit, distinctio in! Excepturi a reprehenderit rem, totam Debitis, delectus qui!</p>
          
        </div>
        <div>
        </div>
         
        </>
    )

}
export default Tailwind;