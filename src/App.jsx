import Homepage from "./pages/home";
import { QueryClient, QueryClientProvider } from "react-query";


function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Homepage />
      </QueryClientProvider>
    </>
  );
}

export default App;