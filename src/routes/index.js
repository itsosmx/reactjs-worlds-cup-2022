import Main from "./main";
import Matches from "./matches";
import Standings from "./standings";

const routes = [
  {
    name: '',
    slug: "/",
    element: <Main />
  },
  {
    name: "Standings",
    slug: "/?tap=standings",
    element: <Standings />
  },
  {
    name: "Matches",
    slug: "/?tap=matches",
    element: <Matches />
  },
]

export default routes;