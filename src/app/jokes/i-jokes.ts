export interface Joke {
  id: number;
  content: string;
  category: string;
  punchline?: string;
  type: string;
  flags: { title: string; selected: boolean }[];
}
