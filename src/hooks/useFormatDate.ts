export default function formatDate(dateString: string): string {
    if (!dateString) return 'Invalid Date'; // Check for null or undefined
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Invalid Date'; // Check for invalid date
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
}


export const SeminarFormatDate = (date: string, time: string): string => {
    // Создаем объект текущей даты и времени
    const currentDate = new Date();

    // Парсим дату семинара в объект Date
    let seminarDate = new Date(date);

    // Проверка корректности парсинга даты
    if (isNaN(seminarDate.getTime())) {
        // Преобразуем дату вручную, если парсинг оказался неудачным
        const [year, month, day] = date.split('-').map(Number);
        seminarDate = new Date(year, month - 1, day); // Месяцы начинаются с 0
    }

    // Разделяем строку времени для извлечения часов и минут
    const [hours, minutes] = time.includes(':') ? time.split(':').map(Number) : time.split('.').map(Number);

    // Устанавливаем время для даты семинара, используя полученные часы и минуты
    seminarDate.setHours(hours, minutes, 0, 0);

    // Нормализуем текущую дату, чтобы игнорировать время (устанавливаем на полночь)
    const normalizedCurrentDate = new Date(currentDate);
    normalizedCurrentDate.setHours(0, 0, 0, 0);

    // Проверяем, прошло ли время семинара (раньше текущей даты или, если сегодня, то время в прошлом)
    if (seminarDate < currentDate && seminarDate < normalizedCurrentDate) {
        // Если семинар уже завершился, возвращаем строку с информацией о завершении
        return `Завершено: ${seminarDate.toLocaleDateString('ru-RU')}; ${time}`;
    }

    // Если семинар еще не прошел или будет сегодня, возвращаем дату и время семинара
    return `${seminarDate.toLocaleDateString('ru-RU')}; ${time}`;
}
