import type { kanbanBoardProps, Chat, Conversation } from "@/types/index";

const initialKanbanData: kanbanBoardProps[] = [
  {
    title: "To Do",
    cardData: [
      {
        id: "1",
        title: "Design Login Page",
        priority: "high",
        description:
          "Create the UI/UX design for the login and registration screens.",
        members: ["Alice", "Bob"],
        category: "UI/UX",
      },
      {
        id: "2",
        title: "Write API Docs",
        priority: "medium",
        description: "Document all authentication and user APIs using Swagger.",
        members: ["Charlie"],
        category: "Documentation",
      },
      {
        id: "3",
        title: "Create Test Plan",
        priority: "low",
        description: "Draft the initial test cases for the user module.",
        members: ["Eli"],
        category: "QA",
      },
    ],
  },
  {
    title: "In Progress",
    cardData: [
      {
        id: "4",
        title: "Implement Auth Flow",
        priority: "medium",
        description: "Implement JWT-based authentication with refresh tokens.",
        members: ["Charlie"],
        category: "Back-End",
      },
      {
        id: "5",
        title: "Style Dashboard Page",
        priority: "low",
        description:
          "Apply Tailwind styling and responsive design to the dashboard.",
        members: ["Bob", "Alice"],
        category: "Front-End",
      },
    ],
  },
  {
    title: "Review",
    cardData: [
      {
        id: "6",
        title: "Fix Navigation Bugs",
        priority: "low",
        description: "Resolve minor issues with mobile nav responsiveness.",
        members: ["Dana", "Eli"],
        category: "Front-End",
      },
      {
        id: "7",
        title: "Review Database Schema",
        priority: "high",
        description:
          "Ensure schema meets normalization and indexing standards.",
        members: ["Charlie"],
        category: "Database",
      },
    ],
  },
  {
    title: "Done",
    cardData: [
      {
        id: "8",
        title: "Setup Project Repository",
        priority: "medium",
        description:
          "Initialize GitHub repo with README, license, and initial commit.",
        members: ["Alice"],
        category: "DevOps",
      },
      {
        id: "9",
        title: "Create Wireframes",
        priority: "low",
        description:
          "Develop low-fidelity wireframes for core screens using Figma.",
        members: ["Bob"],
        category: "UI/UX",
      },
    ],
  },
];

const chatsData: Chat[] = [
  {
    id: 1,
    name: "Spider-Man",
    lastMessage: "With great power comes great responsibility!",
    lastMessageTime: "2:30 PM",
    unreadCount: 3,
    isOnline: true,
    profilePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSqYFfmBjeg2Tta-rpEpDRY70YTSChWNMEgQ&s",
  },
  {
    id: 2,
    name: "Iron Man",
    lastMessage: "I am Iron Man. Need a suit upgrade?",
    lastMessageTime: "1:45 PM",
    unreadCount: 0,
    isOnline: false,
    profilePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSqYFfmBjeg2Tta-rpEpDRY70YTSChWNMEgQ&s",
  },
  {
    id: 3,
    name: "Wonder Woman",
    lastMessage: "Justice and truth will prevail!",
    lastMessageTime: "11:20 AM",
    unreadCount: 2,
    isOnline: true,
    profilePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSqYFfmBjeg2Tta-rpEpDRY70YTSChWNMEgQ&s",
  },
  {
    id: 4,
    name: "Batman",
    lastMessage: "I am vengeance. I am the night.",
    lastMessageTime: "10:15 AM",
    unreadCount: 1,
    isOnline: false,
    profilePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSqYFfmBjeg2Tta-rpEpDRY70YTSChWNMEgQ&s",
  },
  {
    id: 5,
    name: "Superman",
    lastMessage: "Up, up, and away!",
    lastMessageTime: "9:30 AM",
    unreadCount: 0,
    isOnline: true,
    profilePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSqYFfmBjeg2Tta-rpEpDRY70YTSChWNMEgQ&s",
  },
  {
    id: 6,
    name: "Black Widow",
    lastMessage: "I'm always picking up after you boys.",
    lastMessageTime: "8:45 AM",
    unreadCount: 4,
    isOnline: true,
    profilePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSqYFfmBjeg2Tta-rpEpDRY70YTSChWNMEgQ&s",
  },
  {
    id: 7,
    name: "Captain America",
    lastMessage: "I can do this all day.",
    lastMessageTime: "7:20 AM",
    unreadCount: 0,
    isOnline: false,
    profilePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSqYFfmBjeg2Tta-rpEpDRY70YTSChWNMEgQ&s",
  },
];

