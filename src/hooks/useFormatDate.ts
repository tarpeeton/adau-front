export default function formatDate(dateString: string): string {
    if (!dateString) return 'Invalid Date'; // Check for null or undefined
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Invalid Date'; // Check for invalid date
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
}
