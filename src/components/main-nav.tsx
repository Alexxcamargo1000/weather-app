import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom'





export function MainNavigation() {
  const location = useLocation();

  const navLinks = [
    {
      title: 'Hoje',
      href: '/',
      active: location.pathname === '/'
    },
    {
      title: 'Semana',
      href: '/week',
      active: location.pathname === '/week'
    }
  ]

  return (
    <div>
      <nav className='space-x-4'>
        {navLinks.map((link) => (
          <Link key={link.href} to={link.href} className={cn("text-lg text-muted-foreground pb-2", link.active && 'text-current border-b border-primary  font-bold')}>
            {link.title}
          </Link>
        ))}
      </nav>
    </div>
  )
}