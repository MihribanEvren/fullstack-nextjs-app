import StartupCard from '@/components/StartupCard';
import SearchForm from '@/components/SearchForm';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: 'Mihi' },
      _id: 1,
      description: 'This is a description of the startup',
      image:
        'https://images.unsplash.com/photo-1605493624455-a56d6d312f6f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Robots',
      title: 'Wall-e',
    },
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 2, name: 'Mihi' },
      _id: 2,
      description: 'This is a description of the startup',
      image:
        'https://images.unsplash.com/photo-1605493624455-a56d6d312f6f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Robots',
      title: 'Wall-e',
    },
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 3, name: 'Mihi' },
      _id: 3,
      description: 'This is a description of the startup',
      image:
        'https://images.unsplash.com/photo-1605493624455-a56d6d312f6f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Robots',
      title: 'Wall-e',
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : 'All startups'}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
