import Nav from "./nav";

type TLayout = {
  children: React.ReactNode
  categories?: any
  seo?: any
}
const Layout = (props: TLayout) => {
  const {children, categories, seo} = props
  return(
    <>
    <Nav categories={categories} />
    {children}
  </>
  )

  };

export default Layout;
