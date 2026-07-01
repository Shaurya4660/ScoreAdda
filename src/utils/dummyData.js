export const dummyMatches = [
  {
    id: 1,
    status: 'LIVE',
    format: 'T20',
    venue: 'Wankhede Stadium, Mumbai',
    date: 'Today',
    team1: { name: 'Mumbai Indians', shortName: 'MI', logo: 'https://placehold.co/100x100/004BA0/FFF?text=MI', score: '185/4', overs: '18.2' },
    team2: { name: 'Chennai Super Kings', shortName: 'CSK', logo: 'https://placehold.co/100x100/F9CD05/000?text=CSK', score: '0/0', overs: '0.0' },
    note: 'MI chose to bat',
    runRate: '10.15',
    projectedScore: '215',
    winProbability: { t1: 65, t2: 35 }
  },
  {
    id: 2,
    status: 'UPCOMING',
    format: 'T20',
    venue: 'Eden Gardens, Kolkata',
    date: 'Tomorrow, 7:30 PM',
    team1: { name: 'Kolkata Knight Riders', shortName: 'KKR', logo: 'https://placehold.co/100x100/3A225D/FFF?text=KKR', score: '', overs: '' },
    team2: { name: 'Royal Challengers Bengaluru', shortName: 'RCB', logo: 'https://placehold.co/100x100/EC1C24/FFF?text=RCB', score: '', overs: '' },
    note: 'Match starts tomorrow'
  },
  {
    id: 3,
    status: 'COMPLETED',
    format: 'T20',
    venue: 'Narendra Modi Stadium',
    date: 'Yesterday',
    team1: { name: 'Gujarat Titans', shortName: 'GT', logo: 'https://placehold.co/100x100/1B2133/FFF?text=GT', score: '204/3', overs: '20.0' },
    team2: { name: 'Rajasthan Royals', shortName: 'RR', logo: 'https://placehold.co/100x100/EA1A85/FFF?text=RR', score: '198/7', overs: '20.0' },
    note: 'GT won by 6 runs'
  }
];

export const dummyNews = [
  { id: 1, title: 'Rohit Sharma hits 100th T20I six, sets new record at Wankhede', category: 'Milestone', time: '2 hours ago', readTime: '3 min', image: 'https://placehold.co/600x400/0B1220/00E676?text=Milestone' },
  { id: 2, title: 'Injury Update: Star fast bowler ruled out of the IPL season', category: 'Injuries', time: '4 hours ago', readTime: '2 min', image: 'https://placehold.co/600x400/0B1220/FF3366?text=Injury' },
  { id: 3, title: 'Tactical Analysis: How CSK spin web choked the opposition', category: 'Analysis', time: '6 hours ago', readTime: '5 min', image: 'https://placehold.co/600x400/0B1220/00B0FF?text=Analysis' },
  { id: 4, title: 'Fantasy Guide: Top captain picks for KKR vs RCB clash', category: 'Fantasy', time: '10 hours ago', readTime: '4 min', image: 'https://placehold.co/600x400/0B1220/FF6B00?text=Fantasy' }
];

export const pointsTableData = [
  { pos: 1, team: 'CSK', name: 'Chennai Super Kings', logo: 'https://placehold.co/100x100/F9CD05/000?text=CSK', p: 10, w: 8, l: 2, nr: 0, pts: 16, nrr: 1.240, form: ['W', 'W', 'L', 'W', 'W'], prob: 98 },
  { pos: 2, team: 'RR', name: 'Rajasthan Royals', logo: 'https://placehold.co/100x100/EA1A85/FFF?text=RR', p: 10, w: 7, l: 3, nr: 0, pts: 14, nrr: 0.890, form: ['W', 'L', 'W', 'W', 'L'], prob: 85 },
  { pos: 3, team: 'MI', name: 'Mumbai Indians', logo: 'https://placehold.co/100x100/004BA0/FFF?text=MI', p: 10, w: 6, l: 4, nr: 0, pts: 12, nrr: 0.450, form: ['L', 'W', 'W', 'L', 'W'], prob: 65 },
  { pos: 4, team: 'GT', name: 'Gujarat Titans', logo: 'https://placehold.co/100x100/1B2133/FFF?text=GT', p: 10, w: 6, l: 4, nr: 0, pts: 12, nrr: -0.120, form: ['W', 'L', 'L', 'W', 'W'], prob: 55 },
  { pos: 5, team: 'LSG', name: 'Lucknow Super Giants', logo: 'https://placehold.co/100x100/00008B/FFF?text=LSG', p: 10, w: 5, l: 5, nr: 0, pts: 10, nrr: 0.050, form: ['L', 'L', 'W', 'L', 'W'], prob: 30 },
  { pos: 6, team: 'KKR', name: 'Kolkata Knight Riders', logo: 'https://placehold.co/100x100/3A225D/FFF?text=KKR', p: 10, w: 4, l: 6, nr: 0, pts: 8, nrr: -0.340, form: ['W', 'L', 'L', 'L', 'W'], prob: 15 },
  { pos: 7, team: 'RCB', name: 'Royal Challengers Bengaluru', logo: 'https://placehold.co/100x100/EC1C24/FFF?text=RCB', p: 10, w: 4, l: 6, nr: 0, pts: 8, nrr: -0.560, form: ['L', 'W', 'L', 'W', 'L'], prob: 12 },
  { pos: 8, team: 'DC', name: 'Delhi Capitals', logo: 'https://placehold.co/100x100/00008B/FFF?text=DC', p: 10, w: 3, l: 7, nr: 0, pts: 6, nrr: -0.890, form: ['L', 'L', 'L', 'W', 'L'], prob: 2 },
  { pos: 9, team: 'PBKS', name: 'Punjab Kings', logo: 'https://placehold.co/100x100/ED1B24/FFF?text=PBKS', p: 10, w: 3, l: 7, nr: 0, pts: 6, nrr: -1.020, form: ['W', 'L', 'L', 'L', 'L'], prob: 1 },
  { pos: 10, team: 'SRH', name: 'Sunrisers Hyderabad', logo: 'https://placehold.co/100x100/F26522/FFF?text=SRH', p: 10, w: 2, l: 8, nr: 0, pts: 4, nrr: -1.250, form: ['L', 'L', 'L', 'L', 'W'], prob: 0 },
];

export const trendingPlayers = [
  { name: 'Rohit Sharma', stat: '105* (62)', team: 'MI', img: 'https://placehold.co/100x100/004BA0/FFF?text=RS' },
  { name: 'Virat Kohli', stat: 'Orange Cap - 542', team: 'RCB', img: 'https://placehold.co/100x100/EC1C24/FFF?text=VK' },
  { name: 'Jasprit Bumrah', stat: 'Purple Cap - 18', team: 'MI', img: 'https://placehold.co/100x100/004BA0/FFF?text=JB' },
  { name: 'MS Dhoni', stat: 'SR 245.5', team: 'CSK', img: 'https://placehold.co/100x100/F9CD05/000?text=MSD' },
];
