export interface Jokes {
  joke: {
    content: string;
    category: string;
    punchline?: string;
  };
  flags: Array<string>;
}
