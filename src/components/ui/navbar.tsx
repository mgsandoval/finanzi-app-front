'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className='w-full bg-gradient-to-r from-[#071727] via-[#151563] to-[#1c56ca] shadow-md relative z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Contenedor principal */}
        <div className='flex items-center justify-between h-16'>
          {/* Logo / Brand */}
          <button
            onClick={() => router.push('/')}
            className='text-white font-bold text-xl hover:opacity-80 transition cursor-pointer'
          >
            Finanzi
          </button>

          {/* Botones de navegación (desktop) */}
          <div className='hidden md:flex space-x-6'>
            <button
              onClick={() => router.push('/finances')}
              className='text-white hover:text-blue-200 transition cursor-pointer'
            >
              Mis finanzas
            </button>
            <button
              onClick={() => router.push('/inventory')}
              className='text-white hover:text-blue-200 transition cursor-pointer'
            >
              Inventario
            </button>
            <button
              onClick={() => router.push('/about')}
              className='text-white hover:text-blue-200 transition cursor-pointer'
            >
              Sobre nosotros
            </button>
          </div>

          {/* Botón de login (desktop) */}
          <div className='hidden md:block'>
            <button
              onClick={() => router.push('/login')}
              className='bg-white text-[#151563] font-medium px-4 py-2 rounded-lg hover:bg-blue-100 transition cursor-pointer'
            >
              Inicia sesión
            </button>
          </div>

          {/* Botón hamburguesa (móvil) */}
          <div className='md:hidden flex items-center'>
            <button
              onClick={toggleMenu}
              className='relative w-8 h-8 flex flex-col justify-center items-center group focus:outline-none'
            >
              {/* Línea superior */}
              <motion.span
                animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className='block w-6 h-0.5 bg-white mb-1'
              />
              {/* Línea inferior */}
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className='block w-6 h-0.5 bg-white'
              />
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil (overlay encima del contenido) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className='absolute top-16 left-0 w-full bg-[#071727] px-4 pt-4 pb-6 space-y-4 shadow-lg z-50'
          >
            <button
              onClick={() => router.push('/finances')}
              className='block w-full text-left text-white hover:text-blue-200 transition'
            >
              Mis finanzas
            </button>
            <button
              onClick={() => router.push('/inventory')}
              className='block w-full text-left text-white hover:text-blue-200 transition'
            >
              Inventario
            </button>
            <button
              onClick={() => router.push('/about')}
              className='block w-full text-left text-white hover:text-blue-200 transition'
            >
              Sobre nosotros
            </button>
            <button
              onClick={() => router.push('/login')}
              className='w-full bg-white text-[#151563] font-medium px-4 py-2 rounded-lg hover:bg-blue-100 transition'
            >
              Inicia sesión
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
