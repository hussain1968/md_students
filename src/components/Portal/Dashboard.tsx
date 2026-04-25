/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  UserPlus, 
  FileText, 
  TrendingUp, 
  Search,
  Plus,
  ArrowLeft,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { StudentRecord, UserRole } from '../../types';

interface DashboardProps {
  role: UserRole;
  userName: string;
  onLogout: () => void;
}

export function PortalDashboard({ role, userName, onLogout }: DashboardProps) {
  const [view, setView] = useState<'overview' | 'register' | 'reports'>('overview');
  const [students, setStudents] = useState<StudentRecord[]>([
    { id: '1', name: 'Zaid Al-Farsi', age: 12, class: 'Class A', admissionDate: '2025-01-10', status: 'active', parentId: 'p1', report: 'Excellent progress in Arabic grammar.' },
    { id: '2', name: 'Maryam bint Yusuf', age: 10, class: 'Class B', admissionDate: '2025-02-15', status: 'active', parentId: 'p2', report: 'Focusing on Tajweed fundamentals.' },
  ]);

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-3xl p-8 border border-stone-200 mb-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-stone-900 rounded-2xl flex items-center justify-center text-white text-2xl font-serif">
              {userName.charAt(0)}
            </div>
            <div>
              <h2 className="text-2xl font-serif text-stone-900">Welcome, {userName}</h2>
              <p className="text-stone-500 text-sm uppercase tracking-widest font-bold">{role} Access Level</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => setView('overview')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${view === 'overview' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
            >
              Overview
            </button>
            <button 
              onClick={onLogout}
              className="px-6 py-2 border border-stone-200 rounded-full text-sm font-bold text-stone-600 hover:bg-stone-50 transition-all"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Stats */}
          <div className="space-y-6">
            <div className="bg-stone-900 text-white rounded-3xl p-8">
              <TrendingUp className="mb-4 text-stone-400" size={24} />
              <h4 className="text-sm uppercase tracking-widest font-bold opacity-60 mb-2">Student Progress</h4>
              <p className="text-4xl font-serif">+12%</p>
              <p className="text-xs text-stone-400 mt-2 italic">Since last semester</p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 border border-stone-200">
              <h4 className="text-stone-900 font-serif text-xl mb-4">Quick Stats</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-stone-500">Total Students</span>
                  <span className="font-bold">{students.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-stone-500">Pending Reports</span>
                  <span className="font-bold text-orange-600">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-stone-500">System Uptime</span>
                  <span className="font-bold text-green-600">99.9%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {view === 'overview' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                {/* Actions Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {role === 'teacher' && (
                    <button 
                      onClick={() => setView('register')}
                      className="group p-8 bg-white border border-stone-200 rounded-3xl flex items-center justify-between hover:border-stone-400 transition-all text-left"
                    >
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center text-stone-400 group-hover:scale-110 group-hover:bg-stone-900 group-hover:text-white transition-all">
                          <UserPlus size={32} />
                        </div>
                        <div>
                          <h3 className="text-xl font-serif">Register Student</h3>
                          <p className="text-stone-500 text-sm">Add new student to the system</p>
                        </div>
                      </div>
                      <Plus className="text-stone-300" size={24} />
                    </button>
                  )}
                  <button 
                    onClick={() => setView('reports')}
                    className="group p-8 bg-white border border-stone-200 rounded-3xl flex items-center justify-between hover:border-stone-400 transition-all text-left"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center text-stone-400 group-hover:scale-110 group-hover:bg-stone-900 group-hover:text-white transition-all">
                        <FileText size={32} />
                      </div>
                      <div>
                        <h3 className="text-xl font-serif">{role === 'teacher' ? 'Update Reports' : 'View Reports'}</h3>
                        <p className="text-stone-500 text-sm">{role === 'teacher' ? 'Manage student academic progress' : 'Check your child\'s latest updates'}</p>
                      </div>
                    </div>
                    <ArrowLeft className="text-stone-300 rotate-180" size={24} />
                  </button>
                </div>

                {/* Recent Activity / Student List */}
                <div className="bg-white rounded-3xl p-8 border border-stone-200">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-2xl font-serif">Student Registry</h3>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={16} />
                      <input type="text" placeholder="Search record..." className="pl-10 pr-4 py-2 bg-stone-50 border border-stone-100 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-stone-900" />
                    </div>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-stone-100 text-[10px] font-bold uppercase tracking-widest text-stone-400">
                          <th className="pb-4">Name</th>
                          <th className="pb-4">Class</th>
                          <th className="pb-4">Status</th>
                          <th className="pb-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-50">
                        {students.map((student) => (
                          <tr key={student.id} className="group hover:bg-stone-50/50 transition-colors">
                            <td className="py-4">
                              <span className="font-medium text-stone-900 block">{student.name}</span>
                              <span className="text-xs text-stone-400">ID: #{student.id}</span>
                            </td>
                            <td className="py-4 text-sm text-stone-600">{student.class}</td>
                            <td className="py-4">
                              <span className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded-full uppercase italic">
                                {student.status}
                              </span>
                            </td>
                            <td className="py-4 text-right">
                              <button className="text-stone-400 hover:text-stone-900 p-2 transition-colors">
                                <FileText size={18} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {view === 'register' && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-3xl p-12 border border-stone-200">
                <button onClick={() => setView('overview')} className="flex items-center gap-2 text-stone-400 hover:text-stone-900 transition-colors mb-8 text-sm font-bold uppercase tracking-widest">
                  <ArrowLeft size={16} /> Back to Overview
                </button>
                <SectionHeader title="Register Student" subtitle="ACADEMIC RECORDS" />
                
                <form className="mt-8 grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl" placeholder="Student's Legal Name" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Date of Birth</label>
                    <input type="date" className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Assigned Class</label>
                    <select className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl">
                      <option>Hifz Section A</option>
                      <option>Arabic Language Level 1</option>
                      <option>Islamic Jurisprudence</option>
                    </select>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Parent/Guardian ID</label>
                    <input type="text" className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl" placeholder="P-XXXXXX" />
                  </div>
                  <div className="md:col-span-2 pt-6">
                    <button className="w-full py-4 bg-stone-900 text-white rounded-2xl font-bold hover:shadow-2xl shadow-stone-900/20 transition-all flex items-center justify-center gap-3">
                      <CheckCircle2 size={20} /> Register Student to Database
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {view === 'reports' && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <button onClick={() => setView('overview')} className="flex items-center gap-2 text-stone-400 hover:text-stone-900 transition-colors mb-8 text-sm font-bold uppercase tracking-widest">
                  <ArrowLeft size={16} /> Back to Overview
                </button>
                <div className="space-y-6">
                  {students.map(student => (
                    <div key={student.id} className="bg-white p-8 rounded-3xl border border-stone-200 hover:shadow-lg transition-all">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h4 className="text-2xl font-serif mb-1">{student.name}</h4>
                          <p className="text-xs text-stone-400 uppercase tracking-widest font-bold">Latest Report: June 2025</p>
                        </div>
                        <div className="px-4 py-2 bg-stone-50 rounded-full border border-stone-100 flex items-center gap-2">
                          <AlertCircle size={14} className="text-orange-500" />
                          <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">Update Required</span>
                        </div>
                      </div>
                      <div className="bg-stone-50 p-6 rounded-2xl mb-6 italic text-stone-600">
                        "{student.report}"
                      </div>
                      {role === 'teacher' && (
                        <button className="text-stone-900 font-bold text-xs uppercase tracking-widest border-b-2 border-stone-900 pb-1">
                          Edit Report
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
