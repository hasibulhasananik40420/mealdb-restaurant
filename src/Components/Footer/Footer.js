import React from 'react';

const Footer = () => {
    return (
        <footer>

     <div className='flex justify-evenly bg-gray-900 p-6  text-green-200' >
       <div>
             <h2 className='text-2xl text-green-200'>Go Make Something Awesome</h2>
             <p> Font Awesome is the internet's icon library and toolkit used by millions </p>
             <p>Made with and in Bentonville, Boston, Joplin, Seattle, Tampa, and Vergennes. </p>
         </div>
         <div>
             <p>projects</p>
             <p>Changelog</p>
             <p>Status</p>
             <p>Commission Icons</p>
             <p>License</p>
         </div>
         <div>
             <p>Help</p>
             <p>FAQs</p>
             <p> Troubleshooting</p>
             <p>Support</p>
             <p>Contact Us</p>

         </div>
          <div>
              <p>Community</p>
              <p>GitHub</p>
              <p>Issues</p>
              <p>Icon Requests</p>
              <p>Twitter</p>
          </div>
       </div>
        </footer>
    );
};

export default Footer;