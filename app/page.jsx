'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRight, TrendingUp, Users, Mic2, Calendar, Share2, Target, ArrowRight } from 'lucide-react';

export default function MarketingTracker() {
  const [view, setView] = useState('overview');
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [month, setMonth] = useState('December 2024');
  const [data, setData] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    // Initialize with sample data structure
    const sampleData = {
      overview: {
        'Social Media': {
          status: 'active',
          icon: Share2,
          color: 'from-blue-500 to-blue-600',
          totals: {
            efforts: 12,
            leads: 84,
            qualified: 31,
            meetings: 14,
            proposals: 8,
            negotiations: 3,
            closedWon: 2,
            closedLoss: 1,
            closedFollowup: 4
          }
        },
        'Podcasts': {
          status: 'active',
          icon: Mic2,
          color: 'from-purple-500 to-purple-600',
          totals: {
            efforts: 4,
            leads: 22,
            qualified: 9,
            meetings: 5,
            proposals: 2,
            negotiations: 1,
            closedWon: 0,
            closedLoss: 1,
            closedFollowup: 0
          }
        },
        'Events': {
          status: 'active',
          icon: Calendar,
          color: 'from-orange-500 to-orange-600',
          totals: {
            efforts: 3,
            leads: 47,
            qualified: 18,
            meetings: 9,
            proposals: 4,
            negotiations: 2,
            closedWon: 1,
            closedLoss: 0,
            closedFollowup: 1
          }
        },
        'Networkers': {
          status: 'active',
          icon: Users,
          color: 'from-green-500 to-green-600',
          totals: {
            efforts: 28,
            leads: 31,
            qualified: 12,
            meetings: 7,
            proposals: 3,
            negotiations: 2,
            closedWon: 1,
            closedLoss: 0,
            closedFollowup: 1
          }
        },
        'Paid Social': {
          status: 'inactive',
          icon: Target,
          color: 'from-gray-400 to-gray-500',
          totals: {
            efforts: 0,
            leads: 0,
            qualified: 0,
            meetings: 0,
            proposals: 0,
            negotiations: 0,
            closedWon: 0,
            closedLoss: 0,
            closedFollowup: 0
          }
        },
        'Cold Outreach': {
          status: 'inactive',
          icon: Target,
          color: 'from-gray-400 to-gray-500',
          totals: {
            efforts: 0,
            leads: 0,
            qualified: 0,
            meetings: 0,
            proposals: 0,
            negotiations: 0,
            closedWon: 0,
            closedLoss: 0,
            closedFollowup: 0
          }
        }
      },
      details: {
        'Social Media': [
          { id: 1, name: 'LinkedIn Post: CEO Benchmarks', leads: 24, qualified: 11, meetings: 5, proposals: 3, negotiations: 1, closedWon: 1, insights: 'Strong engagement from founder community' },
          { id: 2, name: 'Instagram Reel: Success Stories', leads: 18, qualified: 7, meetings: 4, proposals: 2, negotiations: 1, closedWon: 0, insights: 'High CTR, younger audience' },
          { id: 3, name: 'TikTok: 60-Second Pitch', leads: 22, qualified: 8, meetings: 3, proposals: 2, negotiations: 1, closedWon: 1, insights: 'Viral potential, but lower qual rate' },
          { id: 4, name: 'Twitter Thread: Founder Advice', leads: 20, qualified: 5, meetings: 2, proposals: 1, negotiations: 0, closedWon: 0, insights: 'B2B audience, good qualified ratio' }
        ],
        'Podcasts': [
          { id: 1, name: 'The Founder Hour - Episode 45', leads: 12, qualified: 6, meetings: 3, proposals: 2, negotiations: 1, closedWon: 0, insights: 'Aligned audience, highest close rate' },
          { id: 2, name: 'Business Mavens - Guest Interview', leads: 10, qualified: 3, meetings: 2, proposals: 0, negotiations: 0, closedWon: 0, insights: 'Good awareness, lower conversion' }
        ],
        'Events': [
          { id: 1, name: 'Web Summit 2024', leads: 28, qualified: 12, meetings: 6, proposals: 3, negotiations: 2, closedWon: 1, insights: 'Largest audience. Strong networking.' },
          { id: 2, name: 'CEO Roundtable - Miami', leads: 12, qualified: 4, meetings: 2, proposals: 1, negotiations: 0, closedWon: 0, insights: 'Intimate setting, right audience' },
          { id: 3, name: 'Startup Pitch Night', leads: 7, qualified: 2, meetings: 1, proposals: 0, negotiations: 0, closedWon: 0, insights: 'Younger founders, lower fit' }
        ],
        'Networkers': [
          { id: 1, name: 'Sarah Chen (Tech Investor)', leads: 8, qualified: 5, meetings: 3, proposals: 2, negotiations: 1, closedWon: 1, insights: 'Highest ROI networker' },
          { id: 2, name: 'Marcus Rodriguez (Agency Head)', leads: 6, qualified: 3, meetings: 2, proposals: 1, negotiations: 1, closedWon: 0, insights: 'Quality referrals' },
          { id: 3, name: 'Jessica Walsh (Founder Coach)', leads: 7, qualified: 2, meetings: 1, proposals: 0, negotiations: 0, closedWon: 0, insights: 'Building relationship' }
        ]
      }
    };
    setData(sampleData);
  }, []);

  if (!data) return <div className="w-full h-screen bg-white flex items-center justify-center"><p className="text-gray-500">Loading...</p></div>;

  const handleChannelTap = (channelName) => {
    setSelectedChannel(channelName);
    setView('channel');
  };

  const pipelineStages = ['leads', 'qualified', 'meetings', 'proposals', 'negotiations', 'closedWon'];
  const stageColors = {
    leads: '#3B82F6',
    qualified: '#8B5CF6',
    meetings: '#EC4899',
    proposals: '#F59E0B',
    negotiations: '#10B981',
    closedWon: '#06B6D4'
  };

  return (
    <div className="w-full min-h-screen bg-white font-sans text-gray-900">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b-2 border-gray-200 px-5 py-6 z-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">CEO Access</h1>
          <h2 className="text-sm font-semibold text-gray-500 mt-1">Marketing Tracker</h2>
          <p className="text-lg font-semibold text-gray-600 mt-2">{month}</p>
        </div>
      </div>

      {/* OVERVIEW VIEW */}
      {view === 'overview' && (
        <div className="pb-8">
          <div className="px-4 py-6 space-y-4">
            {Object.entries(data.overview).map(([channelName, channelData]) => {
              const Icon = channelData.icon;
              const isActive = channelData.status === 'active';
              const totals = channelData.totals;

              return (
                <button
                  key={channelName}
                  onClick={() => isActive && handleChannelTap(channelName)}
                  disabled={!isActive}
                  className={`w-full p-5 rounded-xl text-left transition ${
                    isActive 
                      ? `bg-gradient-to-br ${channelData.color} text-white shadow-lg` 
                      : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Icon size={28} />
                      <h2 className="text-xl font-bold">{channelName}</h2>
                    </div>
                    {isActive && <ChevronRight size={24} />}
                  </div>

                  {isActive ? (
                    <div className="space-y-3">
                      {/* Efforts */}
                      <div className="flex justify-between items-end">
                        <span className="text-sm font-medium opacity-90">
                          {channelName === 'Podcasts' ? 'Podcasts' : 
                           channelName === 'Events' ? 'Events' :
                           channelName === 'Networkers' ? 'Connected' : 'Posts'}
                        </span>
                        <span className="text-3xl font-bold">{totals.efforts}</span>
                      </div>

                      {/* Pipeline Funnel - Minimal Visual */}
                      <div className="pt-2 border-t border-white border-opacity-30">
                        <div className="flex justify-between gap-1">
                          {pipelineStages.map((stage, idx) => {
                            const value = totals[stage];
                            const maxWidth = Math.max(...pipelineStages.map(s => totals[s])) || 1;
                            const width = (value / maxWidth) * 100;

                            return (
                              <div key={stage} className="flex-1 flex flex-col items-center">
                                <div className="text-xs font-semibold uppercase opacity-75 mb-1 text-center leading-tight">
                                  {stage === 'closedWon' ? 'Won' : 
                                   stage === 'qualified' ? 'Qual' :
                                   stage === 'proposals' ? 'Prop' :
                                   stage === 'negotiations' ? 'Neg' :
                                   stage === 'meetings' ? 'Mtg' : 'Leads'}
                                </div>
                                <div className="w-full bg-white bg-opacity-20 rounded h-8 flex items-center justify-center">
                                  <span className="text-lg font-bold">{value}</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Closed Outcomes */}
                      <div className="pt-2 border-t border-white border-opacity-30 grid grid-cols-3 gap-2 text-sm">
                        <div className="text-center">
                          <div className="text-xs opacity-75">✓ Won</div>
                          <div className="text-xl font-bold">{totals.closedWon}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs opacity-75">✗ Loss</div>
                          <div className="text-xl font-bold">{totals.closedLoss}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs opacity-75">→ Follow</div>
                          <div className="text-xl font-bold">{totals.closedFollowup}</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm font-medium opacity-75">Not active this month</p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* CHANNEL DEEP-DIVE VIEW */}
      {view === 'channel' && selectedChannel && (
        <div className="pb-8">
          {/* Back Button */}
          <div className="px-4 pt-4 pb-2">
            <button
              onClick={() => setView('overview')}
              className="text-lg font-semibold text-gray-700 flex items-center gap-2 mb-4"
            >
              ← Back
            </button>
            <h2 className="text-2xl font-bold mb-1">{selectedChannel}</h2>
            <p className="text-sm text-gray-600">Detailed view • Each effort breakdown</p>
          </div>

          {/* Channel Total */}
          <div className={`mx-4 mb-6 p-5 rounded-xl bg-gradient-to-br ${data.overview[selectedChannel].color} text-white`}>
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center">
                <div className="text-xs opacity-90 font-semibold">Total</div>
                <div className="text-3xl font-bold">{data.overview[selectedChannel].totals.leads}</div>
                <div className="text-xs opacity-90">Leads</div>
              </div>
              <div className="text-center">
                <div className="text-xs opacity-90 font-semibold">Qualified</div>
                <div className="text-3xl font-bold">{data.overview[selectedChannel].totals.qualified}</div>
                <div className="text-xs opacity-90">({Math.round((data.overview[selectedChannel].totals.qualified / data.overview[selectedChannel].totals.leads) * 100)}%)</div>
              </div>
              <div className="text-center">
                <div className="text-xs opacity-90 font-semibold">Closed Won</div>
                <div className="text-3xl font-bold">{data.overview[selectedChannel].totals.closedWon}</div>
                <div className="text-xs opacity-90">Deals</div>
              </div>
            </div>
          </div>

          {/* Individual Efforts */}
          <div className="px-4 space-y-3">
            {data.details[selectedChannel]?.map((effort) => (
              <div key={effort.id} className="p-4 border-2 border-gray-200 rounded-lg">
                <h3 className="text-lg font-bold mb-3">{effort.name}</h3>

                {/* Mini Pipeline */}
                <div className="mb-4 space-y-2">
                  <div className="flex gap-2 text-sm font-semibold uppercase">
                    {[
                      { key: 'leads', label: 'Leads', color: 'bg-blue-500' },
                      { key: 'qualified', label: 'Qual', color: 'bg-purple-500' },
                      { key: 'meetings', label: 'Mtg', color: 'bg-pink-500' },
                      { key: 'proposals', label: 'Prop', color: 'bg-amber-500' },
                      { key: 'negotiations', label: 'Neg', color: 'bg-green-500' },
                      { key: 'closedWon', label: 'Won', color: 'bg-cyan-500' }
                    ].map((stage) => (
                      <div key={stage.key} className="flex-1">
                        <div className={`${stage.color} rounded h-12 flex items-center justify-center text-white font-bold text-lg`}>
                          {effort[stage.key]}
                        </div>
                        <div className="text-xs text-center mt-1 text-gray-700 font-medium">{stage.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Insights */}
                {effort.insights && (
                  <div className="bg-gray-50 p-3 rounded border-l-4 border-gray-400">
                    <div className="text-xs font-bold text-gray-700 uppercase mb-1">Key Learning</div>
                    <p className="text-sm text-gray-800">{effort.insights}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
