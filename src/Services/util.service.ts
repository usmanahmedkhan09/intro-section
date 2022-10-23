class UtilService
{
    getImageUrl = (name: string) =>
    {
        return new URL(`../assets/images/${name}`, import.meta.url).href

    }
}

export default UtilService