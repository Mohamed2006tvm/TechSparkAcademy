import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { courses } from '../database/courses';
import { Search, Clock, Award } from 'lucide-react';

const Course = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="py-10 px-4 sm:px-100">

                <h1 className="
                    text-5xl
                    md:text-6xl
                    font-serif
                    font-semibold
                    text-center
                    text-slate-900
                    tracking-tight
  ">
                    Our Courses
                </h1>

                <p className="
                    text-center
                    mt-6
                    text-lg
                    text-slate-600
                    max-w-2xl
                    mx-auto
                    leading-relaxed
  ">
                    Comprehensive programs designed to help you master the most in-demand
                    technical skills.
                </p>

            </div>


            <div className="flex justify-center mb-6">
                <div className="relative w-full max-w-xl sm:px-0 px-5">

                    <Search
                        size={18}
                        className="absolute sm:left-4 left-8 top-1/2 -translate-y-1/2 text-slate-400 "
                    />
                    <input
                        type="text"
                        placeholder="Search courses..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="
                                w-full
                                pl-12 pr-4 py-3
                                rounded-lg
                                border border-slate-200
                                bg-white
                                text-slate-700
                                placeholder-slate-400
                                shadow-sm
                                focus:outline-none
                                focus:ring-2 focus:ring-blue-500
                                focus:border-transparent
                                transition
                            "
                    />

                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:px-30 px-5 py-5 ">
                {filteredCourses.map((course) => (
                    <div
                        key={course.id}
                        className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-blue-500 flex flex-col h-full group cursor-pointer border-t-3 rounded-t-lg border-t-blue-600"
                    >
                        <div className="p-5 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-4">
                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-200">
                                    {course.level}
                                </span>
                                <span className="text-lg font-bold text-blue-600">
                                    ₹{course.Onlineprice ? course.Onlineprice.toLocaleString() : 'N/A'}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors font-serif">
                                {course.title}
                            </h3>

                            <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                                {course.description}
                            </p>

                            <div className="space-y-4 mt-auto">
                                <div className="flex items-center justify-between text-slate-500 text-sm py-3 border-t border-slate-100">
                                    <div className="flex items-center gap-2">
                                        <Clock size={16} className="text-blue-500" />
                                        <span>{course.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Award size={16} className="text-blue-500" />
                                        <span className="truncate max-w-[150px]" title={course.certification}>
                                            Certificate
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => navigate(`/course/${course.id}`)}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform translate-y-0 shadow-md hover:shadow-lg">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
};

export default Course;