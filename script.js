const validNames = [
  "K_ARYA_SEKHAR_DAS",
  "PRANSHU_SINGH",
  "AARUSHI_JAIN",
  "ADIT_K",
  "ANSEL_SHARMA",
  "AAKASH_DHAMIJA",
  "AADESH_CHAUDHARI",
  "SANCHIT",
  "TONY_KLOR",
  "ALOK_AGARWAL",
  "AKSHIT_MAKHIJA",
  "ANSH_AGRAWAL",
  "ADIT_KATIYAR",
  "ADITYA_ANJANA",
  "AARAV_PARIKH",
  "AGRIMA_DIWAKAR",
  "AARYAN",
  "ARYAN_GUPTA",
  "ARIJIT_ROY",
  "ADITYA",
  "AKHIL_PRAKASH",
  "ARNAV_AGARWAL",
  "AMOGH_MATHANKER",
  "ADITYA_TANDON",
  "AJEET_KUMAR_MEENA",
  "KRITIKA_BENJWAL",
  "ADITYA_VERMA",
  "AMOGH_SRIVASTAVA",
  "ANUBHAV_DAGA",
  "ANKIT_PATEL",
  "AKSHAT_PANDEY",
  "AAYRA_GUPTA",
  "ABHIMAN_PANWAR",
  "AMOGH_GUPTA",
  "ANKIT_MITTAL",
  "AARYAN_VATSA",
  "ARUNANSHU_BASU",
  "ARHAAN_ABDULLAH",
  "ABHINAV_KUMAR_TRIPATHI",
  "ARYA_DUTTAGUOTA",
  "ANUSH_SHARMA",
  "ANANYA_RUPESH_MALGUNDKAR",
  "ARJUN_SINGH",
  "ARYAN_BHATIA",
  "ARYAMAN_SINGH",
  "ABHINAV_MONDAL",
  "AKARSH_KUMAR",
  "ANANAY_GUPTA",
  "AISHWARYA_SINHA",
  "ANSH_MISHRA",
  "ANKUR_ARYAN",
  "ADITYA_SINGH_RAWAT",
  "AKSHAT_KUMAR",
  "ADITYA_BHATTACHARYA",
  "ANGRY_ADITYA",
  "ADITYA_DHANRAJ",
  "AKSHAY_SABHARWAL",
  "ANANT",
  "KARUN",
  "ANIKET_MOHANTY",
  "ABHIGYAN_SETH",
  "ARYAN_SINGH"
];

function formatName(input) {
  return input
    .trim()
    .toLowerCase()
    .split(/\s+/)      // Split on any number of spaces
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize
    .join("_")         // Join with underscores
    .toUpperCase();    // Final uppercase (redundant but safe)
}

function findCertificate() {
  const rawInput = document.getElementById("nameInput").value;
  const formattedName = formatName(rawInput);

  if (validNames.includes(formattedName)) {
    const filePath = `certificates/${formattedName}.JPG`;
    document.getElementById("result").innerHTML = `
      <p class="text-green-600 font-medium mb-2">Certificate found for <strong>${rawInput}</strong>:</p>
      <a href="${filePath}" download class="text-blue-600 underline">⬇️ Download Certificate</a>
      <div class="mt-4">
        <img src="${filePath}" alt="Certificate" class="mx-auto border rounded-lg shadow-md max-w-full" />
      </div>
    `;
  } else {
    document.getElementById("result").innerHTML = `
      <p class="text-red-600 font-semibold">❌ Name not found. Please check your spelling.</p>
    `;
  }
}

