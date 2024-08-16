import Navigation from './navigation/navigation.component'
import Footer from './footer/footer.component'
 
export default function Layout({ children }: any) {
  return (
    <>
      <Navigation />
        <main>{children}</main>
      <Footer />
    </>
  )
}