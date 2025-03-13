const profiles = [
    {
        id: 1,
        name: "Juan Pérez",
        username: "juan_perez",
        pic: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        id: 2,
        name: "Ana Gómez",
        username: "ana_gomez",
        pic: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
        id: 3,
        name: "Carlos López",
        username: "carlos_lopez",
        pic: "https://randomuser.me/api/portraits/men/3.jpg"
    }
];

const posts = [
    {
        id: 1,
        image: "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp",
        description: "Disfrutando de un hermoso día en la playa!",
        likes: 120,
        profile: profiles[0]
    },
    {
        id: 2,
        image: "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp",
        description: "Un café perfecto para empezar el día ☕️.",
        likes: 95,
        profile: profiles[1]
    },
    {
        id: 3,
        image: "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp",
        description: "Paisajes que quitan el aliento 🌄.",
        likes: 200,
        profile: profiles[2]
    }
];

export { profiles, posts };
