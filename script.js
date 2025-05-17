const validNames = [
  "KARUN",
  "ARIJIT_ROY",
  "K_ARYA_SEKHAR_DAS",
  "AARYAN",
  "AADESH_CHAUDHARI",
  "AAKASH_DHAMIJA",
  "AARAV_PARIKH",
  "AARUSHI_JAIN",
  "ARYAN_SINGH",
  "AAYRA_GUPTA",
  "ABHINAV_MONDAL",
  "ABHIGYAN_SETH",
  "ABHIMAN_PANWAR",
  "ABHINAV_KUMAR_TRIPATHI_",
  "PRANSHU_SINGH",
  "ADITYA_SINGH_RAWAT",
  "ADIT_KATIYAR_",
  "ADIT_K_",
  "ADITYA_DHANRAJ",
  "ADITYA_TANDON",
  "ADITYA_ANJANA",
  "ADITYA_BHATTACHARYA_",
  "ANGRY_ADITYA",
  "ADITYA_VERMA",
  "AMOGH_GUPTA_",
  "AMAN_SINGH_RATHORE",
  "AMAN_SINGH",
  "AMISH_GUPTA",
  "ANANYA_SINGH",
  "ANSHIKA",
  "ARUSHI",
  "ARYAN_ARORA",
  "ARYAN_SHARMA",
  "ARYAN",
  "ASHMITA_YADAV",
  "ASHRITA_AGARWAL",
  "AVNI_AGARWAL",
  "AVNISH",
  "AYUSH_SINGH",
  "DEEPANSHU_TANEJA",
  "DEVESH_KUMAR_MANDAL",
  "DHRUV_AHUJA",
  "DHRUV_TANEJA",
  "DURGESH_SINGH",
  "GAURANSH_AGARWAL",
  "HARSHIL_MALHOTRA",
  "JAI_VARDHAN_SINGH",
  "JATIN_SANGEWAR",
  "JAYESH_NAYAK",
  "KHUSHI_GUPTA",
  "KUSHAGRA_TRIPATHI",
  "MANAV",
  "NEIL_VERMA",
  "NISHANT_DUBEY",
  "NITIN_SINGH",
  "PIYUSH_JAIN",
  "PIYUSH",
  "PRIYANSHU",
  "RAGHAV_GUPTA",
  "RAHUL_YADAV",
  "RISHABH_GUPTA",
  "SAKSHAM_VERMA"
];

function findCertificate() {
  let input = document.getElementById("nameInput").value.trim();

  // Normalize: lowercase → uppercase and replace spaces with underscores
  const formattedName = input.toUpperCase().replace(/ +/g, "_");

  if (validNames.includes(formattedName)) {
    const filePath = `certificates/${formattedName}.JPG`;
    document.getElementById("result").innerHTML = `
      <p class="text-green-600 font-medium mb-2">Certificate found for <strong>${input}</strong>:</p>
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
