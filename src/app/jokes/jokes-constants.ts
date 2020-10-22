import { Joke } from './i-jokes';

const Categories = ['Miscellaneous', 'Pun', 'Programming', 'Dark'];
const Types = ['Single', 'Two Part'];
const Flags = [
  { title: 'NSFW', selected: false },
  { title: 'Religious', selected: false },
  { title: 'Political', selected: false },
  { title: 'Racist', selected: false },
];

const Jokes: Joke[] = [
  {
    id: 1,
    content: ' I failed math so many times at school, I can’t even count.',
    category: 'Pun',
    type: 'Single',
    flags: [
      {title: 'NSFW', selected: true},
      {title: 'Religious', selected: false},
      {title: 'Political', selected: false},
      {title: 'Racist', selected: true}
    ]
  },
  {
    id: 2,
    content: 'I was wondering why the frisbee kept getting bigger and bigger, but then it hit me',
    category: 'Pun',
    type: 'Single',
    flags: [
      {title: 'NSFW', selected: false},
      {title: 'Religious', selected: false},
      {title: 'Political', selected: true},
      {title: 'Racist', selected: false}
    ]
  },
  {
    id: 3,
    content: 'Why did David Hasselhoff change his name to “The Hoff?”',
    category: 'Miscellaneous',
    punchline: 'It’s less hassle',
    type: 'Two Part',
    flags: [
      {title: 'NSFW', selected: false},
      {title: 'Religious', selected: true},
      {title: 'Political', selected: false},
      {title: 'Racist', selected: false}
    ]
  },
  {
    id: 4,
    content: 'Why does Waldo wear stripes?',
    category: 'Miscellaneous',
    punchline: 'Because he doesn’t want to be spotted',
    type: 'Two Part',
    flags: [
      {title: 'NSFW', selected: false},
      {title: 'Religious', selected: true},
      {title: 'Political', selected: false},
      {title: 'Racist', selected: false}
    ]
  }
];

export { Categories, Types, Flags, Jokes };
