import React, { useState } from 'react';
import { workshops } from '../database/workshop';
import { Calendar, Clock, MapPin, Search } from 'lucide-react';

const Workshop = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredWorkshops = workshops.filter(workshop =>
        workshop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        workshop.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
                        Upcoming Workshops
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Join our expert-led workshops to master new skills and stay ahead in the tech world.
                    </p>
                </div>

                <div className="flex justify-center mb-10">
                    <div className="relative w-full max-w-xl">
                        <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search workshops..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none shadow-sm transition-all"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredWorkshops.map((workshop) => (
                        <div key={workshop.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={workshop.image}
                                    alt={workshop.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-blue-600 px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm">
                                    ₹{workshop.price}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-2 text-blue-600 text-sm font-semibold mb-3">
                                    <Calendar size={16} />
                                    <span>{workshop.date}</span>
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors font-serif">
                                    {workshop.title}
                                </h3>

                                <p className="text-slate-600 mb-6 line-clamp-2">
                                    {workshop.description}
                                </p>

                                <div className="space-y-3 mb-6 text-sm text-slate-500">
                                    <div className="flex items-center gap-2">
                                        <Clock size={16} className="text-slate-400" />
                                        <span>{workshop.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} className="text-slate-400" />
                                        <span>{workshop.location}</span>
                                    </div>
                                </div>

                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors duration-300">
                                    Register Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredWorkshops.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-slate-500 text-lg">No workshops found matching your search.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Workshop;