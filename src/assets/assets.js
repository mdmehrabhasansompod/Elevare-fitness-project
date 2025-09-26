import logo from "./logo.png"
import arm_icon from "./arm_icon.png"
import black_bg_logo from "./black_bg_logo.png"
import white_bg_logo from "./white_bg_logo.png"
import footer_logo from "./footer_logo.png"
import footer_logo_black from "./footer_logo_black.png"
import equipment_icon from "./equipment_icon.png"
import header_img from "./header_img.jpg"
import video1 from "./video1.mp4"
import video2 from "./video2.mp4"
import video3 from "./video3.mp4"
import video4 from "./video4.mp4"
import strength_img from "./strength_training.jpg"
import cardio_img from "./cardio_blast.jpg"
import yoga_img from "./yoga_flexibility.jpg"
import crossfit_img from "./crossfit_training.jpg"
import bootcamp_img from "./bootcampy_gym.jpg"
import functional_img from "./functional_training.jpg"
import pilates_img from "./pilates_training.jpg"
import hiit_img from "./hiit_training.jpg"
import dumbbellImg from "./dumble.jpg";
import treadmillImg from "./treadmil.jpg";
import kettlebellImg from "./kettlebell.jpg";
import benchPressImg from "./benchPress.jpg";
import rowingMachineImg from "./rowingMachine.jpg";
import exerciseBikeImg from "./exerciseBike.jpg";
import medicineBallImg from "./medicineBall.jpg";
import resistanceBandImg from "./resistanceBand.jpg";
import pullUpBarImg from "./pullUpBar.jpg";
import cableMachineImg from "./cableMachine.jpg";
import trxImg from "./trx.jpg";
import ellipticalImg from "./elliptical.jpg";
import battleRopeImg from "./battleRope.jpg";
import yogaMatImg from "./yogaMat.jpg";
import stepPlatformImg from "./stepPlatform.jpg";
import punchingBagImg from "./punchingBag.jpg";
import abWheelImg from "./abWheel.jpg";
import legPressImg from "./legPress.jpg";
import smithMachineImg from "./smithMachine.jpg";
import trainer1Img from "./trainer1Img.jpg"
import trainer2Img from "./trainer2Img.jpg"
import trainer3Img from "./trainer3Img.jpg"
import trainer4Img from "./trainer4Img.jpg"
import trainer5Img from "./trainer5Img.jpg"
import trainer6Img from "./trainer6Img.jpg"
import trainer7Img from "./trainer7Img.jpg"
import trainer8Img from "./trainer8Img.jpg"
import aboutVector from "./aboutVector.jpg"






export const assets = {
    logo,
    arm_icon,
    white_bg_logo,
    footer_logo_black,
    black_bg_logo,
    footer_logo,
    equipment_icon,
    header_img,
    video1,
    video2,
    video3,
    video4,
    aboutVector

}

