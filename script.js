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
  const name = document.getElementById("nameInput").value.trim().toUpperCase().replace(/ /g, "_");
  if (validNames.includes(name)) {
    const filePath = `certificates/${name}.JPG`;
    document.getElementById("result").innerHTML = `
      <p>Certificate found for ${name.replace(/_/g, " ")}:</p>
      <a href="${filePath}" download>Download Certificate</a>
      <br><br>
      <img src="${filePath}" alt="Certificate" style="max-width: 100%; border: 1px solid #ccc; padding: 10px;" />
    `;
  } else {
    document.getElementById("result").innerHTML = `<p style="color:red;">Name not found. Please check spelling and try again.</p>`;
  }
}