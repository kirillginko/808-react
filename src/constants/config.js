const sequenceList = [
  {
    id: 0,
    title: "Init",
    noteCount: 32,
    BPM: 120,
    trackList: [
      {
        title: "Kick",
        soundFile: "kick",
        onNotes: [0, 4, 8, 12, 16, 20, 24, 28],
      },
      {
        title: "Snare",
        soundFile: "snare",
        onNotes: [],
      },
      {
        title: "Clap",
        soundFile: "clap",
        onNotes: [],
      },
      {
        title: "Open Hat",
        soundFile: "hh_open",
        onNotes: [],
      },
      {
        title: "Closed Hat",
        soundFile: "hh_closed",
        onNotes: [],
      },
      {
        title: "HiTom",
        soundFile: "hitom",
        onNotes: [],
      },
      {
        title: "MidTom",
        soundFile: "midtom",
        onNotes: [],
      },
      {
        title: "LowTom",
        soundFile: "lowtom",
        onNotes: [],
      },
      {
        title: "CowBell",
        soundFile: "cowbell",
        onNotes: [],
      },
      {
        title: "Clav",
        soundFile: "clav",
        onNotes: [],
      },
      {
        title: "Rim",
        soundFile: "rim",
        onNotes: [],
      },
    ],
  },
  {
    id: 1,
    title: "Sexual Healing",
    noteCount: 32,
    BPM: 94,
    trackList: [
      {
        title: "Kick",
        soundFile: "kick",
        onNotes: [0, 7, 8, 9, 10, 12, 15, 16, 24, 31],
      },
      {
        title: "Snare",
        soundFile: "snare",
        onNotes: [10, 11, 22, 23, 25, 27, 29],
      },
      {
        title: "Clap",
        soundFile: "clap",
        onNotes: [4, 20],
      },
      {
        title: "Open Hat",
        soundFile: "hh_open",
        onNotes: [6, 18, 22, 26, 29],
      },
      {
        title: "Closed Hat",
        soundFile: "hh_closed",
        onNotes: [
          0, 2, 3, 4, 6, 8, 10, 12, 14, 15, 16, 18, 20, 22, 24, 25, 26, 28, 30,
          31,
        ],
      },
      {
        title: "HiTom",
        soundFile: "hitom",
        onNotes: [2, 18],
      },
      {
        title: "MidTom",
        soundFile: "midtom",
        onNotes: [22],
      },
      {
        title: "LowTom",
        soundFile: "lowtom",
        onNotes: [28, 30],
      },
      {
        title: "CowBell",
        soundFile: "cowbell",
        onNotes: [],
      },
      {
        title: "Clav",
        soundFile: "clav",
        onNotes: [0, 4, 6, 16, 19, 22, 26, 29],
      },
      {
        title: "Rim",
        soundFile: "rim",
        onNotes: [],
      },
    ],
  },
  // {
  //   id: 1,
  //   title: "Driving thump",
  //   noteCount: 16,
  //   trackList: [
  //     {
  //       title: "Kick",
  //       soundFile: "kick",
  //       onNotes: [0, 2, 4, 6, 8, 10, 12, 14],
  //     },
  //     {
  //       title: "Snare",
  //       soundFile: "snare",
  //       onNotes: [],
  //     },
  //     {
  //       title: "Open Hat",
  //       soundFile: "hh_open",
  //       onNotes: [],
  //     },
  //     {
  //       title: "Closed Hat",
  //       soundFile: "hh_closed",
  //       onNotes: [],
  //     },
  //   ],
  // },
  // {
  //   id: 2,
  //   title: "Smooth Backbeat",
  //   noteCount: 16,
  //   trackList: [
  //     {
  //       title: "Kick",
  //       soundFile: "kick",
  //       onNotes: [0, 2, 8, 10, 14],
  //     },
  //     {
  //       title: "Snare",
  //       soundFile: "snare",
  //       onNotes: [4, 12],
  //     },
  //     {
  //       title: "Open Hat",
  //       soundFile: "hh_open",
  //       onNotes: [],
  //     },
  //     {
  //       title: "Closed Hat",
  //       soundFile: "hh_closed",
  //       onNotes: [],
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   title: "Boom Chuck",
  //   noteCount: 16,
  //   trackList: [
  //     {
  //       title: "Kick",
  //       soundFile: "kick",
  //       onNotes: [0, 4, 8, 12],
  //     },
  //     {
  //       title: "Snare",
  //       soundFile: "snare",
  //       onNotes: [2, 6, 10, 14],
  //     },
  //     {
  //       title: "Open Hat",
  //       soundFile: "hh_open",
  //       onNotes: [],
  //     },
  //     {
  //       title: "Closed Hat",
  //       soundFile: "hh_closed",
  //       onNotes: [],
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   title: "Transporter",
  //   noteCount: 16,
  //   trackList: [
  //     {
  //       title: "Kick",
  //       soundFile: "kick",
  //       onNotes: [0, 4, 6, 7, 9, 12],
  //     },
  //     {
  //       title: "Snare",
  //       soundFile: "snare",
  //       onNotes: [],
  //     },
  //     {
  //       title: "Open Hat",
  //       soundFile: "hh_open",
  //       onNotes: [0, 5],
  //     },
  //     {
  //       title: "Closed Hat",
  //       soundFile: "hh_closed",
  //       onNotes: [0, 4, 8, 12],
  //     },
  //   ],
  // },
];

const soundFiles = {
  kick: "/sounds/kick.wav",
  snare: "/sounds/snare.wav",
  hh_open: "/sounds/hh_open.wav",
  hh_closed: "/sounds/hh_closed.wav",
  cowbell: "/sounds/808-CB1.wav",
  clav: "/sounds/808-CL1.wav",
  clap: "/sounds/808-CP1.wav",
  rim: "/sounds/808-RS1.wav",
  hitom: "/sounds/808-HT1.wav",
  midtom: "/sounds/808-MT1.wav",
  lowtom: "/sounds/808-LT1.wav",
};

export { sequenceList, soundFiles };
