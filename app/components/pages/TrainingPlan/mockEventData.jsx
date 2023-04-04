import icons from './icons'

const mockedEventData = [
  {
    id: '1',
    title: 'Training',
    type: 'training',
    start: new Date('2023-04-07T10:00:00Z'),
    location: 'P1',
    locationIcon: icons.locationDot,
    participantsCount: '13+2',
    participantsIcon: icons.user,
    attachments: [],
    upload: icons.upload,
    clock: icons.clock,
    exercises: [
      {
        name: 'Aktivierung',
        description: 'Aktivierung, Qualität, -viele Ballkontakte',
        participantsCount: 12,
        files: [icons.image],
        duration: '30'
      },
      {
        name: '5vs5 +2 (+TW Rondo',
        description:
          "SmB, Herrausspielen von Torchancen, über das Zentrum Durchgänge: 4x2, 1' Pause",
        participantsCount: 5,
        files: [icons.image, icons.circlePlay, icons.video],
        duration: '30'
      },
      {
        name: 'Battle Passen Spielafubau',
        description: 'SmB, Spielaufbau, gegen Mittelfeldpressing Neutralem',
        participantsCount: 5,
        files: [icons.image, icons.fileLines],
        duration: '30'
      },
      {
        name: 'Rondo Spielaufbau',
        description: 'SmB, Spielaufbau, gegen Angriffspressing, 7v7+1 - 10',
        participantsCount: 5,
        files: [icons.image],
        duration: '30'
      }
    ]
  },
  {
    id: '2',
    title: 'Test',
    type: 'training',
    start: new Date('2023-04-07T12:00:00Z'),
    location: 'P1',
    participantsCount: '13',
    locationIcon: icons.locationDot,
    participantsIcon: icons.user,
    attachments: [],
    upload: icons.upload,
    clock: icons.clock,
    exercises: [
      {
        name: 'Aktivierung',
        description: 'This is the description',
        participantsCount: 5,
        files: [icons.image, icons.fileLines],
        duration: '30'
      },
      {
        name: '5vs5 +2 (+TW Rondo',
        description:
          "SmB, Herrausspielen von Torchancen, über das Zentrum Durchgänge: 4x2, 1' Pause",
        participantsCount: 5,
        files: [],
        duration: '30'
      },
      {
        name: 'Battle Passen Spielafubau',
        description: 'SmB, Spielaufbau, gegen Mittelfeldpressing Neutralem',
        participantsCount: 5,
        files: [icons.image],
        duration: '30'
      }
    ]
  },
  {
    id: '3',
    title: 'Team',
    type: 'training',
    start: new Date('2023-04-05T14:00:00Z'),
    location: 'P4',
    participantsCount: '6',
    locationIcon: icons.locationDot,
    participantsIcon: icons.user,
    attachments: [],
    upload: icons.upload,
    clock: icons.clock,
    exercises: [
      {
        name: 'Lorem Ipsum',
        description: 'This is the description This is the description ',
        participantsCount: 3,
        duration: '30'
      },
      {
        name: 'Spielform',
        description: 'This is the description',
        participantsCount: 5,
        files: [icons.circlePlay, icons.video],
        duration: '30'
      }
    ]
  },
  {
    id: '4',
    title: 'Heimspiel',
    type: 'heimspiel',
    start: new Date('2023-04-05T16:00:00Z'),
    participantsCount: '12+2',
    participantsIcon: icons.user,
    attachments: [],
    upload: icons.upload,
    clock: icons.clock,
    exercises: [
      {
        name: '',
        description: 'RB Leipzig U16 3 : 2 CZ Jena U17',
        descriptionPosition: 'afterTitle',
        participantsCount: 5,
        files: [icons.image, icons.fileLines, icons.video]
      }
    ]
  },
  {
    id: '5',
    title: 'COVID-Testung',
    type: 'covid',
    start: new Date('2023-04-06T07:00:00Z'),
    participantsCount: '',
    participantsIcon: icons.user,
    attachments: [],
    upload: icons.upload,
    clock: icons.clock,
    exercises: [
      {
        name: '',
        description: 'Gäste Kabine 3',
        descriptionPosition: 'afterTitle'
      }
    ]
  },
  {
    id: '6',
    title: 'Yoga',
    type: 'training',
    start: new Date('2023-04-03T07:00:00Z'),
    participantsIcon: icons.user,
    location: 'P4',
    participantsCount: '11',
    locationIcon: icons.locationDot,
    attachments: [],
    upload: icons.upload,
    clock: icons.clock,
    exercises: [
      {
        name: 'Pilatis Yoga',
        description: 'Eine schöne Yoga Stunde für alle die mitmachen wollen',
        participantsCount: 11,
        files: [icons.circlePlay, icons.video],
        duration: '30'
      },
      {
        name: 'Spielform',
        description: 'SmB, Spielaufbau, gegen Mittelfeldpressing Neutralem',
        participantsCount: 8,
        files: [icons.image],
        duration: '60'
      }
    ]
  }
]

export default mockedEventData
