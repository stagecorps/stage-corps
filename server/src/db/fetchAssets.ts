import { writeFile } from "fs"

interface IRentalItem {
    name: string;
    display_image: string;
}

const fetchAssets = async () => {
    let items: IRentalItem[] = [];
    for (let i = 1; i <= 20; i++) {
        const response = await fetch(`http://localHost:3000/ezrentout/assets?page=${i}`);
        const data = await response.json();
        const assets: IRentalItem[] = data.assets;
        const simplifiedAssets = assets.map((item: IRentalItem) => {
            const { name, display_image } = item;
            return { name, display_image }
        });
        items = [...items, ...simplifiedAssets]
    };
    const filteredAssets = items.filter((item: IRentalItem, index: number, self: IRentalItem[]) => {
        return index === self.findIndex(it => it.name === item.name)
    })
    await writeFile('src/db/assets.json', JSON.stringify(filteredAssets), (err)=>{ if (err) {console.log(err?.message)} else { console.log('Assets.json written!') } })
}

export default fetchAssets