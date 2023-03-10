import express from "express"
import { isAdmin } from "../JWT_token.js"
import { createHotel, deleteHotel, getAllHotel, getHotel, getHotelCount, updatedHotel } from "../routeController/Hotel.js"
const router = express.Router()

/*
router.post("/", [ async (req, res) => {
    const id = req.params.id;
    try {
        const getHotel = await HotelModel.findById(id)
        res.status(200).json(getHotel)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}] ) =>將[]間拉出去
*/

router.get("/find/:id", getHotel)
router.get("/", getAllHotel)
router.get("/filter", getHotelCount)
router.post("/", isAdmin, createHotel)
router.put("/:id", updatedHotel)
router.delete("/:id", isAdmin, deleteHotel)

export default router