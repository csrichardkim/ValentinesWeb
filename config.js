const config = {
    valentineName: "Ven",
    pageTitle: "Can You Be My Valentine? 💝",

    // Floating Background Elements
    floatingEmojis: {
        hearts: ['❤️','💖','💝','💗','💓'],
        bears: ['😻','🦭']
    },

    // Questions
    questions: {
        first: {
            text: "Do you like me?",
            yesBtn: "Yes ❤️",
            noBtn: "No 🙈",
            secretAnswer: "I don't like you, I love you! ❤️"
        },

        second: {
            text: "How much do you love me?",
            startText: "This much!",
            nextBtn: "Next ❤️"
        },

        third: {
            text: "Will you be my Valentine...?",
            yesBtn: "YES!! 💘",
            noBtn: "No 😢"
        }
    },

    // Love Meter Messages
    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",
        high: "To infinity and beyond! 🚀💝",
        normal: "And beyond! 🥰"
    },

    // Final Celebration
    celebration: {
        title: "Yay! I'm the luckiest person to have China ❤️",
        message: "Now come get your gift... 😘",
        emojis: "🎁💖🤗💝💋❤️💕"
    },

    // Colors
    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    // Animations
    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.6
    },

    // Music
    music: {
        enabled: true,
        autoplay: false, // autoplay often gets blocked by browsers
        musicUrl: "https://res.cloudinary.com/dit5qbmly/video/upload/v1770587130/M%C3%83_neskin_-_IF_NOT_FOR_YOU_Lyrics_vzfmog.mp3",
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};
