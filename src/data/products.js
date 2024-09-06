import productOne from "../assets/images/product-1.1.png";
import productOneVideo from "../assets/images/product-1.mp4";
import productOneI2 from "../assets/images/product-1.2.png";
import productOneI3 from "../assets/images/product-1.3.png";
import productTwo from "../assets/images/product-2.1.png";
import productTwoVideo from "../assets/images/product-2.mp4";
import productTwoI2 from "../assets/images/product-2.1.png";
import productTwoI3 from "../assets/images/product-2.1.png";
import productThree from "../assets/images/product-3.1.png";
import productThreeVideo from "../assets/images/product-3.mp4";
import productThreeI2 from "../assets/images/product-3.1.png";
import productThreeI3 from "../assets/images/product-3.1.png";
import avatar1 from "../assets/images/avatar-1.png";
import avatar2 from "../assets/images/avatar-2.png";
import avatar3 from "../assets/images/avatar-3.png";
import avatar4 from "../assets/images/avatar-4.png";
import avatar5 from "../assets/images/avatar-5.png";
import avatar6 from "../assets/images/avatar-6.png";
import avatar7 from "../assets/images/avatar-7.png";
import avatar8 from "../assets/images/avatar-8.png";
import avatar9 from "../assets/images/avatar-9.png";

