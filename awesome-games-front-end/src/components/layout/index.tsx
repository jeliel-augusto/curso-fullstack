import { PropsWithChildren } from "react";
import { Header } from "../header/Header";
import { Sidebar } from "../sidebar/Sidebar";
import { Content } from "./content";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <Content>
        <Sidebar />
        <div className="p-[16px] flex-1 flex-col">{children}</div>
      </Content>
    </>
  );
};
