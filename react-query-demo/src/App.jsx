import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from "./components/PostsComponent";

const queryClient = new QueryClient();

function App() {
  const [show, setShow] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <button onClick={() => setShow(!show)}>
        Toggle Posts
      </button>

      {show && <PostsComponent />}
    </QueryClientProvider>
  );
}

export default App;
