import { UserInfo } from "./components/user-info";
import { api } from "./api";
import { DataSourceWithRender } from "./components/data-source-with-render";

const getDataFromServer = async (url:string) => {
     const response = await api.get(url);
     return response.data;

}

function App() {
  return (
    <>
      <DataSourceWithRender
        getData={() => getDataFromServer("/users/3")}
        render={(resource:any) =>    <UserInfo user={resource} />}
      />
    </>
  );
}

export default App;
