const sequenceList = [
  {
    id: 0,
    title: "Init",
    noteCount: 16,
    trackList: [
      {
        title: "Kick",
        soundFile: "kick",
        onNotes: [0, 4, 8, 12],
      },
      {
        title: "Bass",
        soundFile: "bass",
        onNotes: [],
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
        title: "CowBell",
        soundFile: "cowbell",
        onNotes: [],
      },
      {
        title: "Clav",
        soundFile: "clav",
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
  bass: "/sounds/808 (Powder).wav",
  snare: "/sounds/snare.wav",
  hh_open: "/sounds/hh_open.wav",
  hh_closed: "/sounds/hh_closed.wav",
  cowbell: "/sounds/808-CB1.wav",
  clav: "/sounds/808-CL1.wav",
  clap: "/sounds/808-CP1.wav",
};

export { sequenceList, soundFiles };
