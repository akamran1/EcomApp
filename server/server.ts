import ac_module from "./ac/getac";
import vm_module from "./vm/getvm";
import * as express from "express";
import * as cors from "cors";

let app=express();
app.use(cors());
app.use("/ac", ac_module);
app.use("/vw", vm_module);

let port= process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log("server started")
});
