const breathPractices = [
    // id(0) - Everyday practice
    {
        pattern: [4,4,8],
        reps: 4,
        theme: 'default',
    },
    // id(1) - Everyday practice extended
    {
        pattern: [4,4,8],
        reps: 12,
        theme: 'default',
    },
    // id(2) - Filling breath
    {
        pattern: [4,4,4],
        reps: 5,
        theme: 'default',
    },
    // id(3) - Touch of harmony
    {
        pattern: [4,4,4,2],
        reps: 5,
        theme: 'default',
    },
    // id(4) - Chamomile breath
    {
        pattern: [5,3,6],
        reps: 4,
        theme: 'default',
    },
    // id(5) - Morning practice
    {
        pattern: [4,2,4,2],
        reps: 5,
        theme: 'default',
    },
    // id(6) - Short breath
    {
        pattern: [1,2,2],
        reps: 9,
        theme: 'default',
    },
]

export function getBreathPracticeById(id) {
    return breathPractices[id];
}
