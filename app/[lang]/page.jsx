import { getDictionary } from '@lib/dictionary';
export default async function Home({ params: { lang } }) {
  const { homepage } = await getDictionary(lang);
  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-3xl font-bold">{homepage.title}</h1>
      </div>
    </section>
  );
}
