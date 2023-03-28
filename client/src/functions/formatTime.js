export const formatTime = (str) => {
    const date = new Date(Date.parse(str))
    //const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleTimeString()
}