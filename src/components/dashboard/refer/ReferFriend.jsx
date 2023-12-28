import React, { useState } from 'react'

const ReferFriend = () => {
    const [shareUrl, setShareUrl] = useState('https://example.com/referral?code=YOUR_REFERRAL_CODE');
    const [isCopied, setIsCopied] = useState(false);
  
    const copyToClipboard = () => {
      navigator.clipboard.writeText(shareUrl);
      setIsCopied(true);
  
      // Reset copied state after 3 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    };
  
    const shareOnFacebook = () => {
      // Replace with your Facebook sharing logic
      alert('Sharing on Facebook');
    };
  
    const shareOnTwitter = () => {
      // Replace with your Twitter sharing logic
      alert('Sharing on Twitter');
    };
  
    const shareOnWhatsApp = () => {
      // Replace with your WhatsApp sharing logic
      alert('Sharing on WhatsApp');
    };
  
    const shareViaEmail = () => {
      // Replace with your email sharing logic
      alert('Sharing via Email');
    };
  
    return (
        <div className="w-4/5 h-4/5  mx-auto border border-[#FFCC00] text-black p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Refer Your Friends</h2>
    
          <div className="mb-4">
            <div className="flex items-center">
            <div className="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#FFCC00] focus:outline-none focus:ring-0 focus:border-[#FFCC00] peer" placeholder=" " required value={shareUrl} readOnly />
      <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#FFCC00] peer-focus:dark:text-[#FFCC00] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
            
              <button
                onClick={copyToClipboard}
                className="ml-2 bg-[#FFCC00] text-black px-4 py-2 rounded-md focus:outline-none focus:shadow-outline-yellow"
              >
                {isCopied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
    
          <div className="flex flex-col items-center justify-evenly space-y-2">
            <button
              onClick={shareOnFacebook}
              className="bg-[#FFCC00] text-black hover:bg-black hover:text-[#FFCC00] px-4 py-2 rounded-md focus:outline-none focus:shadow-outline-blue"
            >
              Share on Facebook
            </button>
            <button
              onClick={shareOnTwitter}
              className="bg-[#FFCC00] text-black hover:bg-black hover:text-[#FFCC00] px-4 py-2 rounded-md focus:outline-none focus:shadow-outline-blue"
            >
              Share on Twitter
            </button>
            <button
              onClick={shareOnWhatsApp}
              className="bg-[#FFCC00] text-black hover:bg-black hover:text-[#FFCC00] px-4 py-2 rounded-md focus:outline-none focus:shadow-outline-green"
            >
              Share on WhatsApp
            </button>
            <button
              onClick={shareViaEmail}
              className="bg-[#FFCC00] text-black hover:bg-black hover:text-[#FFCC00] px-4 py-2 rounded-md focus:outline-none focus:shadow-outline-red"
            >
              Share via Email
            </button>
          </div>
        </div>
      );
}

export default ReferFriend