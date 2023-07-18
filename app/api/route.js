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
          id: "01",
          title: "SoundYank",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, est doloribus voluptatem itaque quia nemo eius consectetur saepe deserunt sequi consequatur corporis! Quos et non vitae. Odio dicta ab molestiae?",
          link: "/products/soundyank.html",
          image: "/placeholder.svg"
        },
        {
          id: "02",
          title: "CodeNavy",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, est doloribus voluptatem itaque quia nemo eius consectetur saepe deserunt sequi consequatur corporis! Quos et non vitae. Odio dicta ab molestiae?",
          link: "/products/codenavy.html",
          image: "/placeholder.svg"
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
      about: [
        {
          image: "/copy.svg",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, est doloribus voluptatem itaque quia nemo eius consectetur saepe deserunt sequi consequatur corporis! Quos et non vitae. Odio dicta ab molestiae?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, est doloribus voluptatem itaque quia nemo eius consectetur saepe deserunt sequi consequatur corporis! Quos et non vitae. Odio dicta ab molestiae?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, est doloribus voluptatem itaque quia nemo eius consectetur saepe deserunt sequi consequatur corporis! Quos et non vitae. Odio dicta ab molestiae?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, est doloribus voluptatem itaque quia nemo eius consectetur saepe deserunt sequi consequatur corporis! Quos et non vitae. Odio dicta ab molestiae?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, est doloribus voluptatem itaque quia nemo eius consectetur saepe deserunt sequi consequatur corporis! Quos et non vitae. Odio dicta ab molestiae?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, est doloribus voluptatem itaque quia nemo eius consectetur saepe deserunt sequi consequatur corporis! Quos et non vitae. Odio dicta ab molestiae?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, est doloribus voluptatem itaque quia nemo eius consectetur saepe deserunt sequi consequatur corporis! Quos et non vitae. Odio dicta ab molestiae?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, est doloribus voluptatem itaque quia nemo eius consectetur saepe deserunt sequi consequatur corporis! Quos et non vitae. Odio dicta ab molestiae?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, est doloribus voluptatem itaque quia nemo eius consectetur saepe deserunt sequi consequatur corporis! Quos et non vitae. Odio dicta ab molestiae?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, est doloribus voluptatem itaque quia nemo eius consectetur saepe deserunt sequi consequatur corporis! Quos et non vitae. Odio dicta ab molestiae?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, est doloribus voluptatem itaque quia nemo eius consectetur saepe deserunt sequi consequatur corporis! Quos et non vitae. Odio dicta ab molestiae?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, est doloribus voluptatem itaque quia nemo eius consectetur saepe deserunt sequi consequatur corporis! Quos et non vitae. Odio dicta ab molestiae?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, est doloribus voluptatem itaque quia nemo eius consectetur saepe deserunt sequi consequatur corporis! Quos et non vitae. Odio dicta ab molestiae?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, est doloribus voluptatem itaque quia nemo eius consectetur saepe deserunt sequi consequatur corporis! Quos et non vitae. Odio dicta ab molestiae?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, est doloribus voluptatem itaque quia nemo eius consectetur saepe deserunt sequi consequatur corporis! Quos et non vitae. Odio dicta ab molestiae?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, est doloribus voluptatem itaque quia nemo eius consectetur saepe deserunt sequi consequatur corporis! Quos et non vitae.",
          phone: 918761820422,
          email: "webrizen@gmail.com",
          instagram: "https://instagram.com/Arshahdul_ahmed",
          whatsapp: "https://wa.me/+918761820422"
        }
      ]
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
  