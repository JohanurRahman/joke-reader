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
    joke: {
      content: 'I went to buy some camo pants but couldn’t find any',
      category: 'Programming'
    },
    flags: [
      {title: 'NSFW', selected: true},
      {title: 'Religious', selected: false},
      {title: 'Political', selected: false},
      {title: 'Racist', selected: true}
    ]
  },
  {
    id: 2,
    joke: {
      content: 'My wife told me to stop impersonating a flamingo. I had to put my foot down',
      category: 'Pun'
    },
    flags: [
      {title: 'NSFW', selected: false},
      {title: 'Religious', selected: false},
      {title: 'Political', selected: true},
      {title: 'Racist', selected: false}
    ]
  },
  {
    id: 3,
    joke: {
      content: 'Why does Waldo wear stripes?',
      category: 'Miscellaneous',
      punchline: 'Because he doesnt want to be spotted'
    },
    flags: [
      {title: 'NSFW', selected: false},
      {title: 'Religious', selected: true},
      {title: 'Political', selected: false},
      {title: 'Racist', selected: false}
    ]
  }
];

export { Categories, Types, Flags, Jokes };
