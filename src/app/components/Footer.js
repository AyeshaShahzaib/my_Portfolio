
import '@fortawesome/fontawesome-free/css/all.min.css';
export default function Footer(){
    return (
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
           
            <div className="mb-6 md:mb-0">
              <h4 className="text-xl font-semibold text-primary mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/AyeshaShahzaib"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <i className="fab fa-github fa-2x"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/ayesha-shahzaib/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
               
                <a
                  href="mailto:your-email@example.com"
                  className="text-gray-400 hover:text-white"
                >
                  <i className="fas fa-envelope fa-2x"></i> 
                </a>
              </div>
            </div>
  
            
            <div className="mb-6 md:mb-0">
              <h4 className="text-xl font-semibold text-primary mb-4">Contact Me</h4>
              <p className="text-gray-400">
                Email: <a href="mailto:ayeshashahzaib31032007@gmail.comm" className="text-white">ayeshashahzaib31032007@gmail.com</a>
              </p>
              <p className="text-gray-400">Phone: +123456789</p>
            </div>
  
           
            <div>
              <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Ayesha Shahzaib. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  };