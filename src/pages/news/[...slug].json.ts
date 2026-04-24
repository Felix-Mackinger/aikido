import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { getCollection, type CollectionEntry } from 'astro:content';

type NewsEntryProps = {
  entry: CollectionEntry<'news'>;
};

export async function getStaticPaths() {
  const entries = await getCollection('news');

  return entries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry },
  }));
}

export async function GET({ props }: { props: NewsEntryProps }) {
  const { entry } = props;
  const { Content } = await entry.render();
  const container = await AstroContainer.create();
  const content = await container.renderToString(Content);

  return new Response(
    JSON.stringify({
      title: entry.data.title,
      date: entry.data.date,
      content,
      modalSize: entry.data.modalSize,
    }),
    {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    },
  );
}
