import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { IndexPage } from '../pages/IndexPage/IndexPage';
import { UserPage } from '../pages/UserPage/UserPage';
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
          path: "/user",
          element: <UserPage />
        },
        {
          path: "/learn-page",
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
