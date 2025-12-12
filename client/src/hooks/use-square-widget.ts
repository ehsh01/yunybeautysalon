import { useEffect } from 'react';

export function useSquareAppointmentWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://square.site/appointments/buyer/widget/qdhoqrnshqclrg/LDS7Z0YYKSKAZ.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
}
