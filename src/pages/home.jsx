import React from 'react';
import { FaQuestionCircle, FaPen, FaThumbsUp, FaThumbsDown, FaShare, FaCommentDots } from 'react-icons/fa'; 
import Spaces from '../components/spaces';

const posts = [
    {
        authorName: 'John Doe',
        qualifications: 'MSc in Computer Science',
        postedOn: '2024-12-21',
        questionTitle: 'How to improve my React skills?',
        questionImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz5_pFXLFlros8tRZoOHLVZVI30KJEU411IQ&s',
        answer: 'To improve your React skills, practice building small projects, read official documentation, and follow community tutorials.',
    },
    {
        authorName: 'Jane Smith',
        qualifications: 'PhD in Physics',
        postedOn: '2024-12-20',
        questionTitle: 'What is quantum computing?',
        questionImage: 'https://media.istockphoto.com/id/2156615862/photo/3d-illustration-of-a-working-quantum-computer-quantum-computing-concept.jpg?s=612x612&w=0&k=20&c=LWM7TJ2Abk_Z1lrzR_KMR819fy0kmqP4dl3xo61cIaM=',
        answer: 'Quantum computing uses quantum-mechanical phenomena, such as superposition and entanglement, to perform computation.',
    },
    {
        authorName: 'Alice Brown',
        qualifications: 'Software Engineer at XYZ Corp',
        postedOn: '2024-12-19',
        questionTitle: 'How to set up a Node.js server?',
        questionImage: 'https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png',
        answer: 'You can set up a Node.js server by installing Node.js, creating a server file, and using the Express.js framework.',
    },
    {
        authorName: 'Bob White',
        qualifications: 'BTech in Electronics',
        postedOn: '2024-12-18',
        questionTitle: 'What is deep learning?',
        questionImage: 'https://miro.medium.com/v2/resize:fit:1400/1*fZsOOTFSFpBcc9DEApeLow.png',
        answer: 'Deep learning is a subset of machine learning that uses neural networks to model complex patterns and representations.',
    },
    {
        authorName: 'Charlie Green',
        qualifications: 'BSc in Mathematics',
        postedOn: '2024-12-17',
        questionTitle: 'What are the best resources to learn data science?',
        questionImage: 'https://static.vecteezy.com/system/resources/thumbnails/005/442/693/small/data-science-analytics-internet-and-technology-concept-concept-photo.jpg',
        answer: 'Some great resources for learning data science are online courses, books, and practical projects. Start with Python and ML libraries.',
    }
];

const Home = ({ isModalOpen, setIsModalOpen, toggleModal }) => {
    return (
        <div className="flex flex-col md:flex-row bg-gray-100 ">
            {/* Sidebar */}
            <aside className="w-full md:w-64 p-4 font-sans md:ml-32 ml-0">
                <Spaces />
            </aside>

            {/* Main Content */}
            <main className=" p-4 md:p-8 mt-4 ml-0 mx-auto font-sans md:w-2/4 w-full ">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    {/* Profile Avatar and Input Section */}
                    <div className="flex flex-col md:flex-row items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-700 text-white rounded-full flex items-center justify-center text-xl mb-4 md:mb-0">
                            K
                        </div>
                        <input
                            type="text"
                            name="ask-question"
                            id="ask-question"
                            placeholder="What do you want to ask or share?"
                            className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>

                    {/* Divider */}
                    <div className="my-4 border-t border-gray-300"></div>

                    {/* Ask or Post Tabs */}
                    <div className="flex space-x-4">
                        {/* Ask Section */}
                        <div className="flex-1 flex items-center justify-center py-2 border-r border-gray-300 cursor-pointer" onClick={toggleModal}>
                            <FaQuestionCircle className="text-red-500 mr-2" />
                            <span className="text-lg text-gray-700">Ask</span>
                        </div>

                        {/* Divider between Ask and Post */}
                        <div className="border-l border-gray-300 h-8"></div>

                        {/* Post Section */}
                        <div className="flex-1 flex items-center justify-center py-2 cursor-pointer" onClick={toggleModal}>
                            <FaPen className="text-blue-500 mr-2" />
                            <span className="text-lg text-gray-700">Post</span>
                        </div>
                    </div>
                </div>

                {/* Render Posts */}
                <div className="mt-6 space-y-6">
                    {posts.map((post, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                            {/* Author Info */}
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="w-10 h-10 bg-gray-500 text-white rounded-full flex items-center justify-center text-xl">{post.authorName[0]}</div>
                                <div>
                                    <p className="font-semibold text-gray-800">{post.authorName}</p>
                                    <p className="text-sm text-gray-600">{post.qualifications}</p>
                                    <p className="text-xs text-gray-500">Posted on: {post.postedOn}</p>
                                </div>
                            </div>

                            {/* Question Title & Image */}
                            <div>
                                <p className="font-semibold text-lg text-gray-800 mb-4">{post.questionTitle}</p>
                                <img src={post.questionImage} alt="question" className="w-full h-80 object-cover mb-4" />
                            </div>

                            {/* Answer */}
                            <div className="mb-4">
                                <p className="text-gray-700">{post.answer}</p>
                            </div>

                            {/* Interactions */}
                            <div className="flex items-center space-x-6 text-gray-500">
                                <div className="flex items-center space-x-2 cursor-pointer">
                                    <FaThumbsUp className="text-lg hover:text-gray-800" />
                                    <span className="text-sm">Upvote</span>
                                </div>
                                <div className="flex items-center space-x-2 cursor-pointer">
                                    <FaThumbsDown className="text-lg hover:text-gray-800" />
                                    <span className="text-sm">Downvote</span>
                                </div>
                                <div className="flex items-center space-x-2 cursor-pointer">
                                    <FaShare className="text-lg hover:text-gray-800" />
                                    <span className="text-sm">Share</span>
                                </div>
                                <div className="flex items-center space-x-2 cursor-pointer">
                                    <FaCommentDots className="text-lg hover:text-gray-800" />
                                    <span className="text-sm">Comments</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Home;
