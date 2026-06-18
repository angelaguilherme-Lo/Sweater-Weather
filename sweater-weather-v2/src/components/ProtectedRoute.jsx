import { Navigate, useLocation } from 'react-router-dom'
import { useShop } from '../context/ShopContext'

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useShop()
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }

  return children
}