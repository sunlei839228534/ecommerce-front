import React, { FC, ReactNode } from "react"
import Navigation from "./Navigation"
import { PageHeader } from 'antd'

interface Props {
  children: ReactNode,
  title: string,
  subTitle: string,
}

const Layout: FC<Props> = ({ children, title, subTitle }) => {
  return (<div>
    <Navigation />
    <PageHeader className="jumbotron" title={title} subTitle={subTitle} />
    <div style={{ width: "85%", margin: "24px auto" }}>{children}</div>
  </div>)
}

export default Layout