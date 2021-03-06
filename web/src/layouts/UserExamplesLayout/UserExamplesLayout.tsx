import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type UserExampleLayoutProps = {
  children: React.ReactNode
}

const UserExamplesLayout = ({ children }: UserExampleLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">

        <Link
          to={routes.newUserExample()}
          className="rw-button rw-button-indigo"
        >
          <div className="rw-button-icon">+</div> New UserExample
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default UserExamplesLayout
