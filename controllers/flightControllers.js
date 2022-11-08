const {flightModel} = require('../model/Flight') 

//GET ALL FLIGHTS
exports.getFlight = async(req, res) => {
    try {
        let flights = flightModel;
        res.status(200).json(flights); 
    } catch(err) {
        res.status(500).json({message:err});
    }
    
}
// get a flight

exports.singleFlight = async (req,res)=> {
    
    try {
        let id = req.params.id;
        let sflight = flightModel.find(flight=> flight.id == id)
        res.status(200).json(sflight)
    } catch(err) {
        res.status(500).json({message: err})
    }
}
 
//create new flight
exports.createFlight = async(req,res)=> {
    try {
        let newFlight = await req.body
        flightModel.push(newFlight)
        for(let i = 0; i< flightModel.length; i++) {
            flightModel[i].id = i;
        }
        res.status(200).json(newFlight)
    } catch(err) {
        res.status(400).json({message:err})
    }
}

// update user

exports.updateFlight = async(req,res)=> {
    try {
        let id = req.params.id;
        let uflight = flightModel.find(flight=>flight.id==id) 
        let {title,time,price,date} = await req.body;
        uflight.title = title;
        uflight.time = time;
        uflight.price = price;
        uflight.date = date;

        res.status(201).json(uflight)
    } catch (err) {
        res.status(500).json({message:err.message})
    }

}

exports.deleteFlight = async(req,res)=> {
    try {
        let id = req.params.id;
        let dflight = flightModel.find(flight=> flight.id == id)
        flightModel.splice(flightModel.indexOf(dflight),1);

        res.status(200).json(dflight)
    } catch(err) {
        res.status(500).json({message:err.message})
    }
}