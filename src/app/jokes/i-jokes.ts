export interface Jokes {
  id?: number;
  joke: {
    content: string;
    category: string;
    punchline?: string;
  };
  flags: Array<string>;
}
