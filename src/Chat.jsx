import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: 'message1', isUser: false },
    { text: 'message2', isUser: true },
    { text: 'message3', isUser: false },
  ]);

  const [newMessage, setNewMessage] = useState('');
  // const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, isUser: true }]);
      setNewMessage('');

      // Simulate a response from ChatGPT (you can replace this with your API call)
      setTimeout(() => {
        setMessages([
          ...messages,
          { text: 'I am just a simple example, but you can make me smarter!', isUser: false },
        ]);
      }, 10000);
    }
  };

  // const togglePanel = () => {
  //   setIsPanelOpen(!isPanelOpen);
  // };

  // const openPanel = () => {
  //   setIsPanelOpen(true);
  // };

  return (
    <>
    <div className="bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
      <div className="flex h-screen w-3/4 m-auto ">
        {/* <div className={`w-64 bg-white p-4 transition-all ease-in-out duration-300 ${isPanelOpen ? 'translate-x-0' : '-translate-x-64'}`}>
          
          <button onClick={togglePanel}>Toggle Panel</button>
        </div> */}
        <div className="flex-grow w-1/2 p-4 overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`${
                  message.isUser ? 'bg-indigo-700 text-white' : 'bg-gray-200 text-gray-700'
                } p-2 rounded-lg max-w-md`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      {/* <div className="fixed bottom-4 left-4 bg-indigo-500 text-white px-4 py-2 rounded-full">
        <button onClick={openPanel}>Open Panel</button>
      </div> */}
      <div className="fixed bottom-0 left-0 right-0 p-12">
        <div className="flex items-center">
          <input
            type="text"
            className="flex-grow px-2 py-1 border rounded-l-lg focus:outline-none"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            className={`${
              newMessage.trim() !== '' ? 'bg-indigo-500 text-white' : 'bg-gray-400 text-gray-700'
            } px-4 py-2 rounded-r-lg`}
            onClick={handleSendMessage}
            disabled={newMessage.trim() === ''}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default Chat;