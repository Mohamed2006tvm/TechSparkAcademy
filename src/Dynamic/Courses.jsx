import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../database/courses';
import { Clock, Award, BarChart, BookOpen, Briefcase, FileText, CheckCircle, Download } from 'lucide-react';

const Courses = () => {
    const { id } = useParams();
    const course = courses.find((c) => c.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!course) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">Course Not Found</h2>
                <Link to="/" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2">
                    Back to Courses
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-slate-50 min-h-screen font-sans">
            {/* Hero Section */}
            <div className="bg-slate-900 text-white sm:pt-24 sm:pb-16 sm:px-4 md:px-8 py-8">
                <div className="sm:px-35 px-8 mx-auto">
                    <div className="mb-6">
                        <span className="inline-block px-4 py-1.5 border border-slate-600 rounded-full text-sm font-medium text-slate-300">
                            {course.certification}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-serif">
                        {course.title}
                    </h1>

                    <div className="flex flex-wrap gap-8 text-slate-300 mb-8 text-sm md:text-base">
                        <div className="flex items-center gap-2">
                            <Clock size={20} />
                            <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Award size={20} />
                            <span>Certificate Included</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-semibold text-white text-lg">₹ {course.Onlineprice.toLocaleString()}</span>
                        </div>
                    </div>

                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-blue-500/20">
                        Enroll Now
                    </button>
                </div>
            </div>

            {/* Content Section */}
            <div className="w-full mx-auto px-4 md:px-35 mt-8 ">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6 ">

                        {/* Overview Card */}
                        <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-100">
                            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Course Overview</h2>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                {course.description}
                            </p>
                        </div>

                        {/* Career Paths Card */}
                        <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-100">
                            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Career Paths</h2>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                                <span className="text-slate-700 font-medium text-lg">{course.carrier}</span>
                            </div>
                        </div>

                        {/* Internship Card */}
                        <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-100">
                            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Internship Opportunities</h2>
                            <p className="text-slate-600 text-lg">
                                1 month optional internship included
                            </p>
                        </div>

                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-md p-6 border border-slate-100 sticky top-4">
                            <h3 className="text-xl font-serif font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">
                                Program Details
                            </h3>

                            <div className="space-y-6">
                                <div className="flex justify-between items-center group">
                                    <span className="text-slate-500 font-medium">Duration</span>
                                    <span className="text-slate-900 font-semibold">{course.duration}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-500 font-medium">Online Fee</span>
                                    <span className="text-slate-900 font-semibold">INR {course.Onlineprice}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-500 font-medium">Offline Fee</span>
                                    <span className="text-slate-900 font-semibold">INR {course.Offlineprice}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-500 font-medium">Level</span>
                                    <span className="text-slate-900 font-semibold">{course.level}</span>
                                </div>
                            </div>

                            <button className="w-full mt-8 border border-slate-300 hover:border-slate-800 text-slate-700 hover:text-slate-900 font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2">
                                <Download size={18} />
                                Download Brochure
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Height spacer for bottom */}
            <div className="h-20"></div>
        </div>
    );
};

export default Courses;
