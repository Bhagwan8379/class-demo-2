

const Sweet = () => {
    const sweets = [
        {
            id: 1,
            name: 'Gulab Jamun',
            image: 'https://i.pinimg.com/736x/a9/3d/77/a93d77d3e242262f2c919bf66aef5b39.jpg',
            price: 199,
            discount: 10,
            description: 'Soft and juicy Indian dessert soaked in sugar syrup.',
        },
        {
            id: 2,
            name: 'Rasgulla',
            image: 'https://i.pinimg.com/736x/b7/a0/29/b7a029789e949b9ea26b3489d040b3b6.jpg',
            price: 179,
            discount: 12,
            description: 'Bengali sweet made from ball-shaped dumplings of chhena.',
        },
        {
            id: 3,
            name: 'Kaju Katli',
            image: 'https://i.pinimg.com/736x/94/22/29/9422290c442e8323245746b30eaf1564.jpg',
            price: 249,
            discount: 15,
            description: 'Diamond-shaped cashew sweet with a rich taste.',
        },
        {
            id: 4,
            name: 'Ladoo',
            image: 'https://i.pinimg.com/736x/15/b0/3a/15b03aa25d583709f88769654a2dbcb8.jpg',
            price: 139,
            discount: 10,
            description: 'Popular festival sweet made from gram flour and ghee.',
        },
        {
            id: 5,
            name: 'Jalebi',
            image: 'https://i.pinimg.com/736x/58/d0/ee/58d0ee20230696987b7fce4a3e56f479.jpg',
            price: 159,
            discount: 18,
            description: 'Crispy and syrupy swirls of deep-fried flour batter.',
        },
        {
            id: 6,
            name: 'Barfi',
            image: 'https://i.pinimg.com/736x/ac/96/c2/ac96c2dfb6a00807fa48629951921d5d.jpg',
            price: 189,
            discount: 12,
            description: 'Sweet dense milk-based dessert flavored with cardamom.',
        },
        {
            id: 7,
            name: 'Mysore Pak',
            image: 'https://i.pinimg.com/736x/ac/96/c2/ac96c2dfb6a00807fa48629951921d5d.jpg',
            price: 225,
            discount: 20,
            description: 'Traditional South Indian sweet made from ghee and gram flour.',
        },
        {
            id: 8,
            name: 'Peda',
            image: 'https://i.pinimg.com/736x/d5/7a/bc/d57abc5ee16ab3ea2ed15d970a827ca6.jpg',
            price: 195,
            discount: 8,
            description: 'Small and soft milk fudge often used in celebrations.',
        },
        {
            id: 9,
            name: 'Rasmalai',
            image: 'https://i.pinimg.com/736x/d5/7a/bc/d57abc5ee16ab3ea2ed15d970a827ca6.jpg',
            price: 265,
            discount: 14,
            description: 'Soft paneer balls soaked in saffron milk syrup.',
        },
        {
            id: 10,
            name: 'Soan Papdi',
            image: 'https://i.pinimg.com/736x/fa/50/c9/fa50c9a3324b95f08439396616ab0edd.jpg',
            price: 169,
            discount: 16,
            description: 'Flaky and sweet dessert made with gram flour and sugar.',
        },

        // Additional 10 Sweets
        {
            id: 11,
            name: 'Modak',
            image: 'https://i.pinimg.com/736x/3d/a4/56/3da456bee27ced71401ba380040d1514.jpg',
            price: 229,
            discount: 15,
            description: 'Steamed or fried dumplings filled with coconut and jaggery.',
        },
        {
            id: 12,
            name: 'Shrikhand',
            image: 'https://i.pinimg.com/736x/52/7b/a3/527ba38fbbedd29e4d4fcf974e0d562f.jpg',
            price: 210,
            discount: 10,
            description: 'Sweetened curd dessert flavored with saffron and cardamom.',
        },
        {
            id: 13,
            name: 'Cham Cham',
            image: 'https://i.pinimg.com/736x/3f/df/a0/3fdfa0644dab00f3628a1052078ae028.jpg',
            price: 185,
            discount: 11,
            description: 'Bengali sweet made from paneer and stuffed with dry fruits.',
        },
        {
            id: 14,
            name: 'Halwa',
            image: 'https://i.pinimg.com/736x/b3/eb/a7/b3eba78490279a7528157a72b1f1cf7d.jpg',
            price: 160,
            discount: 9,
            description: 'A thick and soft dessert made with semolina and ghee.',
        },
        {
            id: 15,
            name: 'Sandesh',
            image: 'https://i.pinimg.com/736x/c1/45/ce/c145ce53202906749d1abcad3b8f218c.jpg',
            price: 200,
            discount: 12,
            description: 'Delicate Bengali sweet made from chenna and sugar.',
        },
        {
            id: 16,
            name: 'Imarti',
            image: 'https://i.pinimg.com/736x/88/67/35/88673570d91a8ae30e13d065a6af4f89.jpg',
            price: 175,
            discount: 13,
            description: 'Bright orange concentric fried sweet soaked in syrup.',
        },
        {
            id: 17,
            name: 'Basundi',
            image: 'https://i.pinimg.com/736x/76/9a/36/769a36478a5de924dec02a30499c48e6.jpg',
            price: 195,
            discount: 10,
            description: 'Thick sweetened milk dessert flavored with cardamom.',
        },
        {
            id: 18,
            name: 'Khoya Roll',
            image: 'https://i.pinimg.com/736x/3c/f7/be/3cf7be191df3d69953e6e96388d1e78a.jpg',
            price: 240,
            discount: 17,
            description: 'Delicious rolls made with thickened milk and nuts.',
        },
        {
            id: 19,
            name: 'Anjeer Barfi',
            image: 'https://i.pinimg.com/736x/06/33/22/0633228da708c70e3a6bf871fa38d8a7.jpg',
            price: 275,
            discount: 20,
            description: 'Barfi made from figs, nuts, and khoya without added sugar.',
        },
        {
            id: 20,
            name: 'Milk Cake',
            image: 'https://i.pinimg.com/736x/34/92/89/349289d5f6f593d7e115ed4a610f7442.jpg',
            price: 215,
            discount: 14,
            description: 'Dense and grainy sweet made by reducing milk slowly.',
        },
    ];


    return (
        <div className="p-6 bg-pink-50 min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-8 text-pink-700">Our Sweets Collection</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {sweets.map((sweet) => (
                    <div
                        key={sweet.id}
                        className="bg-white shadow-md rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
                    >
                        <img
                            src={`${sweet.image}?w=400&h=300&fit=crop`}
                            alt={sweet.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-gray-800">{sweet.name}</h2>
                            <p className="text-sm text-gray-600">{sweet.description}</p>
                            <div className="mt-2 flex items-center justify-between">
                                <span className="text-lg font-bold text-green-600">₹{sweet.price}</span>
                                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">
                                    {sweet.discount}% OFF
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sweet;
