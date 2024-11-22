export const ProductService = {
    getProductsData() {
        return [
            {
                id: 1,
                code: 'f230fh0g3',
                name: 'Secado',
                description: 'Product Description',
                image: 'https://qualitycorn.com/wp-content/uploads/2024/11/engin-akyurt-CwO8qW_GFPE-unsplash-6-1-png.webp',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: 2,
                code: 'nvklal433',
                name: 'Almacenamiento',
                description: 'Product Description',
                image: 'https://qualitycorn.com/wp-content/uploads/2024/10/engin-akyurt-CwO8qW_GFPE-unsplash-1-1-jpg.webp',
                price: 72,
                category: 'Accessories',
                quantity: 61,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: 3,
                code: 'zz21cz3c1',
                name: 'Selección por:',
                description: 'Product Description',
                image: 'https://qualitycorn.com/wp-content/uploads/2024/11/engin-akyurt-CwO8qW_GFPE-unsplash-5-1-png.webp',
                price: 79,
                category: 'Fitness',
                quantity: 2,
                inventoryStatus: 'LOWSTOCK',
                rating: 3
            },
            {
                id: 4,
                code: '244wgerg2',
                name: 'Envasado',
                description: 'Product Description',
                image: 'https://qualitycorn.com/wp-content/uploads/2024/10/engin-akyurt-CwO8qW_GFPE-unsplash-3-jpg.webp',
                price: 29,
                category: 'Clothing',
                quantity: 25,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: 5,
                code: 'h456wer53',
                name: 'Conservación',
                description: 'Product Description',
                image: 'https://grupomonllor.com/wp-content/uploads/2022/09/principales-metodos-almacenamiento-granos-semillas-scaled.jpg',
                price: 15,
                category: 'Accessories',
                quantity: 73,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: 6,
                code: 'av2231fwg',
                name: 'Envío',
                description: 'Product Description',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlm5Pq5ubHQvAthDbK_ufYon1fWneAlHtk0A&s',
                price: 120,
                category: 'Accessories',
                quantity: 0,
                inventoryStatus: 'OUTOFSTOCK',
                rating: 4
            },
        ];
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },
};

