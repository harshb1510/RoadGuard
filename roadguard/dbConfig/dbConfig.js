import mongoose from "mongoose";


export async function connect() {
    try{
        mongoose.connect("mongodb+srv://tanishkh:tanishkh@cluster0.y0v4nz6.mongodb.net/?retryWrites=true&w=majority");
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("Database connected");
        })
        connection.on("error", () => {
            console.log("Error connecting to database");
            process.exit();
        })

    }catch(error){
        console.log("Error connecting to database");
    }
}
    
// import mongoose from "mongoose";

// async function connect() {
//     try {
//         await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });

//         const connection = mongoose.connection;

//         connection.on("connected", () => {
//             console.log("Database connected");
//         });

//         connection.on("error", (err) => {
//             console.error("Error connecting to database:", err);
//             process.exit(1);
//         });
//     } catch (error) {
//         console.error("Error connecting to database:", error);
//     }
// }

