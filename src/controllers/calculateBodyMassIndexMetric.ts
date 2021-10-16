import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"

const calculateBodyMassIndexMetric = (req: Request, res: Response) => {
    try {
        return res.status(StatusCodes.OK).json({
            message: "Ok"
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: 'Internal server error'
        })
    }
}

export default calculateBodyMassIndexMetric;