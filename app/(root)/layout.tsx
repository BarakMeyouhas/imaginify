import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import { Toaster } from '@/components/ui/toaster'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='flex min-h-screen w-full bg-white'>
      <Sidebar />
      <MobileNav />

      <div className='mt-16 flex-1 overflow-auto py-8'>
        <div className='max-w-5xl mx-auto px-5 text-dark-400 p-16-regular'>
          {children}
        </div>
      </div>
      
      <Toaster />
    </main>
  )
}

export default Layout