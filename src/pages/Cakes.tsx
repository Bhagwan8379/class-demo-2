
const cakes = [
    {
        id: 1,
        name: 'Chocolate Truffle',
        image: 'https://i.pinimg.com/736x/0b/7b/25/0b7b25e48258ddd399b24ec6fa42fc54.jpg',
        price: 499,
        discount: 15,
        description: 'Rich and dense chocolate truffle cake for chocoholics.',
    },
    {
        id: 2,
        name: 'Red Velvet',
        image: 'https://i.pinimg.com/736x/c7/c6/55/c7c65560a9f02dbef8a1b8904d90d6f2.jpg',
        price: 549,
        discount: 10,
        description: 'Classic red velvet cake with cream cheese frosting.',
    },
    {
        id: 3,
        name: 'Black Forest',
        image: 'https://i.pinimg.com/736x/c7/c6/55/c7c65560a9f02dbef8a1b8904d90d6f2.jpg',
        price: 479,
        discount: 12,
        description: 'A traditional favorite topped with cherries and cream.',
    },
    {
        id: 4,
        name: 'Strawberry Delight',
        image: 'https://i.pinimg.com/736x/c4/67/ee/c467ee34b6766efb36fcb1818b4d66e7.jpg',
        price: 515,
        discount: 18,
        description: 'Fresh strawberry glaze layered with soft sponge.',
    },
    {
        id: 5,
        name: 'Vanilla Bean',
        image: 'https://i.pinimg.com/736x/de/d9/36/ded9365a910e3207d4739afe209146a4.jpg',
        price: 455,
        discount: 10,
        description: 'Light vanilla sponge with whipped cream topping.',
    },
    {
        id: 6,
        name: 'Butterscotch Crunch',
        image: 'https://i.pinimg.com/736x/de/d9/36/ded9365a910e3207d4739afe209146a4.jpg',
        price: 525,
        discount: 20,
        description: 'Creamy butterscotch cake with caramelized sugar.',
    },
    {
        id: 7,
        name: 'Pineapple Surprise',
        image: 'https://i.pinimg.com/736x/0b/7b/25/0b7b25e48258ddd399b24ec6fa42fc54.jpg',
        price: 465,
        discount: 8,
        description: 'Tropical pineapple flavor with soft cream layers.',
    },
    {
        id: 8,
        name: 'Blueberry Heaven',
        image: 'https://i.pinimg.com/736x/de/d9/36/ded9365a910e3207d4739afe209146a4.jpg',
        price: 575,
        discount: 15,
        description: 'Moist sponge cake with blueberry compote.',
    },
    {
        id: 9,
        name: 'Coffee Walnut',
        image: 'https://i.pinimg.com/736x/29/d8/82/29d8822014ce5eab0e508002eebe7d0a.jpg',
        price: 489,
        discount: 13,
        description: 'Espresso-infused cake with walnut crumble topping.',
    },
    {
        id: 10,
        name: 'Rainbow Cake',
        image: 'https://i.pinimg.com/736x/29/d8/82/29d8822014ce5eab0e508002eebe7d0a.jpg',
        price: 599,
        discount: 10,
        description: 'Colorful layered sponge cake for parties and kids.',
    },
    {
        id: 11,
        name: 'Oreo Cheesecake',
        image: 'https://i.pinimg.com/736x/29/d8/82/29d8822014ce5eab0e508002eebe7d0a.jpg',
        price: 629,
        discount: 18,
        description: 'Creamy cheesecake layered with Oreo cookies.',
    },
    {
        id: 12,
        name: 'Hazelnut Praline',
        image: 'https://i.pinimg.com/736x/29/d8/82/29d8822014ce5eab0e508002eebe7d0a.jpg',
        price: 589,
        discount: 20,
        description: 'Crunchy hazelnut cake with a creamy praline center.',
    },
    {
        id: 13,
        name: 'Tiramisu',
        image: 'https://i.pinimg.com/736x/6e/ef/2b/6eef2ba5499393ca8e8230f6549b9f20.jpg',
        price: 615,
        discount: 15,
        description: 'Classic Italian cake with coffee and mascarpone.',
    },
    {
        id: 14,
        name: 'Raspberry Rose',
        image: 'https://i.pinimg.com/736x/6e/ef/2b/6eef2ba5499393ca8e8230f6549b9f20.jpg',
        price: 555,
        discount: 12,
        description: 'Floral and fruity raspberry rose infused cake.',
    },
    {
        id: 15,
        name: 'Choco Lava Cake',
        image: 'https://i.pinimg.com/736x/6e/ef/2b/6eef2ba5499393ca8e8230f6549b9f20.jpg',
        price: 475,
        discount: 25,
        description: 'Warm molten chocolate cake with gooey center.',
    },
    {
        id: 16,
        name: 'Mango Mania',
        image: 'https://i.pinimg.com/736x/6e/ef/2b/6eef2ba5499393ca8e8230f6549b9f20.jpg',
        price: 520,
        discount: 14,
        description: 'Seasonal mango cake layered with cream and sponge.',
    },
    {
        id: 17,
        name: 'Salted Caramel',
        image: 'https://i.pinimg.com/736x/3b/64/6b/3b646b4decd8cbb4c4a7ca87d11e2e87.jpg',
        price: 610,
        discount: 20,
        description: 'Sweet and salty caramel cake for bold flavor lovers.',
    },
    {
        id: 18,
        name: 'Classic Cheesecake',
        image: 'https://i.pinimg.com/736x/0b/7b/25/0b7b25e48258ddd399b24ec6fa42fc54.jpg',
        price: 599,
        discount: 10,
        description: 'Simple yet rich classic baked cheesecake.',
    },
    {
        id: 19,
        name: 'Carrot Cake',
        image: 'https://i.pinimg.com/736x/18/6a/8b/186a8b155d05b36a873f6778a98a835c.jpg',
        price: 489,
        discount: 18,
        description: 'Moist cake made with fresh carrots and nuts.',
    },
    {
        id: 20,
        name: 'KitKat Crumble',
        image: 'https://i.pinimg.com/736x/38/1d/b1/381db1e3e89faf739f90ad8168f09e4c.jpg',
        price: 535,
        discount: 16,
        description: 'Chocolate cake layered with crunchy KitKat bits.',
    },
    {
        id: 21,
        name: 'Ferrero Fantasy',
        image: 'https://i.pinimg.com/736x/51/55/76/515576d793a6e104eea88731324dc73b.jpg',
        price: 640,
        discount: 22,
        description: 'Ferrero Rocher-inspired cake with hazelnut chocolate.',
    },
    {
        id: 22,
        name: 'Nutella Swirl',
        image: 'https://i.pinimg.com/736x/82/56/eb/8256eb6e8870e822c6bd6be8ce6f63eb.jpg',
        price: 610,
        discount: 19,
        description: 'Heavenly Nutella cake with a swirl of hazelnut cream.',
    },
    {
        id: 23,
        name: 'Almond Delight',
        image: 'https://i.pinimg.com/736x/0b/7b/25/0b7b25e48258ddd399b24ec6fa42fc54.jpg',
        price: 520,
        discount: 14,
        description: 'Fluffy sponge topped with roasted almonds.',
    },
    {
        id: 24,
        name: 'Blueberry Cheesecake',
        image: 'https://i.pinimg.com/736x/0b/7b/25/0b7b25e48258ddd399b24ec6fa42fc54.jpg',
        price: 645,
        discount: 20,
        description: 'Classic cheesecake with blueberry topping.',
    },
];



const Cakes = () => {
    return (
        <div className="bg-gray-50 min-h-screen p-6">
            <h1 className="text-3xl font-bold text-center text-pink-600 mb-8">Our Delicious Cakes</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {cakes.map((cake) => {
                    const discountedPrice = Math.round(cake.price * (1 - cake.discount / 100));

                    return (
                        <div key={cake.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                            <img
                                src={cake.image + '?w=400&h=300&fit=crop'}
                                alt={cake.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-gray-800">{cake.name}</h2>
                                <p className="text-sm text-gray-500 mb-2">{cake.description}</p>
                                <div className="flex items-center justify-between mt-2">
                                    <div>
                                        <span className="text-lg font-bold text-green-600">₹{discountedPrice}</span>
                                        <span className="text-sm line-through text-gray-400 ml-2">₹{cake.price}</span>
                                    </div>
                                    <span className="text-sm text-red-500 font-semibold">{cake.discount}% off</span>
                                </div>
                                <button className="mt-4 w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-xl">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Cakes;
