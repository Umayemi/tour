

import Expand from "./Expandable";
import NavBar from "./NavBar";
const BlogList = ({blogs,handleDelete}) => {
    return (
            <div className="content">
            <NavBar/>
              <div className="blog-body" >
               {blogs.map((blog)=>(
                    <div className="container" key={blog.id}>
                        <img src={blog.img} alt="" />
                        <div className="price">{blog.price}</div>

                        <div className="blog-text">
                            <h2>{blog.title}</h2>
                        <div>
                        <div className="article">
                        <Expand>
                            {blog.body}
                        </Expand>
                        </div>
                        </div>
                        <button onClick={()=>handleDelete(blog.id)} className="delete">NOT INTERESTED</button>
                        </div>
                    </div>
            ))}
            </div>
        </div>
    );
}
 
export default BlogList;