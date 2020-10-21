export interface Joke {
  id?: number;
  joke: {
    content: string;
    category: string;
    punchline?: string;
  };
  flags: { title: string; selected: boolean }[];
}
