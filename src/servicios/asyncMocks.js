

function getData() {
    return new Promise((resolve,reject)=>{
        const productos= [
            { 
                id:1,
                category: "Hombre",
                img: "https://http2.mlstatic.com/D_NQ_NP_690329-MLA27100006138_032018-W.jpg",
                nombre: 'Remera de Hombre',
                descripcion: "Rolling, Bob y Jagger",
                precio: 5000,
                stock:3,
            },
            { 
                id:2,
                category: "Hombre",
                img: "https://http2.mlstatic.com/D_NQ_NP_965758-MLA26591263091_012018-O.jpg",
                nombre: 'Remera de Hombre',
                descripcion: "Reggae Colores",
                precio: 5200,
                stock:3,
            },
            { 
                id:3,
                category: "Hombre",
                img: "https://http2.mlstatic.com/D_NQ_NP_641044-MLA27100007205_032018-W.jpg",
                nombre: 'Remera de Hombre',
                descripcion: "Bob Marle Reggae ",
                precio: 6000,
                stock:3,
            },
            
            { 
                id:4,
                category: "Mujer",
                img: "https://http2.mlstatic.com/D_NQ_NP_876439-MLA27079280446_032018-W.jpg",
                nombre: 'Remera de Mujer ',
                descripcion: " Reggae Música",
                precio: 4500,
                stock:3,
            },
            { 
                id:5,
                category: "Hombre",
                img: "https://veintidosclothingformen.com.ar/wp-content/uploads/2020/12/leon-plateado-cris.jpg",
                nombre: 'Remera de hombre ',
                descripcion: "Laion Black",
                precio: 4500,
                stock:3,
            },
            { 
                id:6,
                category: "niño",
                img: "https://http2.mlstatic.com/D_NQ_NP_880800-MLA46772577986_072021-W.jpg",
                nombre: 'Remera de Niño ',
                descripcion: "Niño laion ",
                precio: 4500,
                stock:3,
            },
            { 
                id:7,
                category: "Mujer",
                img: "https://http2.mlstatic.com/D_NQ_NP_967675-MLA43168600493_082020-V.jpg",
                nombre: 'Remera de Mujer ',
                descripcion: "Laion rey",
                precio: 4500,
                stock:3,
            },
            { 
                id:8,
                category: "Mujer",
                img: "https://http2.mlstatic.com/D_NQ_NP_853879-MLA26600737858_012018-O.jpg",
                nombre: 'Remera de Mujer ',
                descripcion: "Reggae Colores",
                precio: 4500,
                stock:3,
            },
            { 
                id:9,
                category: "Hombre",
                img: "https://http2.mlstatic.com/D_NQ_NP_812735-MLA50789928024_072022-W.jpg",
                nombre: 'Remera de Hombre ',
                descripcion: "Leon Corazon",
                precio: 4500,
                stock:3,
            },
            { 
                id:10,
                category: "Hombre",
                img: "https://www.digitalsport.com.ar/files/products/5fdd40a3ce04e-530112-1200x1200.jpg",
                nombre: 'Remera de Hombre ',
                descripcion: "Reggae Leon Company",
                precio: 4500,
                stock:3,
            },
            
        
        ]

        setTimeout( ()=> {
            resolve(productos)
        }, 2000 )
    })
}


export function getProductData(idURL) {
    return new Promise((resolve,reject)=>{
        const productos= [
           
            { 
                id:1,
                category: "Hombre",
                img: "https://http2.mlstatic.com/D_NQ_NP_690329-MLA27100006138_032018-W.jpg",
                nombre: 'Remera de Hombre',
                descripcion: "Rolling, Bob y Jagger",
                precio: 5000,
                stock:3,
            },
            { 
                id:2,
                category: "Hombre",
                img: "https://http2.mlstatic.com/D_NQ_NP_965758-MLA26591263091_012018-O.jpg",
                nombre: 'Remera de Hombre',
                descripcion: "Reggae Colores",
                precio: 5200,
                stock:3,
            },
            { 
                id:3,
                category: "Hombre",
                img: "https://http2.mlstatic.com/D_NQ_NP_641044-MLA27100007205_032018-W.jpg",
                nombre: 'Remera de Hombre',
                descripcion: "Bob Marle Reggae ",
                precio: 6000,
                stock:3,
            },
            
            { 
                id:4,
                category: "Mujer",
                img: "https://http2.mlstatic.com/D_NQ_NP_876439-MLA27079280446_032018-W.jpg",
                nombre: 'Remera de Mujer ',
                descripcion: " Reggae Música",
                precio: 4500,
                stock:3,
            },
            { 
                id:5,
                category: "Hombre",
                img: "https://veintidosclothingformen.com.ar/wp-content/uploads/2020/12/leon-plateado-cris.jpg",
                nombre: 'Remera de hombre ',
                descripcion: "Laion Black",
                precio: 4500,
                stock:3,
            },
            { 
                id:6,
                category: "niño",
                img: "https://http2.mlstatic.com/D_NQ_NP_880800-MLA46772577986_072021-W.jpg",
                nombre: 'Remera de Niño ',
                descripcion: "Niño laion ",
                precio: 4500,
                stock:3,
            },
            { 
                id:7,
                category: "Mujer",
                img: "https://http2.mlstatic.com/D_NQ_NP_967675-MLA43168600493_082020-V.jpg",
                nombre: 'Remera de Mujer ',
                descripcion: "Laion rey",
                precio: 4500,
                stock:3,
            },
            { 
                id:8,
                category: "Mujer",
                img: "https://http2.mlstatic.com/D_NQ_NP_853879-MLA26600737858_012018-O.jpg",
                nombre: 'Remera de Mujer ',
                descripcion: "Reggae Colores",
                precio: 4500,
                stock:3,
            },
            { 
                id:9,
                category: "Hombre",
                img: "https://http2.mlstatic.com/D_NQ_NP_812735-MLA50789928024_072022-W.jpg",
                nombre: 'Remera de Hombre ',
                descripcion: "Leon Corazon",
                precio: 4500,
                stock:3,
            },
            { 
                id:10,
                category: "Hombre",
                img: "https://www.digitalsport.com.ar/files/products/5fdd40a3ce04e-530112-1200x1200.jpg",
                nombre: 'Remera de Hombre ',
                descripcion: "Reggae Leon Company",
                precio: 4500,
                stock:3,
            },
            
            
        
        ]

        const productRequested= productos.find((item)=> item.id == parseInt(idURL));

        setTimeout( ()=> {
            resolve(productRequested)
        }, 2000 )
    })
}


