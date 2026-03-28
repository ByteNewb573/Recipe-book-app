// import React from 'react'

//  const Footer = () => {
//   // let footerStyle ={
//   //   position: "relative",
//   //   top: "10vh",
//   //   width: "100%", 
//   // }
//   return (
//     <footer style={footerStyle}className="bg-dark text-light py-3">
//       <p className='text-center'>
//         Copyright &copy; MyTodosList.com
//       </p>
      
//     </footer>
//   )
// };
// export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#8B0000' }} className="text-light py-3">
      <p className="text-center mb-0" style={{ fontFamily: 'Georgia, serif', fontSize: '1rem' }}>
        &copy; {new Date().getFullYear()} RecipeBook. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
