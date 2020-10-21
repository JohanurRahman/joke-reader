import { Jokes } from './i-jokes';

const Categories = ['Miscellaneous', 'Pun', 'Programming', 'Dark'];
const Types = ['Single', 'Two Part'];
const Flags = [
  { title: 'NSFW', selected: false },
  { title: 'Religious', selected: true },
  { title: 'Political', selected: false },
  { title: 'Racist', selected: false },
];

const Jokes: Jokes[] = [
  {
    id: 1,
    joke: {
      content: 'I went to buy some camo pants but couldn’t find any',
      category: 'Test 1'
    },
    flags: ['http']
  },
  {
    id: 2,
    joke: {
      content: 'My wife told me to stop impersonating a flamingo. I had to put my foot down',
      category: 'Test 2'
    },
    flags: ['http']
  },
  {
    id: 3,
    joke: {
      content: 'Why does Waldo wear stripes?',
      category: 'Pro',
      punchline: 'Because he doesnt want to be spotted'
    },
    flags: ['http']
  }
];

export { Categories, Types, Flags, Jokes };
