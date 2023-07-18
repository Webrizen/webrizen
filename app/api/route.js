export async function GET(request) {
    const data = {
      services: [
        {
          id: "01",
          title: "Web Development",
          description: "We develop custom websites and web applications using the latest technologies and best practices.",
          image: "/placeholder.svg"
        },
        {
          id: "02",
          title: "Responsive Design",
          description: "We create mobile-friendly designs that adapt to various screen sizes and devices.",
          image: "/placeholder.svg"
        }
      ],
      products: [
        {
          title: "SoundYank",
          description: "The ultimate YouTube to MP3 converter and live streaming solution. With SoundYank, you can easily convert your favorite YouTube videos into high-quality MP3 format, allowing you to enjoy your favorite music, podcasts, interviews, and more on the go. Whether you want to stream your converted MP3 files directly on the web or download them for offline listening, SoundYank has got you covered.",
          link: "/products/soundyank.html",
        },
        {
          title: "CodeNavy",
          description: "CodeNavy is a powerful online code editor that allows developers to effortlessly paste, edit, and preview their code in real-time, all without the need for logging in. With CodeNavy, you can seamlessly write and experiment with HTML, CSS, and JavaScript code, testing your ideas instantly. Boost your productivity with our intuitive interface and convenient features, empowering you to collaborate, share, and iterate on your code hassle-free. Experience the freedom to code anytime, anywhere with CodeNavy, the ultimate solution for seamless online code editing and previewing.",
          link: "/products/codenavy.html",
        },
      ],
      portfolio: [
        {
          id: '01',
          title: "NHSE GP REALTECH",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, est doloribus voluptatem itaque quia nemo eius consectetur saepe deserunt sequi consequatur corporis! Quos et non vitae. Odio dicta ab molestiae?",
          link: "https://nhsegprealtech.com/",
          image: "/placeholder.svg",
        },
        {
          id: "02",
          title: "Reactjsofficial",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, est doloribus voluptatem itaque quia nemo eius consectetur saepe deserunt sequi consequatur corporis! Quos et non vitae. Odio dicta ab molestiae?",
          link: "https://reactjsofficial.com/",
          image: "/placeholder.svg",
        }
      ],
    };
  
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }
  