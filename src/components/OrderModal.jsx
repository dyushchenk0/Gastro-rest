import React from 'react'
import { useModal } from '../components/ModalContext'

const OrderModal = () => {
  const { isOrderModalOpen, closeOrderModal } = useModal()

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeOrderModal()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted')
    closeOrderModal()
  }

  if (!isOrderModalOpen) {
    console.log('Modal is closed')
    return null
  }

  console.log('Modal is open, rendering...')

  return (
    <div 
      className='data__model--order active' 
      onClick={handleBackdropClick}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999
      }}
    >
      <div style={{
        background: 'white',
        padding: '40px',
        borderRadius: '15px',
        maxWidth: '400px',
        width: '90%'
      }}>
        <h2>Тестовое модальное окно</h2>
        <p>Если вы это видите, значит модальное окно работает!</p>
        <button onClick={closeOrderModal}>Закрыть</button>
      </div>
    </div>
  )
}

export default OrderModal