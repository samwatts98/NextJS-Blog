type BlogData = {
  id: string;
  title: string;
  slug: string;
  date: string;
  content: string;
};

type HaikuData = {
  num_words: number[];
  haiku: string;
  img_word: string;
  img_url: string;
};

type ModuleData = HaikuData | BlogData;

type PageId = {
  params: {
    id: string;
  };
};