export const programs = [
    {
      id: 1,
      title: "Strength Training",
      description: "Build muscle, increase strength, and boost metabolism with personalized strength routines.",
      image: strength_img,
      duration: "12 Weeks",
      difficulty: "Intermediate",
      price: 150,
      features: ["Personal Trainer", "Nutrition Plan", "Progress Tracking"]
   
    },
    {
      id: 2,
      title: "Cardio Blast",
      description: "High-energy cardio workouts to burn fat, improve endurance, and boost heart health.",
      image: cardio_img,
      duration: "8 Weeks",
      difficulty: "Beginner",
      price: 120,
      features: ["Group Sessions", "Heart Rate Monitoring", "Weekly Challenges"]

    },
    {
      id: 3,
      title: "Yoga & Flexibility",
      description: "Enhance flexibility, reduce stress, and improve posture with our guided yoga sessions.",
      image: yoga_img,
      duration: "6 Weeks",
      difficulty: "All Levels",
      price: 100,
      features: ["Guided Sessions", "Meditation", "Flexibility Tracking"]
  
    },
    {
      id: 4,
      title: "HIIT Training",
      description: "Short bursts of high-intensity exercises for maximum calorie burn and fitness improvement.",
      image: hiit_img,
      duration: "4 Weeks",
      difficulty: "Advanced",
      price: 130,
      features: ["High Intensity", "Interval Workouts", "Video Guidance"]

    },
    {
      id: 5,
      title: "Functional Training",
      description: "Train your body for daily life movements, improving balance, strength, and mobility.",
      image: functional_img,
      duration: "10 Weeks",
      difficulty: "Intermediate",
      price: 140,
      features: ["Full Body Workouts", "Equipment-Free Options", "Trainer Support"]

    },
    {
      id: 6,
      title: "CrossFit",
      description: "High-intensity, functional movements to increase overall fitness, endurance, and strength.",
      image: crossfit_img,
      duration: "8 Weeks",
      difficulty: "Advanced",
      price: 160,
      features: ["Group Sessions", "Competition Prep", "Strength & Cardio Mix"]
    },
    {
      id: 7,
      title: "Pilates",
      description: "Improve core strength, posture, and flexibility with controlled Pilates exercises.",
      image: pilates_img,
      duration: "6 Weeks",
      difficulty: "Beginner",
      price: 110,
      features: ["Mat & Equipment", "Core Focused", "Guided Instruction"]
    },
    {
      id: 8,
      title: "Bootcamp",
      description: "Group-style high-intensity sessions designed to push limits and maximize results.",
      image: bootcamp_img,
      duration: "4 Weeks",
      difficulty: "All Levels",
      price: 125,
      features: ["Outdoor & Indoor", "Strength + Cardio Mix", "Motivational Trainers"]
    },
  ];
  



  
  export const equipments = [
    { id: 1, name: "Adjustable Dumbbell Set", image: dumbbellImg, type: "Strength", brand: "IronMax", weightRange: "5–50 kg", features: ["Adjustable weights", "Ergonomic grip", "Durable coating"] },
    { id: 2, name: "Pro Treadmill", image: treadmillImg, type: "Cardio", brand: "RunTech", features: ["Incline settings", "Heart-rate monitor", "Shock absorption"] },
    { id: 3, name: "Competition Kettlebell Set", image: kettlebellImg, type: "Strength", brand: "KettlePro", weightRange: "8–32 kg", features: ["Cast iron", "Powder coated", "Color coded"] },
    { id: 4, name: "Olympic Bench Press", image: benchPressImg, type: "Strength", brand: "PowerLift", features: ["Adjustable incline", "Safety pins", "High load capacity"] },
    { id: 5, name: "Rowing Machine", image: rowingMachineImg, type: "Cardio", brand: "RowFit", features: ["Smooth resistance", "Digital tracking", "Foldable design"] },
    { id: 6, name: "Exercise Bike", image: exerciseBikeImg, type: "Cardio", brand: "CyclePro", features: ["Adjustable seat", "Resistance control", "LCD display"] },
    { id: 7, name: "Medicine Ball Set", image: medicineBallImg, type: "Functional", brand: "CoreFit", weightRange: "2–10 kg", features: ["Anti-slip", "Durable rubber", "Perfect for HIIT"] },
    { id: 8, name: "Resistance Band Set", image: resistanceBandImg, type: "Functional", brand: "FlexPro", features: ["Different resistance levels", "Portable", "Latex free"] },
    { id: 9, name: "Pull-Up Bar", image: pullUpBarImg, type: "Strength", brand: "SteelGrip", features: ["Wall mounted", "Multi-grip", "Heavy-duty steel"] },
    { id: 10, name: "Cable Machine", image: cableMachineImg, type: "Strength", brand: "MultiGym", features: ["Dual stack", "Adjustable pulleys", "Smooth operation"] },
    { id: 11, name: "TRX Suspension Trainer", image: trxImg, type: "Functional", brand: "TRX Pro", features: ["Portable", "Full body workout", "Indoor/outdoor use"] },
    { id: 12, name: "Elliptical Trainer", image: ellipticalImg, type: "Cardio", brand: "CardioMax", features: ["Low impact", "LCD display", "Multiple resistance levels"] },
    { id: 13, name: "Battle Rope", image: battleRopeImg, type: "Functional", brand: "RopeFit", features: ["Durable nylon", "Thick rope", "Indoor/outdoor use"] },
    { id: 14, name: "Yoga Mat", image: yogaMatImg, type: "Flexibility", brand: "ZenMat", features: ["Non-slip", "Extra thick", "Eco-friendly material"] },
    { id: 15, name: "Step Platform", image: stepPlatformImg, type: "Cardio", brand: "StepPro", features: ["Height adjustable", "Non-slip", "Durable construction"] },
    { id: 16, name: "Punching Bag", image: punchingBagImg, type: "Cardio & Strength", brand: "BoxFit", features: ["Heavy-duty canvas", "360-degree rotation", "Indoor use"] },
    { id: 17, name: "Ab Wheel Roller", image: abWheelImg, type: "Strength", brand: "CoreX", features: ["Ergonomic handles", "Smooth rolling", "Compact design"] },
    { id: 18, name: "Leg Press Machine", image: legPressImg, type: "Strength", brand: "LegPro", features: ["Heavy duty", "Adjustable seat", "Multi-angle press"] },
    { id: 19, name: "Smith Machine", image: smithMachineImg, type: "Strength", brand: "ProGym", features: ["Guided barbell", "Safety stops", "Multiple weight levels"] }
  ];

  export const membershipPlans = [
    {
      id: 1,
      name: "Bronze Plan",
      price: 49,
      duration: "1 Month",
      features: [
        "Access to all cardio equipment",
        "1 group class/week",
        "Locker room access",
      ],
    },
    {
      id: 2,
      name: "Silver Plan",
      price: 89,
      duration: "1 Month",
      features: [
        "Access to all equipment",
        "3 group classes/week",
        "Locker + Towel service",
        "Personalized fitness assessment",
      ],
    },
    {
      id: 3,
      name: "Gold Plan",
      price: 129,
      duration: "1 Month",
      features: [
        "Unlimited equipment access",
        "Unlimited group classes",
        "Locker + Towel + Sauna access",
        "Personal trainer 1 session/week",
        "Nutrition consultation",
      ],
    },
    {
      id: 4,
      name: "Platinum Plan",
      price: 199,
      duration: "1 Month",
      features: [
        "All Gold Plan features",
        "Unlimited personal training",
        "Priority booking for classes",
        "VIP lounge access",
        "Monthly body composition analysis",
      ],
    },
  ];
  


  
  export const trainers = [
    {
      id: 1,
      name: "John Smith",
      specialty: "Strength & Conditioning",
      experience: "10 years",
      certifications: ["NASM Certified", "CPR Certified"],
      bio: "Expert in building muscle and improving strength with personalized programs.",
      image: trainer1Img,
      instagram: "#",
      linkedin: "#"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      specialty: "Yoga & Flexibility",
      experience: "8 years",
      certifications: ["RYT 500", "Meditation Coach"],
      bio: "Passionate about enhancing flexibility, balance, and mental wellness.",
      image: trainer2Img,
      instagram: "#",
      linkedin: "#"
    },
    {
      id: 3,
      name: "Michael Lee",
      specialty: "Cardio & HIIT",
      experience: "7 years",
      certifications: ["ACE Certified", "Group Fitness Instructor"],
      bio: "High-energy trainer specializing in fat loss and endurance improvement.",
      image: trainer3Img,
      instagram: "#",
      linkedin: "#"
    },
    {
      id: 4,
      name: "Emma Davis",
      specialty: "Pilates & Core",
      experience: "6 years",
      certifications: ["Pilates Instructor", "Functional Trainer"],
      bio: "Focused on improving posture, core strength, and overall body alignment.",
      image: trainer4Img,
      instagram: "#",
      linkedin: "#"
    },
    {
      id: 5,
      name: "David Wilson",
      specialty: "CrossFit & Functional Training",
      experience: "9 years",
      certifications: ["CrossFit Level 2", "Strength Coach"],
      bio: "Expert in functional movements, endurance, and high-intensity training.",
      image: trainer5Img,
      instagram: "#",
      linkedin: "#"
    },
    {
      id: 6,
      name: "Olivia Martinez",
      specialty: "Bootcamp & Group Training",
      experience: "5 years",
      certifications: ["Group Fitness Instructor", "Nutrition Coach"],
      bio: "Energetic trainer motivating clients to push limits and achieve goals.",
      image: trainer6Img,
      instagram: "#",
      linkedin: "#"
    },
    {
      id: 7,
      name: "Daniel Brown",
      specialty: "Boxing & Martial Arts",
      experience: "8 years",
      certifications: ["Boxing Coach", "CPR Certified"],
      bio: "Combines technique and fitness to build strength and confidence.",
      image: trainer7Img,
      instagram: "#",
      linkedin: "#"
    },
    {
      id: 8,
      name: "Sophia Taylor",
      specialty: "Functional & Mobility Training",
      experience: "6 years",
      certifications: ["Functional Movement Specialist", "Yoga Instructor"],
      bio: "Helps clients achieve peak mobility, balance, and functional strength.",
      image: trainer8Img,
      instagram: "#",
      linkedin: "#"
    }
  ];
  