export function getCategoryData(categoryURL) {
    return new Promise((resolve,reject)=>{
        const productos= [
           
            { 
                id:1,
                category: "Hombre",
                img: "https://http2.mlstatic.com/D_NQ_NP_690329-MLA27100006138_032018-W.jpg",
                nombre: 'Remera de Hombre',
                descripcion: "Rolling, Bob y Jagger",
                precio: 5000,
                stock:3,
            },
            { 
                id:2,
                category: "Hombre",
                img: "https://http2.mlstatic.com/D_NQ_NP_965758-MLA26591263091_012018-O.jpg",
                nombre: 'Remera de Hombre',
                descripcion: "Reggae Colores",
                precio: 5200,
                stock:3,
            },
            { 
                id:3,
                category: "Hombre",
                img: "https://http2.mlstatic.com/D_NQ_NP_641044-MLA27100007205_032018-W.jpg",
                nombre: 'Remera de Hombre',
                descripcion: "Bob Marle Reggae ",
                precio: 6000,
                stock:3,
            },
            
            { 
                id:4,
                category: "Mujer",
                img: "https://http2.mlstatic.com/D_NQ_NP_876439-MLA27079280446_032018-W.jpg",
                nombre: 'Remera de Mujer ',
                descripcion: " Reggae Música",
                precio: 4500,
                stock:3,
            },
            { 
                id:5,
                category: "Hombre",
                img: "https://veintidosclothingformen.com.ar/wp-content/uploads/2020/12/leon-plateado-cris.jpg",
                nombre: 'Remera de hombre ',
                descripcion: "Laion Black",
                precio: 4500,
                stock:3,
            },
            { 
                id:6,
                category: "niño",
                img: "https://http2.mlstatic.com/D_NQ_NP_880800-MLA46772577986_072021-W.jpg",
                nombre: 'Remera de Niño ',
                descripcion: "Niño laion ",
                precio: 4500,
                stock:3,
            },
            { 
                id:7,
                category: "Mujer",
                img: "https://http2.mlstatic.com/D_NQ_NP_967675-MLA43168600493_082020-V.jpg",
                nombre: 'Remera de Mujer ',
                descripcion: "Laion rey",
                precio: 4500,
                stock:3,
            },
            { 
                id:8,
                category: "Mujer",
                img: "https://http2.mlstatic.com/D_NQ_NP_853879-MLA26600737858_012018-O.jpg",
                nombre: 'Remera de Mujer ',
                descripcion: "Reggae Colores",
                precio: 4500,
                stock:3,
            },
            { 
                id:9,
                category: "Hombre",
                img: "https://http2.mlstatic.com/D_NQ_NP_812735-MLA50789928024_072022-W.jpg",
                nombre: 'Remera de Hombre ',
                descripcion: "Leon Corazon",
                precio: 4500,
                stock:3,
            },
            { 
                id:10,
                category: "Hombre",
                img: "https://www.digitalsport.com.ar/files/products/5fdd40a3ce04e-530112-1200x1200.jpg",
                nombre: 'Remera de Hombre ',
                descripcion: "Reggae Leon Company",
                precio: 4500,
                stock:3,
            },
            
            
        
        ]

        const categoryRequested= productos.filter( item=> { 
           return item.category.toLowerCase() === categoryURL.toLowerCase()});

        setTimeout( ()=> {
            resolve(categoryRequested)
        }, 2000 )
    })
}


export default getData;