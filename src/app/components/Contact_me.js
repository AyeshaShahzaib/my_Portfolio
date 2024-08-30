


export default function ContactSection() {
    return (
      <div id="Contact"className="bg-gray-900 text-white py-16 px-5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">Contact Me</h2>
          <p className="text-lg mb-10">
            Have any questions or want to work together? Feel free to reach out!
          </p>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Enter your name"
                required
              />
            </div>
  
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Enter your email"
                required
              />
            </div>
  
           
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
  
           
            <button
              type="submit"
              className="w-full py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  }
  