import { useState } from "react";
import { searchUsers, fetchUserData } from "../services/githubService";


const Search = () => {
  const [username, setUsername] = useState('');
  /* const [userData, setUserData] = useState(null); */
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [location, setLocation] = useState('');
  const [minimumRepositories, setMinimumRepositories] = useState('')
  const[users, setUsers] = useState([]);
  const[page, setPage] = useState(1);
  const[hasMore, setHasMore] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username.trim()) return;

    setLoading(true);
    setError(false);
    setUsers([]);
    setPage(1);
    /* setUserData(null); */
    
    try {
       const results = await searchUsers(username, location, minimumRepositories, 1);
       /* setUserData(data); */

       const detailedUsers = await Promise.all(
        results.items.map(async (user) => {
          const details = await fetchUserData(user.login);
          return details;
        })
      );

      setUsers(detailedUsers);
      setHasMore(results.items.length > 0);

    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);

     try {
      const results = await searchUsers(
        username,
        location,
        minimumRepositories,
        nextPage
      );

      const detailedUsers = await Promise.all(
        results.items.map(async (user) => {
          const details = await fetchUserData(user.login);
          return details;
        })
      );

       setUsers((prev) => [...prev, ...detailedUsers]);
      setPage(nextPage);
      setHasMore(results.items.length > 0);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='max-w-xl mx-auto p-4'>
      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-4"
        >
        <h2 className="text-xl font-semibold text-gray-800">
        GitHub Advanced User Search
        </h2>

        {/* Username */}

            <input

            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="mt-1 w-full rounded-md border  p-2"
            />
          

          {/* Location */}

            <input

            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            className="mt-1 w-full rounded-md border p-2"
            />
          

          {/* MinimumRepositories */}

            <input
 
            type="text"
            value={minimumRepositories}
            onChange={(e) => setMinimumRepositories(e.target.value)}
            placeholder="e.g. 10"
            className="mt-1 w-full rounded-md border p-2"
            />
          
          
            <button type='submit'
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
            Search
            </button>
      </form>

      {/* Conditional Rendering */}
      {loading && (
        <p className="mt-4 text-center text-gray-600">Loading...</p>
      )}

      {error && (
        <p className="mt-4 text-center text-red-500">
          Looks like we can’t find the user
        </p>
      )}

     {/* Results List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">

      {users.map((user) => (
        <div
        key={user.id} 
        className="mt-6 bg-white shadow-md rounded-lg p-4 text-center">

          <img
            src={userData.avatar_url}
            alt={user.login}
            className="w-24 h-24 mx-auto rounded-full"
          />
          <h3 className="mt-2 text-lg font-semibold">
            {user.login}
          </h3>
          <p className="text-sm text-gray-600">
            Location: {user.location || "N/A"}
          </p>
          <p className="text-sm text-gray-600">
              Repositories: {user.public_repos}
            </p>

          <a
            href={userData.html_url}
            target='_blank'
            rel='noopener noreferrer'
            className="text-blue-600 hover:underline"
          >
              View Profile
          </a>
        </div>
      ))}
    </div>
    {/* Load More */}
      {hasMore && users.length > 0 && !loading && (
        <button
          onClick={loadMore}
          className="mt-6 w-full bg-gray-200 py-2 rounded-md hover:bg-gray-300"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Search;

  
