const express =require("express")
const axios = require("axios")
const cors = require('cors')
const app = express();
app.use(cors());

app.get("/test", async (req, res) => {
  const data = await getToken();
  const products=await getProducts(data.data.token);
  res.json(products);
  
});
async function getToken() {

    try{
        const response = await axios({
            method: "post",
            url: `https://devcore02.cimet.io/v1/generate-token`,
            data: {
                "session_id":"eyJpdiI6IkVNUkZ1N0hlSHhHSnJ3Vjl4aUlxc0E9PSIsInZhbHVlIjoieFlxa1wvVDYxQWl5U2pxMDFcL0R6ZVVvdEN6Mkk0R29TRDN3ZnN0U3VGcER0cEFMa2NVb0xNcDJudjlRTHRUbGJkIiwibWFjIjoiMTE0MmU0MGE5YmJhMzY4Nzc4MDExNmZkNTI1MjZhMGE3OTQyMDZmOTc1MTVmZDM1Mzc3ZmJmNjhmMzllOGYxYSJ9"
            },
        
           headers: {
            'Content-Type': 'application/json',
            'api-key': '4NKQ3-815C2-8T5Q2-16318-55301',
           }
          });
        
          return response.data;}
          catch(error){
             return error.response;
          }
        };


async function getProducts(token) {
   // token=token.slice(1, -1);
   //console.log(token)
try{
  const response = await axios({
    
    method: "post",
    url: `https://devcore02.cimet.io/v1/plan-list`,
    data: {
        "session_id":"eyJpdiI6IkVNUkZ1N0hlSHhHSnJ3Vjl4aUlxc0E9PSIsInZhbHVlIjoieFlxa1wvVDYxQWl5U2pxMDFcL0R6ZVVvdEN6Mkk0R29TRDN3ZnN0U3VGcER0cEFMa2NVb0xNcDJudjlRTHRUbGJkIiwibWFjIjoiMTE0MmU0MGE5YmJhMzY4Nzc4MDExNmZkNTI1MjZhMGE3OTQyMDZmOTc1MTVmZDM1Mzc3ZmJmNjhmMzllOGYxYSJ9"
    },

   headers: {
    'Content-Type': 'application/json',
    'api-key': '4NKQ3-815C2-8T5Q2-16318-55301',
    'auth-token':token
}
  });
  //console.log(response.data);
  return response.data;}
  catch(error){
    return error.response.data;
  }
};

app.listen(3001,()=>console.log("Server listening on 6000"));

