import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function RedirectToExplorador() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/partner/oportunidades', { replace: true }); // Updated to new unified route
  }, [navigate]);

  return null;
}