export const handleBack = () => {
    // Проверяем, что код выполняется на стороне клиента
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  };