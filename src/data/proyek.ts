export interface ProyekItem {  
  id: string;  
  title: string;  
  category: 'Web' | 'Mobile' | 'IoT' | 'UI/UX Design';  
  description: string;  
  tools: string[]; 
  image: string;
} 

export const daftarProyek: ProyekItem[] = [  
  {    
    id: '1',    
    title: 'Managemen Magang',    
    category: 'Web', 
    description: 'Manajemen Magang is a school-based web application developed as part of the 2025 Software Engineering Industry Class. The platform is designed to help schools manage student internship activities, from data management to daily reporting. It features three roles: Admin, Student, and Teacher. Admins manage the system and its data, Students can search and apply for internship placements (DUDI) and submit daily journals, while Teachers review internship requests and approve students daily journals.',    
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/Magang.png' 
  },  
  {   
    id: '2',    
    title: 'Managemen Siswa',    
    category: 'Web',    
    description: 'Manajemen Siswa is a web application developed as an Industry Class project to help schools record and monitor student violations. The system records different types of violations along with their assigned points, while providing student lists, violation records, and information about students with the highest number of violations. The project is designed to help schools manage disciplinary data in a more structured and accessible way.',    
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/Siswa.png'
  },  
  {    
    id: '3',    
    title: 'SIPESS',    
    category: 'Web',    
    description: 'SIPESS is a school facility borrowing platform developed as an Industry Class project. The platform allows users to request various school facilities while helping managers organize borrowing requests based on item categories. It features three roles: Admin, Manager, and Borrower. Each facility category has its own manager, so requests are directed to the appropriate person, such as the manager responsible for electronic equipment or sports equipment.',    
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/Peminjaman.png'
  },
  {    
    id: '4',    
    title: 'Frezzz News',    
    category: 'UI/UX Design',    
    description: 'Frezzz News is a UI design project for a news website created as a school assignment. The project focuses on presenting news and information in a clear, structured, and easy-to-navigate interface. I designed the news pages, categories, and various interface elements with a focus on information hierarchy and user experience.',    
    tools: ['Tailwind CSS', 'HTML'],
    image: '/Berita.png'
  },
  {    
    id: '5',    
    title: 'Pustaku',    
    category: 'UI/UX Design',
    description: 'Pustaku is a library platform concept designed to connect readers with registered libraries across Indonesia. Users can search for books, check their availability, and choose which library they want to borrow from. The platform features three roles: Admin, Borrower, and Librarian. This project was developed as a school assignment based on needs observed in my surroundings and is currently in the UI/UX design stage using Figma.',    
    tools: ['Figma'],
    image: '/Pustakuu.png'
  },
  {    
    id: '6',    
    title: 'Litera',    
    category: 'UI/UX Design',    
    description: 'Litera is a mobile reading platform concept inspired by applications such as Wattpad and NovelToon. The project was created as a school assignment based on a need observed in my surroundings. Litera allows me to bring together two of my interests, literature and design, into a single project. Using Figma, I designed a digital reading experience focused on reader comfort, story discovery, and a visual identity with its own character.',    
    tools: ['Figma'],
    image: '/Litera.png'
  },
  {    
    id: '7',    
    title: 'Pantau Sungai',    
    category: 'IoT',    
    description: 'Pantau Sungai is an IoT project designed to monitor river water levels and provide real-time warnings based on the distance between the water surface and the sensor. The system uses an ESP32 connected to an LCD, sensor, and buzzer. When the water level is within a safe range, the system sends a safe status to the server and displays it on the LCD. As the water level rises and approaches the warning threshold, the system changes to a warning status and activates the buzzer at a moderate volume. When the water reaches the critical level, the system displays a danger status and activates the buzzer at a higher volume as an alert.',    
    tools: ['Wokwi', 'C++'],
    image: '/IoT.png'
  }
];