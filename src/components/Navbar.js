import React from "react";
import { Link } from "react-router-dom";


function Navbar( {isLogin,handleLoginstate}){
  return(
    <div>
      <nav className="navbar navbar-expand-lg shadow">
        <Link className="navbar-brand" to="/">
          Internship Test
        </Link>
        <button className="navbar-toggler"type="button"data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            {isLogin ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login" onClick={()=>{
                    handleLoginstate(true);
                  }}>
                    Logout
                  </Link>

                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Signup</Link>
                </li>
              </>
            )}
          </ul>

        </div>
      </nav>
    </div>
  );

  // return(
  //       <div>
  //           <nav className="navbar navbar-expand-lg shadow">
  //               <Link className="navbar-brand" to="/">
  //                   Internship Test
  //               </Link>
  //               <button className="navbar-toggler"type="button"data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>

  //               <div className="collapse navbar-collapse">
  //                   <ul className="navbar-nav ml-auto">
  //                     {isLogin ? (
  //                       <div>

  //                         <li className="nav-item">
  //                           <Link className="nav-link"
  //                             to="/login"onClick={() => {
  //                               handleLoginstate(false);
  //                             }}
  //                           >
  //                             Logout
  //                           </Link>
  //                         </li>
  //                       </div>
  //                     ) : (
  //                       <>
  //                         <li className="nav-item">
  //                           <Link className="nav-link" to="/login">Login</Link>
  //                         </li>
  //                         <li className="nav-item">
  //                           <Link className="nav-link" to="/signup">Signup</Link>
  //                         </li>
  //                       </>
  //                     )}
  //                   </ul>
  //               </div>
        
  //             </nav>
  //       </div>
  //   )
}
export default Navbar