const conversationData: Conversation[] = [
  {
    id: 1,
    chatId: 1,
    name: "Iron Man",
    lastMessage: "Great! Can you show me the latest updates?",
    lastMessageTime: "10:35 AM",
    unreadCount: 0,
    isOnline: false,
    profilePicture:
      "https://wallpapers.com/images/hd/ironman-hd-4ke4pb28yu12f4yw.jpg",
    messages: [
      {
        id: 1,
        sender: "Iron Man",
        message: "Hey, how's the project coming along?",
        timestamp: "10:30 AM",
        isOwn: false,
      },
      {
        id: 2,
        sender: "You",
        message: "Going well! Just finished the authentication flow.",
        timestamp: "10:32 AM",
        isOwn: true,
      },
      {
        id: 3,
        sender: "Iron Man",
        message: "Great! Can you show me the latest updates?",
        timestamp: "10:35 AM",
        isOwn: false,
      },
    ],
  },
  {
    id: 2,
    chatId: 2,
    name: "Spider-Man",
    lastMessage: "The sticky navigation isn't working properly.",
    lastMessageTime: "11:20 AM",
    unreadCount: 0,
    isOnline: true,
    profilePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaKgamBdYhno7iU5FeZc9vVSg0DO6pTi-YRA&s",
    messages: [
      {
        id: 1,
        sender: "Spider-Man",
        message: "Need help with the web components!",
        timestamp: "11:15 AM",
        isOwn: false,
      },
      {
        id: 2,
        sender: "You",
        message: "Sure! What's the issue?",
        timestamp: "11:17 AM",
        isOwn: true,
      },
      {
        id: 3,
        sender: "Spider-Man",
        message: "The sticky navigation isn't working properly.",
        timestamp: "11:20 AM",
        isOwn: false,
      },
    ],
  },
  {
    id: 3,
    chatId: 3,
    name: "Wonder Woman",
    lastMessage: "We're making excellent progress on the frontend.",
    lastMessageTime: "11:30 AM",
    unreadCount: 2,
    isOnline: true,
    profilePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7jCl3lMb7WgkaO-K5AAKwKj9s7aQicukdQ&s",
    messages: [
      {
        id: 1,
        sender: "Wonder Woman",
        message: "Justice and truth will prevail!",
        timestamp: "11:20 AM",
        isOwn: false,
      },
      {
        id: 2,
        sender: "You",
        message: "Inspiring as always! How's the team doing?",
        timestamp: "11:25 AM",
        isOwn: true,
      },
      {
        id: 3,
        sender: "Wonder Woman",
        message: "We're making excellent progress on the frontend.",
        timestamp: "11:30 AM",
        isOwn: false,
      },
    ],
  },
  {
    id: 4,
    chatId: 4,
    name: "Batman",
    lastMessage: "The encryption is impenetrable. Trust me.",
    lastMessageTime: "10:25 AM",
    unreadCount: 1,
    isOnline: false,
    profilePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSqYFfmBjeg2Tta-rpEpDRY70YTSChWNMEgQ&s",
    messages: [
      {
        id: 1,
        sender: "Batman",
        message: "I am vengeance. I am the night.",
        timestamp: "10:15 AM",
        isOwn: false,
      },
      {
        id: 2,
        sender: "You",
        message: "Bruce, we need to discuss the security protocols.",
        timestamp: "10:20 AM",
        isOwn: true,
      },
      {
        id: 3,
        sender: "Batman",
        message: "The encryption is impenetrable. Trust me.",
        timestamp: "10:25 AM",
        isOwn: false,
      },
    ],
  },
  {
    id: 5,
    chatId: 5,
    name: "Superman",
    lastMessage: "The app is flying! Everything looks super fast.",
    lastMessageTime: "9:40 AM",
    unreadCount: 0,
    isOnline: true,
    profilePicture:
      "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2022/07/Superman-Animated.jpg",
    messages: [
      {
        id: 1,
        sender: "Superman",
        message: "Up, up, and away!",
        timestamp: "9:30 AM",
        isOwn: false,
      },
      {
        id: 2,
        sender: "You",
        message: "Clark, can you review the performance optimizations?",
        timestamp: "9:35 AM",
        isOwn: true,
      },
      {
        id: 3,
        sender: "Superman",
        message: "The app is flying! Everything looks super fast.",
        timestamp: "9:40 AM",
        isOwn: false,
      },
    ],
  },
  {
    id: 6,
    chatId: 6,
    name: "Black Widow",
    lastMessage: "Someone has to keep this team in line.",
    lastMessageTime: "8:55 AM",
    unreadCount: 4,
    isOnline: true,
    profilePicture:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2018/01/Black-Widow-The-Avengers-Poster-Cropped.jpg",
    messages: [
      {
        id: 1,
        sender: "Black Widow",
        message: "I'm always picking up after you boys.",
        timestamp: "8:45 AM",
        isOwn: false,
      },
      {
        id: 2,
        sender: "You",
        message: "Natasha, thanks for organizing the code review!",
        timestamp: "8:50 AM",
        isOwn: true,
      },
      {
        id: 3,
        sender: "Black Widow",
        message: "Someone has to keep this team in line.",
        timestamp: "8:55 AM",
        isOwn: false,
      },
    ],
  },
  {
    id: 7,
    chatId: 7,
    name: "Captain America",
    lastMessage: "That's what makes us different from the bad guys.",
    lastMessageTime: "7:30 AM",
    unreadCount: 0,
    isOnline: false,
    profilePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZFdL51AUGHUnKuBLoeycRafpNX_hvOYGW8g&s",
    messages: [
      {
        id: 1,
        sender: "Captain America",
        message: "I can do this all day.",
        timestamp: "7:20 AM",
        isOwn: false,
      },
      {
        id: 2,
        sender: "You",
        message: "Steve, the persistence is admirable!",
        timestamp: "7:25 AM",
        isOwn: true,
      },
      {
        id: 3,
        sender: "Captain America",
        message: "That's what makes us different from the bad guys.",
        timestamp: "7:30 AM",
        isOwn: false,
      },
    ],
  },
];

export { initialKanbanData, chatsData, conversationData };
