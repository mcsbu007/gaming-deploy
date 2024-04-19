const router = require("express").Router();
const User = require("../models/User");
const Resource = require("../models/Resource");


router.post("/newAccount", async (req, res) => {
    const {email, name, role, department, address, gender, password, phonenum} = req.body.data;
    try{
        const existingUser = await User.findOne({email: email})
        if(existingUser){
            return res.status(200).json({success: false, error:"User already existed"});
        }
        let user = new User({
            email:email, name:name, role:role, department:department, address:address, gender:gender, password:password, phonenum:phonenum
        });
        user.save();
        res.status(200).json({ success: true});
    }catch(error){
        res.status(400).json({success: false, error: error.message})
    }
})

router.get("/allAccount", async (req,res)=>{
    try{
        const data = await User.find({});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
      }
})

router.post("/deleteAccount", async(req,res)=>{
    const email = req.body.email;
    await User.findOneAndDelete({email: email});
    try{
    res.status(200).json({success:true});
    }
    catch(error){
        res.status(400).json({scuuess:false, error:error})
    }
})


router.post("/passwordRecovery", async(req,res) =>{
    const {email, newPW, adminPW} = req.body.data;
    const NonExistUser = await User.findOne({email:email});
    try{
        if(!NonExistUser){
            return res.status(400).json({success:false,error:"Password recover faild. No such User"})
        }
        await User.findOneAndUpdate({email:email},{password:newPW});
        res.status(200).json({success:true});
    }catch(error){
        console.log(error);
        res.json({sccuess:false, error:error})
        res.status(400).json({scuuess:false, error:error})
    }
});


// From Ming
router.post("/addRoom", async (req, res) => {
    console.log(req.body);
    const {roomType, roomNumber, roomDepartment} = req.body;

    try{
        if (!roomType || !roomNumber || !roomDepartment) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        const newRoom = new Resource({
            roomType,
            roomNumber,
            roomDepartment
        });

        await newRoom.save(); // Save the room to the database
        res.status(200).json(newRoom); // Send back the created room
    }catch(error){
        res.status(400).json({success: false, error: error.message})
    }
})

router.get("/allRoom", async (req,res)=>{
    console.log("Fetching all rooms...");
    try{
        const data = await Resource.find({});
        
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
      }
})

// delete room
router.post('/deleteRooms', async (req, res) => {
    const { ids } = req.body; // Array of room IDs to delete
    console.log(ids);
    try {
      await Resource.deleteMany({ _id: { $in: ids } });
      console.log()
      res.status(200).json({ message: 'Rooms deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting rooms', error: error.message });
    }
  });


// Ming End Here

module.exports = router;
