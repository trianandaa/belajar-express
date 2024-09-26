const express = require("express") //import modul express
const app = express() //inisialisasi  express
const port = 3001 //port

// route /
app.get("/", (req, res) => {
    res.send("Hello");
});

// route /about
app.get("/about", (req, res) => {
    res.send("About Us");
});

// route /contact
app.get("/contact", (req, res) => {
   // res.send("Contact Us");
   res.sendFile(__dirname +  "/contact.html");
});

// route /mahasiswa
app.get("/mahasiswa", (req, res) => {
    res.json({
        "status" : "success",
        "message" : "Data Mahasiswa",
        "data" : [
            {npm: 2226240124, nama: "tria"},
            {npm: 2226240125, nama: "nanda"},
            {npm: 2226240126, nama: "mughny"}
        ]
    })
});

// route /dosen
app.get("/dosen", (req, res) => {
    res.json({
        "status" : "success",
        "message" : "Data Dosen",
        "data" : [
            {
                prodi: "Sistem Informasi", 
                dosen: ["Iis", "Faris", "Dafid"]
            },
            {
                prodi: "Informatika", 
                dosen: ["Derry" , "Siska" , "Yohannes"]
            },
        ]
    })
});

// handle route yang tidak tedaftar
app.use("/", (req, res) => {
    res.send("<h1>404 Not Found</h1>");
});


// jalankan server
app.listen(port, () => {
    console.log(`server dapat diakses di http://localhost:${port}`);
});