import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { IndexPage } from '../pages/IndexPage/IndexPage';
import { LearnPage } from '../pages/LearnPage/LearnPage';
import { Layout } from "./Layout/Layout";
import { ContextProvider } from "../context/isMiniAppContext"
import { Navmenu } from "../components/Navmenu/Navmenu"
export const App = () => {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navmenu />,
      children: [
        {
          path: "/",
          element: <IndexPage />
        },
        {
          path: "/learn-page",
          element: <LearnPage />
        },
        {
          path: "/user",
          element: <LearnPage />
        },
      ]
    },
  ]);

  return (
    <ContextProvider>
      <Layout>
        <RouterProvider router={router}>
        </RouterProvider>
      </Layout>
    </ContextProvider>
  );

}

export default App;
