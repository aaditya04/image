import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import { Toaster } from '@/components/ui/toaster'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      
      <MobileNav />

      <div className="root-container" style={{backgroundColor:"#FFF3CF"}}>
      <Sidebar />
        <div className="wrapper" style={{marginTop:"3%",padding:"3%",backgroundColor:"#EEEEEE", borderRadius:"10%",boxShadow: "10px 20px 40px rgba(0, 0, 0, 0.1)"}}>
          {children}
        </div>
      </div>
      
      <Toaster />
    </main>
  )
}

export default Layout