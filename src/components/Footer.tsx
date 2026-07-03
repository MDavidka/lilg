import { Link } from 'react-router-dom'
import { Smartphone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-900 dark:bg-gray-100">
                <Smartphone className="h-3.5 w-3.5 text-white dark:text-gray-900" />
              </div>
              <span className="text-base font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                MUTE
              </span>
            </Link>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
              Minimalist phones. Maximum value. Trade in your old device and upgrade responsibly.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100">
              Shop
            </h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">All Phones</Link></li>
              <li><Link to="/shop?category=flagship" className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">Flagship</Link></li>
              <li><Link to="/shop?category=midrange" className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">Mid-Range</Link></li>
              <li><Link to="/shop?category=budget" className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">Budget</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100">
              Support
            </h4>
            <ul className="space-y-2">
              <li><Link to="/buyback" className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">Trade-In / Buyback</Link></li>
              <li><span className="text-sm text-gray-400 dark:text-gray-500">Shipping</span></li>
              <li><span className="text-sm text-gray-400 dark:text-gray-500">Returns</span></li>
              <li><span className="text-sm text-gray-400 dark:text-gray-500">Warranty</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100">
              Contact
            </h4>
            <ul className="space-y-2">
              <li><span className="text-sm text-gray-500 dark:text-gray-400">hello@mute.store</span></li>
              <li><span className="text-sm text-gray-500 dark:text-gray-400">1-800-MUTE</span></li>
              <li className="pt-2">
                <span className="text-xs text-gray-400 dark:text-gray-500">
                  &copy; {new Date().getFullYear()} MUTE. All rights reserved.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}