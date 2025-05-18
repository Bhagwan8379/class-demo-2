// ChocolateShop.jsx

const chocolates = [
    {
        id: 1,
        name: 'Dark Delight',
        image: 'https://plus.unsplash.com/premium_photo-1669876530758-8fda39aa0dfd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 199,
        discount: 20,
        description: 'Rich dark chocolate made with 70% cocoa.',
    },
    {
        id: 2,
        name: 'Milky Dream',
        image: 'https://images.unsplash.com/photo-1718267050112-4671844a1f75?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 149,
        discount: 10,
        description: 'Smooth and creamy milk chocolate bar.',
    },
    {
        id: 3,
        name: 'Hazel Bliss',
        image: 'https://plus.unsplash.com/premium_photo-1674819647276-c93c08795554?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
        price: 249,
        discount: 15,
        description: 'Crunchy hazelnuts in silky chocolate.',
    },
    {
        id: 4,
        name: 'Caramel Swirl',
        image: 'https://plus.unsplash.com/premium_photo-1669905375364-df717469e14c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
        price: 179,
        discount: 25,
        description: 'Gooey caramel wrapped in a cocoa shell.',
    },
    {
        id: 5,
        name: 'Nutty Buddy',
        image: 'https://images.unsplash.com/photo-1584304733733-efc07853aff7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8',
        price: 210,
        discount: 18,
        description: 'Nut-filled milk chocolate for a crunchy surprise.',
    },
    {
        id: 6,
        name: 'Choco Crunch',
        image: 'https://images.unsplash.com/photo-1613781578413-1427edbe28a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8',
        price: 189,
        discount: 12,
        description: 'Crispy rice puffs coated in milk chocolate.',
    },
    {
        id: 7,
        name: 'Velvet Cocoa',
        image: 'https://images.unsplash.com/photo-1613781578413-1427edbe28a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8',
        price: 230,
        discount: 22,
        description: 'Smooth and creamy dark chocolate.',
    },
    {
        id: 8,
        name: 'Mint Choco',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
        price: 199,
        discount: 10,
        description: 'Refreshing mint flavor infused in rich chocolate.',
    },
    {
        id: 9,
        name: 'Fruit Fudge',
        image: 'https://images.unsplash.com/photo-1612318079512-40892e233399?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8',
        price: 225,
        discount: 15,
        description: 'Fruity chunks blended with sweet fudge.',
    },
    {
        id: 10,
        name: 'Crunch Bar',
        image: 'https://images.unsplash.com/photo-1612318079512-40892e233399?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8',
        price: 160,
        discount: 20,
        description: 'Crispy wafer layers with chocolate.',
    },
    {
        id: 11,
        name: 'Choco Lava',
        image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
        price: 280,
        discount: 30,
        description: 'Molten lava-filled dark chocolate.',
    },
    {
        id: 12,
        name: 'Almond Joy',
        image: 'https://images.unsplash.com/photo-1612318079512-40892e233399?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8',
        price: 240,
        discount: 18,
        description: 'Toasted almonds in milk chocolate.',
    },
    {
        id: 13,
        name: 'Berry Cocoa',
        image: 'https://images.unsplash.com/photo-1633205848819-1ba957737397?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8',
        price: 205,
        discount: 17,
        description: 'Berry mix and cocoa blended for tart sweetness.',
    },
    {
        id: 14,
        name: 'Peanut Perfection',
        image: 'https://images.unsplash.com/photo-1652282561693-b94c1f62c75e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8',
        price: 199,
        discount: 15,
        description: 'Salted peanuts embedded in milk chocolate.',
    },
    {
        id: 15,
        name: 'Orange Twist',
        image: 'https://images.unsplash.com/photo-1718915871067-b66f2aa7d946?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYzfHx8ZW58MHx8fHx8',
        price: 189,
        discount: 12,
        description: 'Chocolate with a zesty orange twist.',
    },
    {
        id: 16,
        name: 'White Choco Pop',
        image: 'https://images.unsplash.com/photo-1582042837973-a13faf7e0eb4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8',
        price: 210,
        discount: 14,
        description: 'White chocolate with popping candy.',
    },
    {
        id: 17,
        name: 'Espresso Bite',
        image: 'https://images.unsplash.com/photo-1623000850293-0cbbc517c719?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
        price: 239,
        discount: 19,
        description: 'Coffee lovers’ chocolate with an espresso center.',
    },
    {
        id: 18,
        name: 'Coconut Cream',
        image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0',
        price: 175,
        discount: 10,
        description: 'Creamy coconut chocolate blend.',
    },
    {
        id: 19,
        name: 'Triple Threat',
        image: 'https://plus.unsplash.com/premium_photo-1669905375364-df717469e14c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
        price: 260,
        discount: 20,
        description: 'Dark, milk, and white chocolate layers.',
    },
    {
        id: 20,
        name: 'Marshmallow Melt',
        image: 'https://plus.unsplash.com/premium_photo-1667115138166-76853c900d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
        price: 220,
        discount: 16,
        description: 'Soft marshmallow inside cocoa casing.',
    },
    {
        id: 21,
        name: 'Salted Caramel',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
        price: 190,
        discount: 22,
        description: 'Delicious blend of sweet caramel and sea salt.',
    },
    {
        id: 22,
        name: 'Cookie Choco Bar',
        image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0',
        price: 200,
        discount: 12,
        description: 'Crunchy cookie bits wrapped in chocolate.',
    },
    {
        id: 23,
        name: 'Honeycomb Crunch',
        image: 'https://plus.unsplash.com/premium_photo-1667031519192-ba1ed681751d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8',
        price: 215,
        discount: 18,
        description: 'Sweet honeycomb in a milk chocolate shell.',
    },
    {
        id: 24,
        name: 'Cocoa Royale',
        image: 'https://images.unsplash.com/photo-1606312618685-7cc798d5a2d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8',
        price: 275,
        discount: 25,
        description: 'Premium cocoa chocolate with a royal taste.',
    },
];


const Choclate = () => {
    return (
        <div className="min-h-screen bg-brown-50 p-6">
            <h1 className="text-3xl font-bold text-center text-brown-800 mb-6">
                🍫 Welcome to ChocoLand
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {chocolates.map((choco) => (
                    <div
                        key={choco.id}
                        className="bg-white shadow-lg rounded-2xl overflow-hidden p-4 transition-transform hover:scale-105"
                    >
                        <img
                            src={choco.image}
                            alt={choco.name}
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        <h2 className="text-xl font-semibold mt-3">{choco.name}</h2>
                        <p className="text-gray-600 mt-1">{choco.description}</p>
                        <div className="mt-3 flex items-center justify-between">
                            <span className="text-green-600 font-bold">
                                ₹{choco.price - (choco.price * choco.discount) / 100}
                            </span>
                            <span className="text-red-500 line-through text-sm">
                                ₹{choco.price}
                            </span>
                        </div>
                        <p className="text-sm text-yellow-600 mt-1">Save {choco.discount}%</p>
                        <button className="mt-4 bg-brown-600 text-white px-4 py-2 rounded-full hover:bg-brown-700">
                            Buy Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Choclate;
