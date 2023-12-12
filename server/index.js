import express from "express"
import cors from "cors"

const app = express()
const PORT = 5500
let counter = 16
app.use(express.json())
app.use(cors())


let arr = [
    {
        "id": 1,
        "name": "AMD Ryzen 7 7800X3D",
        "info": "Processor",
        "image": "https://www.amd.com/system/files/styles/992px/private/2022-12/1728141-amd-ryzen-3d-vcache-7-right-1260x709.png?itok=tUCbsM1m",
        "price": 369
    },
    {
        "id": 2,
        "name": "Ryzen 9 7950x",
        "info": "Processor",
        "image": "https://www.amd.com/system/files/styles/992px/private/2022-11/1761310-amd-ryzen-9-7000-series-PIB-angle-1260x709.png?itok=RwZB4na8",
        "price": 489
    },
    {
        "id": 3,
        "name": "ASUS ROG Crosshair X670E Hero",
        "info": "MotherBoard",
        "image": "https://www.amd.com/system/files/styles/992px/private/2022-11/1761310-amd-ryzen-9-7000-series-PIB-angle-1260x709.png?itok=RwZB4na8",
        "price": 699
    }, {
        "id": 4,
        "name": "ASUS ROG Strix X670E-E Gaming Wifi",
        "info": "MotherBoard",
        "image": "https://dlcdnwebimgs.asus.com/gain/BADFA920-702B-451B-9592-8279ACD6857B",
        "price": 499
    },
    {
        "id": 5,
        "name": "G-Skill Trident Z5 RGB 8000Mhz",
        "info": "RAM",
        "image": "https://www.gskill.com/img/overview/tz5-rgb-splave/01-trident-z5-rgb-splave-main.png",
        "price": 189
    },
    {
        "id":6,
        "name": "Corsair Dominator RGB 8000Mhz",
        "category": "RAM",
        "image": "https://www.corsair.com/wp-content/uploads/2022/06/DOMINATOR_RGB_PLATINUM_BLACK_DDR5_RENDER_07-1536x1103.png",
        "price": 209
    },
    {
        "id":7,
        "name": "SeaGate Firecuda 540 1TB",
        "info": "Solid State Drive",
        "image": "https://www.seagate.com/content/dam/seagate/assets/products/gaming-drive/pc-gaming/firecuda-540-ssd/images/comparison-table-firecuda-540.png",
        "price": 489
    },
    {
        "id":8,
        "name": "Corsair MP700 1TB",
        "info": "Solid State Drive",
        "image": "https://www.ncwsa.co.za/wp-content/uploads/2023/08/MP700_GEN5_2TB_01.webp",
        "price": 149
    },
    {
        "id":9,
        "model": "ASUS ROG Strix GeForce RTX 4070 Ti",
        "info": "Graphic Card",
        "image": "https://dlcdnwebimgs.asus.com/gain/45B3F0A3-98F3-4940-A420-96384E8A4DC3",
        "price": 819
    },
    {
        "id": 10,
        "name": "MSI GeForce RTX 4090 Gaming X Trio",
        "info": "Graphic Card",
        "image": "https://asset.msi.com/resize/image/global/product/product_16655531780ae76e91e577ad9719f1f135824e1a15.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
        "price": 1799
    },
    {
        "id": 11,
        "name": "SeaSonic PRIME PX1000",
        "info": "Power Supply",
        "image": "https://s3-apw.badencloud.store/49882-cdn/0a011a5d-7b6b-4b3c-910b-2372b97b3d1d_2_1687962309.jpg",
        "price": 219
    },
    {
        "id": 12,
        "name": "Corsair HX1000i",
        "info": "Power Supply",
        "image": "https://hwbusters.com/wp-content/uploads/2022/09/Corsair_HX1000i.webp",
        "price": 189
    },
    {
        "id": 13,
        "name": "Corsair ICUE LINK H150i LCD",
        "info": "Cooler",
        "image": "https://assets.corsair.com/image/upload/c_pad,q_auto,h_1024,w_1024,f_auto/products/Liquid-Cooling/icue-link-lcd-aio/CW-9061008/iCUE_LINK_H150i_LCD_BLK_01.webp?width=1080&quality=85&auto=webp&format=pjpg",
        "price": 319
    },
    {
        "id": 14,
        "name": "NZXT Kraken Elite 360 RGB",
        "info": "Cooler",
        "image": "https://nzxt.com/assets/cms/34299/1681857263-01_kraken-elite_black_rgb-core-fans_rgb_360.png?ar64=MTox&auto=format&fit=crop&h=400&w=400",
        "price": 289
    },{
        "id": 15,
        "name": "Lian LI O11 Dynamic EVO",
        "info": "Case",
        "image": "https://lian-li.com/wp-content/uploads/2021/12/evo-600-000.jpg",
        "price": 139
    }
]

app.get("/",(req,res)=>{
    res.send(arr)
})

app.get("/:id",(req,res)=>{
    const {id} = req.params
    const getItem = arr.find((i)=>i.id === +id)
    res.send(getItem)
})
app.delete('/:id',(req,res)=>{
    const {id} = req.params
    arr = arr.filter((i)=>i.id !== +id)
    res.send(arr)
})
app.post("/",(req,res)=>{
    let newItem = {
        "id":counter++,
        "name":req.body.name,
        "info":req.body.info,
        "image":req.body.image,
        "price":req.body.price
    }
    arr.push(newItem)
    res.send(arr)
})
app.put("/:id",(req,res)=>{
    const {id} = req.params

    let newItem = {
        "id":+id,
        "name":req.body.name,
        "info":req.body.info,
        "image":req.body.image,
        "price":req.body.price
    }

    arr = arr.filter((i)=>i.id !== +id)
    arr.push(newItem)
    arr.sort((a,b)=>a.id-b.id)
    res.send(arr)
})

app.listen(PORT, (err) => {
    if (err) {
        console.error(err)
    }
    else {
        console.log("There is not such an error");
    }
})