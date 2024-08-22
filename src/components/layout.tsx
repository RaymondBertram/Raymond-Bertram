import Navigation from './navigation/navigation.component'
import Footer from './footer/footer.component'
import Contact from '@/sections/contact/contact'
 
export default function Layout({ children }: any) {
  return (
    <>
      <Navigation />
        <main>{children}</main>
        <section className='flex flex-col py-10 px-5 bg-[#E2E2E2]'>
          <Contact/>
        </section>
      <Footer />
    </>
  )
}