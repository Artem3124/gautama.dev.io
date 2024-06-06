import { practiceTheme } from "@/shared/models/practiceTheme.js";

export const breathingPractices = [
    // id(0) - Everyday practice
    {
        id: 0,
        name: "Free Breathing",
        pattern: [4, 4, 8, 0],
        reps: 4,
        theme: practiceTheme.peace,
        description:
            "Free breathing is a simple and effective technique that can significantly enhance your physical and mental well-being.",
        //imagePath: "skyblue1.jpg",
        imagePath: "/src/assets/img/end-peace.png",
        reward: 33,
    },
    // id(1) - Everyday practice extended
    {
        id: 1,
        name: "Filling Breath",
        pattern: [4, 4, 4, 0],
        reps: 12,
        description:
            "Start by focusing on your breath. Gradually shift your attention to the sensations in your body during each inhale and exhale. Repeat this process several times, allowing yourself to dive deeper into the depths of your consciousness.",
        theme: practiceTheme.peace,
        imagePath: "/src/assets/img/end-peace.png",
        reward: 33,
    },
    // id(2) - Filling breath
    {
        id: 2,
        name: "Chamomile Breath",
        pattern: [5, 3, 6, 0],
        reps: 5,
        description:
            "Start by focusing on your breath. As you continue, concentrate on releasing any negative thoughts and tension with each exhale. Repeat this cycle several times or until you notice a significant improvement in how you feel.",
        theme: practiceTheme.base,
        imagePath: "/src/assets/img/end-base.jpeg",
        reward: 33,
    },
    // id(3) - Touch of harmony
    {
        id: 3,
        name: "Touch of harmony",
        pattern: [4, 4, 4, 2],
        reps: 5,
        description:
            "This practice helps reduce stress, stabilize emotions, improve concentration, and promote physical relaxation. Incorporate Touch of Harmony into your daily routine to maintain a sense of balance and calm. Use it during stressful moments to regain composure, and integrate it into your mindfulness or meditation sessions for deeper relaxation. Experience greater balance and tranquility in your daily life with this simple yet effective technique.",
        theme: practiceTheme.base,
        imagePath: "/src/assets/img/end-base.jpeg",
        reward: 33,
    },
    // id(4) - Chamomile breath
    {
        id: 4,
        name: "Coffee Practice",
        pattern: [5, 3, 6],
        reps: 4,
        description:
            "This practice helps to energize your mind, improve concentration, and promote a sense of wakefulness. Incorporate the Coffee Practice into your routine whenever you need a quick mental boost and a refresh.",
        theme: practiceTheme.concentration,
        imagePath: "/src/assets/img/end-concentration1.png",
        reward: 33,
    },
    // id(5) - Morning practice
    {
        id: 5,
        name: "Morning practice",
        pattern: [4, 2, 4, 2],
        reps: 5,
        description:
            "This practice helps you release inner tension and promotes a sense of calm and relaxation. Incorporate the Short Breath technique into your daily routine or use it whenever you feel the need to quickly reduce stress and regain composure.",
        theme: practiceTheme.concentration,
        imagePath: "/src/assets/img/end-concentration1.png",
        reward: 33,
    },
    // id(6) - Short breath
];
