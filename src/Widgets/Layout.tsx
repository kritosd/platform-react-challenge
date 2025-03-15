import ErrorBoundary from 'Components/ErrorBoundary';
import * as React from 'react'
import AppBar from 'Widgets/AppBar';
import Dialog from "Widgets/Dialog";

interface Props {
  children: React.ReactNode
}
const Layout: React.FC<Props> = (props) => {
  return (
    <ErrorBoundary>
      <AppBar />
      {props.children}
      <Dialog />
    </ErrorBoundary>
  )
}
export default Layout
