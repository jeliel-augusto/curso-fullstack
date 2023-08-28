import { PropsWithChildren, useState } from "react";
import { Header } from "../header/Header";
import { Sidebar } from "../sidebar/Sidebar";
import { Content } from "./content";
import { HeaderContext } from "../../context/HeaderContext";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const [headerTitle, setHeaderTitle] = useState("Games");
  return (
    <>
      <HeaderContext.Provider value={{ headerTitle, setHeaderTitle }}>
        <Header />
        <Content>
          <Sidebar />
          <div className="p-[16px] flex-1 flex-col">{children}</div>
        </Content>
      </HeaderContext.Provider>
    </>
  );
};
