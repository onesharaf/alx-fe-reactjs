import { useQuery } from "react-query";

function PostsComponent() {
  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const {
    data,
    isLoading,
    isError,
    error,
    refetch
  } = useQuery(
    "posts",
    fetchPosts,
    {
      cacheTime: 1000 * 60 * 5,          // cache for 5 minutes
      staleTime: 1000 * 60 * 1,          // fresh for 1 minute
      refetchOnWindowFocus: false,       // don't refetch on tab switch
      keepPreviousData: true             // keep old data during refetch
    }
  );

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>

      <button onClick={() => refetch()}>
        Refetch Posts
      </button>

      {data.slice(0, 10).map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsComponent;
