import React, { useState } from 'react';

const Post = ({ isOpen, toggleModal }) => {
  const [isQuestionTab, setIsQuestionTab] = useState(true);
  const [selectedPrivacy, setSelectedPrivacy] = useState("Public");

  const toggleTab = () => {
    setIsQuestionTab(!isQuestionTab);
  };

  const handlePrivacyChange = (e) => {
    setSelectedPrivacy(e.target.value);
  };

  if (!isOpen) return null; // Don't render modal if it's not open

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-3xl p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            {isQuestionTab ? 'Ask a Question' : 'Add a Post'}
          </h2>
          <button
            onClick={toggleModal}
            className="text-gray-600 font-bold text-xl hover:text-gray-800"
          >
            X
          </button>
        </div>

        {/* Tab Toggle Slider */}
        <div className="mt-4 flex justify-center mb-4">
          <button
            onClick={toggleTab}
            className={`px-6 py-2 text-lg rounded-l-md ${isQuestionTab ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800'} transition-all`}
          >
            Ask Question
          </button>
          <button
            onClick={toggleTab}
            className={`px-6 py-2 text-lg rounded-r-md ${!isQuestionTab ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800'} transition-all`}
          >
            Add Post
          </button>
        </div>

        {/* Modal Content */}
        <div className="mt-4">
          {isQuestionTab ? (
            <div>
              <textarea
                className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="What is your question?"
                rows="5"
              ></textarea>

              {/* Privacy Dropdown */}
              <div className="mt-4">
                <label htmlFor="privacy" className="text-lg font-medium text-gray-700">Select Privacy</label>
                <select
                  id="privacy"
                  value={selectedPrivacy}
                  onChange={handlePrivacyChange}
                  className="mt-2 w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="Public">Public</option>
                  <option value="Limited">Limited</option>
                </select>
                <p className="mt-2 text-gray-600 text-sm">
                  {selectedPrivacy === 'Public' ? (
                    'Others will see your identity alongside this question on your profile and in their feeds.'
                  ) : (
                    'Your identity will be shown, but this question won\'t appear in your followers\' feeds or on your profile.'
                  )}
                </p>
              </div>
            </div>
          ) : (
            <div>
              <textarea
                className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="What would you like to post?"
                rows="5"
              ></textarea>
            </div>
          )}

          <button
            className="mt-4 bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 w-full"
          >
            {isQuestionTab ? 'Ask Question' : 'Add Post'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