export const products = [
  {
    id: 1,
    product_name: "PS5 Wireless Controller",
    cover_img: {
      src: productOne,
      alt: "product one images 1.1",
    },
    video: productOneVideo,
    images: [
      { id: 1, src: productOneI2, alt: "product one images 1.2" },
      { id: 2, src: productOneI3, alt: "product one images 1.3" },
    ],
    stars: "4.6",
    colors: ["#f00", "#00f"],
    original_price: 80.99,
    discount: 20,
    availability: 8,
    features: [
      "Discover a deeper, highly immersive gaming experience with the innovative new PS5™ controller, featuring haptic feedback and dynamic trigger effects. The DualSense wireless controller also includes a built-in microphone and create button, all integrated into an iconic, comfortable design.",
    ],
    reviews: [
      {
        id: 1,
        name: "john doe",
        avatar: {
          src: avatar1,
          alt: "avatar 1",
        },
        date: "15 May, 2023",
        message:
          "It does come with a stylish design but it is also a very good and reliable product. I will usually get blister after hours of gaming, but not for using this controller. When I am using it, it really feel like part of my body. The haptic feedback technology also enhance the gaming experience. I can feel every impact my character is experiencing in the game. The only downside is that it comes without the cable.",
        evaluation: "5",
      },
      {
        id: 2,
        name: "dany robens",
        avatar: {
          src: avatar2,
          alt: "avatar 2",
        },
        date: "02 May, 2023",
        message:
          "I don’t think you realize just how quickly the batteries die on these until you purchase a new one. I find after a couple of years these have seen better days. They seem quite expensive now so I always try and pick them up when they are on offer.",
        evaluation: "5",
      },
      {
        id: 3,
        name: "kievn holstn",
        avatar: {
          src: avatar3,
          alt: "avatar 3",
        },
        date: "20 April, 2023",
        message:
          "The PlayStation 5 DualSense Wireless Controller is a game-changer in gaming experience. With its innovative haptic feedback and adaptive triggers, it immerses you deeper into the game. The ergonomic design ensures comfort during long gaming sessions. I love using when playing FIFA and Call of Duty!",
        evaluation: "5",
      },
    ],
  },
  {
    id: 2,
    product_name: "Samsung Odyssey G7",
    cover_img: {
      src: productTwo,
      alt: "product two images 1.1",
    },
    video: productTwoVideo,
    images: [
      { id: 1, src: productTwoI2, alt: "product two images 1.2" },
      { id: 2, src: productTwoI3, alt: "product two images 1.3" },
    ],
    stars: "4.1",
    colors: ["red", "blue"],
    original_price: 550.45,
    discount: 15,
    availability: 5,
    features: [
      "QHD resolution & IPS panel with Display HDR 600 delivers more contrast, with deeper blacks and brighter whites to help you uncover enemies or secrets lurking in the shadows.",
      "240Hz refresh rate eliminates lag for ultra-smooth action. 1ms response time delivers blur-free frames, with minimized ghosting.",
      "G-Sync compatibility keeps the GPU and panel synced up to eliminate screen-lag, and image tears. Stable and stutter-free with AMD FreeSync Premium Pro.",
      "Samsung Gaming Hub allows instant access to top cloud gaming services, your favorite consoles as well. Smooth visuals and responsive gameplay are powered by advanced game streaming technology without downloads or storage limits – just turn on and play.",
      "1 x Displayport, 2 x HDMI 2.1, and 2 x USB ports with Ethernet, Wifi and Bluetooth make this the hub of your set up.",
    ],
    reviews: [
      {
        id: 1,
        name: "sami alrade",
        avatar: {
          src: avatar4,
          alt: "avatar 4",
        },
        date: "15 Augest, 2024",
        message:
          "The monitor presents 4K well from the PS5. It may take some tinkering to get the colours to your liking, but that's a personal preference. The picture is great - sharp, clear and doesn't suffer from much blur as far as I can tell. The UI is awful. I have no use for the smart TV feature as I use this as a monitor for a laptop and PS5. The auto switching between inputs is hit and miss and is a pain to do it manually. If Samsung allowed for easier switching between sources it would make for a much better experience.",
        evaluation: "4",
      },
      {
        id: 2,
        name: "sara jiffre",
        avatar: {
          src: avatar5,
          alt: "avatar 5",
        },
        date: "10 Augest, 2024",
        message:
          "I recently got my hands on this amazing monitor, and I must say that it has exceeded my expectations in every way. The screen size of 43 inches and a 144Hz refresh rate make it perfect for gaming enthusiasts like myself. The screen is so clear and precise that I can see every detail even in the most complex and fast-paced games. I also love the extra options available in the menu that allows me to customize my settings to suit my needs.",
        evaluation: "5",
      },
      {
        id: 3,
        name: "klodia boston",
        avatar: {
          src: avatar6,
          alt: "avatar 6",
        },
        date: "30 July, 2024",
        message:
          "The monitor size is awesome for productivity. Working with programs like Cubase, Premiere Pro and Photoshop with a monitor of this size is absolutely awesome and I'll never go back to a smaller monitor. Unfortunately I find that the picture quality and the colour accuracy of this monitor to be less than ideal considering the price you pay.",
        evaluation: "3.5",
      },
    ],
  },
  {
    id: 3,
    product_name: "JBL Quantum 810 Headset",
    cover_img: {
      src: productThree,
      alt: "product three images 1.1",
    },
    video: productThreeVideo,
    images: [
      { id: 1, src: productThreeI2, alt: "product three images 1.2" },
      { id: 2, src: productThreeI3, alt: "product three images 1.3" },
    ],
    colors: ["red", "blue"],
    stars: "4.3",
    original_price: 179.99,
    discount: 33,
    availability: 8,
    features: [
      "Sound is survival and with these headphones you won't miss a beat; feel like you're stepping into the game with dual surround sound technology and 50 mm hi-res drivers that pick up every audio detail",
      "Never miss a second thanks to the dual solution of both wireless and Bluetooth, which helps to avoid audio lag and dropouts; customise audio settings to find the game-to-Discord ratio that suits you",
      "With durable leather wrapping and soft, lightweight memory foam, these headphones are designed to remain comfortable, so you'll stay comfortable throughout your longest gaming marathons",
      "In addition to 30 hours of playtime, Quantum 810 allows you to charge your headphones while still using them, meaning there never has to be a gap in your game play or listening",
      "The directional voice-focus boom microphone and noise suppression technology allows your voice to ring through loud and clear for sharp and quick reactions from your teammates in the heat of the game",
    ],
    reviews: [
      {
        id: 1,
        name: "katren sembson",
        avatar: {
          src: avatar7,
          alt: "avatar 7",
        },
        date: "25 June, 2024",
        message:
          "The build quality of this headset is excellent, and they are very comfortable to wear. However, the headset is quite large and looks a bit awkward on my head. The bass is overly strong, requiring adjustment via the equalizer. Many users have reported that the surround sound seems tinny and subpar. From my experience with various headsets, this tinny sound is typical of surround sound in general. It takes some time to get accustomed to it. You can test this yourself on Windows by enabling spatial audio; initially, it will sound tinny, but you will adjust to it over time.",
        evaluation: "5",
      },
      {
        id: 2,
        name: "mariem alahmed",
        avatar: {
          src: avatar8,
          alt: "avatar 8",
        },
        date: "20 June, 2024",
        message:
          "I placed an order for this product with expectations of an average headset, but I was pleasantly surprised upon receiving it. The audio quality surpassed my expectations and proved to be incredibly helpful in FPS games like Rainbow Six Siege, where footsteps are easily discernible. The ANC feature caught me off guard as well. Despite my open window and noisy neighbors mowing their lawn, activating ANC with low-volume audio effectively blocked out the distractions. The battery life is impressive, lasting around 7 hours per charge even with ANC enabled. Comfort is also a highlight, with a snug yet not bothersome clamping force and plush ear muffs. The headset accommodates larger ears and heads due to its adjustable size. I would definitely recommend considering this headset, especially when it's on sale :)",
        evaluation: "5",
      },
      {
        id: 3,
        name: "roqia saeed",
        avatar: {
          src: avatar9,
          alt: "avatar 9",
        },
        date: "05 June, 2024",
        message:
          "I had a Hyperx Cloud Alpha before (which I bought for the same price at the time) and this one from JBL is much better in everything, audio quality, microphone, construction, you feel like you have a Premium headset, very comfortable, its software is very good and well organized with several modification options, the RGB is wonderful but uses more battery, and continuing to talk about battery, its battery is very durable, I played yesterday all day and spent practically nothing, this is the first wireless headset I had and it is wonderful, I was finally able to get rid of the 5 meters of cable from the previous headset.",
        evaluation: "4.5",
      },
    ],
  },
];
